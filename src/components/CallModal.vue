<template>
  <!-- Incoming Call Banner -->
  <Teleport to="body">
    <transition name="slide-up">
      <div v-if="incomingCall && !callActive" class="incoming-call">
        <div class="incoming-inner">
          <img :src="incomingCall.callerAvatar" class="avatar-lg" style="border:3px solid var(--accent);animation:pulse-ring 1.5s infinite;" />
          <div style="flex:1;">
            <p style="font-size:11px;color:var(--text-3);margin-bottom:2px;">Incoming {{ incomingCall.type }} call</p>
            <p style="font-weight:700;font-size:16px;">{{ incomingCall.callerName }}</p>
          </div>
          <div style="display:flex;gap:12px;">
            <button class="call-btn decline" @click="declineCall">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
            <button class="call-btn accept" @click="acceptCall">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.31h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.16 6.16l1.77-1.77a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </transition>

    <!-- Active Call Screen -->
    <transition name="fade">
      <div v-if="callActive" class="call-screen">
        <!-- Video streams -->
        <video ref="remoteVideo" class="remote-video" autoplay playsinline></video>
        <video v-if="isVideoCall" ref="localVideo" class="local-video" autoplay playsinline muted></video>

        <!-- Call info overlay -->
        <div class="call-overlay">
          <div class="call-info">
            <img :src="peerAvatar" class="avatar-xl" style="border:3px solid rgba(255,255,255,0.3);" />
            <h2 style="font-size:22px;font-weight:800;margin-top:12px;">{{ peerName }}</h2>
            <p style="color:rgba(255,255,255,0.6);font-size:14px;margin-top:4px;">{{ callDurationStr }}</p>
          </div>

          <!-- Call controls -->
          <div class="call-controls">
            <button class="ctrl-btn" @click="toggleMute" :class="{ active: isMuted }">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path v-if="!isMuted" d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/>
                <path v-if="!isMuted" d="M19 10v2a7 7 0 0 1-14 0v-2"/>
                <line v-if="!isMuted" x1="12" y1="19" x2="12" y2="23"/>
                <line v-if="!isMuted" x1="8" y1="23" x2="16" y2="23"/>
                <line v-if="isMuted" x1="1" y1="1" x2="23" y2="23"/>
                <path v-if="isMuted" d="M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6"/>
                <path v-if="isMuted" d="M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23"/>
              </svg>
              <span>{{ isMuted ? 'Unmute' : 'Mute' }}</span>
            </button>

            <button v-if="isVideoCall" class="ctrl-btn" @click="toggleCamera" :class="{ active: isCameraOff }">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polygon points="23 7 16 12 23 17 23 7"/>
                <rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
                <line v-if="isCameraOff" x1="1" y1="1" x2="23" y2="23"/>
              </svg>
              <span>Camera</span>
            </button>

            <button class="ctrl-btn" @click="toggleSpeaker">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
                <path v-if="speakerOn" d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
              </svg>
              <span>Speaker</span>
            </button>

            <button class="ctrl-btn end-btn" @click="endCall">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <path d="M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.42 19.42 0 0 1 4.9 8.81C4 6.56 3.56 4.44 3.56 4.44A2 2 0 0 1 5.54 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L9.5 9.9"/>
                <line x1="23" y1="1" x2="1" y2="23"/>
              </svg>
              <span>End</span>
            </button>
          </div>
        </div>
      </div>
    </transition>
  </Teleport>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useAuthStore } from '@/store/auth'
import { useChatStore } from '@/store/chat'
import { doc, setDoc, onSnapshot, deleteDoc, collection, addDoc, getDoc } from 'firebase/firestore'
import { db } from '@/firebase'

const authStore = useAuthStore()
const chatStore = useChatStore()

// ── State ─────────────────────────────────────────────────────
const incomingCall = ref(null)
const callActive = ref(false)
const isVideoCall = ref(false)
const isMuted = ref(false)
const isCameraOff = ref(false)
const speakerOn = ref(true)
const callDuration = ref(0)
const peerName = ref('')
const peerAvatar = ref('')

const remoteVideo = ref(null)
const localVideo = ref(null)

let pc = null
let localStream = null
let callTimer = null
let callDocUnsub = null
let callId = null

const callDurationStr = computed(() => {
  const m = Math.floor(callDuration.value / 60).toString().padStart(2,'0')
  const s = (callDuration.value % 60).toString().padStart(2,'0')
  return `${m}:${s}`
})

// ── WebRTC config ──────────────────────────────────────────────
const rtcConfig = {
  iceServers: [
    { urls: 'stun:stun.l.google.com:19302' },
    { urls: 'stun:stun1.l.google.com:19302' }
  ]
}

