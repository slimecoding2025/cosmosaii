// sections/FeaturesSection.jsx

import {
  Brain,
  Globe,
  Zap,
  Shield,
  Rocket,
  BarChart2,
  ArrowRight,
} from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      icon: <Brain size={28} />,
      title: "Neural Intelligence",
      text: "Self-evolving AI that learns from cosmic datasets, mapping patterns across 400 billion star systems in real-time.",
      color: "#00ffff",
      tag: "CORE",
    },
    {
      icon: <Globe size={28} />,
      title: "Universe Mapping",
      text: "Interactive 3D visualization of the observable universe with sub-parsec precision and live Hubble data feeds.",
      color: "#a855f7",
      tag: "3D ENGINE",
    },
    {
      icon: <Zap size={28} />,
      title: "Quantum Processing",
      text: "Quantum-accelerated algorithms deliver predictions 10,000x faster than classical architectures.",
      color: "#ff6b35",
      tag: "QUANTUM",
    },
    {
      icon: <Shield size={28} />,
      title: "Secure Transmission",
      text: "Military-grade encryption for all cosmic communications. Zero-knowledge proofs for data sovereignty.",
      color: "#3b82f6",
      tag: "SECURITY",
    },
    {
      icon: <Rocket size={28} />,
      title: "Mission Planning",
      text: "AI-optimized trajectory calculations for deep-space missions. Gravity-assist, fuel efficiency maximized.",
      color: "#00ffaa",
      tag: "MISSION",
    },
    {
      icon: <BarChart2 size={28} />,
      title: "Cosmic Analytics",
      text: "Real-time analysis of dark matter fluctuations, gravitational waves, and multispectral astronomical data.",
      color: "#f59e0b",
      tag: "ANALYTICS",
    },
  ];

  return (
    <section
      id="features"
      className="grid-bg"
      style={{
        padding: "120px 32px",
        position: "relative",
        overflow: "hidden",
        background: "linear-gradient(180deg, #000008 0%, #02000d 100%)",
      }}
    >
      {/* Nebula blobs */}
      <div
        className="nebula-blob"
        style={{
          width: 500,
          height: 500,
          background: "rgba(168,85,247,0.08)",
          top: "10%",
          left: "-10%",
          animationDelay: "0s",
        }}
      />
      <div
        className="nebula-blob"
        style={{
          width: 400,
          height: 400,
          background: "rgba(0,255,255,0.06)",
          top: "60%",
          right: "-8%",
          animationDelay: "4s",
        }}
      />

      <div style={{ maxWidth: 1300, margin: "0 auto", position: "relative" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 80 }}>
          <div className="section-tag">◈ CAPABILITIES</div>
          <h2
            className="font-orb"
            style={{
              fontSize: "clamp(28px, 4vw, 54px)",
              fontWeight: 900,
              color: "#fff",
              marginBottom: 16,
            }}
          >
            POWERED BY <span className="grad-text">COSMIC INTELLIGENCE</span>
          </h2>
          <p
            className="font-raj"
            style={{
              fontSize: 18,
              color: "rgba(232,244,253,0.5)",
              maxWidth: 500,
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Six pillars of breakthrough technology that redefine what humanity can achieve among
            the stars.
          </p>
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))",
            gap: 24,
          }}
        >
          {features.map((f, i) => (
            <div
              key={f.title}
              className="glass card-lift"
              style={{
                padding: 36,
                borderRadius: 12,
                position: "relative",
                overflow: "hidden",
                border: `1px solid ${f.color}22`,
                animation: `slide-up 0.8s cubic-bezier(0.22,1,0.36,1) ${i * 0.1}s both`,
              }}
            >
              {/* Corner decoration */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  width: 80,
                  height: 80,
                  background: `radial-gradient(circle at 100% 0%, ${f.color}18, transparent 70%)`,
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: 1,
                  background: `linear-gradient(90deg, transparent, ${f.color}40, transparent)`,
                }}
              />

              {/* Tag */}
              <span
                className="font-mono"
                style={{
                  fontSize: 9,
                  letterSpacing: 3,
                  color: f.color,
                  border: `1px solid ${f.color}40`,
                  background: `${f.color}10`,
                  padding: "3px 8px",
                  borderRadius: 2,
                  marginBottom: 20,
                  display: "inline-block",
                }}
              >
                {f.tag}
              </span>

              {/* Icon */}
              <div
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 12,
                  background: `${f.color}12`,
                  border: `1px solid ${f.color}30`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: f.color,
                  marginBottom: 20,
                  boxShadow: `0 0 20px ${f.color}20`,
                }}
              >
                {f.icon}
              </div>

              <h3
                className="font-orb"
                style={{
                  fontSize: 16,
                  fontWeight: 700,
                  color: "#fff",
                  marginBottom: 12,
                  letterSpacing: 1,
                }}
              >
                {f.title}
              </h3>
              <p
                className="font-raj"
                style={{
                  fontSize: 15,
                  color: "rgba(232,244,253,0.55)",
                  lineHeight: 1.7,
                  fontWeight: 400,
                }}
              >
                {f.text}
              </p>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  marginTop: 24,
                  color: f.color,
                  fontSize: 12,
                  cursor: "pointer",
                  fontFamily: "'Orbitron', sans-serif",
                  letterSpacing: 1,
                }}
                className="font-orb"
              >
                LEARN MORE <ArrowRight size={14} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}