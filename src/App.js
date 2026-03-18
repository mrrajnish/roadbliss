import { useState } from "react";

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const API = "https://roadbliss.onrender.com";

  const signup = async () => {
    try {
      const res = await fetch(API + "/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.text();
      console.log(data);
      alert(data);
    } catch (err) {
      console.log(err);
      alert("Signup failed");
    }
  };

  const login = async () => {
    try {
      const res = await fetch(API + "/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.text();
      console.log(data);
      alert(data);
    } catch (err) {
      console.log(err);
      alert("Login failed");
    }
  };

  return (
    <div style={{ padding: "50px" }}>
      <h1>RoadBliss 🚗</h1>

      <input
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      /><br/><br/>

      <input
        placeholder="Password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      /><br/><br/>

      <button onClick={signup}>Signup</button>
      <button onClick={login} style={{ marginLeft: "10px" }}>
        Login
      </button>
    </div>
  );
}