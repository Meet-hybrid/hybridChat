<template>
  <div class="chat-window">
    <!-- Messages -->
    <div class="messages-area" ref="scrollEl">
      <div v-if="chatStore.messages.length === 0" style="text-align:center;padding:32px;color:var(--text-3);font-size:13px;">
        <div class="empty-msg-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
          </svg>
        </div>
        <p style="margin-top:8px;">No messages yet. Start the conversation.</p>
      </div>

      <div v-for="(msg, i) in chatStore.messages" :key="msg.id"
           :class="['msg-row', msg.senderId === authStore.user?.uid ? 'out' : 'in']">
        <!-- Avatar (incoming only) -->
        <img v-if="msg.senderId !== authStore.user?.uid"
             :src="getSenderAvatar(msg.senderId)" class="avatar-sm msg-avatar" />

        <div style="display:flex;flex-direction:column;gap:2px;max-width:75%;">
          <!-- Sender name in groups -->
          <span v-if="isGroup && msg.senderId !== authStore.user?.uid"
                style="font-size:10px;font-weight:700;color:var(--primary-light);margin-left:4px;margin-bottom:2px;">
            {{ getSenderName(msg.senderId) }}
          </span>

          <!-- Message bubble -->
          <div class="msg-bubble-wrap" @longpress="showReactions(msg)">
            <!-- Text -->
            <div v-if="msg.type === 'text'" :class="['bubble', msg.senderId === authStore.user?.uid ? 'bubble-out' : 'bubble-in']">
              {{ msg.text }}
            </div>

            <!-- Image -->
            <div v-else-if="msg.type === 'image'" :class="['bubble', msg.senderId === authStore.user?.uid ? 'bubble-out' : 'bubble-in']" style="padding:4px;">
              <img :src="msg.mediaUrl" style="width:100%;max-width:200px;border-radius:10px;display:block;" />
              <p v-if="msg.text" style="padding:6px 6px 2px;font-size:13px;">{{ msg.text }}</p>
            </div>

            <!-- Audio -->
            <div v-else-if="msg.type === 'audio'" :class="['bubble', msg.senderId === authStore.user?.uid ? 'bubble-out' : 'bubble-in']">
              <audio controls :src="msg.mediaUrl" style="width:160px;height:32px;"></audio>
            </div>

            <!-- File -->
            <div v-else-if="msg.type === 'file'" :class="['bubble', msg.senderId === authStore.user?.uid ? 'bubble-out' : 'bubble-in']"
                 style="display:flex;align-items:center;gap:8px;cursor:pointer;" @click="openFile(msg)">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="flex-shrink:0;">
                <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/>
              </svg>
              <span style="font-size:12px;text-decoration:underline;">{{ msg.fileName || 'File' }}</span>
            </div>
          </div>

          <!-- Reactions -->
          <div v-if="hasReactions(msg)" class="reaction-row">
            <span v-for="(uid, emoji) in groupReactions(msg)" :key="emoji"
                  class="reaction" @click="chatStore.reactToMessage(convoId, msg.id, authStore.user.uid, emoji)">
              {{ emoji }} {{ uid.length }}
            </span>
          </div>

          <!-- Meta -->
          <div :class="['msg-meta', msg.senderId === authStore.user?.uid ? 'meta-out' : 'meta-in']">
            {{ formatTime(msg.createdAt) }}
            <span v-if="msg.senderId === authStore.user?.uid" style="margin-left:2px;">
              {{ msg.status === 'seen' ? '✓✓' : '✓' }}
            </span>
          </div>
        </div>

        <!-- Reaction picker on hover -->
        <button class="react-btn" @click="quickReact(msg)" title="React">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10"/><path d="M8 13s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/>
          </svg>
        </button>
      </div>

      <!-- Typing indicator -->
      <div v-if="chatStore.typingInActive.filter(u => u !== authStore.user?.uid).length > 0" class="msg-row in">
        <div class="bubble bubble-in" style="padding:10px 14px;">
          <span class="typing-dot"></span>
          <span class="typing-dot"></span>
          <span class="typing-dot"></span>
        </div>
      </div>
    </div>

    <!-- Input Area -->
    <div class="input-area">
      <!-- Media Actions -->
      <div style="display:flex;align-items:center;gap:4px;padding:0 8px 8px;">
        <button class="action-btn" @click="$refs.imageInput.click()" title="Image">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>
          </svg>
        </button>
        <button class="action-btn" @click="$refs.fileInput.click()" title="File">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/>
          </svg>
        </button>
        <button class="action-btn" :class="{ recording: isRecording }" @click="toggleRecord" title="Voice note">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/>
          </svg>
        </button>
        <button class="action-btn" @click="showEmojiPicker = !showEmojiPicker" title="Emoji">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10"/><path d="M8 13s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/>
          </svg>
        </button>
        <input ref="imageInput" type="file" accept="image/*,video/*" hidden @change="sendMedia" />
        <input ref="fileInput" type="file" hidden @change="sendFile" />
      </div>

      <!-- Emoji Picker -->
      <div v-if="showEmojiPicker" class="emoji-panel">
        <div class="emoji-grid">
          <button v-for="e in quickEmojis" :key="e" class="emoji-btn" @click="insertEmoji(e)">{{ e }}</button>
        </div>
      </div>

      <!-- Recording indicator -->
      <div v-if="isRecording" class="recording-bar">
        <span class="rec-dot"></span>
        <span>Recording {{ recordTime }}s — tap microphone to send</span>
      </div>

      <!-- Text Input -->
      <div style="display:flex;align-items:center;gap:8px;padding:0 12px 12px;">
        <input
          v-model="inputText"
          class="input"
          style="flex:1;padding:10px 14px;font-size:14px;"
          placeholder="Message..."
          @keydown.enter.prevent="sendText"
          @input="onTyping"
        />
        <button class="btn-send" @click="sendText" :disabled="!inputText.trim() && !isRecording">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
            <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
          </svg>
        </button>
      </div>
    </div>

    <!-- Quick Reaction Modal -->
    <Teleport to="body">
      <transition name="pop">
        <div v-if="reactTarget" class="react-overlay" @click.self="reactTarget = null">
          <div class="react-picker">
            <button v-for="e in reactionEmojis" :key="e" class="emoji-btn" style="font-size:24px;"
                    @click="doReact(e)">{{ e }}</button>
          </div>
        </div>
      </transition>
    </Teleport>
  </div>
