import { useState } from "react";

export default function App() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [showPlaces, setShowPlaces] = useState(false);

  // Dummy hidden places
  const hiddenPlaces = [
    {
      name: "Peaceful River Spot",
      desc: "Calm river side perfect for relaxing",
    },
    {
      name: "Green Village Road",
      desc: "Beautiful road with trees and sunset view",
    },
    {
      name: "Photography Spot",
      desc: "Best place for photos and reels",
    },
  ];

  return (
    <div style={{ fontFamily: "Arial", color: "white" }}>
      
      {/* 🎥 BACKGROUND VIDEO */}
      <div style={{
        position: "relative",
        height: "100vh",
        overflow: "hidden"
      }}>
        
        <video
          autoPlay
          loop
          muted
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            objectFit: "cover"
          }}
          src="https://www.w3schools.com/howto/rain.mp4"
        />

        {/* Overlay */}
        <div style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          background: "rgba(0,0,0,0.6)"
        }} />

        {/* HERO CONTENT */}
        <div style={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          top: "30%"
        }}>
          <h1 style={{ fontSize: "40px" }}>🚗 RoadBliss</h1>
          <h2>Discover Hidden Village Roads</h2>

          {/* FROM TO */}
          <div style={{ marginTop: "20px" }}>
            <input
              placeholder="From"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              style={{ padding: "10px", marginRight: "10px" }}
            />

            <input
              placeholder="To"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              style={{ padding: "10px", marginRight: "10px" }}
            />

            <button
              onClick={() => setShowPlaces(true)}
              style={{
                padding: "10px 20px",
                background: "#3b82f6",
                color: "white",
                border: "none",
                cursor: "pointer"
              }}
            >
              Find Route
            </button>
          </div>
        </div>
      </div>

      {/* 🗺️ MAP SECTION */}
      <div style={{ padding: "20px", background: "#0f172a" }}>
        <h2 style={{ textAlign: "center" }}>Route Map</h2>

        <iframe
          title="map"
          width="100%"
          height="500"
          style={{ borderRadius: "10px", border: "none" }}
          src={`https://www.google.com/maps?q=${from}+to+${to}&output=embed`}
        ></iframe>
      </div>

      {/* 📍 HIDDEN PLACES */}
      {showPlaces && (
        <div style={{ padding: "20px", background: "#020617" }}>
          <h2 style={{ textAlign: "center" }}>
            Hidden Places on Your Route
          </h2>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "20px",
            marginTop: "20px"
          }}>
            {hiddenPlaces.map((place, index) => (
              <div
                key={index}
                style={{
                  padding: "20px",
                  borderRadius: "15px",
                  background: "rgba(255,255,255,0.05)",
                  backdropFilter: "blur(10px)"
                }}
              >
                <h3>{place.name}</h3>
                <p>{place.desc}</p>

                <button style={{
                  marginTop: "10px",
                  padding: "8px",
                  background: "#10b981",
                  border: "none",
                  color: "white",
                  cursor: "pointer"
                }}>
                  View on Map
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
}