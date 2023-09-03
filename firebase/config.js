// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDJCcSjcHYSWSdaO6F8kTZUkarn99Y0AT8",
  authDomain: "matrix-69fc9.firebaseapp.com",
  projectId: "matrix-69fc9",
  storageBucket: "matrix-69fc9.appspot.com",
  messagingSenderId: "117881546327",
  appId: "1:117881546327:web:d4b085439890fe7a2ea512",
  measurementId: "G-C27F8NEBT9",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);
