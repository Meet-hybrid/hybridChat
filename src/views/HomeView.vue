<template>
  <div class="page">
    <div class="page-header" style="display:flex;align-items:center;justify-content:space-between;">
      <div>
        <p style="font-size:12px;color:var(--text-3);margin-bottom:2px;text-transform:uppercase;letter-spacing:0.5px;">Welcome back</p>
        <h2 style="font-size:20px;font-weight:800;letter-spacing:-0.3px;">{{ authStore.user?.displayName }}</h2>
      </div>
      <div style="display:flex;gap:8px;align-items:center;">
        <div class="online-dot"></div>
        <img :src="authStore.user?.photoURL || `https://api.dicebear.com/7.x/adventurer/svg?seed=${authStore.user?.uid}`"
             class="avatar" style="border:2px solid var(--primary);" />
      </div>
    </div>

    <!-- Stories -->
    <StatusStories />

    <div style="padding:20px;display:flex;flex-direction:column;gap:24px;">
      <!-- Stats Row -->
      <div class="stats-row">
        <div class="stat-card">
          <span class="stat-num">{{ chatStore.conversations.length }}</span>
          <span class="stat-label">Chats</span>
        </div>
        <div class="stat-card" style="background:linear-gradient(135deg,rgba(250,107,187,0.15),rgba(250,107,107,0.15))">
          <span class="stat-num" style="background:var(--gradient-3);-webkit-background-clip:text;-webkit-text-fill-color:transparent;">{{ onlineCount }}</span>
          <span class="stat-label">Online</span>
        </div>
        <div class="stat-card" style="background:linear-gradient(135deg,rgba(107,250,224,0.15),rgba(107,154,250,0.15))">
          <span class="stat-num" style="background:var(--gradient-2);-webkit-background-clip:text;-webkit-text-fill-color:transparent;">{{ chatStore.allUsers.length }}</span>
          <span class="stat-label">People</span>
        </div>
      </div>

      <!-- Active Users -->
      <section>
        <h3 class="section-title">Active Now</h3>
        <div class="active-scroll">
          <div v-for="u in onlineUsersList.slice(0,10)" :key="u.uid" class="active-user" @click="startDM(u)">
            <div style="position:relative;display:inline-block;">
              <img :src="u.photoURL || `https://api.dicebear.com/7.x/adventurer/svg?seed=${u.uid}`" class="avatar" />
              <span class="online-dot" style="position:absolute;bottom:0;right:0;"></span>
            </div>
            <span>{{ u.displayName?.split(' ')[0] }}</span>
          </div>
          <div v-if="onlineUsersList.length === 0" style="color:var(--text-3);font-size:13px;padding:8px 0;">
            No one online yet
          </div>
        </div>
      </section>

      <!-- Recent Chats -->
      <section>
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:12px;">
          <h3 class="section-title" style="margin:0;">Recent Chats</h3>
          <router-link to="/chats" style="font-size:12px;color:var(--primary-light);text-decoration:none;font-weight:600;">See all</router-link>
        </div>
        <div v-if="chatStore.conversations.length === 0" class="empty-state">
          <div class="empty-icon">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
            </svg>
          </div>
          <p>No conversations yet</p>
          <router-link to="/users" class="btn btn-primary btn-sm">Find people</router-link>
        </div>
        <div v-else class="convo-list">
          <ConvoItem v-for="c in chatStore.conversations.slice(0,5)" :key="c.id" :convo="c" @click="openConvo(c)" />
        </div>
      </section>

      <!-- Status -->
      <section>
        <h3 class="section-title">Your Status</h3>
        <div class="mood-row">
          <button v-for="m in moods" :key="m.label"
                  class="mood-btn" :class="{ active: selectedMood === m.label }"
                  @click="setMood(m)">
            {{ m.emoji }}
            <span>{{ m.label }}</span>
          </button>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useAuthStore } from '@/store/auth'
