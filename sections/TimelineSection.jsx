// sections/TimelineSection.jsx

import { useState, useEffect } from "react";
import { Rocket, Cpu, Globe, Zap, ChevronRight } from "lucide-react";

export default function TimelineSection() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((p) => (p + 1) % 5);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const steps = [
    {
      icon: <Rocket size={24} />,
      title: "Launch Query",
      desc: "Your cosmic question enters the neural network through our secure quantum channel.",
      color: "#00ffff",
      time: "0.001ms",
    },
    {
      icon: <Cpu size={24} />,
      title: "Neural Processing",
      desc: "Advanced AI models analyze your query against 400 billion star systems of data.",
      color: "#a855f7",
      time: "0.3ms",
    },
    {
      icon: <Globe size={24} />,
      title: "Universe Mapping",
      desc: "Cross-references with real-time Hubble data feeds and gravitational wave detectors.",
      color: "#ff6b35",
      time: "1.2ms",
    },
    {
      icon: <Zap size={24} />,
      title: "Response Generation",
      desc: "Synthesizes findings into actionable insights about any cosmic phenomenon.",
      color: "#3b82f6",
      time: "2.8ms",
    },
    {
      title: "Transmission",
      desc: "Encrypted response delivered directly to your neural interface.",
      color: "#00ffaa",
      time: "4.0ms",
      final: true,
    },
  ];

  return (
    <section
      id="how-it-works"
      style={{
        padding: "120px 32px",
        background: "#000008",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Grid lines */}
      <div
        className="grid-bg"
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.4,
        }}
      />

      <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 80 }}>
          <div className="section-tag">◈ NEURAL ARCHITECTURE</div>
          <h2
            className="font-orb"
            style={{
              fontSize: "clamp(28px, 4vw, 54px)",
              fontWeight: 900,
              color: "#fff",
              marginBottom: 16,
            }}
          >
            HOW <span className="grad-text">COSMOS-AI</span> WORKS
          </h2>
          <p
            className="font-raj"
            style={{
              fontSize: 18,
              color: "rgba(232,244,253,0.5)",
              maxWidth: 450,
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            From your question to cosmic answer in under 5 milliseconds. Here's the journey.
          </p>
        </div>

        {/* Timeline */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            position: "relative",
            gap: 16,
            flexWrap: "wrap",
          }}
        >
          {/* Progress line */}
          <div
            style={{
              position: "absolute",
              top: 40,
              left: 60,
              right: 60,
              height: 2,
              background: "rgba(255,255,255,0.08)",
              zIndex: 0,
            }}
          >
            <div
              style={{
                width: `${(active / (steps.length - 1)) * 100}%`,
                height: "100%",
                background: "linear-gradient(90deg, #00ffff, #a855f7, #ff6b35)",
                transition: "width 0.8s cubic-bezier(0.22,1,0.36,1)",
                boxShadow: "0 0 20px rgba(0,255,255,0.5)",
              }}
            />
          </div>

          {steps.map((step, i) => (
            <div
              key={i}
              style={{
                flex: 1,
                minWidth: 180,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                position: "relative",
                zIndex: 1,
              }}
            >
              {/* Icon circle */}
              <div
                onClick={() => setActive(i)}
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: "50%",
                  background:
                    active >= i
                      ? `linear-gradient(135deg, ${step.color}, ${step.color}88)`
                      : "rgba(255,255,255,0.05)",
                  border: `2px solid ${active >= i ? step.color : "rgba(255,255,255,0.1)"}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: active >= i ? "#000" : "rgba(255,255,255,0.3)",
                  cursor: "pointer",
                  transition: "all 0.5s cubic-bezier(0.22,1,0.36,1)",
                  boxShadow:
                    active >= i
                      ? `0 0 30px ${step.color}50, inset 0 0 20px rgba(255,255,255,0.2)`
                      : "none",
                  marginBottom: 24,
                }}
              >
                {step.icon || (
                  <ChevronRight size={24} color={active >= i ? "#000" : "rgba(255,255,255,0.3)"} />
                )}
              </div>

              {/* Content */}
              <div
                style={{
                  textAlign: "center",
                  opacity: active >= i ? 1 : 0.4,
                  transform: active >= i ? "translateY(0)" : "translateY(10px)",
                  transition: "all 0.5s ease",
                }}
              >
                <div
                  className="font-mono"
                  style={{
                    fontSize: 9,
                    letterSpacing: 3,
                    color: step.color,
                    marginBottom: 8,
                  }}
                >
                  STEP {i + 1}
                </div>
                <h3
                  className="font-orb"
                  style={{
                    fontSize: 14,
                    fontWeight: 700,
                    color: "#fff",
                    marginBottom: 8,
                    letterSpacing: 1,
                  }}
                >
                  {step.title}
                </h3>
                <p
                  className="font-raj"
                  style={{
                    fontSize: 13,
                    color: "rgba(232,244,253,0.5)",
                    lineHeight: 1.6,
                    maxWidth: 180,
                    margin: "0 auto",
                  }}
                >
                  {step.desc}
                </p>
                {step.time && (
                  <div
                    className="font-mono"
                    style={{
                      fontSize: 11,
                      color: step.color,
                      marginTop: 12,
                      letterSpacing: 2,
                    }}
                  >
                    ⚡ {step.time}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Stats bar */}
        <div
          className="glass"
          style={{
            marginTop: 80,
            padding: "32px 48px",
            borderRadius: 12,
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
            gap: 32,
            border: "1px solid rgba(0,255,255,0.1)",
          }}
        >
          {[
            ["5ms", "Avg Response"],
            ["99.9%", "Uptime"],
            ["400B+", "Star Systems"],
            ["24/7", "Neural Active"],
          ].map(([val, label]) => (
            <div key={label} style={{ textAlign: "center" }}>
              <div
                className="font-orb glow-c"
                style={{ fontSize: 32, fontWeight: 900, color: "#00ffff" }}
              >
                {val}
              </div>
              <div
                className="font-mono"
                style={{ fontSize: 10, letterSpacing: 3, color: "rgba(232,244,253,0.4)" }}
              >
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}