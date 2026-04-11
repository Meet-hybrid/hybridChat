<template>
  <div class="auth-page">
    <div class="blob blob-1"></div>
    <div class="blob blob-2"></div>
    <div class="blob blob-3"></div>

    <div class="auth-container">
      <!-- Logo -->
      <div class="auth-logo">
        <div class="logo-icon">
          <svg width="36" height="36" viewBox="0 0 48 48" fill="none">
            <circle cx="24" cy="24" r="22" fill="url(#authG)"/>
            <path d="M14 18h20M14 24h14M14 30h10" stroke="white" stroke-width="2.5" stroke-linecap="round"/>
            <defs><linearGradient id="authG" x1="0" y1="0" x2="48" y2="48"><stop offset="0%" stop-color="#7c6bfa"/><stop offset="100%" stop-color="#fa6bbb"/></linearGradient></defs>
          </svg>
        </div>
        <h1>HybridChat</h1>
        <p>Connect with your community</p>
      </div>

      <!-- Tabs -->
      <div class="auth-tabs">
        <button :class="['tab', { active: mode === 'login' }]" @click="mode = 'login'">Sign In</button>
        <button :class="['tab', { active: mode === 'register' }]" @click="mode = 'register'">Create Account</button>
      </div>

      <!-- Form -->
      <transition name="slide-up" mode="out-in">
        <form :key="mode" @submit.prevent="handleSubmit" class="auth-form">
          <div v-if="mode === 'register'" class="field">
            <label>Display Name</label>
            <input v-model="form.displayName" class="input" placeholder="Your name" required />
          </div>
          <div class="field">
            <label>Email</label>
            <input v-model="form.email" class="input" type="email" placeholder="you@example.com" required />
          </div>
          <div class="field">
            <label>Password</label>
            <div class="input-wrap">
              <input v-model="form.password" class="input" :type="showPw ? 'text' : 'password'" placeholder="••••••••" required />
              <button type="button" class="pw-toggle" @click="showPw = !showPw">
                <svg v-if="!showPw" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
                </svg>
                <svg v-else width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/>
                </svg>
              </button>
            </div>
          </div>

          <div v-if="mode === 'register'" class="terms-wrap">
            <input type="checkbox" id="terms" v-model="agreedTerms" />
            <label for="terms">I agree to the <a href="#" @click.prevent="showTerms = true">Terms &amp; Conditions</a></label>
          </div>

          <div v-if="authStore.error" class="error-msg">{{ authStore.error }}</div>

          <button type="submit" class="btn btn-primary" style="width:100%;padding:14px;" :disabled="loading">
            <svg v-if="loading" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="spin">
              <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
            </svg>
            <span v-else>{{ mode === 'login' ? 'Sign In' : 'Create Account' }}</span>
          </button>
        </form>
      </transition>

      <div class="divider"><span>or</span></div>

      <button class="btn btn-secondary" style="width:100%;gap:10px;" @click="handleGoogle" :disabled="loading">
        <svg width="18" height="18" viewBox="0 0 24 24">
          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
        </svg>
        Continue with Google
      </button>
    </div>

    <!-- Terms Modal -->
    <Teleport to="body">
      <transition name="fade">
        <div v-if="showTerms" class="modal-overlay" @click.self="showTerms = false">
          <div class="modal-card">
            <h2>Terms &amp; Conditions</h2>
            <div class="terms-content">
              <p><strong>1. Age Requirement</strong> — You must be 13 or older to use HybridChat.</p>
              <p><strong>2. Respectful Use</strong> — No harassment, hate speech, or harmful content.</p>
              <p><strong>3. Privacy</strong> — We collect only what is needed to run the service.</p>
              <p><strong>4. Content</strong> — You own your content. We do not sell it.</p>
              <p><strong>5. Safety</strong> — Report abuse using the in-app report button.</p>
              <p><strong>6. Changes</strong> — Terms may change. We will notify you.</p>
            </div>
            <button class="btn btn-primary" style="width:100%;margin-top:16px;" @click="showTerms=false; agreedTerms=true">
              I Understand
            </button>
          </div>
        </div>
      </transition>
    </Teleport>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/store/auth'
import { useChatStore } from '@/store/chat'

const authStore = useAuthStore()
const chatStore = useChatStore()
const router = useRouter()

const mode = ref('login')
const loading = ref(false)
const showPw = ref(false)
const showTerms = ref(false)
const agreedTerms = ref(false)

const form = reactive({ email: '', password: '', displayName: '' })

