import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getDatabase } from 'firebase/database'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyCZYlaaPuSfQV6oU33Ve0oOpMBU9HM3l2s",
  authDomain: "hybridchat-b81ab.firebaseapp.com",
  databaseURL: "https://hybridchat-b81ab-default-rtdb.firebaseio.com",
  projectId: "hybridchat-b81ab",
  storageBucket: "hybridchat-b81ab.appspot.com",
  messagingSenderId: "208164258199",
  appId: "1:208164258199:web:cf111f0e343f1660f884d2"
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
export const db = getFirestore(app)
export const rtdb = getDatabase(app)
export const storage = getStorage(app)
export const googleProvider = new GoogleAuthProvider()

export default app