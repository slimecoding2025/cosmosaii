// sections/ExploreSection.jsx

import { useState, useEffect, useRef } from "react";
import GalaxyScene from "@/three/GalaxyScene";

export default function ExploreSection() {
  const canvasRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [activeObj, setActiveObj] = useState(0);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );
    const el = document.getElementById("explore");
    if (el) obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const objects = [
    { name: "Andromeda Galaxy", dist: "2.537M ly", type: "Spiral Galaxy", color: "#00ffff" },
    { name: "Black Hole M87*", dist: "53.49M ly", type: "Supermassive BH", color: "#a855f7" },
    { name: "Orion Nebula", dist: "1,344 ly", type: "Emission Nebula", color: "#ff6b35" },
    { name: "Kepler-452b", dist: "1,400 ly", type: "Exoplanet", color: "#3b82f6" },
  ];

  return (
    <section
      id="explore"
      style={{
        padding: "120px 0 0",
        position: "relative",
        overflow: "hidden",
        background: "linear-gradient(180deg, #02000d 0%, #000008 100%)",
      }}
    >
      <div
        style={{
          maxWidth: 1300,
          margin: "0 auto",
          padding: "0 32px",
          marginBottom: 60,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            flexWrap: "wrap",
            gap: 24,
          }}
        >
          <div>
            <div className="section-tag">⬡ INTERACTIVE 3D</div>
            <h2
              className="font-orb"
              style={{
                fontSize: "clamp(28px, 4vw, 54px)",
                fontWeight: 900,
                color: "#fff",
              }}
            >
              EXPLORE THE <span className="grad-text">GALAXY</span>
            </h2>
            <p
              className="font-raj"
              style={{
                fontSize: 17,
                color: "rgba(232,244,253,0.5)",
                marginTop: 12,
                maxWidth: 440,
                lineHeight: 1.7,
              }}
            >
              Drag to rotate the galaxy. Zoom with scroll. Navigate to any cosmic landmark in
              real-time 3D.
            </p>
          </div>

          {/* Object cards */}
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            {objects.map((o, i) => (
              <button
                key={o.name}
                onClick={() => setActiveObj(i)}
                className="glass"
                style={{
                  padding: "12px 18px",
                  borderRadius: 8,
                  cursor: "pointer",
                  border: `1px solid ${
                    activeObj === i ? o.color : "rgba(255,255,255,0.08)"
                  }`,
                  background: activeObj === i ? `${o.color}10` : "rgba(255,255,255,0.025)",
                  textAlign: "left",
                  transition: "all 0.3s ease",
                  boxShadow: activeObj === i ? `0 0 20px ${o.color}30` : "none",
                }}
              >
                <div
                  className="font-mono"
                  style={{ fontSize: 8, letterSpacing: 3, color: o.color, marginBottom: 4 }}
                >
                  {o.type}
                </div>
                <div className="font-orb" style={{ fontSize: 12, color: "#fff", fontWeight: 600 }}>
                  {o.name}
                </div>
                <div className="font-raj" style={{ fontSize: 12, color: "rgba(232,244,253,0.45)", marginTop: 2 }}>
                  {o.dist}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Galaxy canvas */}
      <div style={{ position: "relative", height: "65vh", cursor: "grab" }}>
        <canvas ref={canvasRef} className="three-canvas" />
        <GalaxyScene canvasRef={canvasRef} active={visible} />

        {/* Overlay UI */}
        <div style={{ position: "absolute", top: 20, left: 32, zIndex: 5 }}>
          <div
            className="glass-cyan font-mono"
            style={{
              padding: "8px 16px",
              borderRadius: 4,
              fontSize: 10,
              letterSpacing: 2,
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <div
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "#00ffff",
                boxShadow: "0 0 8px #00ffff",
                animation: "pulse-glow 1.5s infinite",
              }}
            />
            LIVE — MILKY WAY VISUALIZATION
          </div>
        </div>

        <div style={{ position: "absolute", bottom: 20, right: 32, zIndex: 5 }}>
          <div
            className="glass font-mono"
            style={{
              padding: "10px 16px",
              borderRadius: 4,
              fontSize: 10,
              color: "rgba(0,255,255,0.6)",
              letterSpacing: 2,
            }}
          >
            DRAG TO ROTATE · SCROLL TO ZOOM
          </div>
        </div>

        {/* Selected object info */}
        <div
          style={{
            position: "absolute",
            bottom: 20,
            left: 32,
            zIndex: 5,
            background: "rgba(0,0,0,0.7)",
            backdropFilter: "blur(20px)",
            border: `1px solid ${objects[activeObj].color}40`,
            padding: "16px 24px",
            borderRadius: 8,
            minWidth: 220,
          }}
        >
          <div
            className="font-mono"
            style={{
              fontSize: 9,
              letterSpacing: 3,
              color: objects[activeObj].color,
              marginBottom: 8,
            }}
          >
            SELECTED OBJECT
          </div>
          <div
            className="font-orb"
            style={{ fontSize: 16, color: "#fff", fontWeight: 700, marginBottom: 4 }}
          >
            {objects[activeObj].name}
          </div>
          <div className="font-raj" style={{ fontSize: 13, color: "rgba(232,244,253,0.5)" }}>
            Distance: {objects[activeObj].dist}
          </div>
          <div className="font-raj" style={{ fontSize: 13, color: "rgba(232,244,253,0.5)" }}>
            Type: {objects[activeObj].type}
          </div>
        </div>
      </div>
    </section>
  );
}