</template>

<script setup>
import { ref, computed, nextTick, onMounted, watch, onUnmounted } from 'vue'
import { useAuthStore } from '@/store/auth'
import { useChatStore } from '@/store/chat'
import { v4 as uuidv4 } from 'uuid'

const props = defineProps({ convoId: String })
const authStore = useAuthStore()
const chatStore = useChatStore()

const inputText = ref('')
const scrollEl = ref(null)
const showEmojiPicker = ref(false)
const reactTarget = ref(null)
const isRecording = ref(false)
const recordTime = ref(0)
let recordInterval = null
let mediaRecorder = null
let audioChunks = []

const quickEmojis = ['😂','❤️','🔥','💯','😍','🤣','😭','🙏','💀','🤙','👀','🫀','✨','🎉','🥰','😎','🤩','😤','💪','🫡','🥳','😏','🤧','😜','🫶']
const reactionEmojis = ['❤️','😂','😮','😢','😠','👍','🔥','💯']

const isGroup = computed(() => chatStore.activeConvo?.type === 'group')

// Auto scroll
watch(() => chatStore.messages.length, async () => {
  await nextTick()
  if (scrollEl.value) scrollEl.value.scrollTop = scrollEl.value.scrollHeight
})

onMounted(() => {
  nextTick(() => {
    if (scrollEl.value) scrollEl.value.scrollTop = scrollEl.value.scrollHeight
  })
})