async function handleSubmit() {
  if (mode.value === 'register' && !agreedTerms.value) {
    alert('Please agree to the Terms & Conditions')
    return
  }
  loading.value = true
  try {
    if (mode.value === 'login') {
      await authStore.login(form)
    } else {
      await authStore.register(form)
    }
    chatStore.watchPresence()
    chatStore.watchConversations(authStore.user.uid)
    chatStore.fetchUsers()
    router.push('/home')
  } catch (e) {
    // error shown via store
  } finally {
    loading.value = false
  }
}

async function handleGoogle() {
  loading.value = true
  try {
    await authStore.loginWithGoogle()
    chatStore.watchPresence()
    chatStore.watchConversations(authStore.user.uid)
    chatStore.fetchUsers()
    router.push('/home')
  } catch(e) {}
  finally { loading.value = false }
}
</script>

<style scoped>
.auth-page {
  min-height: 100vh; display: flex; align-items: center; justify-content: center;
  padding: 24px; position: relative; overflow: hidden;
}
.blob {
  position: absolute; border-radius: 50%; filter: blur(80px); opacity: 0.15;
  animation: float 8s ease-in-out infinite;
}
.blob-1 { width: 400px; height: 400px; background: var(--primary); top: -100px; right: -100px; }
.blob-2 { width: 300px; height: 300px; background: var(--secondary); bottom: -80px; left: -80px; animation-delay: -3s; }
.blob-3 { width: 200px; height: 200px; background: var(--accent); top: 50%; left: 50%; animation-delay: -5s; }
@keyframes float { 0%,100%{transform:translateY(0) scale(1)} 50%{transform:translateY(-20px) scale(1.05)} }

.auth-container {
  width: 100%; max-width: 420px; position: relative; z-index: 1;
}
.auth-logo { text-align: center; margin-bottom: 36px; }
.logo-icon {
  width: 64px; height: 64px; border-radius: 18px;
  background: var(--surface); border: 1px solid var(--border);
  display: flex; align-items: center; justify-content: center;
  margin: 0 auto 16px;
}
.auth-logo h1 {
  font-size: 28px; font-weight: 800; letter-spacing: -0.5px;
  background: var(--gradient); -webkit-background-clip: text; -webkit-text-fill-color: transparent;
}
.auth-logo p { color: var(--text-3); margin-top: 6px; font-size: 14px; }

.auth-tabs {
  display: flex; background: var(--bg-2); border-radius: var(--radius-full);
  padding: 4px; margin-bottom: 28px; border: 1px solid var(--border);
}
.tab {
  flex: 1; padding: 10px; border: none; border-radius: var(--radius-full);
  background: none; color: var(--text-2); font-family: var(--font); font-weight: 600;
  cursor: pointer; transition: var(--transition); font-size: 14px;
}
.tab.active { background: var(--gradient); color: white; }

.auth-form { display: flex; flex-direction: column; gap: 16px; }
.field { display: flex; flex-direction: column; gap: 6px; }
.field label { font-size: 13px; font-weight: 600; color: var(--text-2); }
.input-wrap { position: relative; }
.input-wrap .input { padding-right: 44px; }
.pw-toggle {
  position: absolute; right: 12px; top: 50%; transform: translateY(-50%);
  background: none; border: none; cursor: pointer; color: var(--text-3);
  display: flex; align-items: center; transition: var(--transition);
}
.pw-toggle:hover { color: var(--text-1); }

.terms-wrap { display: flex; align-items: center; gap: 8px; font-size: 13px; color: var(--text-2); }
.terms-wrap a { color: var(--primary-light); text-decoration: none; }
.terms-wrap a:hover { text-decoration: underline; }
.terms-wrap input { width: 16px; height: 16px; accent-color: var(--primary); flex-shrink: 0; }

.error-msg {
  background: rgba(250,107,107,0.1); border: 1px solid var(--danger);
  border-radius: var(--radius); padding: 10px 14px; font-size: 13px; color: var(--danger);
}

.divider {
  display: flex; align-items: center; gap: 12px;
  color: var(--text-3); font-size: 12px; margin: 20px 0;
}
.divider::before, .divider::after { content: ''; flex: 1; height: 1px; background: var(--border); }

.modal-overlay {
  position: fixed; inset: 0; background: rgba(0,0,0,0.7);
  display: flex; align-items: flex-end; justify-content: center; z-index: 1000;
  backdrop-filter: blur(4px);
}
.modal-card {
  background: var(--bg-2); border-radius: var(--radius-xl) var(--radius-xl) 0 0;
  padding: 28px; width: 100%; max-width: 500px;
  border: 1px solid var(--border); border-bottom: none;
}
.modal-card h2 { font-size: 18px; font-weight: 700; margin-bottom: 16px; }
.terms-content { display: flex; flex-direction: column; gap: 12px; max-height: 40vh; overflow-y: auto; }
.terms-content p { font-size: 14px; color: var(--text-2); line-height: 1.6; }
</style>
