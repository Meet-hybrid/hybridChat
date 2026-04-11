// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/store/auth'

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/auth', component: () => import('@/views/AuthView.vue'), meta: { public: true } },
  { path: '/home', component: () => import('@/views/HomeView.vue'), meta: { requiresAuth: true } },
  { path: '/chats', component: () => import('@/views/ChatsView.vue'), meta: { requiresAuth: true } },
  { path: '/profile', component: () => import('@/views/ProfileView.vue'), meta: { requiresAuth: true } },
  { path: '/users', component: () => import('@/views/UsersView.vue'), meta: { requiresAuth: true } },
  { path: '/admin', component: () => import('@/views/AdminView.vue'), meta: { requiresAuth: true } },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach(async (to) => {
  const auth = useAuthStore()
  if (!to.meta.public && !auth.isLoggedIn) return '/auth'
  if (to.path === '/auth' && auth.isLoggedIn) return '/home'
})

export default router
