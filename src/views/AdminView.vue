<template>
  <div class="admin-page">
    <!-- Sidebar -->
    <aside class="admin-sidebar">
      <div class="sidebar-logo">
        <svg width="24" height="24" viewBox="0 0 48 48" fill="none">
          <circle cx="24" cy="24" r="22" fill="url(#adminG)"/>
          <path d="M14 18h20M14 24h14M14 30h10" stroke="white" stroke-width="2.5" stroke-linecap="round"/>
          <defs><linearGradient id="adminG" x1="0" y1="0" x2="48" y2="48"><stop offset="0%" stop-color="#7c6bfa"/><stop offset="100%" stop-color="#fa6bbb"/></linearGradient></defs>
        </svg>
        <div>
          <div style="font-weight:800;font-size:14px;letter-spacing:-0.3px;">HybridChat</div>
          <div style="font-size:10px;color:var(--text-3);text-transform:uppercase;letter-spacing:0.5px;">Admin</div>
        </div>
      </div>

      <nav class="sidebar-nav">
        <button v-for="tab in tabs" :key="tab.id"
                :class="['nav-btn', { active: activeTab === tab.id }]"
                @click="activeTab = tab.id">
          <component :is="tab.icon" />
          <span>{{ tab.label }}</span>
          <span v-if="tab.badge" class="nav-badge">{{ tab.badge }}</span>
        </button>
      </nav>

      <div class="sidebar-footer">
        <router-link to="/home" class="btn btn-secondary btn-sm" style="width:100%;gap:6px;">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="15 18 9 12 15 6"/>
          </svg>
          Back to App
        </router-link>
      </div>
    </aside>

    <!-- Main Content -->
    <main class="admin-main">
      <!-- Overview -->
      <section v-if="activeTab === 'overview'">
        <div class="admin-header">
          <h1>Overview</h1>
          <p>Platform statistics and activity</p>
        </div>

        <div class="stats-grid">
          <div class="stat-tile">
            <div class="stat-icon" style="background:rgba(124,107,250,0.15);color:var(--primary);">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
            </div>
            <div>
              <div class="stat-value">{{ stats.totalUsers }}</div>
              <div class="stat-label">Total Users</div>
            </div>
          </div>
          <div class="stat-tile">
            <div class="stat-icon" style="background:rgba(107,250,154,0.15);color:var(--success);">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
              </svg>
            </div>
            <div>
              <div class="stat-value">{{ stats.onlineUsers }}</div>
              <div class="stat-label">Online Now</div>
            </div>
          </div>
          <div class="stat-tile">
            <div class="stat-icon" style="background:rgba(250,107,187,0.15);color:var(--secondary);">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
              </svg>
            </div>
            <div>
              <div class="stat-value">{{ stats.totalConvos }}</div>
              <div class="stat-label">Conversations</div>
            </div>
          </div>
          <div class="stat-tile">
            <div class="stat-icon" style="background:rgba(250,188,107,0.15);color:var(--warn);">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
                <line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>
              </svg>
            </div>
            <div>
              <div class="stat-value">{{ stats.reportedUsers }}</div>
              <div class="stat-label">Reports</div>
            </div>
          </div>
        </div>

        <!-- Recent Users -->
        <div class="admin-card">
          <div class="card-head">
            <h2>Recent Registrations</h2>
          </div>
          <div class="user-table">
            <div class="table-header">
              <span>User</span>
              <span>Email</span>
              <span>Status</span>
              <span>Joined</span>
            </div>
            <div v-for="u in recentUsers" :key="u.uid" class="table-row">
              <div style="display:flex;align-items:center;gap:10px;">
                <img :src="u.photoURL || `https://api.dicebear.com/7.x/adventurer/svg?seed=${u.uid}`" class="avatar-sm" />
                <span style="font-weight:600;font-size:14px;">{{ u.displayName }}</span>
              </div>
              <span style="font-size:13px;color:var(--text-3);">{{ u.email.split('@')[0].slice(0, 2) }}***@{{ u.email.split('@')[1] }}</span>
              <span>
                <span :class="['status-dot', chatStore.isOnline(u.uid) ? 'online' : 'offline']"></span>
                {{ chatStore.isOnline(u.uid) ? 'Online' : 'Offline' }}
              </span>
              <span style="font-size:12px;color:var(--text-3);">{{ formatDate(u.createdAt) }}</span>
            </div>
          </div>
        </div>
      </section>

      <!-- Users -->
      <section v-if="activeTab === 'users'">
        <div class="admin-header">
          <h1>Users</h1>
          <p>Manage all registered users</p>
        </div>

        <div class="admin-card">
          <div class="card-head">
            <div class="search-wrap" style="max-width:300px;">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="search-icon">
                <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
              </svg>
              <input v-model="userSearch" class="input search-input" placeholder="Search users..." style="font-size:13px;" />
            </div>
          </div>

          <div class="user-table">
            <div class="table-header">
              <span>User</span>
              <span>Email</span>
              <span>Status</span>
              <span>Actions</span>
            </div>
            <div v-for="u in filteredUsers" :key="u.uid" class="table-row">
              <div style="display:flex;align-items:center;gap:10px;">
                <img :src="u.photoURL || `https://api.dicebear.com/7.x/adventurer/svg?seed=${u.uid}`" class="avatar-sm" />
                <div>
                  <div style="font-weight:600;font-size:14px;">{{ u.displayName }}</div>
                  <div v-if="u.bio" style="font-size:11px;color:var(--text-3);">{{ u.bio }}</div>
                </div>
              </div>
              <span style="font-size:13px;color:var(--text-3);">{{ u.email.split('@')[0].slice(0, 2) }}***@{{ u.email.split('@')[1] }}</span>
              <span>
                <span :class="['status-chip', u.banned ? 'banned' : chatStore.isOnline(u.uid) ? 'online' : 'offline']">
                  {{ u.banned ? 'Banned' : chatStore.isOnline(u.uid) ? 'Online' : 'Offline' }}
                </span>
              </span>
              <div style="display:flex;gap:6px;">
                <button class="action-pill" @click="toggleBan(u)" :class="{ danger: !u.banned }">
                  {{ u.banned ? 'Unban' : 'Ban' }}
                </button>
                <button class="action-pill danger" @click="confirmDelete(u)">
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Conversations -->
      <section v-if="activeTab === 'convos'">
        <div class="admin-header">
          <h1>Conversations</h1>
          <p>All active conversations and groups</p>
        </div>

        <div class="admin-card">
          <div class="user-table">
            <div class="table-header">
              <span>Name</span>
              <span>Type</span>
              <span>Members</span>
              <span>Last Message</span>
              <span>Actions</span>
            </div>
            <div v-for="c in allConvos" :key="c.id" class="table-row">
              <span style="font-weight:600;font-size:14px;">{{ getConvoName(c) }}</span>
              <span>
                <span :class="['type-chip', c.type]">{{ c.type === 'group' ? 'Group' : 'Direct' }}</span>
              </span>
              <span style="font-size:13px;color:var(--text-3);">{{ c.members?.length || 0 }} members</span>
              <span style="font-size:12px;color:var(--text-3);max-width:200px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">
                {{ c.lastMessage?.text || '—' }}
              </span>
              <button class="action-pill danger" @click="deleteConvo(c)">Delete</button>
            </div>
          </div>
        </div>
      </section>

      <!-- Broadcast -->
      <section v-if="activeTab === 'broadcast'">
        <div class="admin-header">
          <h1>Broadcast</h1>
          <p>Send a global notification to all users</p>
        </div>

        <div class="admin-card">
          <div class="card-head">
            <h2>Compose Broadcast</h2>
          </div>
          <div style="padding: 20px;">
            <textarea v-model="broadcastText" class="input" style="height: 120px; resize: none;" placeholder="Type your announcement here..."></textarea>
            <button class="btn btn-primary" style="margin-top: 16px;" @click="sendBroadcast" :disabled="broadcasting">
              {{ broadcasting ? 'Sending...' : 'Send Broadcast' }}
            </button>
          </div>
        </div>
      </section>
    </main>

    <!-- Confirm Delete Modal -->
    <Teleport to="body">
      <transition name="fade">
        <div v-if="deleteTarget" class="modal-overlay" @click.self="deleteTarget = null">
          <div class="confirm-modal">
            <div class="confirm-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/>
                <path d="M10 11v6"/><path d="M14 11v6"/>
              </svg>
            </div>
            <h3>Delete User</h3>
            <p>Are you sure you want to delete <strong>{{ deleteTarget.displayName }}</strong>? This cannot be undone.</p>
            <div style="display:flex;gap:8px;margin-top:20px;">
              <button class="btn btn-secondary" style="flex:1;" @click="deleteTarget = null">Cancel</button>
              <button class="btn btn-danger" style="flex:1;" @click="deleteUser">Delete</button>
            </div>
          </div>
        </div>
      </transition>
    </Teleport>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, h } from 'vue'
