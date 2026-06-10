"use client";

import { useRef } from "react";
import { useRevealObserver } from "@/hooks/useRevealObserver";
import { useLanguage } from "@/components/providers/LanguageProvider";

export default function Statement() {
  const ref = useRef<HTMLElement>(null);
  const { t, language } = useLanguage();
  const isArabic = language === "ar";
  useRevealObserver(ref);

  return (
    <section
      id="statement"
      ref={ref}
      className="section"
      style={{ background: "#050505", borderTop: "1px solid rgba(255,255,255,0.05)" }}
    >
      <div className="wrap">
        <div className="grid lg:grid-cols-[200px_1fr] gap-16 lg:gap-24 items-start">

          {/* Left: pinned label */}
          <div className="reveal">
            <p className="t-label" style={{ color: "rgba(255,255,255,0.3)" }}>{t.statement.label}</p>
            <div
              className="mt-6 hidden lg:block"
              style={{
                width: 1,
                height: 120,
                background: "linear-gradient(to bottom, rgba(123,198,0,0.5), transparent)",
              }}
            />
          </div>

          {/* Right: giant statement */}
          <div>
            <p
              className="reveal t-statement"
              style={{
                color: "#ffffff",
                maxWidth: 900,
                lineHeight: 1.2,
              }}
            >
              {t.statement.words.map((w, i) => (
                <span
                  key={i}
                  style={{
                    color: i === 3 ? "#7BC600" : i === 1 ? "rgba(255,255,255,0.35)" : "#fff",
                    display: "block",
                  }}
                >
                  {w}
                </span>
              ))}
            </p>

            <div
              className="reveal mt-14 reveal-delay-2"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "2rem",
                maxWidth: 640,
              }}
            >
              {t.statement.stats.map((s, i) => (
                <div key={i} className={isArabic ? "arabic" : ""}>
                  <div
                    style={{
                      fontSize: "clamp(36px, 4vw, 52px)",
                      fontWeight: 800,
                      color: "#fff",
                      letterSpacing: "-0.03em",
                      lineHeight: 1,
                      marginBottom: 6,
                    }}
                  >
                    {s.value}
                  </div>
                  <div className="t-label" style={{ color: "rgba(255,255,255,0.3)" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