// ── Initiate a call ────────────────────────────────────────────
async function startCall(targetUid, type = 'voice') {
  isVideoCall.value = type === 'video'

  // Get peer info
  const peerDoc = await getDoc(doc(db, 'users', targetUid))
  const peer = peerDoc.data()
  peerName.value = peer?.displayName || 'User'
  peerAvatar.value = peer?.photoURL || `https://api.dicebear.com/7.x/adventurer/svg?seed=${targetUid}`

  // Create call document in Firestore
  const callRef = await addDoc(collection(db, 'calls'), {
    callerId: authStore.user.uid,
    callerName: authStore.user.displayName,
    callerAvatar: authStore.user.photoURL || `https://api.dicebear.com/7.x/adventurer/svg?seed=${authStore.user.uid}`,
    calleeId: targetUid,
    type,
    status: 'ringing',
    createdAt: new Date()
  })
  callId = callRef.id

  // Create RTCPeerConnection
  pc = new RTCPeerConnection(rtcConfig)

  localStream = await navigator.mediaDevices.getUserMedia({
    audio: true,
    video: type === 'video'
  })

  localStream.getTracks().forEach(track => pc.addTrack(track, localStream))

  if (localVideo.value && type === 'video') {
    localVideo.value.srcObject = localStream
  }

  pc.ontrack = e => {
    if (remoteVideo.value) remoteVideo.value.srcObject = e.streams[0]
  }

  // ICE candidates
  const offerCandidates = collection(db, 'calls', callId, 'offerCandidates')
  pc.onicecandidate = e => {
    if (e.candidate) addDoc(offerCandidates, e.candidate.toJSON())
  }

  // Create offer
  const offer = await pc.createOffer()
  await pc.setLocalDescription(offer)
  await setDoc(callRef, { offer: { sdp: offer.sdp, type: offer.type } }, { merge: true })

  // Watch for answer
  callDocUnsub = onSnapshot(callRef, async snap => {
    const data = snap.data()
    if (data?.answer && pc.currentRemoteDescription === null) {
      await pc.setRemoteDescription(new RTCSessionDescription(data.answer))
      callActive.value = true
      startTimer()
    }
    if (data?.status === 'ended' || data?.status === 'declined') {
      endCall()
    }
  })

  // Listen for remote ICE candidates
  onSnapshot(collection(db, 'calls', callId, 'answerCandidates'), snap => {
    snap.docChanges().forEach(change => {
      if (change.type === 'added') {
        pc.addIceCandidate(new RTCIceCandidate(change.doc.data()))
      }
    })
  })
}

// ── Accept incoming call ────────────────────────────────────────
async function acceptCall() {
  if (!incomingCall.value) return
  callId = incomingCall.value.id
  isVideoCall.value = incomingCall.value.type === 'video'
  peerName.value = incomingCall.value.callerName
  peerAvatar.value = incomingCall.value.callerAvatar

  pc = new RTCPeerConnection(rtcConfig)
  localStream = await navigator.mediaDevices.getUserMedia({
    audio: true,
    video: isVideoCall.value
  })
  localStream.getTracks().forEach(track => pc.addTrack(track, localStream))

  if (localVideo.value && isVideoCall.value) {
    localVideo.value.srcObject = localStream
  }

  pc.ontrack = e => {
    if (remoteVideo.value) remoteVideo.value.srcObject = e.streams[0]
  }

  const callRef = doc(db, 'calls', callId)
  const callSnap = await getDoc(callRef)
  const offer = callSnap.data()?.offer

  await pc.setRemoteDescription(new RTCSessionDescription(offer))

  // ICE candidates
  const answerCandidates = collection(db, 'calls', callId, 'answerCandidates')
  pc.onicecandidate = e => {
    if (e.candidate) addDoc(answerCandidates, e.candidate.toJSON())
  }

  const answer = await pc.createAnswer()
  await pc.setLocalDescription(answer)
  await setDoc(callRef, { answer: { sdp: answer.sdp, type: answer.type }, status: 'active' }, { merge: true })

  // Listen for remote ICE candidates
  onSnapshot(collection(db, 'calls', callId, 'offerCandidates'), snap => {
    snap.docChanges().forEach(change => {
      if (change.type === 'added') {
        pc.addIceCandidate(new RTCIceCandidate(change.doc.data()))
      }
    })
  })

  incomingCall.value = null
  callActive.value = true
  startTimer()
}

// ── Decline call ───────────────────────────────────────────────
async function declineCall() {
  if (incomingCall.value?.id) {
    await setDoc(doc(db, 'calls', incomingCall.value.id), { status: 'declined' }, { merge: true })
  }
  incomingCall.value = null
}

