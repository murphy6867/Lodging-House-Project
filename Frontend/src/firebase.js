// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-lodginghouse.firebaseapp.com",
  projectId: "mern-lodginghouse",
  storageBucket: "mern-lodginghouse.appspot.com",
  messagingSenderId: "513174860693",
  appId: "1:513174860693:web:1558ae6e3f61f65aed3c9c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);