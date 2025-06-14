// src/ProgressTracker.js
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import db from "./firebase";

export const trackProgress = async (percent) => {
  const phone = localStorage.getItem("userPhone");
  const name = localStorage.getItem("userName");

  if (!phone || !name) return;

  const progressRef = doc(db, "progress", phone); // Use phone as unique ID

await setDoc(progressRef, {
  phone,
  name,
  percent: Number(percent),  // 👈 Ensure it's a number!
  timestamp: serverTimestamp(),
}, { merge: true }); // merge: true allows updates instead of overwrite
};
