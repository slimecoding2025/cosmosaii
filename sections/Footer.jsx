// sections/Footer.jsx

import { Rocket, Github, Twitter, Linkedin, Mail } from "lucide-react";

const OWNER = {
  name: "Med Salim Bousmina",
  website: "https://nexora-agency-five.vercel.app/",
  email: "bousminaselim@gmail.com",
};

export default function Footer() {
  const links = {
    product: [
      { label: "Features", href: "#features" },
      { label: "Explore", href: "#explore" },
      { label: "AI Chat", href: "#ai-chat" },
      { label: "How It Works", href: "#how-it-works" },
    ],
    company: [
      { label: "About", href: "#" },
      { label: "Contact", href: "#contact" },
      { label: "Careers", href: "#" },
      { label: "Blog", href: "#" },
    ],
    legal: [
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
      { label: "Security", href: "#" },
    ],
  };

  const socials = [
    { icon: <Github size={18} />, href: "#", label: "GitHub" },
    { icon: <Twitter size={18} />, href: "#", label: "Twitter" },
    { icon: <Linkedin size={18} />, href: "#", label: "LinkedIn" },
    { icon: <Mail size={18} />, href: `mailto:${OWNER.email}`, label: "Email" },
  ];

  return (
    <footer
      style={{
        background: "#000005",
        borderTop: "1px solid rgba(0,255,255,0.08)",
        padding: "80px 32px 40px",
        position: "relative",
      }}
    >
      {/* Top glow */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: 600,
          height: 1,
          background: "linear-gradient(90deg, transparent, #00ffff, transparent)",
          opacity: 0.5,
        }}
      />

      <div style={{ maxWidth: 1300, margin: "0 auto" }}>
        {/* Main footer grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: 48,
            marginBottom: 60,
          }}
        >
          {/* Brand column */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 10,
                  background: "linear-gradient(135deg, #00ffff, #a855f7)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 0 20px rgba(0,255,255,0.3)",
                }}
              >
                <Rocket size={22} color="#000" />
              </div>
              <span
                className="font-orb"
                style={{ fontSize: 20, fontWeight: 900, color: "#fff", letterSpacing: 2 }}
              >
                COSMOS-AI
              </span>
            </div>
            <p
              className="font-raj"
              style={{
                fontSize: 14,
                color: "rgba(232,244,253,0.5)",
                lineHeight: 1.7,
                marginBottom: 24,
                maxWidth: 280,
              }}
            >
              The most advanced AI-powered cosmic exploration platform. Navigate the universe
              with neural intelligence.
            </p>
            {/* Social links */}
            <div style={{ display: "flex", gap: 12 }}>
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="glass"
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 8,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "rgba(232,244,253,0.6)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    transition: "all 0.3s ease",
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links columns */}
          <div>
            <h4
              className="font-orb"
              style={{
                fontSize: 12,
                fontWeight: 700,
                color: "#00ffff",
                letterSpacing: 2,
                marginBottom: 20,
              }}
            >
              PRODUCT
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
              {links.product.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="font-raj"
                    style={{
                      fontSize: 14,
                      color: "rgba(232,244,253,0.5)",
                      textDecoration: "none",
                      transition: "color 0.3s ease",
                    }}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4
              className="font-orb"
              style={{
                fontSize: 12,
                fontWeight: 700,
                color: "#a855f7",
                letterSpacing: 2,
                marginBottom: 20,
              }}
            >
              COMPANY
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
              {links.company.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="font-raj"
                    style={{
                      fontSize: 14,
                      color: "rgba(232,244,253,0.5)",
                      textDecoration: "none",
                      transition: "color 0.3s ease",
                    }}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4
              className="font-orb"
              style={{
                fontSize: 12,
                fontWeight: 700,
                color: "#ff6b35",
                letterSpacing: 2,
                marginBottom: 20,
              }}
            >
              LEGAL
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
              {links.legal.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="font-raj"
                    style={{
                      fontSize: 14,
                      color: "rgba(232,244,253,0.5)",
                      textDecoration: "none",
                      transition: "color 0.3s ease",
                    }}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            paddingTop: 32,
            borderTop: "1px solid rgba(255,255,255,0.06)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 16,
          }}
        >
          <p
            className="font-raj"
            style={{ fontSize: 13, color: "rgba(232,244,253,0.4)" }}
          >
            © {new Date().getFullYear()} COSMOS-AI. All rights reserved.
          </p>
          <p
            className="font-mono"
            style={{ fontSize: 10, letterSpacing: 2, color: "rgba(0,255,255,0.4)" }}
          >
            BUILT BY {OWNER.name.toUpperCase()} — NEXORA AGENCY
          </p>
        </div>
      </div>
    </footer>
  );
}