// ── End call ───────────────────────────────────────────────────
async function endCall() {
  clearInterval(callTimer)
  callDuration.value = 0
  callActive.value = false
  incomingCall.value = null

  if (localStream) { localStream.getTracks().forEach(t => t.stop()); localStream = null }
  if (pc) { pc.close(); pc = null }
  if (callDocUnsub) { callDocUnsub(); callDocUnsub = null }

  if (callId) {
    await setDoc(doc(db, 'calls', callId), { status: 'ended' }, { merge: true })
    callId = null
  }
}

// ── Controls ───────────────────────────────────────────────────
function toggleMute() {
  isMuted.value = !isMuted.value
  localStream?.getAudioTracks().forEach(t => t.enabled = !isMuted.value)
}
function toggleCamera() {
  isCameraOff.value = !isCameraOff.value
  localStream?.getVideoTracks().forEach(t => t.enabled = !isCameraOff.value)
}
function toggleSpeaker() { speakerOn.value = !speakerOn.value }

function startTimer() {
  callTimer = setInterval(() => callDuration.value++, 1000)
}

// ── Listen for incoming calls ──────────────────────────────────
let callsUnsub = null
onMounted(() => {
  if (!authStore.user?.uid) return
  const q = collection(db, 'calls')
  callsUnsub = onSnapshot(q, snap => {
    snap.docChanges().forEach(change => {
      if (change.type === 'added') {
        const data = change.doc.data()
        if (data.calleeId === authStore.user.uid && data.status === 'ringing') {
          incomingCall.value = { id: change.doc.id, ...data }
        }
      }
      if (change.type === 'modified') {
        const data = change.doc.data()
        if (data.calleeId === authStore.user.uid && (data.status === 'ended' || data.status === 'declined')) {
          if (incomingCall.value?.id === change.doc.id) incomingCall.value = null
        }
      }
    })
  })
})

onUnmounted(() => {
  if (callsUnsub) callsUnsub()
  endCall()
})

// Expose startCall so parent can trigger it
defineExpose({ startCall })
</script>

<style scoped>
/* ── Incoming call banner ── */
.incoming-call {
  position: fixed; top: 0; left: 0; right: 0; z-index: 99999;
  padding: 12px 16px;
  background: var(--bg-1); border-bottom: 1px solid var(--border);
  box-shadow: var(--shadow);
}
.incoming-inner {
  display: flex; align-items: center; gap: 14px;
  max-width: 500px; margin: 0 auto;
}
.call-btn {
  width: 48px; height: 48px; border-radius: 50%;
  border: none; cursor: pointer; display: flex; align-items: center; justify-content: center;
  transition: var(--spring);
}
.call-btn.accept { background: var(--success); color: white; }
.call-btn.decline { background: var(--danger); color: white; }
.call-btn:hover { transform: scale(1.1); }

/* ── Active call screen ── */
.call-screen {
  position: fixed; inset: 0; z-index: 99998;
  background: var(--bg-0);
}
.remote-video {
  width: 100%; height: 100%; object-fit: cover;
  background: #111;
}
.local-video {
  position: absolute; top: 20px; right: 16px;
  width: 100px; height: 140px; border-radius: var(--radius);
  object-fit: cover; border: 2px solid var(--border);
  box-shadow: var(--shadow);
}
.call-overlay {
  position: absolute; inset: 0;
  background: linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, transparent 40%, rgba(0,0,0,0.7) 70%, rgba(0,0,0,0.9) 100%);
  display: flex; flex-direction: column; justify-content: space-between;
  padding: env(safe-area-inset-top, 40px) 0 env(safe-area-inset-bottom, 40px);
}
.call-info {
  display: flex; flex-direction: column; align-items: center;
  padding-top: 60px; color: white;
}
.call-controls {
  display: flex; justify-content: center; align-items: center;
  gap: 20px; padding: 0 24px 24px;
}
.ctrl-btn {
  display: flex; flex-direction: column; align-items: center; gap: 6px;
  background: rgba(255,255,255,0.15); border: none; cursor: pointer;
  color: white; padding: 14px; border-radius: 50%;
  transition: var(--spring); min-width: 60px;
  backdrop-filter: blur(10px);
  font-size: 11px; font-family: var(--font);
}
.ctrl-btn:hover { background: rgba(255,255,255,0.25); transform: scale(1.05); }
.ctrl-btn.active { background: rgba(255,255,255,0.4); }
.ctrl-btn.end-btn { background: var(--danger); box-shadow: 0 4px 20px rgba(250,107,107,0.5); }
.ctrl-btn.end-btn:hover { background: #ff3b3b; }
</style>
