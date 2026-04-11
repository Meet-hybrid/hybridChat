// src/store/auth.js
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  updateProfile
} from 'firebase/auth'
import { doc, setDoc, getDoc, serverTimestamp } from 'firebase/firestore'
import { ref as rtRef, set, onDisconnect } from 'firebase/database'
import { auth, db, rtdb, googleProvider } from '@/firebase'

export const useAuthStore = defineStore('auth', () => {
  const user = ref(null)
  const loading = ref(true)
  const error = ref(null)

  const isLoggedIn = computed(() => !!user.value)

  async function createUserDoc(firebaseUser, extra = {}) {
    const userRef = doc(db, 'users', firebaseUser.uid)
    const snap = await getDoc(userRef)
    if (!snap.exists()) {
      await setDoc(userRef, {
        uid: firebaseUser.uid,
        email: firebaseUser.email,
        displayName: firebaseUser.displayName || extra.displayName || 'Anonymous',
        photoURL: firebaseUser.photoURL || `https://api.dicebear.com/7.x/adventurer/svg?seed=${firebaseUser.uid}`,
        bio: '',
        status: '🟢 Online',
        theme: 'neon',
        createdAt: serverTimestamp(),
        lastSeen: serverTimestamp(),
        ...extra
      })
    }
  }

  function setPresence(uid) {
    const presenceRef = rtRef(rtdb, `presence/${uid}`)
    set(presenceRef, { online: true, lastSeen: Date.now() })
    onDisconnect(presenceRef).set({ online: false, lastSeen: Date.now() })
  }

  async function register({ email, password, displayName }) {
    error.value = null
    try {
      const cred = await createUserWithEmailAndPassword(auth, email, password)
      await updateProfile(cred.user, { displayName })
      await createUserDoc(cred.user, { displayName })
      setPresence(cred.user.uid)
    } catch (e) {
      error.value = e.message
      throw e
    }
  }

  async function login({ email, password }) {
    error.value = null
    try {
      const cred = await signInWithEmailAndPassword(auth, email, password)
      setPresence(cred.user.uid)
    } catch (e) {
      error.value = e.message
      throw e
    }
  }

  async function loginWithGoogle() {
    error.value = null
    try {
      const cred = await signInWithPopup(auth, googleProvider)
      await createUserDoc(cred.user)
      setPresence(cred.user.uid)
    } catch (e) {
      error.value = e.message
      throw e
    }
  }

  async function logout() {
    if (user.value) {
      const presenceRef = rtRef(rtdb, `presence/${user.value.uid}`)
      await set(presenceRef, { online: false, lastSeen: Date.now() })
    }
    await signOut(auth)
    user.value = null
  }

  // Listen to auth state
  function init() {
    return new Promise(resolve => {
      onAuthStateChanged(auth, async (firebaseUser) => {
        if (firebaseUser) {
          // Enrich with Firestore profile
          const snap = await getDoc(doc(db, 'users', firebaseUser.uid))
          user.value = snap.exists()
            ? { uid: firebaseUser.uid, email: firebaseUser.email, ...snap.data() }
            : { uid: firebaseUser.uid, email: firebaseUser.email, displayName: firebaseUser.displayName }
          setPresence(firebaseUser.uid)
        } else {
          user.value = null
        }
        loading.value = false
        resolve()
      })
    })
  }

  return { user, loading, error, isLoggedIn, register, login, loginWithGoogle, logout, init }
})
