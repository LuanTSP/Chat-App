import { initializeApp } from "firebase/app"
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyB_8DvmqqNYom8Peo9YXkrC7-gNEEgxdjw",
  authDomain: "web-chat-69533.firebaseapp.com",
  projectId: "web-chat-69533",
  storageBucket: "web-chat-69533.appspot.com",
  messagingSenderId: "740808157190",
  appId: "1:740808157190:web:0aed26de4f5c50ef8b3b87"
};

const app = initializeApp(firebaseConfig);

// Initialize Services
export const auth = getAuth(app)
export const db = getFirestore();
