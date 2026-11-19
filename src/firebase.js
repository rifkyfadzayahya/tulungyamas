import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAYHgmMn1dvF4kk98hE_7Y9pKjcnmob8RI",
  authDomain: "tulungyamas.firebaseapp.com",
  projectId: "tulungyamas",
  storageBucket: "tulungyamas.firebasestorage.app",
  messagingSenderId: "403739548641",
  appId: "1:403739548641:web:ca2484da81938496ff90a0",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
