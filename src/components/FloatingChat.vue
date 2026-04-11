<template>
  <!-- Floating Bubble -->
  <transition name="pop">
    <div v-if="!chatStore.floatOpen && !chatStore.floatMinimized"
         class="float-bubble"
         :style="{ left: bubblePos.x + 'px', top: bubblePos.y + 'px' }"
         @mousedown="startDragBubble"
         @touchstart.passive="startDragBubbleMobile"
         @click.stop="chatStore.toggleFloat()">
      <div class="bubble-inner">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        </svg>
        <span v-if="totalUnread > 0" class="bubble-badge">{{ totalUnread }}</span>
      </div>
    </div>
  </transition>

  <!-- Mini Chat Window -->
  <transition name="slide-up">
    <div v-if="chatStore.floatOpen" class="float-window" :class="{ 'has-convo': chatStore.activeConvoId }">
      <!-- Header -->
      <div class="float-header">
        <div v-if="chatStore.activeConvoId" style="display:flex;align-items:center;gap:10px;flex:1;min-width:0;">
          <button class="btn-icon-sm" @click="chatStore.activeConvoId = null; chatStore.messages = []">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <polyline points="15 18 9 12 15 6"/>
            </svg>
          </button>
          <img :src="activeAvatar" class="avatar-sm" style="border:1.5px solid var(--primary);" />
          <div style="flex:1;min-width:0;">
            <div style="font-weight:700;font-size:14px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">{{ activeName }}</div>
            <div style="font-size:11px;color:var(--accent);">{{ typingText || onlineText }}</div>
          </div>
        </div>
        <div v-else style="display:flex;align-items:center;gap:8px;flex:1;">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
          </svg>
          <span style="font-weight:700;font-size:14px;letter-spacing:-0.2px;">Messages</span>
        </div>
        <div style="display:flex;gap:4px;">
          <button class="btn-icon-sm" @click="chatStore.minimizeFloat()" title="Minimize">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <line x1="5" y1="12" x2="19" y2="12"/>
            </svg>
          </button>
          <button class="btn-icon-sm" @click="chatStore.floatOpen = false" title="Close">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>
      </div>

      <!-- Content -->
      <div class="float-body">
        <!-- Conversation List -->
        <div v-if="!chatStore.activeConvoId" class="float-convo-list">
          <div style="padding:8px 12px;">
            <input v-model="search" class="input" style="font-size:12px;padding:8px 12px;" placeholder="Search conversations..." />
          </div>
          <div v-if="chatStore.conversations.length === 0" style="text-align:center;padding:32px;color:var(--text-3);font-size:13px;">
            
            <p>No conversations yet</p>
            <router-link to="/users" class="btn btn-primary btn-sm" style="margin-top:8px;" @click="chatStore.floatOpen=false">
              Find people
            </router-link>
          </div>
          <div v-for="c in filteredConvos" :key="c.id" class="float-convo-item" @click="chatStore.openChat(c.id)">
            <div style="position:relative;flex-shrink:0;">
              <img :src="getConvoAvatar(c)" class="avatar-sm" />
              <span v-if="getConvoOnline(c)" class="online-dot" style="position:absolute;bottom:-1px;right:-1px;width:8px;height:8px;border:1.5px solid var(--bg-2);"></span>
            </div>
            <div style="flex:1;min-width:0;">
              <div style="font-size:13px;font-weight:700;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">{{ getConvoName(c) }}</div>
              <div style="font-size:11px;color:var(--text-3);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">{{ c.lastMessage?.text || 'No messages' }}</div>
            </div>
          </div>
        </div>

        <!-- Messages View -->
        <ChatWindow v-else :convo-id="chatStore.activeConvoId" />
      </div>
    </div>
  </transition>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useChatStore } from '@/store/chat'
import { useAuthStore } from '@/store/auth'
import ChatWindow from './ChatWindow.vue'

const chatStore = useChatStore()
const authStore = useAuthStore()

const search = ref('')
const bubblePos = ref({ x: window.innerWidth - 80, y: window.innerHeight - 160 })
const isDragging = ref(false)
let dragOffset = { x: 0, y: 0 }

// ── Drag logic (desktop) ──────────────────────────────────────
function startDragBubble(e) {
  isDragging.value = false
  const startX = e.clientX, startY = e.clientY
  dragOffset = {
    x: e.clientX - bubblePos.value.x,
    y: e.clientY - bubblePos.value.y
  }
  function onMove(e) {
    const moved = Math.abs(e.clientX - startX) > 5 || Math.abs(e.clientY - startY) > 5
    if (moved) isDragging.value = true
    bubblePos.value = {
      x: Math.max(0, Math.min(window.innerWidth - 60, e.clientX - dragOffset.x)),
      y: Math.max(0, Math.min(window.innerHeight - 60, e.clientY - dragOffset.y))
    }
  }
  function onUp() {
    window.removeEventListener('mousemove', onMove)
    window.removeEventListener('mouseup', onUp)
  }
  window.addEventListener('mousemove', onMove)
  window.addEventListener('mouseup', onUp)
}

