"use client";

import { useState, useEffect } from "react";

interface Props { onComplete: () => void; }

export default function Preloader({ onComplete }: Props) {
  const [pct,    setPct]    = useState(0);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    let cur = 0;
    const id = setInterval(() => {
      cur++;
      setPct(Math.round((cur / 70) * 100));
      if (cur >= 70) {
        clearInterval(id);
        setTimeout(() => {
          setExiting(true);
          setTimeout(onComplete, 650);
        }, 150);
      }
    }, 2600 / 70);
    return () => clearInterval(id);
  }, [onComplete]);

  return (
    <div
      className="fixed inset-0 z-[99999] flex flex-col items-center justify-center"
      style={{
        background: "#050505",
        opacity:    exiting ? 0 : 1,
        transform:  exiting ? "scale(1.03)" : "scale(1)",
        transition: "opacity 0.65s ease, transform 0.65s ease",
      }}
    >
      {/* Subtle ambient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(123,198,0,0.07) 0%, transparent 70%)",
          animation: "pulseGreen 3s ease-in-out infinite",
        }}
      />

      {/* Logo mark */}
      <div
        className="relative mb-16 w-64 h-24"
        style={{ animation: "fadeUp 0.7s ease 0.1s both" }}
      >
        <img 
          src="/logo.png" 
          alt="BrandMe" 
          className="w-full h-full object-contain" 
        />
      </div>

      {/* Progress */}
      <div
        className="flex flex-col items-center gap-4 w-48"
        style={{ animation: "fadeIn 0.6s ease 0.3s both" }}
      >
        <div className="w-full h-px" style={{ background: "rgba(255,255,255,0.07)" }}>
          <div
            style={{
              width: `${pct}%`,
              height: "100%",
              background: "#7BC600",
              transition: "width 0.04s linear",
            }}
          />
        </div>
        <div className="flex justify-between w-full">
          <span style={{ fontSize: 10, letterSpacing: "0.15em", color: "rgba(255,255,255,0.25)" }}>
            LOADING
          </span>
          <span style={{ fontSize: 11, fontWeight: 700, color: "#7BC600", fontVariantNumeric: "tabular-nums" }}>
            {pct}%
          </span>
        </div>
      </div>

      {/* Corner brackets */}
      {[
        { top: "24px",    left:  "24px",  borderTop:    "1px solid rgba(123,198,0,0.25)", borderLeft:   "1px solid rgba(123,198,0,0.25)" },
        { top: "24px",    right: "24px",  borderTop:    "1px solid rgba(123,198,0,0.25)", borderRight:  "1px solid rgba(123,198,0,0.25)" },
        { bottom:"24px",  left:  "24px",  borderBottom: "1px solid rgba(123,198,0,0.25)", borderLeft:   "1px solid rgba(123,198,0,0.25)" },
        { bottom:"24px",  right: "24px",  borderBottom: "1px solid rgba(123,198,0,0.25)", borderRight:  "1px solid rgba(123,198,0,0.25)" },
      ].map((s, i) => (
        <div key={i} className="absolute w-6 h-6 pointer-events-none" style={s as React.CSSProperties} />
      ))}
    </div>
  );
}
