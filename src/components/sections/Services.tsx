"use client";

import { useRef, useState } from "react";
import { useRevealObserver } from "@/hooks/useRevealObserver";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/components/providers/LanguageProvider";

export default function Services() {
  const ref = useRef<HTMLElement>(null);
  const { t, language } = useLanguage();
  const isArabic = language === "ar";
  const [active, setActive] = useState<string | null>(null);
  useRevealObserver(ref);

  return (
    <section
      id="services"
      ref={ref}
      className="section"
      style={{ background: "#050505" }}
    >
      <div className="wrap">
        <div className="reveal label-line">
          <span className={`t-label ${isArabic ? "arabic" : ""}`}>{t.services.label}</span>
        </div>

        <div className="reveal flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-24">
          <h2 className={`t-title ${isArabic ? "arabic" : ""}`} style={{ maxWidth: 540 }}>
            {t.services.title}
          </h2>
          <p className={`t-body ${isArabic ? "arabic" : ""}`} style={{ maxWidth: 360 }}>
            {t.services.subtitle}
          </p>
        </div>

        {/* Accordion list */}
        <div className="reveal">
          {t.services.items.map((s: any, i: number) => (
            <div
              key={s.id}
              className="group relative rounded-3xl overflow-hidden transition-all duration-500 ease-out mb-4"
              style={{
                background: active === s.id ? "rgba(255,255,255,0.03)" : "transparent",
                border: "1px solid",
                borderColor: active === s.id ? "rgba(123,198,0,0.15)" : "rgba(255,255,255,0.04)",
                transform: active === s.id ? "scale(1.01)" : "scale(1)",
              }}
              onMouseEnter={() => setActive(s.id)}
              onMouseLeave={() => setActive(null)}
            >
              <div
                data-cursor-label="Explore"
                className="flex items-center gap-6 py-8 px-6 lg:px-10 lg:py-10"
                style={{ cursor: "none" }}
              >
                {/* Number */}
                <span
                  className="t-label flex-shrink-0 transition-colors duration-300"
                  style={{
                    color: active === s.id ? "#7BC600" : "rgba(255,255,255,0.2)",
                    textShadow: active === s.id ? "0 0 15px rgba(123,198,0,0.5)" : "none",
                    width: 32,
                  }}
                >
                  {s.num}
                </span>

                {/* Title */}
                <span
                  className={`flex-1 transition-all duration-400 ${isArabic ? "arabic" : ""}`}
                  style={{
                    fontSize: "clamp(22px, 3vw, 36px)",
                    fontWeight: 700,
                    letterSpacing: "-0.02em",
                    color: active === s.id ? "#fff" : "rgba(255,255,255,0.65)",
                    textShadow: active === s.id ? "0 0 30px rgba(255,255,255,0.2)" : "none",
                    transform: active === s.id ? "translateX(8px)" : "translateX(0)",
                  }}
                >
                  {s.title}
                </span>

                {/* Arrow */}
                <ArrowRight
                  size={20}
                  style={{
                    color: active === s.id ? "#7BC600" : "rgba(255,255,255,0.2)",
                    filter: active === s.id ? "drop-shadow(0 0 8px rgba(123,198,0,0.6))" : "none",
                    transform: active === s.id ? "translateX(4px) rotate(-45deg)" : "translateX(0) rotate(0)",
                    transition: "all 0.3s ease",
                    flexShrink: 0,
                  }}
                />
              </div>

              {/* Expanded description */}
              <div
                style={{
                  maxHeight: active === s.id ? 240 : 0,
                  overflow: "hidden",
                  transition: "max-height 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
              >
                <div className="pb-8 px-6 lg:px-10 flex flex-col md:flex-row gap-8 lg:gap-24">
                  <p className={`t-body flex-1 ${isArabic ? "arabic" : ""}`} style={{ maxWidth: 520 }}>{s.desc}</p>
                  <div className="flex flex-wrap items-start gap-3 flex-shrink-0">
                    {s.tags.map((tag: string) => (
                      <div
                        key={tag}
                        className={`t-label px-5 py-2.5 rounded-full flex w-max items-center justify-center ${isArabic ? "arabic" : ""}`}
                        style={{
                          lineHeight: "1.2",
                          background: "rgba(123,198,0,0.08)",
                          border: "1px solid rgba(123,198,0,0.2)",
                          color: "#7BC600",
                        }}
                      >
                        {tag}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
