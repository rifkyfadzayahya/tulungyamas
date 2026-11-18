import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Firebase Web config is public app configuration. Protect data with Firestore Rules.
const firebaseConfig = {
  apiKey: "AIzaSyAYHgmMn1dvF4kk98hE_7Y9pKjcnmob8RI",
  authDomain: "tulungyamas.firebaseapp.com",
  projectId: "tulungyamas",
  storageBucket: "tulungyamas.firebasestorage.app",
  messagingSenderId: "403739548641",
  appId: "1:403739548641:web:f3606b4944626a2dff90a0",
  measurementId: "G-0Z4ST8RYFR"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
