"use client";

import { useRef, useState, useEffect } from "react";
import { useLanguage } from "@/components/providers/LanguageProvider";

export default function Results() {
  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  const { t, language } = useLanguage();
  const isArabic = language === "ar";

  useEffect(() => {
    const items = sectionRef.current?.querySelectorAll(".stat-panel");
    if (!items) return;

    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            setActive(Number((e.target as HTMLElement).dataset.idx));
          }
        });
      },
      { threshold: 0.55 }
    );

    items.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="results"
      ref={sectionRef}
      className="relative"
      style={{ background: "#050505" }}
    >
      {/* Section header */}
      <div
        className="section wrap"
        style={{ paddingBottom: 0 }}
      >
        <div className="label-line">
          <span className={`t-label ${isArabic ? "arabic" : ""}`}>{t.results.label}</span>
        </div>
        <h2 className={`t-title ${isArabic ? "arabic" : ""}`} style={{ maxWidth: 560 }}>
          {t.results.title}
        </h2>
      </div>

      {/* Each stat gets full-screen height */}
      {t.results.metrics.map((s, i) => (
        <div
          key={i}
          data-idx={i}
          className="stat-panel"
          style={{
            minHeight: "80vh",
            display: "flex",
            alignItems: "center",
            borderTop: "1px solid rgba(255,255,255,0.05)",
          }}
        >
          <div className="wrap w-full">
            <div
              className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${isArabic ? "arabic" : ""}`}
              style={{
                opacity: active === i ? 1 : 0.2,
                transition: "opacity 0.6s ease",
              }}
            >
              {/* Giant number */}
              <div
                style={{
                  fontSize: "clamp(100px, 18vw, 220px)",
                  fontWeight: 900,
                  letterSpacing: "-0.04em",
                  lineHeight: 0.85,
                  color: active === i ? "#7BC600" : "rgba(255,255,255,0.15)",
                  transition: "color 0.6s ease",
                  textAlign: isArabic ? "right" : "left"
                }}
              >
                {s.value}
              </div>

              {/* Labels */}
              <div>
                <div style={{ fontSize: "clamp(24px, 3vw, 40px)", fontWeight: 700, color: "#fff", marginBottom: 12 }}>
                  {s.label}
                </div>
                <div className="t-label" style={{ color: "rgba(255,255,255,0.4)", fontSize: 13 }}>
                  {s.desc}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
