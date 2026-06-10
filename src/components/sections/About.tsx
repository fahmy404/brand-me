"use client";

import { useRef } from "react";
import { useRevealObserver } from "@/hooks/useRevealObserver";

const timeline = [
  { step: "01", label: "Research",  desc: "Deep market analysis, competitor mapping, and audience psychology studies." },
  { step: "02", label: "Strategy",  desc: "Positioning, messaging architecture, and brand differentiation blueprints." },
  { step: "03", label: "Identity",  desc: "Visual systems that command attention and build instant recognition." },
  { step: "04", label: "Growth",    desc: "Execution strategies that turn brand equity into measurable revenue." },
];

const stats = [
  { num: "200+", text: "Brands Transformed" },
  { num: "95%",  text: "Client Retention Rate" },
  { num: "5★",   text: "Average Google Rating" },
];

export default function About() {
  const ref = useRef<HTMLElement>(null);
  useRevealObserver(ref);

  return (
    <section id="about" ref={ref} className="relative section-pad" style={{ background: "#050505" }}>
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 50% at 80% 50%, rgba(123,198,0,0.06) 0%, transparent 70%)" }}
      />

      <div className="container relative z-10">
        {/* Label */}
        <div className="reveal flex items-center gap-4 mb-10">
          <div className="w-8 h-px" style={{ background: "#7BC600" }} />
          <span className="text-xs tracking-widest uppercase font-medium" style={{ color: "#7BC600" }}>About BrandMe</span>
        </div>

        {/* Headline */}
        <h2
          className="reveal mb-16"
          style={{
            fontSize: "clamp(1.8rem, 4.5vw, 3.6rem)",
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            maxWidth: "760px",
          }}
        >
          A brand isn&apos;t a logo.{" "}
          <span style={{ color: "#7BC600" }}>A brand is a position</span>
          {" "}inside people&apos;s minds.
        </h2>

        {/* 2-col */}
        <div className="grid lg:grid-cols-2 gap-14 items-start">
          {/* Timeline */}
          <div>
            {timeline.map((item, i) => (
              <div
                key={i}
                className="reveal flex gap-6 group"
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                <div className="flex flex-col items-center flex-shrink-0">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 group-hover:scale-110"
                    style={{ background: "rgba(123,198,0,0.1)", border: "1px solid rgba(123,198,0,0.35)", color: "#7BC600" }}
                  >
                    {item.step}
                  </div>
                  {i < timeline.length - 1 && (
                    <div className="w-px mt-2" style={{ height: 44, background: "linear-gradient(to bottom, rgba(123,198,0,0.3), transparent)" }} />
                  )}
                </div>
                <div className="pb-8">
                  <h3 className="text-lg font-bold mb-1 transition-colors duration-300 group-hover:text-[#7BC600]" style={{ color: "#fff" }}>{item.label}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Stats panel */}
          <div className="reveal" style={{ transitionDelay: "0.2s" }}>
            <div
              className="rounded-2xl p-8 relative overflow-hidden"
              style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}
            >
              <div className="absolute -top-16 -right-16 w-52 h-52 rounded-full blur-3xl pointer-events-none"
                style={{ background: "rgba(123,198,0,0.12)" }} />
              <div className="relative z-10 space-y-4">
                {stats.map((s, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 p-4 rounded-xl card-hover"
                    style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
                  >
                    <span className="text-3xl font-bold" style={{ color: "#7BC600", textShadow: "0 0 20px rgba(123,198,0,0.5)" }}>{s.num}</span>
                    <span className="text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>{s.text}</span>
                  </div>
                ))}
                <div className="mt-4 p-5 rounded-xl" style={{ background: "rgba(123,198,0,0.05)", border: "1px solid rgba(123,198,0,0.15)" }}>
                  <p className="text-sm font-medium leading-relaxed" style={{ color: "rgba(255,255,255,0.7)", fontFamily: "Cairo, sans-serif", direction: "rtl" }}>
                    &ldquo;مش حظ... دي استراتيجية.&rdquo;
                  </p>
                  <p className="text-xs mt-2" style={{ color: "#7BC600" }}>— BrandMe Philosophy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
