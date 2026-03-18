import { useState } from "react";

export default function App() {
  const [dark, setDark] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const API = "https://roadbliss.onrender.com"; // ✅ your backend

  // ✅ SIGNUP
  const handleSignup = async () => {
    const res = await fetch(`${API}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.text();
    alert(data);
  };

  // ✅ LOGIN
  const handleLogin = async () => {
    const res = await fetch(`${API}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.text();
    alert(data);
  };

  return (
    <div
      style={{
        backgroundColor: dark ? "#0f172a" : "#f8fafc",
        color: dark ? "white" : "black",
        minHeight: "100vh",
        fontFamily: "Arial",
      }}
    >
      {/* Navbar */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "20px",
        }}
      >
        <h1>RoadBliss 🚗</h1>

        <button onClick={() => setDark(!dark)}>
          {dark ? "🌙" : "☀️"}
        </button>
      </div>

      {/* Hero */}
      <div style={{ textAlign: "center", padding: "60px 20px" }}>
        <h2 style={{ fontSize: "32px" }}>
          Discover Hidden Village Roads
        </h2>
        <p>Explore secret places in Saran district</p>
      </div>

      {/* Auth Section */}
      <div style={{ padding: "20px", maxWidth: "300px", margin: "auto" }}>
        <h3>Login / Signup</h3>

        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ width: "100%", margin: "10px 0", padding: "10px" }}
        />

        <input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ width: "100%", margin: "10px 0", padding: "10px" }}
        />

        <button
          onClick={handleLogin}
          style={{ width: "100%", padding: "10px", marginTop: "10px" }}
        >
          Login
        </button>

        <button
          onClick={handleSignup}
          style={{ width: "100%", padding: "10px", marginTop: "10px" }}
        >
          Signup
        </button>
      </div>

      {/* Map */}
      <div style={{ padding: "20px" }}>
        <h3>Map (Saran District)</h3>

        <iframe
          title="map"
          width="100%"
          height="400"
          src="https://www.google.com/maps?q=Saran,Bihar&output=embed"
        ></iframe>
      </div>
    </div>
  );
}