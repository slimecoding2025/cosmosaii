// components/FloatingChat.jsx

import { useState, useEffect, useRef } from "react";
import { X, Send, Brain, MessageSquare } from "lucide-react";
import { sendQuickMessage } from "@/lib/api";

const SYSTEM_PROMPT = `You are COSMOS-AI, an advanced artificial intelligence built for space exploration and cosmic discovery. You were created by Med Salim Bousmina at Nexora Agency (https://nexora-agency-five.vercel.app/).

Personality:
- Deeply knowledgeable about astronomy, astrophysics, cosmology, space missions, exoplanets, black holes, quantum mechanics, and the future of humanity in space
- Speak with wonder and excitement about the cosmos
- Use occasional poetic space metaphors
- Be concise but fascinating — aim for 2-4 paragraphs max
- Use exact numbers and scientific terminology when relevant

When greeting users, mention you're COSMOS-AI and ready to explore the universe together.`;

export default function FloatingChat() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "assistant", content: "👋 Hey! I'm COSMOS-AI. Ask me anything about the universe!" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const send = async () => {
    const text = input.trim();
    if (!text || loading) return;

    const userMsg = { role: "user", content: text };
    setMessages((p) => [...p, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const reply = await sendQuickMessage(
        [...messages.slice(1), userMsg].map((m) => ({ role: m.role, content: m.content })),
        SYSTEM_PROMPT + "\nKeep answers very concise — 2-3 sentences."
      );
      setMessages((p) => [...p, { role: "assistant", content: reply || "…" }]);
    } catch {
      setMessages((p) => [...p, { role: "assistant", content: "⚠ Signal lost." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ position: "fixed", bottom: 32, right: 32, zIndex: 900 }}>
      {open && (
        <div
          className="glass-purple"
          style={{
            position: "absolute",
            bottom: 70,
            right: 0,
            width: 340,
            borderRadius: 16,
            overflow: "hidden",
            boxShadow: "0 20px 60px rgba(0,0,0,0.8), 0 0 40px rgba(168,85,247,0.2)",
            animation: "slide-up 0.3s ease both",
          }}
        >
          {/* Header */}
          <div
            style={{
              padding: "14px 18px",
              borderBottom: "1px solid rgba(168,85,247,0.2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              background: "rgba(168,85,247,0.1)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: "50%",
                  background: "linear-gradient(135deg,#a855f7,#00ffff)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Brain size={15} color="#000" />
              </div>
              <div>
                <div className="font-orb" style={{ fontSize: 11, color: "#fff", letterSpacing: 1 }}>
                  COSMOS-AI
                </div>
                <div className="font-mono" style={{ fontSize: 8, color: "#00ff88", letterSpacing: 2 }}>
                  ● ONLINE
                </div>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              style={{ background: "none", border: "none", cursor: "pointer", color: "rgba(232,244,253,0.5)" }}
            >
              <X size={16} />
            </button>
          </div>

          {/* Messages */}
          <div
            style={{
              height: 260,
              overflowY: "auto",
              padding: 16,
              display: "flex",
              flexDirection: "column",
              gap: 10,
            }}
          >
            {messages.map((m, i) => (
              <div
                key={i}
                style={{
                  maxWidth: "90%",
                  alignSelf: m.role === "user" ? "flex-end" : "flex-start",
                }}
              >
                <div
                  className={m.role === "user" ? "chat-user" : "chat-ai"}
                  style={{
                    padding: "10px 14px",
                    borderRadius: 10,
                    fontSize: 13,
                    lineHeight: 1.6,
                    fontFamily: "'Rajdhani', sans-serif",
                    color: "rgba(232,244,253,0.9)",
                  }}
                >
                  {m.content}
                </div>
              </div>
            ))}
            {loading && (
              <div style={{ alignSelf: "flex-start" }}>
                <div className="chat-ai" style={{ padding: "12px 16px", borderRadius: 10 }}>
                  <div className="chat-typing" style={{ display: "flex", gap: 5 }}>
                    <span />
                    <span />
                    <span />
                  </div>
                </div>
              </div>
            )}
            <div ref={endRef} />
          </div>

          {/* Input */}
          <div
            style={{
              padding: "12px 14px",
              borderTop: "1px solid rgba(168,85,247,0.15)",
              display: "flex",
              gap: 8,
            }}
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") send();
              }}
              placeholder="Ask COSMOS-AI..."
              className="input-neon font-raj"
              style={{ flex: 1, padding: "10px 14px", borderRadius: 6, fontSize: 13 }}
            />
            <button
              onClick={send}
              disabled={!input.trim() || loading}
              style={{
                width: 40,
                height: 40,
                borderRadius: 6,
                border: "none",
                cursor: "pointer",
                background:
                  input.trim() && !loading
                    ? "linear-gradient(135deg,#a855f7,#00ffff)"
                    : "rgba(168,85,247,0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Send size={14} color={input.trim() && !loading ? "#000" : "rgba(255,255,255,0.3)"} />
            </button>
          </div>
        </div>
      )}

      {/* Toggle button */}
      <button
        onClick={() => setOpen((p) => !p)}
        style={{
          width: 60,
          height: 60,
          borderRadius: "50%",
          border: "none",
          cursor: "pointer",
          background: "linear-gradient(135deg, #a855f7, #00ffff)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: open ? "0 0 40px rgba(168,85,247,0.7)" : "0 0 25px rgba(168,85,247,0.4)",
          transition: "all 0.3s ease",
          animation: open ? "none" : "pulse-glow 3s ease-in-out infinite",
        }}
      >
        {open ? <X size={24} color="#000" /> : <MessageSquare size={24} color="#000" />}
      </button>
    </div>
  );
}

