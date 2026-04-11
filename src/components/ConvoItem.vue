<template>
  <div class="convo-item">
    <div style="position:relative;flex-shrink:0;">
      <img :src="avatar" class="avatar" />
      <span v-if="isOnline" class="online-dot" style="position:absolute;bottom:0;right:0;"></span>
    </div>
    <div style="flex:1;min-width:0;">
      <div style="display:flex;align-items:center;justify-content:space-between;">
        <span style="font-weight:700;font-size:15px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:160px;">{{ name }}</span>
        <span style="font-size:11px;color:var(--text-3);flex-shrink:0;">{{ timeAgo }}</span>
      </div>
      <div style="font-size:13px;color:var(--text-3);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;margin-top:2px;">
        {{ lastMsg }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useAuthStore } from '@/store/auth'
import { useChatStore } from '@/store/chat'

const props = defineProps({ convo: Object })

const authStore = useAuthStore()
const chatStore = useChatStore()

const isGroup = computed(() => props.convo?.type === 'group')

const otherMemberId = computed(() => {
  if (isGroup.value) return null
  return props.convo?.members?.find(uid => uid !== authStore.user?.uid)
})

const otherUser = computed(() =>
  chatStore.allUsers.find(u => u.uid === otherMemberId.value)
)

const name = computed(() => isGroup.value ? props.convo.name : (otherUser.value?.displayName || 'User'))
const avatar = computed(() => {
  if (isGroup.value) return props.convo.avatar || `https://api.dicebear.com/7.x/identicon/svg?seed=${props.convo.id}`
  return otherUser.value?.photoURL || `https://api.dicebear.com/7.x/adventurer/svg?seed=${otherMemberId.value}`
})

const isOnline = computed(() => !isGroup.value && chatStore.isOnline(otherMemberId.value))

const lastMsg = computed(() => {
  const lm = props.convo?.lastMessage
  if (!lm) return 'No messages yet'
  return lm.text || '📎 Attachment'
})

const timeAgo = computed(() => {
  const ts = props.convo?.updatedAt
  if (!ts) return ''
  const d = ts.toDate ? ts.toDate() : new Date(ts)
  const diff = Date.now() - d.getTime()
  if (diff < 60000) return 'now'
  if (diff < 3600000) return `${Math.floor(diff/60000)}m`
  if (diff < 86400000) return `${Math.floor(diff/3600000)}h`
  return `${Math.floor(diff/86400000)}d`
})
</script>

<style scoped>
.convo-item {
  display: flex; align-items: center; gap: 14px;
  padding: 12px 14px; border-radius: var(--radius-lg);
  cursor: pointer; transition: var(--transition);
  border: 1px solid transparent;
}
.convo-item:hover { background: var(--surface); border-color: var(--border); }
</style>
