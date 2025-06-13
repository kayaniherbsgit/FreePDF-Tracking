// src/ProgressTracker.js
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import db from "./firebase";

export const trackProgress = async (phone, percent) => {
  try {

    const name = localStorage.getItem("userName");
    const phone = localStorage.getItem("userPhone");

    await addDoc(collection(db, "progress"), {
      name,
      phone,
      percent,
      timestamp: serverTimestamp(),
    });
  } catch (err) {
    console.error("Error logging progress:", err);
  }
};
