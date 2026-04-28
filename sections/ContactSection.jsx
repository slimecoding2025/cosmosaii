// sections/ContactSection.jsx

import { useState } from "react";
import { Send, Mail, MapPin, Phone } from "lucide-react";

const OWNER = {
  name: "Med Salim Bousmina",
  website: "https://nexora-agency-five.vercel.app/",
  email: "bousminaselim@gmail.com",
  phone: "+216 27870862",
};

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSending(true);
    await new Promise((r) => setTimeout(r, 1500));
    setSending(false);
    setSent(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section
      id="contact"
      style={{
        padding: "120px 32px",
        background: "linear-gradient(180deg, #000008 0%, #03001a 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* BG orbs */}
      <div
        className="nebula-blob"
        style={{
          width: 500,
          height: 500,
          background: "rgba(0,255,255,0.05)",
          top: "30%",
          left: "-15%",
          animationDelay: "3s",
        }}
      />
      <div
        className="nebula-blob"
        style={{
          width: 400,
          height: 400,
          background: "rgba(168,85,247,0.06)",
          bottom: "20%",
          right: "-10%",
          animationDelay: "5s",
        }}
      />

      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
            gap: 64,
            alignItems: "start",
          }}
        >
          {/* Left side - Info */}
          <div>
            <div className="section-tag">◈ TRANSMISSION</div>
            <h2
              className="font-orb"
              style={{
                fontSize: "clamp(28px, 4vw, 48px)",
                fontWeight: 900,
                color: "#fff",
                marginBottom: 16,
                marginTop: 12,
              }}
            >
              REACH <span className="grad-text">COSMOS-AI</span>
            </h2>
            <p
              className="font-raj"
              style={{
                fontSize: 17,
                color: "rgba(232,244,253,0.5)",
                lineHeight: 1.7,
                marginBottom: 40,
                maxWidth: 400,
              }}
            >
              Have questions about the cosmos? Want to collaborate on humanity's journey to the
              stars? Send us a transmission.
            </p>

            {/* Contact info */}
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              <a
                href={`mailto:${OWNER.email}`}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                <div
                  className="glass-cyan"
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: 10,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#00ffff",
                  }}
                >
                  <Mail size={22} />
                </div>
                <div>
                  <div
                    className="font-mono"
                    style={{ fontSize: 10, letterSpacing: 2, color: "rgba(0,255,255,0.6)" }}
                  >
                    EMAIL
                  </div>
                  <div className="font-raj" style={{ fontSize: 15, color: "#fff" }}>
                    {OWNER.email}
                  </div>
                </div>
              </a>

              <a
                href={`tel:${OWNER.phone}`}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                <div
                  className="glass-purple"
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: 10,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#a855f7",
                  }}
                >
                  <Phone size={22} />
                </div>
                <div>
                  <div
                    className="font-mono"
                    style={{ fontSize: 10, letterSpacing: 2, color: "rgba(168,85,247,0.6)" }}
                  >
                    PHONE
                  </div>
                  <div className="font-raj" style={{ fontSize: 15, color: "#fff" }}>
                    {OWNER.phone}
                  </div>
                </div>
              </a>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                }}
              >
                <div
                  className="glass"
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: 10,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#ff6b35",
                  }}
                >
                  <MapPin size={22} />
                </div>
                <div>
                  <div
                    className="font-mono"
                    style={{ fontSize: 10, letterSpacing: 2, color: "rgba(255,107,53,0.6)" }}
                  >
                    LOCATION
                  </div>
                  <div className="font-raj" style={{ fontSize: 15, color: "#fff" }}>
                    Tunisia, Earth
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Form */}
          <div>
            <form onSubmit={handleSubmit}>
              <div
                className="glass-purple"
                style={{
                  padding: 40,
                  borderRadius: 16,
                  border: "1px solid rgba(168,85,247,0.2)",
                }}
              >
                <h3
                  className="font-orb"
                  style={{ fontSize: 18, color: "#fff", marginBottom: 28, letterSpacing: 1 }}
                >
                  SEND MESSAGE
                </h3>

                <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                  <div>
                    <label
                      className="font-mono"
                      style={{
                        fontSize: 10,
                        letterSpacing: 2,
                        color: "rgba(168,85,247,0.7)",
                        display: "block",
                        marginBottom: 8,
                      }}
                    >
                      NAME
                    </label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="input-neon font-raj"
                      style={{
                        width: "100%",
                        padding: "14px 18px",
                        borderRadius: 8,
                        fontSize: 15,
                      }}
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label
                      className="font-mono"
                      style={{
                        fontSize: 10,
                        letterSpacing: 2,
                        color: "rgba(168,85,247,0.7)",
                        display: "block",
                        marginBottom: 8,
                      }}
                    >
                      EMAIL
                    </label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="input-neon font-raj"
                      style={{
                        width: "100%",
                        padding: "14px 18px",
                        borderRadius: 8,
                        fontSize: 15,
                      }}
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label
                      className="font-mono"
                      style={{
                        fontSize: 10,
                        letterSpacing: 2,
                        color: "rgba(168,85,247,0.7)",
                        display: "block",
                        marginBottom: 8,
                      }}
                    >
                      MESSAGE
                    </label>
                    <textarea
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="input-neon font-raj"
                      style={{
                        width: "100%",
                        padding: "14px 18px",
                        borderRadius: 8,
                        fontSize: 15,
                        minHeight: 140,
                        resize: "vertical",
                      }}
                      placeholder="Your message about cosmic exploration..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={sending || !form.name || !form.email || !form.message}
                    className="btn-solid font-orb"
                    style={{
                      padding: "16px 32px",
                      borderRadius: 8,
                      fontSize: 12,
                      letterSpacing: 2,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 10,
                      cursor: sending ? "not-allowed" : "pointer",
                      opacity: sending ? 0.7 : 1,
                    }}
                  >
                    {sending ? (
                      <>
                        <span
                          className="loading-spinner"
                          style={{
                            width: 16,
                            height: 16,
                            border: "2px solid transparent",
                            borderTopColor: "#000",
                            borderRadius: "50%",
                            animation: "spin 0.8s linear infinite",
                          }}
                        />
                        TRANSMITTING...
                      </>
                    ) : sent ? (
                      <>
                        <span style={{ color: "#00ff88" }}>✓</span> SENT
                      </>
                    ) : (
                      <>
                        SEND TRANSMISSION <Send size={16} />
                      </>
                    )}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}