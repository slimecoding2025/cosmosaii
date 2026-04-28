// components/CustomCursor.jsx

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    let raf;

    const move = (e) => {
      raf = requestAnimationFrame(() => {
        if (dot) dot.style.left = dot.style.top = `${e.clientX}px, ${e.clientY}px`;
        if (ring) ring.style.left = ring.style.top = `${e.clientX}px, ${e.clientY}px`;
      });
    };

    const down = () => {
      if (ring) {
        ring.style.width = "20px";
        ring.style.height = "20px";
      }
    };

    const up = () => {
      if (ring) {
        ring.style.width = "36px";
        ring.style.height = "36px";
      }
    };

    document.addEventListener("mousemove", move);
    document.addEventListener("mousedown", down);
    document.addEventListener("mouseup", up);

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("mousemove", move);
      document.removeEventListener("mousedown", down);
      document.removeEventListener("mouseup", up);
    };
  }, []);

  return (
    <>
      <div className="cursor-dot" ref={dotRef} />
      <div className="cursor-ring" ref={ringRef} />
    </>
  );
}