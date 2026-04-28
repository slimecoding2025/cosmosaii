// components/AmbientParticles.jsx

import { useMemo } from "react";

export default function AmbientParticles() {
  const particles = useMemo(
    () =>
      Array.from({ length: 20 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        delay: `${Math.random() * 8}s`,
        dur: `${6 + Math.random() * 8}s`,
        size: `${1 + Math.random() * 3}px`,
        color: Math.random() > 0.5 ? "rgba(0,255,255,0.6)" : "rgba(168,85,247,0.6)",
      })),
    []
  );

  return (
    <div style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 500 }}>
      {particles.map((p) => (
        <div
          key={p.id}
          style={{
            position: "absolute",
            bottom: "-10px",
            left: p.left,
            width: p.size,
            height: p.size,
            borderRadius: "50%",
            background: p.color,
            boxShadow: `0 0 6px ${p.color}`,
            animation: `particle-up ${p.dur} ${p.delay} ease-in infinite`,
          }}
        />
      ))}
    </div>
  );
}