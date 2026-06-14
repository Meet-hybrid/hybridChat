<template>
  <div class="page">
    <div class="page-header">
      <h2 style="font-size:22px;font-weight:800;letter-spacing:-0.3px;margin-bottom:12px;">People</h2>
      <div class="search-wrap">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="search-icon">
          <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
        </svg>
        <input v-model="search" class="input search-input" placeholder="Search people..." />
      </div>
    </div>
    <div style="padding:16px;display:flex;flex-direction:column;gap:8px;">
      <div v-if="filteredUsers.length === 0" class="empty-state">
        <div class="empty-icon">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
            <circle cx="9" cy="7" r="4"/>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
          </svg>
        </div>
        <p>{{ search ? 'No results' : 'No users found' }}</p>
      </div>
      <div v-for="u in filteredUsers" :key="u.uid" class="user-card" @click="startDM(u)">
        <div style="position:relative;flex-shrink:0;">
          <img :src="u.photoURL || `https://api.dicebear.com/7.x/adventurer/svg?seed=${u.uid}`" class="avatar-lg" />
          <span v-if="chatStore.isOnline(u.uid)" class="online-dot" style="position:absolute;bottom:2px;right:2px;width:12px;height:12px;border:2px solid var(--bg-2);"></span>
        </div>
        <div style="flex:1;min-width:0;">
          <div style="font-weight:700;font-size:15px;">{{ u.displayName }}</div>
          <div v-if="u.bio" style="font-size:12px;color:var(--text-2);margin-top:4px;">{{ u.bio }}</div>
        </div>
        <button class="btn btn-secondary btn-sm" @click.stop="startDM(u)">Message</button>
        <button class="btn-report" @click.stop="reportUser(u)" title="Report user">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
            <line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useAuthStore } from '@/store/auth'
import { useChatStore } from '@/store/chat'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db } from '@/firebase'

const authStore = useAuthStore()
const chatStore = useChatStore()
const search = ref('')

const filteredUsers = computed(() => {
  const q = search.value.toLowerCase()
  return chatStore.allUsers.filter(u => {
    if (u.uid === authStore.user?.uid) return false
    return !q || u.displayName?.toLowerCase().includes(q) || u.email?.includes(q)
  })
})

async function startDM(u) {
  const convoId = await chatStore.getOrCreateDM(authStore.user.uid, u.uid)
  chatStore.openChat(convoId)
}

async function reportUser(u) {
  const reason = prompt(`Reason for reporting ${u.displayName}:`)
  if (!reason) return
  await addDoc(collection(db, 'reports'), {
    reportedUid: u.uid,
    reportedName: u.displayName,
    reporterUid: authStore.user.uid,
    reporterName: authStore.user.displayName,
    reason,
    createdAt: serverTimestamp()
  })
  alert('Report submitted. Our team will review it.')
}
</script>

<style scoped>
.search-wrap { position: relative; }
.search-icon { position: absolute; left: 12px; top: 50%; transform: translateY(-50%); color: var(--text-3); pointer-events: none; }
.search-input { padding-left: 36px; }

.empty-state {
  text-align: center; padding: 48px 24px; display: flex; flex-direction: column;
  align-items: center; gap: 12px; color: var(--text-3);
}
.empty-icon {
  width: 56px; height: 56px; border-radius: 50%;
  background: var(--surface); border: 1px solid var(--border);
  display: flex; align-items: center; justify-content: center;
}
.empty-state p { font-size: 14px; }

.user-card {
  display: flex; align-items: center; gap: 14px; padding: 14px;
  background: var(--bg-2); border: 1px solid var(--border);
  border-radius: var(--radius-lg); cursor: pointer; transition: var(--transition);
}
.user-card:hover { border-color: var(--primary); background: var(--bg-3); transform: translateY(-1px); }

.btn-report {
  width: 32px; height: 32px; border-radius: 50%; flex-shrink: 0;
  background: none; border: 1px solid var(--border);
  color: var(--text-3); cursor: pointer; display: flex;
  align-items: center; justify-content: center; transition: var(--transition);
}
.btn-report:hover { border-color: var(--warn); color: var(--warn); background: rgba(250,188,107,0.1); }
</style>
