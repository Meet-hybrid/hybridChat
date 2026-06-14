// src/store/chat.js
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import {
  collection, doc, addDoc, getDoc, getDocs, setDoc, updateDoc,
  onSnapshot, query, where, orderBy, serverTimestamp, arrayUnion, arrayRemove, limit
} from 'firebase/firestore'
import { ref as rtRef, set, onValue, push } from 'firebase/database'
import { ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage'
import { db, rtdb, storage } from '@/firebase'

export const useChatStore = defineStore('chat', () => {
  const conversations = ref([])        // list of convos user is in
  const activeConvoId = ref(null)
  const messages = ref([])
  const typingUsers = ref({})          // { convoId: { uid: true } }
  const onlineUsers = ref({})
  const notifications = ref([])
  const allUsers = ref([])
  const floatOpen = ref(false)
  const floatMinimized = ref(false)

  let unsubMessages = null
  let unsubConvos = null
  let unsubNotifications = null

  // ── NOTIFICATIONS ──────────────────────────────────────────
  function watchNotifications(uid) {
    const q = query(
      collection(db, 'notifications'),
      where('userId', '==', uid),
      orderBy('createdAt', 'desc'),
      limit(20)
    )
    unsubNotifications = onSnapshot(q, snap => {
      notifications.value = snap.docs.map(d => ({ id: d.id, ...d.data() }))
    })
  }

  async function addNotification(userId, message, type = 'system') {
    await addDoc(collection(db, 'notifications'), {
      userId,
      message,
      type,
      read: false,
      createdAt: serverTimestamp()
    })
  }

  // ── USERS ──────────────────────────────────────────────────
  async function fetchUsers() {
    const snap = await getDocs(collection(db, 'users'))
    allUsers.value = snap.docs.map(d => ({ id: d.id, ...d.data() }))
  }

  function watchPresence() {
    const presRef = rtRef(rtdb, 'presence')
    onValue(presRef, snap => {
      onlineUsers.value = snap.val() || {}
    })
  }

  function isOnline(uid) {
    return onlineUsers.value[uid]?.online === true
  }

  // ── CONVERSATIONS ──────────────────────────────────────────
  function watchConversations(uid) {
    const q = query(
      collection(db, 'conversations'),
      where('members', 'array-contains', uid),
      orderBy('updatedAt', 'desc')
    )
    unsubConvos = onSnapshot(q, snap => {
      conversations.value = snap.docs.map(d => ({ id: d.id, ...d.data() }))
    })
  }

  async function getOrCreateDM(myUid, otherUid) {
    // Check if DM already exists
    const q = query(
      collection(db, 'conversations'),
      where('type', '==', 'dm'),
      where('members', 'array-contains', myUid)
    )
    const snap = await getDocs(q)
    const existing = snap.docs.find(d => d.data().members.includes(otherUid))
    if (existing) return existing.id

    const ref = await addDoc(collection(db, 'conversations'), {
      type: 'dm',
      members: [myUid, otherUid],
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
      lastMessage: null
    })
    return ref.id
  }

  async function createGroup({ name, members, myUid, avatar }) {
    const ref = await addDoc(collection(db, 'conversations'), {
      type: 'group',
      name,
      avatar: avatar || `https://api.dicebear.com/7.x/identicon/svg?seed=${name}`,
      members: [myUid, ...members],
      admins: [myUid],
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
      lastMessage: null
    })
    return ref.id
  }

  // ── MESSAGES ───────────────────────────────────────────────
  function watchMessages(convoId) {
    if (unsubMessages) unsubMessages()
    messages.value = []
    const q = query(
      collection(db, 'conversations', convoId, 'messages'),
      orderBy('createdAt', 'asc'),
      limit(100)
    )
    unsubMessages = onSnapshot(q, snap => {
      messages.value = snap.docs.map(d => ({ id: d.id, ...d.data() }))
    })
  }

  async function sendMessage({ convoId, senderId, text, type = 'text', mediaUrl = null, fileName = null }) {
    const msgRef = await addDoc(collection(db, 'conversations', convoId, 'messages'), {
      senderId,
      text: text || '',
      type,          // text | image | video | audio | file | emoji
      mediaUrl,
      fileName,
      reactions: {},
      status: 'sent',
      createdAt: serverTimestamp()
    })

    await updateDoc(doc(db, 'conversations', convoId), {
      lastMessage: { text: text || `[${type}]`, senderId, createdAt: serverTimestamp() },
      updatedAt: serverTimestamp()
    })

    return msgRef.id
  }

  async function reactToMessage(convoId, msgId, uid, emoji) {
    const msgRef = doc(db, 'conversations', convoId, 'messages', msgId)
    const snap = await getDoc(msgRef)
    const reactions = snap.data()?.reactions || {}
    if (reactions[uid] === emoji) {
      delete reactions[uid]
    } else {
      reactions[uid] = emoji
    }
    await updateDoc(msgRef, { reactions })
  }

  // ── TYPING ─────────────────────────────────────────────────
  function setTyping(convoId, uid, isTyping) {
    const typingRef = rtRef(rtdb, `typing/${convoId}/${uid}`)
    set(typingRef, isTyping ? true : null)
  }

  function watchTyping(convoId) {
    const typingRef = rtRef(rtdb, `typing/${convoId}`)
    onValue(typingRef, snap => {
      typingUsers.value[convoId] = snap.val() || {}
    })
  }

  // ── MEDIA UPLOAD ───────────────────────────────────────────
  async function uploadMedia(file, path) {
    const sRef = storageRef(storage, path)
    await uploadBytes(sRef, file)
    return getDownloadURL(sRef)
  }

  // ── UI STATE ───────────────────────────────────────────────
  function openChat(convoId) {
    activeConvoId.value = convoId
    floatOpen.value = true
    floatMinimized.value = false
    watchMessages(convoId)
    watchTyping(convoId)
  }

  function toggleFloat() {
    floatOpen.value = !floatOpen.value
    floatMinimized.value = false
  }

  function minimizeFloat() {
    floatMinimized.value = true
    floatOpen.value = false
  }

  const activeConvo = computed(() =>
    conversations.value.find(c => c.id === activeConvoId.value)
  )

  const typingInActive = computed(() => {
    if (!activeConvoId.value) return []
    return Object.keys(typingUsers.value[activeConvoId.value] || {})
  })

  return {
    conversations, activeConvoId, messages, typingUsers, onlineUsers, allUsers,
    floatOpen, floatMinimized, activeConvo, typingInActive, notifications,
    fetchUsers, watchPresence, isOnline, watchConversations,
    getOrCreateDM, createGroup, watchMessages, sendMessage, reactToMessage,
    setTyping, watchTyping, uploadMedia, openChat, toggleFloat, minimizeFloat,
    watchNotifications, addNotification
  }
})
