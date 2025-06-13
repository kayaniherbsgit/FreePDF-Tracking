// src/ProgressTracker.js
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import db from "./firebase";

export const trackProgress = async (phone, percent) => {
  try {
    await addDoc(collection(db, "progress"), {
      phone,
      percent,
      timestamp: serverTimestamp(),
    });
  } catch (err) {
    console.error("Error logging progress:", err);
  }
};
