// sections/AIChatSection.jsx

import { useState, useEffect, useRef } from "react";
import { Send, Brain } from "lucide-react";
import { sendToCosmosAI } from "@/lib/api";

const OWNER = {
  name: "Med Salim Bousmina",
  website: "https://nexora-agency-five.vercel.app/",
  email: "bousminaselim@gmail.com",
  phone: "+216 27870862",
};

const SYSTEM_PROMPT = `
You are COSMOS-AI, an advanced AI specialized in astronomy, astrophysics, and cosmology.
Created by ${OWNER.name} (${OWNER.website}).

Rules:
- Explain space topics clearly
- Be scientific but inspiring
- Use 2–4 paragraphs max
- Mention real cosmic facts when possible
`;

export default function AIChatSection() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "⬡ COSMOS-AI ONLINE. Ask me anything about the universe, stars, black holes, galaxies, and cosmic mysteries.",
    },
  ]);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const chatRef = useRef(null);

  useEffect(() => {
    chatRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    const userMsg = { role: "user", content: input };

    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const reply = await sendToCosmosAI(
        newMessages,
        SYSTEM_PROMPT,
        1000
      );

      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: reply },
      ]);
    } catch (err) {
      console.log(err);

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "❌ AI Error: " + err.message,
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        background:
          "radial-gradient(circle at top, #0b001f, #000)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 30,
        color: "white",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 1100,
          height: "85vh",
          display: "flex",
          flexDirection: "column",
          borderRadius: 20,
          overflow: "hidden",
          background:
            "linear-gradient(145deg, rgba(20,0,40,0.9), rgba(0,0,0,0.95))",
          border: "1px solid rgba(168,85,247,0.3)",
        }}
      >
        {/* HEADER */}
        <div
          style={{
            padding: 20,
            borderBottom: "1px solid rgba(168,85,247,0.2)",
            display: "flex",
            alignItems: "center",
            gap: 10,
          }}
        >
          <Brain color="#a855f7" />
          <h3 style={{ margin: 0 }}>COSMOS-AI Neural Interface</h3>
        </div>

        {/* CHAT */}
        <div
          style={{
            flex: 1,
            overflowY: "auto",
            padding: 20,
            display: "flex",
            flexDirection: "column",
            gap: 12,
          }}
        >
          {messages.map((m, i) => (
            <div
              key={i}
              style={{
                alignSelf:
                  m.role === "user" ? "flex-end" : "flex-start",
                maxWidth: "75%",
                padding: "12px 16px",
                borderRadius: 12,
                background:
                  m.role === "user"
                    ? "linear-gradient(135deg,#a855f7,#00ffff)"
                    : "rgba(255,255,255,0.05)",
                color: m.role === "user" ? "#000" : "#fff",
                whiteSpace: "pre-wrap",
              }}
            >
              {m.content}
            </div>
          ))}

          {loading && (
            <div style={{ opacity: 0.6 }}>
              COSMOS-AI is thinking...
            </div>
          )}

          <div ref={chatRef} />
        </div>

        {/* INPUT */}
        <div
          style={{
            display: "flex",
            gap: 10,
            padding: 20,
            borderTop: "1px solid rgba(168,85,247,0.2)",
          }}
        >
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) =>
              e.key === "Enter" && sendMessage()
            }
            placeholder="Ask the cosmos..."
            style={{
              flex: 1,
              padding: 14,
              borderRadius: 10,
              border: "1px solid rgba(168,85,247,0.3)",
              background: "rgba(0,0,0,0.6)",
              color: "white",
              outline: "none",
            }}
          />

          <button
            onClick={sendMessage}
            style={{
              padding: "0 20px",
              borderRadius: 10,
              border: "none",
              cursor: "pointer",
              background:
                "linear-gradient(135deg,#a855f7,#00ffff)",
              fontWeight: "bold",
            }}
          >
            <Send size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}