// Typing
let typingTimeout = null
function onTyping() {
  chatStore.setTyping(props.convoId, authStore.user.uid, true)
  clearTimeout(typingTimeout)
  typingTimeout = setTimeout(() => {
    chatStore.setTyping(props.convoId, authStore.user.uid, false)
  }, 2000)
}

onUnmounted(() => {
  chatStore.setTyping(props.convoId, authStore.user.uid, false)
})

// Send text
async function sendText() {
  const text = inputText.value.trim()
  if (!text) return
  inputText.value = ''
  showEmojiPicker.value = false
  chatStore.setTyping(props.convoId, authStore.user.uid, false)
  await chatStore.sendMessage({ convoId: props.convoId, senderId: authStore.user.uid, text })
}

function insertEmoji(e) {
  inputText.value += e
  showEmojiPicker.value = false
}

// Send image/video
async function sendMedia(e) {
  const file = e.target.files[0]
  if (!file) return
  const isVideo = file.type.startsWith('video')
  const path = `media/${props.convoId}/${uuidv4()}_${file.name}`
  try {
    const url = await chatStore.uploadMedia(file, path)
    await chatStore.sendMessage({
      convoId: props.convoId, senderId: authStore.user.uid,
      type: isVideo ? 'video' : 'image', mediaUrl: url, text: ''
    })
  } catch(err) { console.error('Upload failed:', err) }
  e.target.value = ''
}

// Send file
async function sendFile(e) {
  const file = e.target.files[0]
  if (!file) return
  const path = `files/${props.convoId}/${uuidv4()}_${file.name}`
  try {
    const url = await chatStore.uploadMedia(file, path)
    await chatStore.sendMessage({
      convoId: props.convoId, senderId: authStore.user.uid,
      type: 'file', mediaUrl: url, fileName: file.name, text: ''
    })
  } catch(err) { console.error('Upload failed:', err) }
  e.target.value = ''
}

// Voice recording
async function toggleRecord() {
  if (!isRecording.value) {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      mediaRecorder = new MediaRecorder(stream)
      audioChunks = []
      mediaRecorder.ondataavailable = e => audioChunks.push(e.data)
      mediaRecorder.start()
      isRecording.value = true
      recordTime.value = 0
      recordInterval = setInterval(() => recordTime.value++, 1000)
    } catch (e) { alert('Microphone access denied') }
  } else {
    clearInterval(recordInterval)
    mediaRecorder.stop()
    mediaRecorder.onstop = async () => {
      const blob = new Blob(audioChunks, { type: 'audio/webm' })
      const path = `audio/${props.convoId}/${uuidv4()}.webm`
      try {
        const url = await chatStore.uploadMedia(blob, path)
        await chatStore.sendMessage({
          convoId: props.convoId, senderId: authStore.user.uid,
          type: 'audio', mediaUrl: url, text: ''
        })
      } catch(e) { console.error(e) }
    }
    isRecording.value = false
  }
}

// Reactions
function quickReact(msg) { reactTarget.value = msg }
function showReactions(msg) { reactTarget.value = msg }

async function doReact(emoji) {
  if (!reactTarget.value) return
  await chatStore.reactToMessage(props.convoId, reactTarget.value.id, authStore.user.uid, emoji)
  reactTarget.value = null
}

function hasReactions(msg) {
  return msg.reactions && Object.keys(msg.reactions).length > 0
}

function groupReactions(msg) {
  // Group by emoji → list of uids
  const groups = {}
  Object.entries(msg.reactions || {}).forEach(([uid, emoji]) => {
    if (!groups[emoji]) groups[emoji] = []
    groups[emoji].push(uid)
  })
  return groups
}

function openFile(msg) { window.open(msg.mediaUrl, '_blank') }

function formatTime(ts) {
  if (!ts) return ''
  const d = ts.toDate ? ts.toDate() : new Date(ts)
  return d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
}

function getSenderAvatar(uid) {
  const u = chatStore.allUsers.find(u => u.uid === uid)
  return u?.photoURL || `https://api.dicebear.com/7.x/adventurer/svg?seed=${uid}`
}
function getSenderName(uid) {
  return chatStore.allUsers.find(u => u.uid === uid)?.displayName || 'User'
}
</script>

