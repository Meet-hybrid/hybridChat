<template>
  <div class="page">
    <div class="page-header">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:12px;">
        <h2 style="font-size:22px;font-weight:800;letter-spacing:-0.3px;">Chats</h2>
        <button class="btn btn-primary btn-sm" @click="showNewGroup = true">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
          </svg>
          New Group
        </button>
      </div>
      <div class="search-wrap">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="search-icon">
          <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
        </svg>
        <input v-model="search" class="input search-input" placeholder="Search conversations..." style="font-size:14px;" />
      </div>
    </div>

    <div style="padding:12px 16px;display:flex;flex-direction:column;gap:4px;">
      <div v-if="filteredConvos.length === 0" class="empty-state">
        <div class="empty-icon">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
          </svg>
        </div>
        <p>{{ search ? 'No results found' : 'No conversations yet' }}</p>
        <router-link v-if="!search" to="/users" class="btn btn-primary btn-sm">
          Start a conversation
        </router-link>
      </div>
      <ConvoItem v-for="c in filteredConvos" :key="c.id" :convo="c" @click="openConvo(c)" />
    </div>

    <!-- New Group Modal -->
    <Teleport to="body">
      <transition name="fade">
        <div v-if="showNewGroup" class="modal-overlay" @click.self="showNewGroup = false">
          <transition name="slide-up">
            <div v-if="showNewGroup" class="modal-card">
              <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:20px;">
                <h2 style="font-size:18px;font-weight:700;">New Group</h2>
                <button class="btn-icon-plain" @click="showNewGroup=false">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                  </svg>
                </button>
              </div>
              <div style="display:flex;flex-direction:column;gap:12px;">
                <input v-model="groupForm.name" class="input" placeholder="Group name" />
                <p style="font-size:12px;font-weight:600;color:var(--text-3);text-transform:uppercase;letter-spacing:0.5px;">Add members</p>
                <div style="display:flex;flex-direction:column;gap:8px;max-height:300px;overflow-y:auto;">
                  <label v-for="u in otherUsers" :key="u.uid" class="user-check">
                    <input type="checkbox" :value="u.uid" v-model="groupForm.members" />
                    <img :src="u.photoURL || `https://api.dicebear.com/7.x/adventurer/svg?seed=${u.uid}`" class="avatar-sm" />
                    <span style="font-size:14px;font-weight:500;">{{ u.displayName }}</span>
                    <span v-if="chatStore.isOnline(u.uid)" class="online-dot" style="margin-left:auto;"></span>
                  </label>
                </div>
                <div v-if="groupError" class="error-msg">{{ groupError }}</div>
                <div style="display:flex;gap:8px;">
                  <button class="btn btn-secondary" style="flex:1;" @click="showNewGroup=false">Cancel</button>
                  <button class="btn btn-primary" style="flex:1;" @click="createGroup" :disabled="creating">
                    {{ creating ? 'Creating...' : 'Create Group' }}
                  </button>
                </div>
              </div>
            </div>
          </transition>
        </div>
      </transition>
    </Teleport>
  </div>
</template>

<script setup>
import { ref, computed, reactive } from 'vue'
import { useAuthStore } from '@/store/auth'
import { useChatStore } from '@/store/chat'
import ConvoItem from '@/components/ConvoItem.vue'

const authStore = useAuthStore()
const chatStore = useChatStore()

const search = ref('')
const showNewGroup = ref(false)
const creating = ref(false)
const groupError = ref('')
const groupForm = reactive({ name: '', members: [] })

const filteredConvos = computed(() => {
  if (!search.value) return chatStore.conversations
  return chatStore.conversations.filter(c => {
    const name = c.name || ''
    return name.toLowerCase().includes(search.value.toLowerCase())
  })
})

const otherUsers = computed(() =>
  chatStore.allUsers.filter(u => u.uid !== authStore.user?.uid)
)

function openConvo(c) {
  chatStore.openChat(c.id)
}

async function createGroup() {
  if (!groupForm.name.trim()) { groupError.value = 'Please enter a group name'; return }
  if (groupForm.members.length === 0) { groupError.value = 'Add at least one member'; return }
  creating.value = true
  try {
    const id = await chatStore.createGroup({
      name: groupForm.name,
      members: groupForm.members,
      myUid: authStore.user.uid
    })
    chatStore.openChat(id)
    showNewGroup.value = false
    groupForm.name = ''
    groupForm.members = []
    groupError.value = ''
  } catch(e) {
    groupError.value = e.message
  } finally { creating.value = false }
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

.modal-overlay {
  position: fixed; inset: 0; background: rgba(0,0,0,0.7);
  display: flex; align-items: flex-end; justify-content: center; z-index: 500;
  backdrop-filter: blur(4px);
}
.modal-card {
  background: var(--bg-1); border-radius: var(--radius-lg) var(--radius-lg) 0 0;
  padding: 28px; width: 100%; max-width: 500px;
  border: 1px solid var(--border); border-bottom: none;
  max-height: 85vh; overflow-y: auto;
}
.btn-icon-plain {
  width: 32px; height: 32px; border-radius: 50%;
  background: var(--surface-2); border: none; cursor: pointer;
  color: var(--text-2); display: flex; align-items: center; justify-content: center;
  transition: var(--transition);
}
.btn-icon-plain:hover { background: var(--border); color: var(--text-1); }

.user-check {
  display: flex; align-items: center; gap: 10px; padding: 10px 12px;
  border-radius: var(--radius); background: var(--bg-1);
  border: 1px solid var(--border); cursor: pointer; transition: var(--transition);
}
.user-check:hover { border-color: var(--primary); }
.user-check input { width: 16px; height: 16px; accent-color: var(--primary); flex-shrink: 0; }

.error-msg {
  background: rgba(250,82,82,0.1); border: 1px solid var(--danger);
  border-radius: var(--radius); padding: 8px 12px; color: var(--danger); font-size: 13px;
}

@media (min-width: 768px) {
  .modal-card {
    border-radius: var(--radius-lg); border: 1px solid var(--border);
    margin: auto; max-height: 80vh;
  }
}
</style>
