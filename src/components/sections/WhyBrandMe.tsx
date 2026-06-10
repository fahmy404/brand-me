"use client";

import { useRef } from "react";
import { useRevealObserver } from "@/hooks/useRevealObserver";

const cards = [
  { ar: "البراند القوي بيفرض هيبته.",           en: "A powerful brand commands its authority.",          icon: "👑", accent: true  },
  { ar: "الويب سايت مش مجرد واجهة.",            en: "A website is not just a facade.",                   icon: "🌐", accent: false },
  { ar: "الوقت بيصنع ميراث.",                   en: "Time builds legacy.",                               icon: "⏳", accent: false },
  { ar: "البزنس مش لغز... بس محتاج اللي يفكه.", en: "Business isn't a puzzle — it needs the right solver.", icon: "🔐", accent: true  },
];

export default function WhyBrandMe() {
  const ref = useRef<HTMLElement>(null);
  useRevealObserver(ref);

  return (
    <section id="why-brandme" ref={ref} className="relative section-pad" style={{ background: "#050505" }}>
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 80% 50% at 20% 50%, rgba(123,198,0,0.06) 0%, transparent 70%)" }}
      />
      <div className="container relative z-10">
        <div className="reveal flex items-center gap-4 mb-6">
          <div className="w-8 h-px" style={{ background: "#7BC600" }} />
          <span className="text-xs tracking-widest uppercase font-medium" style={{ color: "#7BC600" }}>Why BrandMe</span>
        </div>

        <h2 className="reveal mb-14" style={{ fontSize: "clamp(1.8rem, 4.5vw, 3.5rem)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.02em" }}>
          We speak <span style={{ color: "#7BC600" }}>strategy,</span><br />not slogans.
        </h2>

        <div className="grid md:grid-cols-2 gap-5">
          {cards.map((c, i) => (
            <div
              key={i}
              className="reveal group relative overflow-hidden rounded-2xl p-8 card-hover"
              style={{
                background:   c.accent ? "rgba(123,198,0,0.07)" : "rgba(255,255,255,0.03)",
                border:       c.accent ? "1px solid rgba(123,198,0,0.2)" : "1px solid rgba(255,255,255,0.07)",
                transitionDelay: `${i * 0.07}s`,
              }}
            >
              <div className="text-4xl mb-5">{c.icon}</div>
              <p className="text-2xl font-bold mb-2 leading-snug" style={{ color: "#fff", fontFamily: "Cairo, sans-serif", direction: "rtl" }}>{c.ar}</p>
              <p className="text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>{c.en}</p>
              <div className="absolute bottom-0 right-0 w-20 h-20 opacity-20 group-hover:opacity-40 transition-opacity duration-300 pointer-events-none"
                style={{ background: "radial-gradient(circle at bottom right, #7BC600, transparent)" }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
