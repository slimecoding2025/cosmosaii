// components/Divider.jsx

export default function Divider({ type = "stars" }) {
  if (type === "stars") {
    return (
      <div
        style={{
          height: 60,
          position: "relative",
          overflow: "hidden",
          background: "transparent",
        }}
      >
        {/* Star field */}
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1200 60"
          preserveAspectRatio="xMidYMid slice"
          style={{ position: "absolute", top: 0, left: 0 }}
        >
          <defs>
            <linearGradient id="div-grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor="#00ffff" stopOpacity="0.6" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
          <line
            x1="0"
            y1="30"
            x2="1200"
            y2="30"
            stroke="url(#div-grad)"
            strokeWidth="1"
          />
          {/* Stars */}
          {[...Array(12)].map((_, i) => (
            <circle
              key={i}
              cx={100 * i + 50}
              cy={30}
              r={Math.random() * 1.5 + 0.5}
              fill="#fff"
              opacity={Math.random() * 0.6 + 0.2}
            />
          ))}
        </svg>
      </div>
    );
  }

  if (type === "wave") {
    return (
      <div
        style={{
          height: 80,
          background: "transparent",
          overflow: "hidden",
        }}
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          style={{ position: "absolute", width: "100%", height: "100%" }}
        >
          <path
            d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,40 1440,40 L1440,80 L0,80 Z"
            fill="url(#wave-grad)"
          />
          <defs>
            <linearGradient id="wave-grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#000008" />
              <stop offset="50%" stopColor="#0a0a1a" />
              <stop offset="100%" stopColor="#000008" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    );
  }

  if (type === "glow") {
    return (
      <div
        style={{
          height: 2,
          background: "linear-gradient(90deg, transparent, #00ffff, transparent)",
          opacity: 0.3,
          margin: "40px 0",
        }}
      />
    );
  }

  return null;
}