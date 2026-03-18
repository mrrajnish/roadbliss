import { useState } from "react";

export default function App() {
  const [dark, setDark] = useState(true);

  return (
    <div
      style={{
        background: dark
          ? "linear-gradient(135deg, #0f172a, #020617)"
          : "#f1f5f9",
        color: dark ? "white" : "black",
        minHeight: "100vh",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      {/* NAVBAR */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 40px",
        }}
      >
        <h1 style={{ fontSize: "28px" }}>🚗 RoadBliss</h1>

        <button
          onClick={() => setDark(!dark)}
          style={{
            border: "none",
            background: "transparent",
            fontSize: "20px",
            cursor: "pointer",
          }}
        >
          {dark ? "🌙" : "☀️"}
        </button>
      </div>

      {/* HERO SECTION */}
      <div style={{ textAlign: "center", marginTop: "80px" }}>
        <h2 style={{ fontSize: "36px", fontWeight: "bold" }}>
          Discover Hidden Village Roads
        </h2>
        <p style={{ opacity: 0.7 }}>
          Explore secret places in Saran district
        </p>
      </div>

      {/* LOGIN CARD */}
      <div
        style={{
          maxWidth: "350px",
          margin: "60px auto",
          padding: "30px",
          borderRadius: "20px",
          backdropFilter: "blur(10px)",
          background: dark
            ? "rgba(255,255,255,0.05)"
            : "rgba(0,0,0,0.05)",
          boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
        }}
      >
        <h3 style={{ textAlign: "center", marginBottom: "20px" }}>
          Login / Signup
        </h3>

        <input
          placeholder="Email"
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "15px",
            borderRadius: "10px",
            border: "none",
          }}
        />

        <input
          placeholder="Password"
          type="password"
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "20px",
            borderRadius: "10px",
            border: "none",
          }}
        />

        <button
          style={{
            width: "100%",
            padding: "12px",
            borderRadius: "10px",
            border: "none",
            background: "#3b82f6",
            color: "white",
            marginBottom: "10px",
            cursor: "pointer",
          }}
        >
          Login
        </button>

        <button
          style={{
            width: "100%",
            padding: "12px",
            borderRadius: "10px",
            border: "none",
            background: "#10b981",
            color: "white",
            cursor: "pointer",
          }}
        >
          Signup
        </button>
      </div>

      {/* MAP */}
      <div style={{ padding: "20px" }}>
        <h3 style={{ textAlign: "center" }}>Saran Map</h3>

        <iframe
          title="map"
          width="100%"
          height="450"
          style={{ borderRadius: "15px" }}
          src="https://www.google.com/maps?q=Saran,Bihar&output=embed"
        ></iframe>
      </div>
    </div>
  );
}