import { collection, getDocs, doc, updateDoc, deleteDoc, onSnapshot, query, orderBy } from 'firebase/firestore'
import { db } from '@/firebase'
import { useChatStore } from '@/store/chat'
import { useAuthStore } from '@/store/auth'

const chatStore = useChatStore()
const authStore = useAuthStore()

const broadcastText = ref('')
const broadcasting = ref(false)

async function sendBroadcast() {
  if (!broadcastText.value.trim()) return
  broadcasting.value = true
  try {
    await chatStore.broadcastNotification(broadcastText.value)
    alert('Broadcast sent successfully!')
    broadcastText.value = ''
  } catch (e) {
    console.error(e)
    alert('Failed to send broadcast.')
  } finally {
    broadcasting.value = false
  }
}

const activeTab = ref('overview')
const userSearch = ref('')
const deleteTarget = ref(null)
const allUsers = ref([])
const allConvos = ref([])
const reports = ref([])

const stats = computed(() => ({
  totalUsers: allUsers.value.length,
  onlineUsers: Object.values(chatStore.onlineUsers).filter(v => v?.online).length,
  totalConvos: allConvos.value.length,
  reportedUsers: reports.value.length
}))

const recentUsers = computed(() =>
  [...allUsers.value].sort((a, b) => {
    const aTime = a.createdAt?.toDate?.() || new Date(0)
    const bTime = b.createdAt?.toDate?.() || new Date(0)
    return bTime - aTime
  }).slice(0, 8)
)

