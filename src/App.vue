<template>
  <div id="app-root">
    <template v-if="!authStore.loading">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>

      <!-- Bottom Nav (only when logged in) -->
      <nav v-if="authStore.isLoggedIn" class="bottom-nav">
        <router-link to="/home" class="nav-item" :class="{ active: $route.path === '/home' }">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9,22 9,12 15,12 15,22"/>
          </svg>
          Home
        </router-link>
        <router-link to="/chats" class="nav-item" :class="{ active: $route.path === '/chats' }">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
          </svg>
          Chats
          <span v-if="unreadCount > 0" class="badge badge-primary" style="position:absolute;top:4px;right:12px;padding:2px 5px;font-size:9px;">{{ unreadCount }}</span>
        </router-link>
        <router-link to="/users" class="nav-item" :class="{ active: $route.path === '/users' }">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
          </svg>
          People
        </router-link>
        <router-link to="/profile" class="nav-item" :class="{ active: $route.path === '/profile' }">
          <img v-if="authStore.user?.photoURL" :src="authStore.user.photoURL" class="avatar-sm" style="border-radius:50%;border:2px solid transparent;" :style="$route.path==='/profile' ? 'border-color:var(--primary)' : ''" />
          <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
          </svg>
          Profile
        </router-link>
      </nav>

      <!-- Floating Chat -->
      <FloatingChat v-if="authStore.isLoggedIn" />

      <!-- Call Modal -->
      <CallModal v-if="authStore.isLoggedIn" />
    </template>

    <!-- Loading Screen -->
    <div v-else class="splash">
      <div class="splash-logo">
        <svg width="48" height="48" viewBox="0 0 48 48">
          <circle cx="24" cy="24" r="22" fill="url(#g1)"/>
          <path d="M14 18h20M14 24h14M14 30h10" stroke="white" stroke-width="2.5" stroke-linecap="round"/>
          <defs><linearGradient id="g1" x1="0" y1="0" x2="48" y2="48"><stop offset="0%" stop-color="#7c6bfa"/><stop offset="100%" stop-color="#fa6bbb"/></linearGradient></defs>
        </svg>
        <span>HybridChat</span>
      </div>
      <div class="splash-dots">
        <span class="typing-dot"></span>
        <span class="typing-dot"></span>
        <span class="typing-dot"></span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useAuthStore } from '@/store/auth'
import { useChatStore } from '@/store/chat'
import FloatingChat from '@/components/FloatingChat.vue'
import CallModal from '@/components/CallModal.vue'

const authStore = useAuthStore()
const chatStore = useChatStore()

const unreadCount = computed(() => 0) // TODO: implement unread tracking

onMounted(() => {
  if (authStore.isLoggedIn) {
    chatStore.watchPresence()
    chatStore.watchConversations(authStore.user.uid)
    chatStore.fetchUsers()
  }
})
</script>

<style>
.splash {
  position: fixed; inset: 0;
  display: flex; flex-direction: column;
  align-items: center; justify-content: center; gap: 32px;
  background: var(--bg-0);
}
.splash-logo {
  display: flex; align-items: center; gap: 12px;
  font-size: 28px; font-weight: 800; letter-spacing: -0.5px;
  background: var(--gradient); -webkit-background-clip: text; -webkit-text-fill-color: transparent;
}
#app-root { position: relative; min-height: 100vh; }
</style>
