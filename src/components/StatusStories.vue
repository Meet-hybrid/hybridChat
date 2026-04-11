<template>
  <div>
    <!-- Stories bar -->
    <div class="stories-bar">
      <!-- Add your story -->
      <div class="story-item" @click="showAddStory = true">
        <div class="story-ring add-ring">
          <img :src="authStore.user?.photoURL || `https://api.dicebear.com/7.x/adventurer/svg?seed=${authStore.user?.uid}`"
               class="story-avatar" />
          <div class="add-badge">+</div>
        </div>
        <span class="story-name">Your Story</span>
      </div>

      <!-- Other users' stories -->
      <div v-for="s in stories" :key="s.id" class="story-item" @click="viewStory(s)">
        <div class="story-ring" :class="{ seen: s.seenBy?.includes(authStore.user?.uid) }">
          <img :src="s.userAvatar || `https://api.dicebear.com/7.x/adventurer/svg?seed=${s.userId}`"
               class="story-avatar" />
        </div>
        <span class="story-name">{{ s.userName?.split(' ')[0] }}</span>
      </div>
    </div>

    <!-- Story Viewer -->
    <Teleport to="body">
      <transition name="fade">
        <div v-if="activeStory" class="story-viewer" @click="nextStory">
          <!-- Progress bars -->
          <div class="story-progress">
            <div v-for="(s, i) in userStories" :key="i" class="progress-bar">
              <div class="progress-fill"
                   :style="{ width: i < storyIndex ? '100%' : i === storyIndex ? progress + '%' : '0%' }">
              </div>
            </div>
          </div>

          <!-- Header -->
          <div class="story-header">
            <div style="display:flex;align-items:center;gap:10px;">
              <img :src="activeStory.userAvatar" class="avatar-sm" />
              <div>
                <div style="font-weight:700;font-size:14px;color:white;">{{ activeStory.userName }}</div>
                <div style="font-size:11px;color:rgba(255,255,255,0.6);">{{ timeAgo(activeStory.createdAt) }}</div>
              </div>
            </div>
            <button @click.stop="closeStory" class="story-close-btn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
          </div>

          <!-- Content -->
          <div class="story-content" :style="{ background: activeStory.bg || '#111' }">
            <img v-if="activeStory.type === 'image'" :src="activeStory.mediaUrl" style="width:100%;height:100%;object-fit:contain;" />
            <div v-else class="story-text-content">
              <p style="font-size:24px;font-weight:800;text-align:center;color:white;padding:40px;text-shadow:0 2px 8px rgba(0,0,0,0.5);">
                {{ activeStory.text }}
              </p>
            </div>

            <!-- Emoji reaction bar -->
            <div class="story-reactions" @click.stop>
              <button v-for="e in ['❤️','🔥','😮','😂','👏']" :key="e"
                      class="story-react" @click.stop="reactToStory(e)">{{ e }}</button>
            </div>
          </div>
        </div>
      </transition>
    </Teleport>

    <!-- Add Story Modal -->
    <Teleport to="body">
      <transition name="fade">
        <div v-if="showAddStory" class="modal-overlay" @click.self="showAddStory = false">
          <div class="modal-card">
            <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:20px;">
              <h2 style="font-size:18px;font-weight:700;">New Story</h2>
              <button class="story-close-btn" @click="showAddStory=false">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                  <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
            </div>
            <div style="display:flex;flex-direction:column;gap:12px;">
              <div class="story-type-row">
                <button :class="['type-btn', { active: storyType === 'text' }]" @click="storyType = 'text'">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="4 7 4 4 20 4 20 7"/><line x1="9" y1="20" x2="15" y2="20"/><line x1="12" y1="4" x2="12" y2="20"/></svg>
                  Text
                </button>
                <button :class="['type-btn', { active: storyType === 'image' }]" @click="storyType = 'image'">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                  Image
                </button>
              </div>

              <div v-if="storyType === 'text'">
                <textarea v-model="storyForm.text" class="input" style="resize:none;height:100px;" placeholder="What's on your mind?"></textarea>
                <div style="display:flex;gap:8px;margin-top:8px;flex-wrap:wrap;">
                  <button v-for="bg in bgOptions" :key="bg" class="bg-btn"
                          :style="{ background: bg }" :class="{ active: storyForm.bg === bg }"
                          @click="storyForm.bg = bg">
                  </button>
                </div>
              </div>

              <div v-if="storyType === 'image'">
                <input ref="storyImageInput" type="file" accept="image/*" hidden @change="handleStoryImage" />
                <div v-if="!storyForm.imagePreview" class="upload-zone" @click="$refs.storyImageInput.click()">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="opacity:0.4;">
                    <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>
                  </svg>
                  <p style="font-size:13px;color:var(--text-3);">Tap to select an image</p>
                </div>
                <img v-else :src="storyForm.imagePreview" style="width:100%;border-radius:var(--radius);max-height:200px;object-fit:cover;" />
              </div>

              <button class="btn btn-primary" style="width:100%;" @click="postStory" :disabled="posting">
                {{ posting ? 'Publishing...' : 'Share Story' }}
              </button>
            </div>
          </div>
        </div>
      </transition>
    </Teleport>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { collection, addDoc, onSnapshot, query, where, orderBy, serverTimestamp, updateDoc, doc, arrayUnion } from 'firebase/firestore'
