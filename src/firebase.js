import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAlHP7QFqgbmnrQIZwtm6VQ1QywaqV35Oc",
  authDomain: "chat-48cba.firebaseapp.com",
  projectId: "chat-48cba",
  storageBucket: "chat-48cba.appspot.com",
  messagingSenderId: "630930582039",
  appId: "1:630930582039:web:85771890375bf4257a4a52"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();

// https://console.firebase.google.com/project/chat-48cba/overview
// Doc - https://firebase.google.com/docs?authuser=0&hl=en