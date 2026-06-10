"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";

export default function Testimonials() {
  const { t, language } = useLanguage();
  const isArabic = language === "ar";
  
  // Duplicate for seamless loop
  const row = [...t.testimonials.reviews, ...t.testimonials.reviews];

  return (
    <section
      id="testimonials"
      className="section overflow-hidden"
      style={{ background: "#050505", borderTop: "1px solid rgba(255,255,255,0.05)" }}
    >
      <div className="wrap mb-12">
        <div className="label-line">
          <span className={`t-label ${isArabic ? "arabic" : ""}`}>{t.testimonials.label}</span>
        </div>
        <h2 className={`t-title ${isArabic ? "arabic" : ""}`} style={{ maxWidth: 480 }}>
          {t.testimonials.title}
        </h2>
      </div>

      {/* Marquee rows */}
      <div className="space-y-6 overflow-hidden">
        {/* Row 1: left */}
        <div style={{ display: "flex", width: "max-content", animation: "marqueeL 40s linear infinite" }}>
          {row.map((q, i) => (
            <div
              key={i}
              style={{
                flexShrink: 0,
                padding: "40px",
                marginRight: 24,
                borderRadius: 24,
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.06)",
                maxWidth: 480,
                textAlign: isArabic ? "right" : "left",
                direction: isArabic ? "rtl" : "ltr"
              }}
            >
              <p
                className={isArabic ? "arabic" : ""}
                style={{
                  fontSize: "clamp(16px, 1.4vw, 20px)",
                  color: "rgba(255,255,255,0.75)",
                  lineHeight: 1.55,
                  marginBottom: 16,
                  fontStyle: "italic",
                }}
              >
                &ldquo;{q.text}&rdquo;
              </p>
              <p className={`t-label ${isArabic ? "arabic" : ""}`} style={{ color: "#7BC600" }}>{q.author}</p>
            </div>
          ))}
        </div>

        {/* Row 2: right */}
        <div style={{ display: "flex", width: "max-content", animation: "marqueeR 50s linear infinite" }}>
          {[...row].reverse().map((q, i) => (
            <div
              key={i}
              style={{
                flexShrink: 0,
                padding: "40px",
                marginRight: 24,
                borderRadius: 24,
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.04)",
                maxWidth: 480,
                textAlign: isArabic ? "right" : "left",
                direction: isArabic ? "rtl" : "ltr"
              }}
            >
              <p
                className={isArabic ? "arabic" : ""}
                style={{
                  fontSize: "clamp(16px, 1.4vw, 20px)",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.55,
                  marginBottom: 16,
                  fontStyle: "italic",
                }}
              >
                &ldquo;{q.text}&rdquo;
              </p>
              <p className={`t-label ${isArabic ? "arabic" : ""}`} style={{ color: "#7BC600" }}>{q.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
