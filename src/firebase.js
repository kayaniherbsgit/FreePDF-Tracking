// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCyA6EwWO96z9F9hNaUR2M3muqQyvDGBds",
  authDomain: "kayapowerpdf.firebaseapp.com",
  projectId: "kayapowerpdf",
  storageBucket: "kayapowerpdf.firebasestorage.app",
  messagingSenderId: "681803263446",
  appId: "1:681803263446:web:cfd10932c2aaa1e442c877",
  measurementId: "G-CHEPVKP9D2"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;