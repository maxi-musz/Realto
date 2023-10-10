  // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "maximus-first-note-5ee31.firebaseapp.com",
  projectId: "maximus-first-note-5ee31",
  storageBucket: "maximus-first-note-5ee31.appspot.com",
  messagingSenderId: "496336784355",
  appId: "1:496336784355:web:fd85a768ec60d1c49e6ed6",
  measurementId: "G-P4Q04QNNWB"
}; 

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
