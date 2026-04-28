// components/GlobalStyles.jsx

export default function GlobalStyles() {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;600;700;900&family=Rajdhani:wght@300;400;500;600;700&family=Share+Tech+Mono&display=swap');

      *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

      html { scroll-behavior: smooth; }

      body {
        background: #000008;
        color: #e8f4fd;
        font-family: 'Rajdhani', sans-serif;
        overflow-x: hidden;
        cursor: none;
      }

      ::-webkit-scrollbar { width: 3px; }
      ::-webkit-scrollbar-track { background: #000; }
      ::-webkit-scrollbar-thumb { background: linear-gradient(180deg,#00ffff,#a855f7); border-radius: 2px; }

      /* ── Custom Cursor ── */
      .cursor-dot {
        position: fixed; top: 0; left: 0; z-index: 9999;
        width: 8px; height: 8px; border-radius: 50%;
        background: #00ffff;
        pointer-events: none;
        transform: translate(-50%,-50%);
        transition: transform 0.1s ease, background 0.2s ease;
        box-shadow: 0 0 10px #00ffff, 0 0 20px #00ffff;
      }
      .cursor-ring {
        position: fixed; top: 0; left: 0; z-index: 9998;
        width: 36px; height: 36px; border-radius: 50%;
        border: 1px solid rgba(0,255,255,0.5);
        pointer-events: none;
        transform: translate(-50%,-50%);
        transition: transform 0.15s ease, width 0.3s, height 0.3s, opacity 0.3s;
      }

      /* ── Typography ── */
      .font-orb  { font-family: 'Orbitron', sans-serif; }
      .font-mono { font-family: 'Share Tech Mono', monospace; }
      .font-raj  { font-family: 'Rajdhani', sans-serif; }

      /* ── Colors ── */
      :root {
        --cyan:   #00ffff;
        --purple: #a855f7;
        --orange: #ff6b35;
        --blue:   #3b82f6;
        --dim:    rgba(0,255,255,0.15);
      }

      /* ── Glow text ── */
      .glow-c { text-shadow: 0 0 8px #00ffff,  0 0 20px #00ffff,  0 0 50px #00ffff; }
      .glow-p { text-shadow: 0 0 8px #a855f7,  0 0 20px #a855f7,  0 0 50px #a855f7; }
      .glow-o { text-shadow: 0 0 8px #ff6b35,  0 0 20px #ff6b35; }

      /* ── Gradient text ── */
      .grad-text {
        background: linear-gradient(135deg, #00ffff 0%, #a855f7 50%, #ff6b35 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }
      .grad-text-c {
        background: linear-gradient(90deg, #00ffff, #38bdf8);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }
      .grad-text-p {
        background: linear-gradient(90deg, #a855f7, #ec4899);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }

      /* ── Glass ── */
      .glass {
        background: rgba(255,255,255,0.025);
        backdrop-filter: blur(24px);
        -webkit-backdrop-filter: blur(24px);
        border: 1px solid rgba(255,255,255,0.07);
      }
      .glass-cyan {
        background: rgba(0,255,255,0.04);
        backdrop-filter: blur(24px);
        -webkit-backdrop-filter: blur(24px);
        border: 1px solid rgba(0,255,255,0.2);
        box-shadow: 0 0 30px rgba(0,255,255,0.06), inset 0 0 30px rgba(0,255,255,0.02);
      }
      .glass-purple {
        background: rgba(168,85,247,0.05);
        backdrop-filter: blur(24px);
        -webkit-backdrop-filter: blur(24px);
        border: 1px solid rgba(168,85,247,0.25);
        box-shadow: 0 0 30px rgba(168,85,247,0.08);
      }

      /* ── Neon Buttons ── */
      .btn-neon {
        position: relative; overflow: hidden; cursor: pointer;
        font-family: 'Orbitron', sans-serif;
        letter-spacing: 2px; text-transform: uppercase;
        border: 1px solid #00ffff; color: #00ffff;
        background: transparent;
        transition: all 0.35s ease;
      }
      .btn-neon::before {
        content: ''; position: absolute; top: 0; left: -110%;
        width: 100%; height: 100%;
        background: linear-gradient(90deg, transparent, rgba(0,255,255,0.18), transparent);
        transition: left 0.45s ease;
      }
      .btn-neon:hover::before { left: 110%; }
      .btn-neon:hover {
        color: #fff; background: rgba(0,255,255,0.08);
        box-shadow: 0 0 25px rgba(0,255,255,0.45), inset 0 0 20px rgba(0,255,255,0.06);
      }
      .btn-neon-p {
        border-color: #a855f7; color: #a855f7;
      }
      .btn-neon-p::before {
        background: linear-gradient(90deg, transparent, rgba(168,85,247,0.18), transparent);
      }
      .btn-neon-p:hover {
        color: #fff; background: rgba(168,85,247,0.08);
        box-shadow: 0 0 25px rgba(168,85,247,0.45), inset 0 0 20px rgba(168,85,247,0.06);
      }
      .btn-solid {
        background: linear-gradient(135deg, #00ffff, #3b82f6);
        color: #000; border: none; cursor: pointer;
        font-family: 'Orbitron', sans-serif;
        letter-spacing: 1.5px; text-transform: uppercase;
        font-weight: 700;
        transition: all 0.3s ease;
      }
      .btn-solid:hover {
        transform: translateY(-2px);
        box-shadow: 0 10px 30px rgba(0,255,255,0.4);
        filter: brightness(1.1);
      }

      /* ── Animations ── */
      @keyframes float {
        0%,100% { transform: translateY(0) rotateX(0); }
        50%      { transform: translateY(-18px) rotateX(3deg); }
      }
      @keyframes pulse-glow {
        0%,100% { box-shadow: 0 0 20px rgba(0,255,255,0.3); opacity: 0.7; }
        50%      { box-shadow: 0 0 50px rgba(0,255,255,0.7); opacity: 1; }
      }
      @keyframes spin-slow  { to { transform: rotate(360deg); } }
      @keyframes spin-rev   { to { transform: rotate(-360deg); } }
      @keyframes slide-up   { from { transform: translateY(60px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
      @keyframes slide-left { from { transform: translateX(-60px); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
      @keyframes slide-right{ from { transform: translateX(60px); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
      @keyframes fade-in    { from { opacity: 0; } to { opacity: 1; } }
      @keyframes blink-bar  { 0%,100% { opacity: 1; } 50% { opacity: 0; } }
      @keyframes typing-cursor { 50% { border-color: transparent; } }
      @keyframes scanline {
        0%   { transform: translateY(-100vh); }
        100% { transform: translateY(100vh); }
      }
      @keyframes orb-drift {
        0%   { transform: translate(0,0) scale(1); }
        33%  { transform: translate(40px,-30px) scale(1.15); }
        66%  { transform: translate(-30px,25px) scale(0.88); }
        100% { transform: translate(0,0) scale(1); }
      }
      @keyframes flicker {
        0%,19%,21%,23%,25%,54%,56%,100% { opacity: 1; }
        20%,22%,24%,55% { opacity: 0.3; }
      }
      @keyframes neon-border {
        0%,100% { border-color: rgba(0,255,255,0.3); box-shadow: 0 0 10px rgba(0,255,255,0.2); }
        50%      { border-color: rgba(0,255,255,0.8); box-shadow: 0 0 30px rgba(0,255,255,0.5); }
      }
      @keyframes particle-up {
        0%   { transform: translateY(0) scale(1); opacity: 0.8; }
        100% { transform: translateY(-100vh) scale(0); opacity: 0; }
      }
      @keyframes rotate-ring {
        from { transform: rotate(0deg); }
        to   { transform: rotate(360deg); }
      }

      .anim-float      { animation: float 7s ease-in-out infinite; }
      .anim-pulse-glow { animation: pulse-glow 3s ease-in-out infinite; }
      .anim-spin-slow  { animation: spin-slow 25s linear infinite; }
      .anim-spin-rev   { animation: spin-rev 18s linear infinite; }
      .anim-slide-up   { animation: slide-up 0.9s cubic-bezier(0.22,1,0.36,1) forwards; }
      .anim-slide-l    { animation: slide-left 0.9s cubic-bezier(0.22,1,0.36,1) forwards; }
      .anim-slide-r    { animation: slide-right 0.9s cubic-bezier(0.22,1,0.36,1) forwards; }
      .anim-fade       { animation: fade-in 1s ease forwards; }
      .anim-flicker    { animation: flicker 5s linear infinite; }
      .anim-neon-border{ animation: neon-border 2.5s ease-in-out infinite; }

      .delay-1 { animation-delay: 0.1s; }
      .delay-2 { animation-delay: 0.2s; }
      .delay-3 { animation-delay: 0.3s; }
      .delay-4 { animation-delay: 0.5s; }
      .delay-5 { animation-delay: 0.7s; }
      .delay-6 { animation-delay: 0.9s; }

      /* ── Card Hover ── */
      .card-lift {
        transition: transform 0.4s cubic-bezier(0.22,1,0.36,1), box-shadow 0.4s ease;
      }
      .card-lift:hover {
        transform: translateY(-10px);
        box-shadow: 0 30px 80px rgba(0,0,0,0.6), 0 0 40px rgba(0,255,255,0.12);
      }

      /* ── Scanline effect ── */
      .scanline-wrap { position: relative; overflow: hidden; }
      .scanline-wrap::after {
        content: ''; position: absolute; inset: 0; pointer-events: none;
        background: linear-gradient(transparent 50%, rgba(0,255,255,0.015) 50%);
        background-size: 100% 4px; z-index: 1;
      }

      /* ── Section titles ── */
      .section-tag {
        display: inline-block;
        font-family: 'Share Tech Mono', monospace;
        font-size: 11px;
        letter-spacing: 4px;
        text-transform: uppercase;
        color: #00ffff;
        padding: 4px 12px;
        border: 1px solid rgba(0,255,255,0.35);
        background: rgba(0,255,255,0.06);
        border-radius: 2px;
        margin-bottom: 16px;
      }

      /* ── Chat UI ── */
      .chat-user {
        background: linear-gradient(135deg, rgba(0,255,255,0.12), rgba(56,189,248,0.08));
        border: 1px solid rgba(0,255,255,0.25);
        align-self: flex-end;
        border-bottom-right-radius: 4px;
      }
      .chat-ai {
        background: rgba(255,255,255,0.04);
        border: 1px solid rgba(255,255,255,0.1);
        align-self: flex-start;
        border-bottom-left-radius: 4px;
      }
      .chat-typing span {
        display: inline-block;
        width: 6px; height: 6px; border-radius: 50%;
        background: #00ffff;
        animation: blink-bar 1.2s infinite;
      }
      .chat-typing span:nth-child(2) { animation-delay: 0.2s; }
      .chat-typing span:nth-child(3) { animation-delay: 0.4s; }

      /* ── Nebula background blobs ── */
      .nebula-blob {
        position: absolute; border-radius: 50%; filter: blur(80px);
        pointer-events: none;
        animation: orb-drift 12s ease-in-out infinite;
      }

      /* ── Input ── */
      .input-neon {
        background: rgba(255,255,255,0.04);
        border: 1px solid rgba(0,255,255,0.25);
        color: #e8f4fd;
        font-family: 'Rajdhani', sans-serif;
        font-size: 16px;
        transition: border-color 0.3s, box-shadow 0.3s;
        outline: none;
      }
      .input-neon:focus {
        border-color: rgba(0,255,255,0.7);
        box-shadow: 0 0 20px rgba(0,255,255,0.15);
      }
      .input-neon::placeholder { color: rgba(232,244,253,0.3); }

      /* ── Timeline ── */
      .timeline-line {
        position: absolute; left: 50%; top: 0; bottom: 0;
        width: 1px;
        background: linear-gradient(180deg, transparent, #00ffff 20%, #a855f7 80%, transparent);
        transform: translateX(-50%);
      }

      /* ── Grid overlay ── */
      .grid-bg {
        background-image:
          linear-gradient(rgba(0,255,255,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,255,255,0.03) 1px, transparent 1px);
        background-size: 60px 60px;
      }

      /* ── Scrolled state ── */
      .nav-scrolled {
        background: rgba(0,0,8,0.85) !important;
        backdrop-filter: blur(30px) !important;
        border-bottom: 1px solid rgba(0,255,255,0.12) !important;
      }

      /* ── Three.js canvas fill ── */
      .three-canvas {
        position: absolute; inset: 0; width: 100% !important; height: 100% !important;
      }
    `}</style>
  );
}