"use client";

import { useRef, useState, useEffect } from "react";
import { useRevealObserver } from "@/hooks/useRevealObserver";
import { useLanguage } from "@/components/providers/LanguageProvider";

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const rightRef   = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const { t, language } = useLanguage();
  const isArabic = language === "ar";
  useRevealObserver(sectionRef);

  useEffect(() => {
    const right = rightRef.current;
    if (!right) return;

    const items = right.querySelectorAll(".process-step");
    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            const idx = Number((e.target as HTMLElement).dataset.index);
            setActive(idx);
          }
        });
      },
      { root: null, rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    items.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="process"
      ref={sectionRef}
      className="section"
      style={{ background: "#0a0a0a" }}
    >
      <div className="wrap">
        <div className="reveal label-line">
          <span className={`t-label ${isArabic ? "arabic" : ""}`}>{t.process.label}</span>
        </div>

        <div className="reveal mb-24 flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8">
          <h2 className={`t-title ${isArabic ? "arabic" : ""}`}>
            {t.process.title}
          </h2>
          <p className={`t-body ${isArabic ? "arabic" : ""}`} style={{ maxWidth: 320 }}>
            {/* The subtitle wasn't in the initial translation, adding a fallback */}
            {isArabic ? "عملية مكونة من 5 مراحل تم صقلها على مدار 8 سنوات ومع أكثر من 200 علامة تجارية." : "A 5-stage process refined over 8 years and 200+ brand engagements."}
          </p>
        </div>

        <div className="reveal grid lg:grid-cols-[1fr_1px_1fr] gap-0 lg:gap-16 items-start">

          {/* Left: step numbers — sticky on desktop */}
          <div className="hidden lg:block" style={{ position: "sticky", top: "40vh" }}>
            <div className="space-y-3">
              {t.process.steps.map((s, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-4 transition-all duration-400 ${isArabic ? "arabic" : ""}`}
                  style={{
                    opacity: active === i ? 1 : 0.22,
                    transform: active === i ? "translateX(0)" : "translateX(-8px)",
                  }}
                >
                  <span
                    className={`t-label ${isArabic ? "arabic" : ""}`}
                    style={{ color: active === i ? "#7BC600" : "rgba(255,255,255,0.3)", width: 28 }}
                  >
                    {s.id}
                  </span>
                  <span
                    style={{
                      fontSize: "clamp(28px, 3vw, 40px)",
                      fontWeight: 800,
                      letterSpacing: "-0.02em",
                      color: active === i ? "#fff" : "rgba(255,255,255,0.3)",
                    }}
                  >
                    {s.title}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Divider line */}
          <div
            className="hidden lg:block"
            style={{
              background: "linear-gradient(to bottom, transparent, rgba(255,255,255,0.07) 20%, rgba(255,255,255,0.07) 80%, transparent)",
            }}
          />

          {/* Right: scrolling descriptions */}
          <div ref={rightRef} className="space-y-0">
            {t.process.steps.map((s, i) => (
              <div
                key={i}
                data-index={i}
                className="process-step"
                style={{
                  minHeight: "60vh",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  paddingTop: 40,
                  paddingBottom: 40,
                }}
              >
                {/* Mobile: show number */}
                <p className={`t-label lg:hidden mb-3 ${isArabic ? "arabic" : ""}`} style={{ color: "#7BC600" }}>{s.id} — {s.title}</p>

                <p
                  className={isArabic ? "arabic" : ""}
                  style={{
                    fontSize: "clamp(20px, 2.5vw, 30px)",
                    fontWeight: 500,
                    lineHeight: 1.6,
                    color: active === i ? "rgba(255,255,255,0.85)" : "rgba(255,255,255,0.3)",
                    transition: "color 0.5s ease",
                    maxWidth: 480,
                  }}
                >
                  {s.desc}
                </p>

                {/* Progress bar */}
                <div
                  className="mt-8"
                  style={{
                    height: 1,
                    background: "rgba(255,255,255,0.07)",
                    maxWidth: 100,
                  }}
                >
                  <div
                    style={{
                      height: "100%",
                      width: active === i ? "100%" : "0%",
                      background: "#7BC600",
                      transition: "width 0.7s ease",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
