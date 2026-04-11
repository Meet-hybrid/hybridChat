# YouthChat 💬 — Full-Stack Vue + Firebase Chat App

A WhatsApp-style group chat MVP with floating Messenger-style UI, WebRTC calling, stories, and more.

---

## 🚀 Quick Start (5 Steps)

### 1. Create Firebase Project
1. Go to [console.firebase.google.com](https://console.firebase.google.com)
2. Click **Add project** → name it (e.g. "youthchat") → Create
3. Enable these services:
   - **Authentication** → Sign-in method → Enable **Email/Password** and **Google**
   - **Firestore Database** → Create database → Start in **production mode**
   - **Realtime Database** → Create database → Start in **locked mode**
   - **Storage** → Get started → Start in **production mode**

### 2. Get Your Firebase Config
1. Project Settings (gear icon) → Your apps → Web app → Register
2. Copy the `firebaseConfig` object

### 3. Configure the App
Edit `src/firebase.js` and paste your config:
```js
const firebaseConfig = {
  apiKey: "AIza...",
  authDomain: "yourproject.firebaseapp.com",
  databaseURL: "https://yourproject-default-rtdb.firebaseio.com",
  projectId: "yourproject",
  storageBucket: "yourproject.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123:web:abc"
}
```

### 4. Apply Security Rules

**Firestore Rules** (Firebase Console → Firestore → Rules):
```
// Paste contents of firestore.rules
```

**Realtime DB Rules** (Firebase Console → Realtime DB → Rules):
```json
// Paste contents of database.rules.json
```

**Storage Rules** (Firebase Console → Storage → Rules):
```
// Paste contents of storage.rules
```

### 5. Run the App
```bash
npm install
npm run dev
```

Open http://localhost:5173 🎉

---

## 🏗️ Deploy to Production

### Vercel (Recommended — Free)
```bash
npm install -g vercel
vercel
```

### Firebase Hosting
```bash
npm install -g firebase-tools
firebase login
firebase init hosting
npm run build
firebase deploy
```

### Netlify
```bash
npm run build
# Drag the dist/ folder to netlify.com/drop
```

---

## 📁 Project Structure

```
src/
├── firebase.js          # Firebase init (EDIT THIS FIRST)
├── main.js              # App entry point
├── style.css            # Global neon dark theme
├── App.vue              # Root with nav + floating chat
├── router/
│   └── index.js         # Vue Router
├── store/
│   ├── auth.js          # Pinia auth store (login/register/logout)
│   └── chat.js          # Pinia chat store (messages/convos/presence)
├── views/
│   ├── AuthView.vue     # Login + Register + Terms
│   ├── HomeView.vue     # Dashboard with stories & active users
│   ├── ChatsView.vue    # All conversations + create group
│   ├── UsersView.vue    # Find & message people
│   └── ProfileView.vue  # Edit profile, themes, logout
└── components/
    ├── FloatingChat.vue  # 🔑 Draggable floating chat bubble + window
    ├── ChatWindow.vue    # Full message UI (text/image/audio/file/reactions)
    ├── CallModal.vue     # WebRTC voice + video calls
    ├── StatusStories.vue # WhatsApp/Instagram-style stories
    └── ConvoItem.vue     # Conversation list item
```

---

## ✨ Features Implemented

| Feature | Status |
|---------|--------|
| Email/Password auth | ✅ |
| Google OAuth | ✅ |
| Terms & Conditions gate | ✅ |
| Draggable floating chat bubble | ✅ |
| Mini chat window (open/minimize/close) | ✅ |
| 1-on-1 DM | ✅ |
| Group chats | ✅ |
| Real-time messages (Firestore) | ✅ |
| Typing indicators (RTDB) | ✅ |
| Message delivery status | ✅ |
| Emoji reactions | ✅ |
| Quick emoji picker | ✅ |
| Image sharing | ✅ |
| Video sharing | ✅ |
| File sharing (PDF, docs) | ✅ |
| Voice notes (record & send) | ✅ |
| WebRTC voice calls | ✅ |
| WebRTC video calls | ✅ |
| Incoming call UI | ✅ |
| Online/last seen | ✅ |
| Stories / Status (24h) | ✅ |
| Story reactions | ✅ |
| Dark neon theme | ✅ |
| 5 color themes | ✅ |
| Profile customization | ✅ |
| Avatar (DiceBear) | ✅ |
| Mood/status picker | ✅ |
| Group admin controls | ✅ (create/manage) |
| Report/block users | 🔜 Phase 2 |
| Push notifications | 🔜 Phase 2 |
| Anonymous mode | 🔜 Phase 2 |

---

## 🔐 Firestore Data Model

```
users/{uid}
  displayName, email, photoURL, bio, status, theme

conversations/{convoId}
  type: 'dm' | 'group'
  members: [uid, uid, ...]
  name, avatar (groups only)
  admins: [uid] (groups only)
  lastMessage: { text, senderId, createdAt }
  updatedAt

conversations/{convoId}/messages/{msgId}
  senderId, text, type, mediaUrl, fileName
  reactions: { uid: emoji }
  status: 'sent' | 'delivered' | 'seen'
  createdAt

stories/{storyId}
  userId, userName, userAvatar
  type: 'text' | 'image'
  text, bg, mediaUrl
  seenBy: [uid]
  createdAt, expiresAt (24h)

calls/{callId}
  callerId, callerName, callerAvatar
  calleeId, type, status
  offer, answer (WebRTC SDP)
  offerCandidates/, answerCandidates/ (subcollections)
```

**Realtime Database:**
```
presence/{uid}: { online: bool, lastSeen: timestamp }
typing/{convoId}/{uid}: true | null
```

---

## 🔜 Phase 2 Roadmap

- Push notifications (FCM)
- Message search
- Anonymous chat mode
- Report & block users
- Read receipts (seen by all)
- GIF support (Tenor API)
- Sticker packs
- Agora/Twilio for group video calls (WebRTC scales poorly beyond 2 people)
- React Native / Flutter conversion

---

## 💡 Tips

- **Agora integration**: For group calls (3+ people), replace WebRTC with Agora SDK. Get a free key at agora.io
- **GIFs**: Integrate Tenor API (free) — add a button in ChatWindow that calls `https://tenor.googleapis.com/v2/search`
- **Push Notifications**: Enable Firebase Cloud Messaging, add a service worker
- **Scaling**: Firestore handles millions of messages. Add indexes in Firebase Console if queries fail.
