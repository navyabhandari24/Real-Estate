// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-a2292.firebaseapp.com",
  projectId: "mern-estate-a2292",
  storageBucket: "mern-estate-a2292.appspot.com",
  messagingSenderId: "356990217521",
  appId: "1:356990217521:web:fa9c02859a88b54ce7d410"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);