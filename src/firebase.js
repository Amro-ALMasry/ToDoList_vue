// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyASg3HTVzlsE3jOsCwjbht3uqciVbL0Un4",
    authDomain: "todolist-91465.firebaseapp.com",
    projectId: "todolist-91465",
    storageBucket: "todolist-91465.firebasestorage.app",
    messagingSenderId: "523434930201",
    appId: "1:523434930201:web:d8c701b62472f4f421ba88"
  };

// Inizializza Firebase
const app = initializeApp(firebaseConfig);

// Inizializza servizi
export const auth = getAuth(app);
export const db = getFirestore(app);

