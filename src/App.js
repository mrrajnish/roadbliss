import { useState } from "react";

export default function App() {
  const [dark, setDark] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    const res = await fetch("http://localhost:5000/signup", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({ email, password }),
    });
    const data = await res.text();
    alert(data);
  };

  const handleLogin = async () => {
    const res = await fetch("http://localhost:5000/login", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({ email, password }),
    });
    const data = await res.text();
    alert(data);
  };

  return (
    <div style={{
      background: dark ? "#0f0f0f" : "#f5f5f5",
      color: dark ? "white" : "black",
      minHeight: "100vh",
      fontFamily: "sans-serif"
    }}>

      {/* Navbar */}
      <div style={{
        display:"flex",
        justifyContent:"space-between",
        padding:"20px"
      }}>
        <h1>🚀 RoadBliss</h1>

        {/* Toggle Icon */}
        <span 
          style={{cursor:"pointer", fontSize:"20px"}}
          onClick={() => setDark(!dark)}
        >
          {dark ? "☀️" : "🌙"}
        </span>
      </div>

      {/* Hero */}
      <section style={{padding:"60px 20px"}}>
        <h2 style={{fontSize:"40px"}}>Discover Hidden Village Roads</h2>
        <p style={{opacity:0.7}}>
          Explore peaceful and unseen places in Saran
        </p>
      </section>

      {/* Login (RIGHT SIDE FLOAT) */}
      <div style={{
        position:"absolute",
        top:"100px",
        right:"30px",
        width:"250px"
      }}>
        <h4>Login</h4>

        <input 
          placeholder="Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          style={{width:"100%",marginBottom:"10px",padding:"8px"}}
        />

        <input 
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          style={{width:"100%",marginBottom:"10px",padding:"8px"}}
        />

        <button onClick={handleLogin}>Login</button>
        <button onClick={handleSignup} style={{marginLeft:"10px"}}>
          Signup
        </button>
      </div>

      {/* Main Sections */}
      <div style={{padding:"20px", maxWidth:"700px"}}>

        {/* Route */}
        <section style={{marginBottom:"40px"}}>
          <h3>Find a Route</h3>
          <input placeholder="Start" style={{width:"100%",margin:"10px 0",padding:"10px"}} />
          <input placeholder="Destination" style={{width:"100%",margin:"10px 0",padding:"10px"}} />
          <button>Explore Route</button>
        </section>

        {/* Hidden Place */}
        <section style={{marginBottom:"40px"}}>
          <h3>Add Hidden Place</h3>
          <input placeholder="Place Name" style={{width:"100%",margin:"10px 0",padding:"10px"}} />
          <textarea placeholder="Description" style={{width:"100%",margin:"10px 0",padding:"10px"}} />
          <button>Add Place</button>
        </section>

      </div>

      {/* Map (FULL WIDTH + LONG) */}
      <section style={{marginTop:"50px"}}>
        <h3 style={{padding:"20px"}}>Explore Map</h3>
        <iframe
          title="map"
          width="100%"
          height="600"
          style={{border:"none"}}
          src="https://www.google.com/maps?q=Saran,Bihar&output=embed"
        ></iframe>
      </section>

    </div>
  );
}