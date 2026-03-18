import { useState } from "react";

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const API = "https://roadbliss.onrender.com";

  // ✅ SIGNUP
  const handleSignup = async () => {
    try {
      console.log("Signup started...");

      const res = await fetch(API + "/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      console.log("Response:", res);

      const data = await res.text();
      console.log("Server response:", data);

      alert(data);
    } catch (err) {
      console.log("Signup Error:", err);
      alert("Signup failed");
    }
  };

  // ✅ LOGIN
  const handleLogin = async () => {
    try {
      console.log("Login started...");

      const res = await fetch(API + "/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      console.log("Response:", res);

      const data = await res.text();
      console.log("Server response:", data);

      alert(data);
    } catch (err) {
      console.log("Login Error:", err);
      alert("Login failed");
    }
  };

  return (
    <div style={{ padding: "50px", fontFamily: "Arial" }}>
      <h1>RoadBliss 🚗</h1>

      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ display: "block", marginBottom: "10px", padding: "8px" }}
      />

      <input
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ display: "block", marginBottom: "10px", padding: "8px" }}
      />

      <button onClick={handleSignup} style={{ marginRight: "10px" }}>
        Signup
      </button>

      <button onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}