// ── Drag logic (mobile) ──────────────────────────────────────
function startDragBubbleMobile(e) {
  const touch = e.touches[0]
  dragOffset = {
    x: touch.clientX - bubblePos.value.x,
    y: touch.clientY - bubblePos.value.y
  }
  function onMove(e) {
    const t = e.touches[0]
    bubblePos.value = {
      x: Math.max(0, Math.min(window.innerWidth - 60, t.clientX - dragOffset.x)),
      y: Math.max(0, Math.min(window.innerHeight - 60, t.clientY - dragOffset.y))
    }
  }
  function onEnd() {
    window.removeEventListener('touchmove', onMove)
    window.removeEventListener('touchend', onEnd)
  }
  window.addEventListener('touchmove', onMove)
  window.addEventListener('touchend', onEnd)
}

// ── Computed helpers ─────────────────────────────────────────
const totalUnread = computed(() => 0)

const filteredConvos = computed(() => {
  if (!search.value) return chatStore.conversations
  const q = search.value.toLowerCase()
  return chatStore.conversations.filter(c => {
    return getConvoName(c).toLowerCase().includes(q)
  })
})

function getConvoName(c) {
  if (c.type === 'group') return c.name
  const otherId = c.members?.find(uid => uid !== authStore.user?.uid)
  return chatStore.allUsers.find(u => u.uid === otherId)?.displayName || 'User'
}
function getConvoAvatar(c) {
  if (c.type === 'group') return c.avatar || `https://api.dicebear.com/7.x/identicon/svg?seed=${c.id}`
  const otherId = c.members?.find(uid => uid !== authStore.user?.uid)
  const u = chatStore.allUsers.find(u => u.uid === otherId)
  return u?.photoURL || `https://api.dicebear.com/7.x/adventurer/svg?seed=${otherId}`
}
function getConvoOnline(c) {
  if (c.type === 'group') return false
  const otherId = c.members?.find(uid => uid !== authStore.user?.uid)
  return chatStore.isOnline(otherId)
}

const activeConvo = computed(() => chatStore.activeConvo)
const activeName = computed(() => getConvoName(activeConvo.value || {}))
const activeAvatar = computed(() => getConvoAvatar(activeConvo.value || {}))
const onlineText = computed(() => {
  if (!activeConvo.value) return ''
  if (activeConvo.value.type === 'group') return `${activeConvo.value.members?.length || 0} members`
  const otherId = activeConvo.value.members?.find(uid => uid !== authStore.user?.uid)
  return chatStore.isOnline(otherId) ? 'Online' : 'Offline'
})
const typingText = computed(() => {
  const typers = chatStore.typingInActive.filter(uid => uid !== authStore.user?.uid)
  if (!typers.length) return ''
  return 'typing...'
})
</script>

<style scoped>
/* ── Bubble ── */
.float-bubble {
  position: fixed; z-index: 9000; cursor: grab;
  width: 56px; height: 56px; border-radius: 50%;
  background: var(--gradient);
  box-shadow: 0 4px 20px rgba(124,107,250,0.5), 0 0 0 0 rgba(124,107,250,0.4);
  animation: pulse-ring 2s infinite;
  user-select: none; touch-action: none;
}
@keyframes pulse-ring {
  0% { box-shadow: 0 4px 20px rgba(124,107,250,0.5), 0 0 0 0 rgba(124,107,250,0.4); }
  70% { box-shadow: 0 4px 20px rgba(124,107,250,0.5), 0 0 0 12px rgba(124,107,250,0); }
  100% { box-shadow: 0 4px 20px rgba(124,107,250,0.5), 0 0 0 0 rgba(124,107,250,0); }
}
.bubble-inner {
  width: 100%; height: 100%; display: flex; align-items: center; justify-content: center;
  border-radius: 50%; position: relative;
}
.bubble-badge {
  position: absolute; top: -4px; right: -4px;
  background: var(--danger); color: white;
  border-radius: 50%; width: 18px; height: 18px;
  display: flex; align-items: center; justify-content: center;
  font-size: 10px; font-weight: 700; border: 2px solid var(--bg-0);
}

/* ── Float Window ── */
.float-window {
  position: fixed; bottom: 80px; right: 16px; z-index: 8999;
  width: calc(100vw - 32px); max-width: 380px;
  height: 500px; max-height: calc(100vh - 160px);
  background: var(--bg-1); border: 1px solid var(--border);
  border-radius: var(--radius-xl); overflow: hidden;
  box-shadow: 0 16px 64px rgba(0,0,0,0.6), var(--shadow-glow);
  display: flex; flex-direction: column;
}

.float-header {
  display: flex; align-items: center; gap: 8px;
  padding: 12px 14px;
  background: var(--bg-2); border-bottom: 1px solid var(--border);
  flex-shrink: 0;
}
.btn-icon-sm {
  width: 28px; height: 28px; border-radius: 50%;
  background: var(--surface); border: none; cursor: pointer;
  color: var(--text-2); font-size: 14px; display: flex;
  align-items: center; justify-content: center; flex-shrink: 0;
  transition: var(--transition);
}
.btn-icon-sm:hover { background: var(--surface-2); color: var(--text-1); }

.float-body { flex: 1; overflow: hidden; display: flex; flex-direction: column; }

.float-convo-list { flex: 1; overflow-y: auto; display: flex; flex-direction: column; }

.float-convo-item {
  display: flex; align-items: center; gap: 10px;
  padding: 10px 14px; cursor: pointer; transition: var(--transition);
  border-bottom: 1px solid var(--border);
}
.float-convo-item:hover { background: var(--surface); }

.float-empty {
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  gap: 10px; padding: 32px 16px; color: var(--text-3); font-size: 13px; text-align: center;
  flex: 1;
}
</style>
