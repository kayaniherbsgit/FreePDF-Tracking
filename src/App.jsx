// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Intro from "./components/Intro";
import FullContent from "./components/FullContent";
import Finish from "./components/Finish";
import AdminDashboard from "./pages/AdminDashboard";
import LoginPage from "./pages/LoginPage";
import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

function App() {
  const [user, setUser] = useState(null);
  const [checking, setChecking] = useState(true);

useEffect(() => {
  const auth = getAuth();
  const unsub = onAuthStateChanged(auth, (u) => {
    if (u) {
      console.log("👤 Logged in user email:", u.email);
    } else {
      console.log("❌ No user logged in");
    }
    setUser(u);
    setChecking(false);
  });
  return () => unsub();
}, []);

  if (checking) return <p style={{ padding: "2rem" }}>⏳ Checking session...</p>;

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/read" element={<FullContent />} />
        <Route path="/done" element={<Finish />} />

        {/* 🔐 Admin Route Protection */}
<Route
  path="/admin"
  element={
    user ? (
      user.email === "kayaniherbs@gmail.com" ? (
        <AdminDashboard />
      ) : (
        <div style={{ padding: "2rem", color: "red" }}>
          🚫 You are not authorized to view this page.
        </div>
      )
    ) : (
      <LoginPage />
    )
  }
/>
      </Routes>
    </Router>
  );
}

export default App;