<style scoped>
.chat-window { display: flex; flex-direction: column; height: 100%; overflow: hidden; }

.empty-msg-icon {
  width: 52px; height: 52px; border-radius: 50%;
  background: var(--surface); border: 1px solid var(--border);
  display: flex; align-items: center; justify-content: center;
  margin: 0 auto; color: var(--text-3);
}

.messages-area {
  flex: 1; overflow-y: auto; padding: 12px 10px;
  display: flex; flex-direction: column; gap: 6px;
}

.msg-row {
  display: flex; align-items: flex-end; gap: 6px;
  position: relative;
}
.msg-row.out { flex-direction: row-reverse; }
.msg-row:hover .react-btn { opacity: 1; }

.msg-avatar { flex-shrink: 0; align-self: flex-end; }

.msg-bubble-wrap { position: relative; }

.msg-meta {
  font-size: 10px; color: var(--text-3); padding: 0 4px;
}
.meta-out { text-align: right; }
.meta-in { text-align: left; }

.reaction-row { display: flex; gap: 4px; flex-wrap: wrap; }
.reaction {
  font-size: 13px; padding: 2px 6px; border-radius: 999px;
  background: var(--surface); border: 1px solid var(--border);
  cursor: pointer; transition: var(--transition);
}
.reaction:hover { border-color: var(--primary); }

.react-btn {
  opacity: 0; font-size: 14px; background: var(--surface);
  border: 1px solid var(--border); border-radius: 50%;
  width: 24px; height: 24px; cursor: pointer;
  display: flex; align-items: center; justify-content: center;
  transition: var(--transition); align-self: center; flex-shrink: 0;
}

/* ── Input area ── */
.input-area {
  flex-shrink: 0; background: var(--bg-2);
  border-top: 1px solid var(--border); padding-top: 8px;
}

.action-btn {
  background: none; border: none;
  cursor: pointer; padding: 7px; border-radius: 8px;
  transition: var(--transition); opacity: 0.55; color: var(--text-1);
  display: flex; align-items: center; justify-content: center;
}
.action-btn:hover, .action-btn.recording { opacity: 1; transform: scale(1.1); }
.action-btn.recording { animation: pulse 0.8s infinite; color: var(--danger); }

.btn-send {
  width: 40px; height: 40px; border-radius: 50%;
  background: var(--gradient); border: none; cursor: pointer;
  display: flex; align-items: center; justify-content: center;
  flex-shrink: 0; box-shadow: 0 4px 12px rgba(124,107,250,0.4);
  transition: var(--spring);
}
.btn-send:hover { transform: scale(1.1); }
.btn-send:disabled { opacity: 0.5; transform: none; }

.emoji-panel {
  border-top: 1px solid var(--border); padding: 8px 12px;
  background: var(--bg-2);
}
.emoji-grid { display: flex; flex-wrap: wrap; gap: 4px; }
.emoji-btn {
  font-size: 20px; background: none; border: none;
  cursor: pointer; padding: 4px; border-radius: 8px;
  transition: var(--transition);
}
.emoji-btn:hover { background: var(--surface); transform: scale(1.2); }

.recording-bar {
  display: flex; align-items: center; gap: 8px;
  padding: 6px 16px; background: rgba(250,107,107,0.1);
  font-size: 12px; color: var(--danger);
}
.rec-dot {
  width: 8px; height: 8px; border-radius: 50%;
  background: var(--danger); animation: pulse 0.8s infinite;
}

/* ── React overlay ── */
.react-overlay {
  position: fixed; inset: 0; background: rgba(0,0,0,0.5);
  display: flex; align-items: flex-end; justify-content: center; z-index: 10000;
}
.react-picker {
  background: var(--bg-2); border-radius: var(--radius-xl) var(--radius-xl) 0 0;
  padding: 20px; display: flex; gap: 12px; justify-content: center;
  width: 100%; border: 1px solid var(--border); border-bottom: none;
}
</style>
