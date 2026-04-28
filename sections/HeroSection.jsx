// sections/HeroSection.jsx

import { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import HeroScene from "@/three/HeroScene";

export default function HeroSection() {
  const canvasRef = useRef(null);
  const [typeIdx, setTypeIdx] = useState(0);
  const [typeText, setTypeText] = useState("");
  const [typing, setTyping] = useState(true);

  const titles = [
    "EXPLORE THE COSMOS",
    "BEYOND IMAGINATION",
    "AI-POWERED UNIVERSE",
    "THE FUTURE IS NOW",
  ];

  useEffect(() => {
    let timeout;
    const full = titles[typeIdx];
    if (typing) {
      if (typeText.length < full.length) {
        timeout = setTimeout(() => setTypeText(full.slice(0, typeText.length + 1)), 60);
      } else {
        timeout = setTimeout(() => setTyping(false), 2400);
      }
    } else {
      if (typeText.length > 0) {
        timeout = setTimeout(() => setTypeText(typeText.slice(0, -1)), 35);
      } else {
        setTypeIdx((p) => (p + 1) % titles.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [typeText, typing, typeIdx, titles]);

  return (
    <section
      id="home"
      style={{
        position: "relative",
        height: "100vh",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* Three.js canvas */}
      <canvas ref={canvasRef} className="three-canvas" style={{ zIndex: 0 }} />
      <HeroScene canvasRef={canvasRef} />

      {/* Gradient overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          background:
            "radial-gradient(ellipse 70% 60% at 60% 60%, transparent 30%, rgba(0,0,8,0.6) 100%)",
          pointerEvents: "none",
        }}
      />

      {/* Bottom fade */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 200,
          zIndex: 2,
          background: "linear-gradient(transparent, #000008)",
          pointerEvents: "none",
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 3,
          maxWidth: 1300,
          margin: "0 auto",
          padding: "0 32px",
          paddingTop: 80,
        }}
      >
        {/* Tag line */}
        <div className="anim-slide-up" style={{ marginBottom: 20 }}>
          <span className="font-mono section-tag">⬡ COSMOS-AI v3.0 — ACTIVE</span>
        </div>

        {/* Main title */}
        <div className="anim-slide-up delay-1" style={{ marginBottom: 12 }}>
          <h1
            className="font-orb"
            style={{
              fontSize: "clamp(38px, 7vw, 96px)",
              fontWeight: 900,
              lineHeight: 1.0,
              letterSpacing: "0.02em",
              color: "#fff",
              textShadow: "0 0 60px rgba(0,255,255,0.3)",
            }}
          >
            <span className="grad-text">THE INFINITE</span>
            <br />
            <span style={{ color: "#fff" }}>FRONTIER OF</span>
            <br />
            <span className="grad-text-c glow-c" style={{ position: "relative" }}>
              {typeText}
              <span
                style={{
                  borderRight: "3px solid #00ffff",
                  animation: "typing-cursor 0.8s infinite",
                  marginLeft: 2,
                  display: "inline-block",
                }}
              />
            </span>
          </h1>
        </div>

        {/* Subtitle */}
        <p
          className="font-raj anim-slide-up delay-2"
          style={{
            fontSize: 20,
            color: "rgba(232,244,253,0.6)",
            maxWidth: 580,
            lineHeight: 1.7,
            marginBottom: 48,
            fontWeight: 400,
          }}
        >
          Harness the power of artificial intelligence to navigate galaxies, decode cosmic
          phenomena, and chart humanity's course beyond the stars.
        </p>

        {/* CTAs */}
        <div
          className="anim-slide-up delay-3"
          style={{ display: "flex", gap: 16, flexWrap: "wrap" }}
        >
          <button
            className="btn-solid font-orb"
            onClick={() =>
              document.getElementById("ai-chat")?.scrollIntoView({ behavior: "smooth" })
            }
            style={{ padding: "16px 36px", borderRadius: 4, fontSize: 12, letterSpacing: 2 }}
          >
            ◉ LAUNCH AI
          </button>
          <button
            className="btn-neon font-orb"
            onClick={() =>
              document.getElementById("explore")?.scrollIntoView({ behavior: "smooth" })
            }
            style={{ padding: "16px 36px", borderRadius: 4, fontSize: 12 }}
          >
            EXPLORE UNIVERSE →
          </button>
        </div>

        {/* Stats row */}
        <div
          className="anim-slide-up delay-4"
          style={{ display: "flex", gap: 48, marginTop: 64, flexWrap: "wrap" }}
        >
          {[
            ["2T+", "STAR SYSTEMS"],
            ["∞", "POSSIBILITIES"],
            ["0.001ms", "AI RESPONSE"],
            ["99.9%", "UPTIME"],
          ].map(([num, label]) => (
            <div key={label}>
              <div
                className="font-orb glow-c"
                style={{ fontSize: 28, fontWeight: 900, color: "#00ffff" }}
              >
                {num}
              </div>
              <div
                className="font-mono"
                style={{
                  fontSize: 10,
                  letterSpacing: 3,
                  color: "rgba(232,244,253,0.4)",
                  marginTop: 4,
                }}
              >
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: 36,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
          animation: "float 2.5s ease-in-out infinite",
          cursor: "pointer",
        }}
        onClick={() =>
          document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })
        }
      >
        <span
          className="font-mono"
          style={{ fontSize: 9, letterSpacing: 4, color: "rgba(0,255,255,0.5)" }}
        >
          SCROLL
        </span>
        <ChevronDown color="#00ffff" size={20} style={{ opacity: 0.7 }} />
      </div>
    </section>
  );
}