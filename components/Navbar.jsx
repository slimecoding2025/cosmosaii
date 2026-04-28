// components/Navbar.jsx

import { useState, useEffect } from "react";
import { Menu } from "lucide-react";

export default function Navbar({ activeSection }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = ["home", "features", "explore", "ai-chat", "contact"];

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: scrolled ? "rgba(0,0,8,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(30px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(0,255,255,0.1)" : "none",
        transition: "all 0.4s ease",
        padding: "0 24px",
      }}
    >
      <div
        style={{
          maxWidth: 1300,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 68,
        }}
      >
        {/* Logo */}
        <div
          style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }}
          onClick={() => scrollTo("home")}
        >
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: "50%",
              background: "linear-gradient(135deg,#00ffff,#a855f7)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 0 20px rgba(0,255,255,0.5)",
              animation: "spin-slow 10s linear infinite",
            }}
          >
            <div
              style={{
                width: 14,
                height: 14,
                borderRadius: "50%",
                background: "#000",
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 2,
                  borderRadius: "50%",
                  background: "linear-gradient(135deg,#00ffff,#a855f7)",
                }}
              />
            </div>
          </div>
          <span className="font-orb glow-c" style={{ fontSize: 20, fontWeight: 900, letterSpacing: 2 }}>
            COSMOS
          </span>
          <span
            className="font-orb glow-p"
            style={{ fontSize: 20, fontWeight: 400, letterSpacing: 2, color: "#a855f7" }}
          >
            ·AI
          </span>
        </div>

        {/* Desktop nav links */}
        <div style={{ display: "flex", alignItems: "center", gap: 6 }} className="hidden-mobile">
          {links.map((l) => (
            <button
              key={l}
              onClick={() => scrollTo(l)}
              className="font-orb"
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                color: activeSection === l ? "#00ffff" : "rgba(232,244,253,0.55)",
                fontSize: 11,
                letterSpacing: 2,
                textTransform: "uppercase",
                padding: "8px 14px",
                borderRadius: 4,
                transition: "color 0.3s, background 0.3s",
                background: activeSection === l ? "rgba(0,255,255,0.07)" : "none",
                borderBottom: activeSection === l ? "1px solid #00ffff" : "1px solid transparent",
              }}
            >
              {l.replace("-", " ")}
            </button>
          ))}
        </div>

        {/* CTA */}
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <button
            className="btn-neon font-orb"
            onClick={() => scrollTo("ai-chat")}
            style={{ padding: "9px 22px", borderRadius: 4, fontSize: 11, fontWeight: 600 }}
          >
            Launch AI
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="mobile-menu-btn"
            style={{ background: "none", border: "none", cursor: "pointer", color: "#00ffff", display: "none" }}
          >
            <Menu size={22} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="glass" style={{ padding: "16px 24px", borderTop: "1px solid rgba(0,255,255,0.1)" }}>
          {links.map((l) => (
            <button
              key={l}
              onClick={() => scrollTo(l)}
              className="font-orb"
              style={{
                display: "block",
                width: "100%",
                textAlign: "left",
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "#00ffff",
                fontSize: 12,
                letterSpacing: 2,
                textTransform: "uppercase",
                padding: "10px 0",
                borderBottom: "1px solid rgba(0,255,255,0.05)",
              }}
            >
              {l.replace("-", " ")}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}