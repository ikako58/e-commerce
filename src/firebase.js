// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // we’ll use this for login/register
import { getAnalytics } from "firebase/analytics";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDMovo0SF-nL4-j0adafi0cc-NL5u1SEdE",
  authDomain: "e-commerce-app-c123b.firebaseapp.com",
  projectId: "e-commerce-app-c123b",
  storageBucket: "e-commerce-app-c123b.appspot.com",
  messagingSenderId: "618218666530",
  appId: "1:618218666530:web:87b874b095dec1bc49a87b",
  measurementId: "G-7D79F6P2PZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); // we’ll use this in Login/Register
export const analytics = getAnalytics(app);
