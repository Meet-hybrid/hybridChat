<template>
  <div class="auth-page">
    <div class="auth-container">
      <div class="auth-logo">
        <h1>HybridChat</h1>
        <p>Professional communication platform</p>
      </div>

      <div class="auth-tabs">
        <button :class="['tab', { active: mode === 'login' }]" @click="mode = 'login'">Sign In</button>
        <button :class="['tab', { active: mode === 'register' }]" @click="mode = 'register'">Create Account</button>
      </div>

      <form @submit.prevent="handleSubmit" class="auth-form">
        <div v-if="mode === 'register'" class="field">
          <label>Display Name</label>
          <input v-model="form.displayName" class="input" placeholder="Your name" required />
        </div>
        <div class="field">
          <label>Email</label>
          <input v-model="form.email" class="input" type="email" placeholder="email@company.com" required />
        </div>
        <div class="field">
          <label>Password</label>
          <div class="input-wrap">
            <input v-model="form.password" class="input" :type="showPw ? 'text' : 'password'" placeholder="••••••••" required />
            <button type="button" class="pw-toggle" @click="showPw = !showPw">
              {{ showPw ? 'Hide' : 'Show' }}
            </button>
          </div>
        </div>

        <div v-if="mode === 'register'" class="terms-wrap">
          <input type="checkbox" id="terms" v-model="agreedTerms" />
          <label for="terms">I agree to the <a href="#" @click.prevent="showTerms = true">Terms</a></label>
        </div>

        <div v-if="authStore.error" class="error-msg">{{ authStore.error }}</div>

        <button type="submit" class="btn btn-primary" :disabled="loading">
          {{ loading ? 'Processing...' : (mode === 'login' ? 'Sign In' : 'Create Account') }}
        </button>
      </form>

      <div class="divider"><span>OR</span></div>

      <button class="btn btn-secondary" style="width:100%" @click="handleGoogle" :disabled="loading">
        Continue with Google
      </button>
    </div>
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
  padding: 24px; background: var(--bg-0);
}

.auth-container {
  width: 100%; max-width: 400px;
  background: var(--bg-1);
  padding: 32px;
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow);
}
.auth-logo { text-align: center; margin-bottom: 24px; }
.auth-logo h1 { font-size: 24px; font-weight: 700; color: var(--text-1); }
.auth-logo p { color: var(--text-2); margin-top: 4px; font-size: 14px; }

.auth-tabs {
  display: flex; gap: 8px; margin-bottom: 24px;
  border-bottom: 1px solid var(--border);
}
.tab {
  padding: 8px 16px; border: none; background: none;
  color: var(--text-2); font-weight: 600; cursor: pointer;
  border-bottom: 2px solid transparent;
}
.tab.active { color: var(--primary); border-bottom-color: var(--primary); }

.auth-form { display: flex; flex-direction: column; gap: 16px; }
.field { display: flex; flex-direction: column; gap: 4px; }
.field label { font-size: 12px; font-weight: 600; color: var(--text-2); }
.input-wrap { position: relative; }
.pw-toggle {
  position: absolute; right: 12px; top: 50%; transform: translateY(-50%);
  background: none; border: none; cursor: pointer; font-size: 12px; color: var(--primary);
}

.terms-wrap { display: flex; align-items: center; gap: 8px; font-size: 13px; color: var(--text-2); }
.error-msg { font-size: 13px; color: var(--danger); }
.divider { text-align: center; margin: 24px 0; color: var(--text-3); font-size: 12px; }
</style>
