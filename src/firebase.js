import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCR0ApQYTyXgOEWVHtPrdlkPgyPUCwDRgY",
  authDomain: "finance-tracker-hub.firebaseapp.com",
  projectId: "finance-tracker-hub",
  storageBucket: "finance-tracker-hub.firebasestorage.app",
  messagingSenderId: "73694649613",
  appId: "1:73694649613:web:e7da1cb8fb298fa36ee444"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);