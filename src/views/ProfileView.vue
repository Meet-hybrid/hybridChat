<template>
  <div class="page">
    <div class="profile-header">
      <div class="profile-bg"></div>
      <div class="profile-content">
        <div style="position:relative;display:inline-block;">
          <img :src="user?.photoURL || `https://api.dicebear.com/7.x/adventurer/svg?seed=${user?.uid}`"
               class="avatar-xl" style="border:3px solid var(--primary);box-shadow:var(--shadow-glow);" />
          <span class="online-dot" style="position:absolute;bottom:4px;right:4px;width:14px;height:14px;border:3px solid var(--bg-1);"></span>
        </div>
        <h1 style="font-size:22px;font-weight:800;margin-top:14px;letter-spacing:-0.3px;">{{ user?.displayName }}</h1>
        <p v-if="user?.bio" style="margin-top:8px;font-size:13px;color:var(--text-2);">{{ user?.bio }}</p>

      </div>
    </div>

    <div style="padding:20px;display:flex;flex-direction:column;gap:16px;">
      <!-- Edit Profile -->
      <div class="card">
        <p class="card-label">Profile</p>
        <div style="display:flex;flex-direction:column;gap:14px;">
          <div class="field">
            <label>Display Name</label>
            <input v-model="form.displayName" class="input" />
          </div>
          <div class="field">
            <label>Bio</label>
            <input v-model="form.bio" class="input" placeholder="A short bio" />
          </div>
          <div class="field">
            <label>Profession</label>
            <input v-model="form.profession" class="input" placeholder="e.g. Software Engineer" />
          </div>
          <div class="field">
            <label>Education</label>
            <input v-model="form.education" class="input" placeholder="e.g. BS Computer Science" />
          </div>
          <div class="field">
            <label>Skills (comma separated)</label>
            <input v-model="form.skills" class="input" placeholder="e.g. JavaScript, Vue, Firebase" />
          </div>
          <div class="field" style="flex-direction:row;align-items:center;gap:8px;">
            <input type="checkbox" v-model="form.openForHire" />
            <label>Open for Hire</label>
          </div>
          <div class="field">
            <label>Avatar style (any word)</label>
            <input v-model="form.avatarSeed" class="input" placeholder="e.g. your name or a keyword" />
          </div>
          <button class="btn btn-primary" @click="saveProfile" :disabled="saving">
            {{ saving ? 'Saving...' : 'Save Changes' }}
          </button>
          <div v-if="saved" class="saved-badge">Changes saved</div>
        </div>
      </div>

      <!-- Theme Picker -->
      <div class="card">
        <p class="card-label">Accent Color</p>
        <div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:4px;">
          <button v-for="t in themes" :key="t.name"
                  class="theme-swatch" :style="{ background: t.gradient }"
                  :class="{ active: currentTheme === t.name }"
                  @click="applyTheme(t)"
                  :title="t.name">
          </button>
        </div>
      </div>

      <!-- Admin -->
      <div class="card">
        <p class="card-label">Administration</p>
        <router-link to="/admin" class="btn btn-secondary" style="width:100%;gap:8px;">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/>
            <rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
          </svg>
          Admin Dashboard
        </router-link>
      </div>

      <!-- Sign out -->
      <div class="card" style="border-color:rgba(250,107,107,0.2);">
        <p class="card-label" style="color:var(--danger);">Account</p>
        <button class="btn btn-secondary" style="width:100%;gap:8px;" @click="logout">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
            <polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/>
          </svg>
          Sign Out
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useAuthStore } from '@/store/auth'
import { doc, updateDoc } from 'firebase/firestore'
import { updateProfile } from 'firebase/auth'
import { db, auth } from '@/firebase'
import { useRouter } from 'vue-router'

const authStore = useAuthStore()
const router = useRouter()
const user = authStore.user

const saving = ref(false)
const saved = ref(false)
const currentTheme = ref('violet')

const form = reactive({
  displayName: user?.displayName || '',
  bio: user?.bio || '',
  avatarSeed: user?.uid || '',
  education: user?.education || '',
  profession: user?.profession || '',
  skills: user?.skills || '',
  openForHire: user?.openForHire || false
})

const themes = [
  { name: 'violet', gradient: 'linear-gradient(135deg,#7c6bfa,#fa6bbb)', primary: '#7c6bfa', secondary: '#fa6bbb' },
  { name: 'ocean',  gradient: 'linear-gradient(135deg,#06b6d4,#3b82f6)', primary: '#06b6d4', secondary: '#3b82f6' },
  { name: 'sunset', gradient: 'linear-gradient(135deg,#f97316,#ec4899)', primary: '#f97316', secondary: '#ec4899' },
  { name: 'forest', gradient: 'linear-gradient(135deg,#22c55e,#06b6d4)', primary: '#22c55e', secondary: '#06b6d4' },
  { name: 'gold',   gradient: 'linear-gradient(135deg,#eab308,#f97316)', primary: '#eab308', secondary: '#f97316' },
]

async function saveProfile() {
  saving.value = true
  try {
    const photoURL = `https://api.dicebear.com/7.x/adventurer/svg?seed=${form.avatarSeed || user?.uid}`
    await updateDoc(doc(db, 'users', user.uid), {
      displayName: form.displayName,
      bio: form.bio,
      photoURL,
      education: form.education,
      profession: form.profession,
      skills: form.skills,
      openForHire: form.openForHire
    })
    await updateProfile(auth.currentUser, { displayName: form.displayName, photoURL })
    authStore.user.displayName = form.displayName
    authStore.user.bio = form.bio
    authStore.user.photoURL = photoURL
    authStore.user.education = form.education
    authStore.user.profession = form.profession
    authStore.user.skills = form.skills
    authStore.user.openForHire = form.openForHire
    saved.value = true
    setTimeout(() => saved.value = false, 2500)
  } catch(e) { console.error(e) }
  finally { saving.value = false }
}

function applyTheme(t) {
  currentTheme.value = t.name
  document.documentElement.style.setProperty('--primary', t.primary)
  document.documentElement.style.setProperty('--secondary', t.secondary)
  document.documentElement.style.setProperty('--gradient', t.gradient)
}

async function logout() {
  await authStore.logout()
  router.push('/auth')
}
</script>

<style scoped>
.profile-header { position: relative; overflow: hidden; }
.profile-bg {
  position: absolute; inset: 0; height: 120px;
  background: var(--gradient); opacity: 0.1;
}
.profile-content {
  position: relative; display: flex; flex-direction: column;
  align-items: center; padding: 36px 24px 24px;
}

.card { background: var(--bg-2); border: 1px solid var(--border); border-radius: var(--radius-lg); padding: 20px; }
.card-label {
  font-size: 11px; font-weight: 700; color: var(--text-3);
  text-transform: uppercase; letter-spacing: 0.8px; margin-bottom: 14px;
}
.field { display: flex; flex-direction: column; gap: 6px; }
.field label { font-size: 13px; font-weight: 600; color: var(--text-2); }

.saved-badge {
  text-align: center; font-size: 13px; color: var(--success);
  padding: 8px; border-radius: var(--radius);
  background: rgba(107,250,154,0.1); border: 1px solid rgba(107,250,154,0.2);
}

.theme-swatch {
  width: 40px; height: 40px; border-radius: 50%;
  border: 3px solid transparent; cursor: pointer; transition: var(--spring);
  outline: none;
}
.theme-swatch.active { border-color: white; transform: scale(1.15); box-shadow: 0 0 0 2px var(--primary); }
.theme-swatch:hover { transform: scale(1.1); }
</style>