import { db } from '@/firebase'
import { useChatStore } from '@/store/chat'
import { useAuthStore } from '@/store/auth'
import { v4 as uuidv4 } from 'uuid'

const authStore = useAuthStore()
const chatStore = useChatStore()

const stories = ref([])
const activeStory = ref(null)
const storyIndex = ref(0)
const userStories = ref([])
const progress = ref(0)
const showAddStory = ref(false)
const storyType = ref('text')
const posting = ref(false)

let progressTimer = null
let storyUnsub = null

const storyForm = ref({ text: '', bg: 'linear-gradient(135deg,#7c6bfa,#fa6bbb)', imageFile: null, imagePreview: null })

const bgOptions = [
  'linear-gradient(135deg,#7c6bfa,#fa6bbb)',
  'linear-gradient(135deg,#06b6d4,#3b82f6)',
  'linear-gradient(135deg,#f97316,#ec4899)',
  'linear-gradient(135deg,#22c55e,#06b6d4)',
  'linear-gradient(135deg,#eab308,#f97316)',
  '#1a1a2e',
]

onMounted(() => {
  // Listen to stories from last 24h
  const q = query(
    collection(db, 'stories'),
    where('expiresAt', '>', new Date()),
    orderBy('expiresAt', 'desc')
  )
  storyUnsub = onSnapshot(q, snap => {
    const all = snap.docs.map(d => ({ id: d.id, ...d.data() }))
    // exclude own stories from list (show at top separately)
    stories.value = all.filter(s => s.userId !== authStore.user?.uid)
  })
})

onUnmounted(() => { if (storyUnsub) storyUnsub(); clearInterval(progressTimer) })

function viewStory(firstStory) {
  // Collect all stories from this user
  const allFromUser = [firstStory]
  userStories.value = allFromUser
  storyIndex.value = 0
  activeStory.value = firstStory
  startProgress()

  // Mark as seen
  updateDoc(doc(db, 'stories', firstStory.id), {
    seenBy: arrayUnion(authStore.user.uid)
  })
}

function startProgress() {
  clearInterval(progressTimer)
  progress.value = 0
  progressTimer = setInterval(() => {
    progress.value += 0.5
    if (progress.value >= 100) nextStory()
  }, 25) // 5 seconds per story
}

function nextStory() {
  if (storyIndex.value < userStories.value.length - 1) {
    storyIndex.value++
    activeStory.value = userStories.value[storyIndex.value]
    startProgress()
  } else {
    closeStory()
  }
}

function closeStory() {
  clearInterval(progressTimer)
  activeStory.value = null
  userStories.value = []
}

async function reactToStory(emoji) {
  // Could send a DM to the story author
  console.log('Reacted with', emoji)
}

function handleStoryImage(e) {
  const file = e.target.files[0]
  if (!file) return
  storyForm.value.imageFile = file
  storyForm.value.imagePreview = URL.createObjectURL(file)
}

async function postStory() {
  posting.value = true
  try {
    const expires = new Date(Date.now() + 24 * 60 * 60 * 1000)
    let mediaUrl = null

    if (storyType.value === 'image' && storyForm.value.imageFile) {
      const path = `stories/${authStore.user.uid}/${uuidv4()}`
      mediaUrl = await chatStore.uploadMedia(storyForm.value.imageFile, path)
    }

    await addDoc(collection(db, 'stories'), {
      userId: authStore.user.uid,
      userName: authStore.user.displayName,
      userAvatar: authStore.user.photoURL || `https://api.dicebear.com/7.x/adventurer/svg?seed=${authStore.user.uid}`,
      type: storyType.value,
      text: storyForm.value.text,
      bg: storyForm.value.bg,
      mediaUrl,
      seenBy: [],
      createdAt: serverTimestamp(),
      expiresAt: expires
    })

    showAddStory.value = false
    storyForm.value = { text: '', bg: 'linear-gradient(135deg,#7c6bfa,#fa6bbb)', imageFile: null, imagePreview: null }
  } catch(e) { console.error(e) }
  finally { posting.value = false }
}