import { useChatStore } from '@/store/chat'
import { doc, updateDoc } from 'firebase/firestore'
import { db } from '@/firebase'
import ConvoItem from '@/components/ConvoItem.vue'
import StatusStories from '@/components/StatusStories.vue'

const authStore = useAuthStore()
const chatStore = useChatStore()

const selectedMood = ref(authStore.user?.status || '')

const moods = [
  { emoji: '🟢', label: 'Available' },
  { emoji: '🟡', label: 'Busy' },
  { emoji: '🔴', label: 'Do not disturb' },
  { emoji: '⚪', label: 'Away' },
]

const onlineUsersList = computed(() =>
  chatStore.allUsers.filter(u => u.uid !== authStore.user?.uid && chatStore.isOnline(u.uid))
)

const onlineCount = computed(() => Object.values(chatStore.onlineUsers).filter(v => v?.online).length)

async function setMood(m) {
  selectedMood.value = m.label
  if (authStore.user?.uid) {
    await updateDoc(doc(db, 'users', authStore.user.uid), { status: `${m.emoji} ${m.label}` })
  }
}

async function startDM(otherUser) {
  const convoId = await chatStore.getOrCreateDM(authStore.user.uid, otherUser.uid)
  chatStore.openChat(convoId)
}

function openConvo(c) {
  chatStore.openChat(c.id)
}
</script>

<style scoped>
.section-title {
  font-size: 11px; font-weight: 700; color: var(--text-3);
  margin-bottom: 12px; text-transform: uppercase; letter-spacing: 0.8px;
}

.stats-row { display: grid; grid-template-columns: repeat(3,1fr); gap: 12px; }
.stat-card {
  background: linear-gradient(135deg,rgba(124,107,250,0.12),rgba(124,107,250,0.04));
  border: 1px solid var(--border); border-radius: var(--radius);
  padding: 16px 12px; text-align: center; display: flex; flex-direction: column; gap: 4px;
}
.stat-num {
  font-size: 28px; font-weight: 800;
  background: var(--gradient); -webkit-background-clip: text; -webkit-text-fill-color: transparent;
}
.stat-label { font-size: 10px; color: var(--text-3); font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; }

.active-scroll { display: flex; gap: 16px; overflow-x: auto; padding-bottom: 8px; scrollbar-width: none; }
.active-scroll::-webkit-scrollbar { display: none; }
.active-user {
  display: flex; flex-direction: column; align-items: center; gap: 6px;
  cursor: pointer; flex-shrink: 0; font-size: 11px; color: var(--text-2);
  font-weight: 500; transition: var(--transition);
}
.active-user:hover { color: var(--text-1); transform: translateY(-2px); }

.convo-list { display: flex; flex-direction: column; gap: 4px; }

.empty-state {
  text-align: center; padding: 32px 24px; display: flex; flex-direction: column;
  align-items: center; gap: 12px; color: var(--text-3);
}
.empty-icon {
  width: 56px; height: 56px; border-radius: 50%;
  background: var(--surface); border: 1px solid var(--border);
  display: flex; align-items: center; justify-content: center;
  color: var(--text-3);
}
.empty-state p { font-size: 14px; }

.mood-row { display: flex; flex-direction: column; gap: 8px; }
.mood-btn {
  display: flex; align-items: center; gap: 10px;
  padding: 10px 14px; border-radius: var(--radius);
  background: var(--surface); border: 1.5px solid var(--border);
  cursor: pointer; transition: var(--transition); font-size: 14px;
  color: var(--text-2); font-family: var(--font); font-weight: 500;
  text-align: left;
}
.mood-btn span { font-size: 13px; }
.mood-btn.active {
  border-color: var(--primary);
  background: rgba(124,107,250,0.08);
  color: var(--text-1);
}
.mood-btn:hover { border-color: var(--border-2); color: var(--text-1); }
</style>