const filteredUsers = computed(() => {
  const q = userSearch.value.toLowerCase()
  return allUsers.value.filter(u =>
    !q || u.displayName?.toLowerCase().includes(q) || u.email?.toLowerCase().includes(q)
  )
})

// SVG icon components inline
const tabs = [
  {
    id: 'overview', label: 'Overview',
    icon: { render: () => h('svg', { width: 16, height: 16, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': 2 }, [
      h('rect', { x: 3, y: 3, width: 7, height: 7 }),
      h('rect', { x: 14, y: 3, width: 7, height: 7 }),
      h('rect', { x: 14, y: 14, width: 7, height: 7 }),
      h('rect', { x: 3, y: 14, width: 7, height: 7 })
    ]) }
  },
  {
    id: 'users', label: 'Users',
    icon: { render: () => h('svg', { width: 16, height: 16, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': 2 }, [
      h('path', { d: 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2' }),
      h('circle', { cx: 9, cy: 7, r: 4 }),
      h('path', { d: 'M23 21v-2a4 4 0 0 0-3-3.87' }),
      h('path', { d: 'M16 3.13a4 4 0 0 1 0 7.75' })
    ]) }
  },
  {
    id: 'convos', label: 'Conversations',
    icon: { render: () => h('svg', { width: 16, height: 16, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': 2 }, [
      h('path', { d: 'M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z' })
    ]) }
  },
  {
    id: 'reports', label: 'Reports',
    icon: { render: () => h('svg', { width: 16, height: 16, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': 2 }, [
      h('path', { d: 'M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z' }),
      h('line', { x1: 12, y1: 9, x2: 12, y2: 13 }),
      h('line', { x1: 12, y1: 17, x2: 12.01, y2: 17 })
    ]) }
  },
  {
    id: 'broadcast', label: 'Broadcast',
    icon: { render: () => h('svg', { width: 16, height: 16, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': 2 }, [
      h('path', { d: 'M11 5L6 2v7l5-4z' }),
      h('path', { d: 'M11 5h9a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h1' })
    ]) }
  },
]

onMounted(async () => {
  // Load users
  const usersSnap = await getDocs(collection(db, 'users'))
  allUsers.value = usersSnap.docs.map(d => ({ uid: d.id, ...d.data() }))

  // Load conversations
  const convosSnap = await getDocs(collection(db, 'conversations'))
  allConvos.value = convosSnap.docs.map(d => ({ id: d.id, ...d.data() }))

  // Load reports
  const reportsSnap = await getDocs(collection(db, 'reports'))
  reports.value = reportsSnap.docs.map(d => ({ id: d.id, ...d.data() }))

  // Watch presence
  chatStore.watchPresence()
})

function getConvoName(c) {
  if (c.type === 'group') return c.name || 'Unnamed Group'
  return 'Direct Message'
}

function formatDate(ts) {
  if (!ts) return '—'
  const d = ts.toDate ? ts.toDate() : new Date(ts)
  return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
}

async function toggleBan(user) {
  const newBanned = !user.banned
  await updateDoc(doc(db, 'users', user.uid), { banned: newBanned })
  user.banned = newBanned
}

function confirmDelete(user) {
  deleteTarget.value = user
}

async function deleteUser() {
  if (!deleteTarget.value) return
  await deleteDoc(doc(db, 'users', deleteTarget.value.uid))
  allUsers.value = allUsers.value.filter(u => u.uid !== deleteTarget.value.uid)
  deleteTarget.value = null
}

async function deleteConvo(convo) {
  await deleteDoc(doc(db, 'conversations', convo.id))
  allConvos.value = allConvos.value.filter(c => c.id !== convo.id)
}

async function banFromReport(report) {
  await updateDoc(doc(db, 'users', report.reportedUid), { banned: true })
  await dismissReport(report)
}

async function dismissReport(report) {
  await deleteDoc(doc(db, 'reports', report.id))
  reports.value = reports.value.filter(r => r.id !== report.id)
}
</script>

<style scoped>
.admin-page {
  display: flex; min-height: 100vh; background: var(--bg-0);
  padding-bottom: 0;
}

/* ── Sidebar ── */
.admin-sidebar {
  width: 220px; flex-shrink: 0;
  background: var(--bg-1); border-right: 1px solid var(--border);
  display: flex; flex-direction: column;
  position: fixed; top: 0; left: 0; bottom: 0; z-index: 200;
}
.sidebar-logo {
  display: flex; align-items: center; gap: 10px;
  padding: 20px 16px; border-bottom: 1px solid var(--border);
}
.sidebar-nav {
  flex: 1; padding: 12px 8px; display: flex; flex-direction: column; gap: 2px;
}
.nav-btn {
  display: flex; align-items: center; gap: 10px;
  padding: 10px 12px; border-radius: var(--radius);
  background: none; border: none; cursor: pointer;
  color: var(--text-3); font-family: var(--font); font-size: 14px; font-weight: 500;
  transition: var(--transition); width: 100%; text-align: left;
}
.nav-btn:hover { background: var(--surface); color: var(--text-1); }
.nav-btn.active { background: rgba(124,107,250,0.12); color: var(--primary-light); }
.nav-btn.active svg { color: var(--primary); }
.nav-badge {
  margin-left: auto; background: var(--danger); color: white;
  border-radius: 999px; padding: 1px 6px; font-size: 10px; font-weight: 700;
}
.sidebar-footer { padding: 12px; border-top: 1px solid var(--border); }

/* ── Main ── */
.admin-main {
  flex: 1; margin-left: 220px; padding: 32px;
  overflow-y: auto; min-height: 100vh;
}
.admin-header { margin-bottom: 28px; }
.admin-header h1 { font-size: 24px; font-weight: 800; letter-spacing: -0.5px; }
.admin-header p { color: var(--text-3); font-size: 14px; margin-top: 4px; }

/* ── Stats ── */
.stats-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; margin-bottom: 28px; }
.stat-tile {
  background: var(--bg-2); border: 1px solid var(--border);
  border-radius: var(--radius-lg); padding: 20px;
  display: flex; align-items: center; gap: 16px;
}
.stat-icon {
  width: 48px; height: 48px; border-radius: var(--radius);
  display: flex; align-items: center; justify-content: center; flex-shrink: 0;
}
.stat-value { font-size: 28px; font-weight: 800; letter-spacing: -0.5px; }
.stat-label { font-size: 12px; color: var(--text-3); font-weight: 500; margin-top: 2px; }

/* ── Cards ── */
.admin-card {
  background: var(--bg-2); border: 1px solid var(--border);
  border-radius: var(--radius-lg); overflow: hidden; margin-bottom: 20px;
}
.card-head {
  padding: 16px 20px; border-bottom: 1px solid var(--border);
  display: flex; align-items: center; justify-content: space-between;
}
.card-head h2 { font-size: 15px; font-weight: 700; }

/* ── Table ── */
.user-table { width: 100%; }
.table-header {
  display: grid; grid-template-columns: 2fr 2fr 1fr 1fr;
  padding: 10px 20px; background: var(--bg-3);
  font-size: 11px; font-weight: 700; color: var(--text-3);
  text-transform: uppercase; letter-spacing: 0.5px;
  border-bottom: 1px solid var(--border);
}
.table-row {
  display: grid; grid-template-columns: 2fr 2fr 1fr 1fr;
  padding: 12px 20px; border-bottom: 1px solid var(--border);
  align-items: center; transition: var(--transition);
  font-size: 13px;
}
.table-row:last-child { border-bottom: none; }
.table-row:hover { background: var(--surface); }

/* ── Status chips ── */
.status-dot {
  display: inline-block; width: 7px; height: 7px; border-radius: 50%; margin-right: 6px;
}
.status-dot.online { background: var(--success); box-shadow: 0 0 4px var(--success); }
.status-dot.offline { background: var(--text-3); }

.status-chip {
  font-size: 11px; font-weight: 600; padding: 3px 8px; border-radius: 999px;
}
.status-chip.online { background: rgba(107,250,154,0.15); color: var(--success); }
.status-chip.offline { background: var(--surface); color: var(--text-3); }
.status-chip.banned { background: rgba(250,107,107,0.15); color: var(--danger); }

.type-chip {
  font-size: 11px; font-weight: 600; padding: 3px 8px; border-radius: 999px;
}
.type-chip.group { background: rgba(124,107,250,0.15); color: var(--primary-light); }
.type-chip.dm { background: var(--surface); color: var(--text-2); }

/* ── Action pills ── */
.action-pill {
  font-size: 11px; font-weight: 600; padding: 4px 10px; border-radius: 999px;
  border: 1px solid var(--border); background: var(--surface);
  color: var(--text-2); cursor: pointer; transition: var(--transition);
  font-family: var(--font);
}
.action-pill:hover { border-color: var(--border-2); color: var(--text-1); }
.action-pill.danger { border-color: rgba(250,107,107,0.3); color: var(--danger); }
.action-pill.danger:hover { background: rgba(250,107,107,0.1); }

/* ── Search ── */
.search-wrap { position: relative; }
.search-icon { position: absolute; left: 10px; top: 50%; transform: translateY(-50%); color: var(--text-3); pointer-events: none; }
.search-input { padding-left: 30px; }

/* ── Empty ── */
.empty-admin {
  display: flex; flex-direction: column; align-items: center; gap: 12px;
  padding: 64px; color: var(--text-3); text-align: center;
  background: var(--bg-2); border: 1px solid var(--border); border-radius: var(--radius-lg);
}
.empty-admin p { font-size: 14px; }

/* ── Confirm modal ── */
.modal-overlay {
  position: fixed; inset: 0; background: rgba(0,0,0,0.7);
  display: flex; align-items: center; justify-content: center; z-index: 9999;
  backdrop-filter: blur(4px); padding: 24px;
}
.confirm-modal {
  background: var(--bg-2); border: 1px solid var(--border);
  border-radius: var(--radius-xl); padding: 28px; width: 100%; max-width: 380px;
  text-align: center;
}
.confirm-icon {
  width: 56px; height: 56px; border-radius: 50%;
  background: rgba(250,107,107,0.1); border: 1px solid rgba(250,107,107,0.2);
  display: flex; align-items: center; justify-content: center;
  color: var(--danger); margin: 0 auto 16px;
}
.confirm-modal h3 { font-size: 18px; font-weight: 700; margin-bottom: 8px; }
.confirm-modal p { font-size: 14px; color: var(--text-2); line-height: 1.6; }

/* ── Mobile ── */
@media (max-width: 768px) {
  .admin-sidebar { width: 100%; position: relative; height: auto; flex-direction: row; }
  .admin-main { margin-left: 0; padding: 16px; }
  .stats-grid { grid-template-columns: repeat(2, 1fr); }
  .sidebar-nav { flex-direction: row; padding: 8px; overflow-x: auto; }
  .nav-btn span:last-child { display: none; }
  .table-header, .table-row { grid-template-columns: 2fr 1fr 1fr; }
  .table-header span:nth-child(2), .table-row span:nth-child(2) { display: none; }
}
</style>
