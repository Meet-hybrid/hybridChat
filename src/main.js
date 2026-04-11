// src/main.js
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import App from './App.vue'
import './style.css'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)

// Init auth before mounting
import { useAuthStore } from '@/store/auth'
const authStore = useAuthStore()
authStore.init().then(() => {
  app.mount('#app')
})