function timeAgo(ts) {
  if (!ts) return ''
  const d = ts.toDate ? ts.toDate() : new Date(ts)
  const diff = Date.now() - d.getTime()
  if (diff < 3600000) return `${Math.floor(diff/60000)}m ago`
  return `${Math.floor(diff/3600000)}h ago`
}
</script>

<style scoped>
.stories-bar {
  display: flex; gap: 16px; overflow-x: auto; padding: 16px 20px 8px;
  scrollbar-width: none;
}
.stories-bar::-webkit-scrollbar { display: none; }

.story-item { display: flex; flex-direction: column; align-items: center; gap: 6px; cursor: pointer; flex-shrink: 0; }
.story-name { font-size: 11px; color: var(--text-2); font-weight: 600; }

.story-ring {
  width: 60px; height: 60px; border-radius: 50%;
  background: var(--gradient); padding: 2.5px;
  display: flex; align-items: center; justify-content: center;
  position: relative; transition: var(--spring);
}
.story-ring:hover { transform: scale(1.05); }
.story-ring.seen { background: var(--surface-2); }
.story-ring.add-ring { background: var(--surface-2); border: 2px dashed var(--primary); }

.story-avatar {
  width: 52px; height: 52px; border-radius: 50%; object-fit: cover;
  background: var(--bg-2); border: 2px solid var(--bg-0);
}

.add-badge {
  position: absolute; bottom: 0; right: 0;
  width: 20px; height: 20px; border-radius: 50%;
  background: var(--primary); color: white;
  font-size: 14px; font-weight: 800; display: flex; align-items: center; justify-content: center;
  border: 2px solid var(--bg-0);
}

/* Viewer */
.story-viewer {
  position: fixed; inset: 0; z-index: 99999;
  background: #000;
}
.story-progress {
  position: absolute; top: env(safe-area-inset-top, 16px); left: 8px; right: 8px;
  display: flex; gap: 4px; z-index: 10;
}
.progress-bar { flex: 1; height: 3px; background: rgba(255,255,255,0.3); border-radius: 3px; overflow: hidden; }
.progress-fill { height: 100%; background: white; border-radius: 3px; transition: width 0.025s linear; }

.story-header {
  position: absolute; top: calc(env(safe-area-inset-top, 16px) + 12px); left: 12px; right: 12px;
  display: flex; align-items: center; justify-content: space-between; z-index: 10;
}
.story-content { position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; }
.story-text-content { display: flex; align-items: center; justify-content: center; width: 100%; height: 100%; }

.story-reactions {
  position: absolute; bottom: 48px; left: 0; right: 0;
  display: flex; justify-content: center; gap: 16px;
}
.story-react {
  font-size: 28px; background: rgba(255,255,255,0.15);
  border: none; border-radius: 50%; width: 48px; height: 48px;
  cursor: pointer; backdrop-filter: blur(10px); transition: var(--spring);
}
.story-react:hover { transform: scale(1.2); }

/* Modal */
.modal-overlay {
  position: fixed; inset: 0; background: rgba(0,0,0,0.7);
  display: flex; align-items: flex-end; justify-content: center; z-index: 500;
  backdrop-filter: blur(4px);
}
.modal-card {
  background: var(--bg-2); border-radius: var(--radius-xl) var(--radius-xl) 0 0;
  padding: 28px; width: 100%; max-width: 500px;
  border: 1px solid var(--border); border-bottom: none;
}

.story-type-row { display: flex; gap: 8px; }
.type-btn {
  flex: 1; padding: 10px; border-radius: var(--radius); border: 1.5px solid var(--border);
  background: var(--surface); color: var(--text-2); font-family: var(--font); font-weight: 600;
  cursor: pointer; transition: var(--transition); font-size: 13px;
  display: flex; align-items: center; justify-content: center; gap: 6px;
}
.type-btn.active { border-color: var(--primary); color: var(--primary-light); background: rgba(124,107,250,0.1); }

.story-close-btn {
  background: rgba(255,255,255,0.15); border: none; border-radius: 50%;
  width: 32px; height: 32px; cursor: pointer; color: white;
  display: flex; align-items: center; justify-content: center;
  backdrop-filter: blur(10px); transition: var(--transition);
  flex-shrink: 0;
}
.story-close-btn:hover { background: rgba(255,255,255,0.25); }

.bg-btn {
  width: 36px; height: 36px; border-radius: 50%;
  border: 3px solid transparent; cursor: pointer; transition: var(--spring);
}
.bg-btn.active { border-color: white; transform: scale(1.15); }

.upload-zone {
  border: 2px dashed var(--border); border-radius: var(--radius);
  padding: 32px; display: flex; flex-direction: column; align-items: center; gap: 8px;
  cursor: pointer; transition: var(--transition);
}
.upload-zone:hover { border-color: var(--primary); }
</style>
