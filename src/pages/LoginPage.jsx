import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import "./LoginPage.css";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      const auth = getAuth();
      await signInWithEmailAndPassword(auth, email, password);
      setError("");
      window.location.href = "/admin"; // reload to trigger protected route
    } catch (err) {
      setError("❌ Login failed. Check your credentials.");
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-box">
        <h1>🔐 Admin Login</h1>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p className="error">{error}</p>}

        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}

export default LoginPage;
