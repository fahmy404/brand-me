"use client";

import { useRef, useState } from "react";
import { useRevealObserver } from "@/hooks/useRevealObserver";
import { ArrowUpRight, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import MagneticButton from "@/components/ui/MagneticButton";
import { useLanguage } from "@/components/providers/LanguageProvider";

const cases = [
  {
    id: 1, index: "01",
    name: "Aura Tech",
    category: "Tech / Brand Identity",
    tagline: "Redefining the future of cloud computing.",
    desc: "Aura Tech needed a complete visual overhaul to match their innovative platform. We built a dynamic identity system that breathes life into complex data.",
    accent: "#00F0FF",
    tint: "rgba(0, 240, 255, 0.03)",
    metrics: [{ l: "Increase in Demo Signups", v: "+145%" }, { l: "Brand Recall", v: "82%" }]
  },
  {
    id: 2, index: "02",
    name: "Vibe Studios",
    category: "Entertainment / Web Design",
    tagline: "A digital experience that moves to the beat.",
    desc: "Vibe Studios required a digital presence as energetic as their artists. We delivered a highly interactive, WebGL-powered portfolio.",
    accent: "#FF0055",
    tint: "rgba(255, 0, 85, 0.03)",
    metrics: [{ l: "Engagement Rate", v: "4.2x" }, { l: "Time on Site", v: "3m 40s" }]
  },
  {
    id: 3, index: "03",
    name: "Lumina Beauty",
    category: "E-Commerce / Performance",
    tagline: "Scaling a global beauty empire.",
    desc: "Through targeted performance marketing and a refreshed e-commerce UX, we helped Lumina Beauty double their online revenue in 6 months.",
    accent: "#B026FF",
    tint: "rgba(176, 38, 255, 0.03)",
    metrics: [{ l: "ROAS", v: "6.5x" }, { l: "Conversion Rate", v: "3.8%" }]
  }
];

export default function Portfolio() {
  const ref = useRef<HTMLElement>(null);
  const { t, language } = useLanguage();
  const isArabic = language === "ar";
  const [hovered, setHovered] = useState<number | null>(null);
  const [modal, setModal]     = useState<typeof cases[0] | null>(null);
  useRevealObserver(ref);

  const activeTint = hovered !== null
    ? cases.find(c => c.id === hovered)?.tint ?? "transparent"
    : "transparent";

  return (
    <section
      id="portfolio"
      ref={ref}
      className="section relative"
      style={{
        background: "#050505",
        transition: "background 0.6s ease",
      }}
    >
      {/* Viewport color tint on hover */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: activeTint,
          transition: "background 0.5s ease",
          zIndex: 0,
        }}
      />

      <div className="wrap relative z-10">
        <div className="reveal label-line">
          <span className={`t-label ${isArabic ? "arabic" : ""}`}>{t.portfolio.label}</span>
        </div>

        <div className="reveal flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-24">
          <h2 className={`t-title ${isArabic ? "arabic" : ""}`} style={{ maxWidth: 480 }}>
            {t.portfolio.title}
          </h2>
        </div>

        {/* Full-width case list */}
        <div className="reveal">
          {cases.map((c, i) => {
            const projectData = t.portfolio.projects[i];
            return (
              <div
                key={c.id}
                className="group border-b relative"
                style={{
                  borderColor: "rgba(255,255,255,0.07)",
                  borderTop: i === 0 ? "1px solid rgba(255,255,255,0.07)" : "none",
                }}
                onMouseEnter={() => setHovered(c.id)}
                onMouseLeave={() => setHovered(null)}
                onClick={() => setModal(c)}
                data-cursor="true"
                data-cursor-label="View"
              >
                <div
                  className="flex items-center gap-6 py-10 lg:py-14"
                  style={{ cursor: "none" }}
                >
                  {/* Index */}
                  <span
                    className="t-label hidden lg:block flex-shrink-0"
                    style={{
                      color: hovered === c.id ? c.accent : "rgba(255,255,255,0.18)",
                      transition: "color 0.3s ease",
                      width: 36,
                    }}
                  >
                    {c.index}
                  </span>

                  {/* Name */}
                  <span
                    className={`flex-1 transition-all duration-400 ${isArabic ? "arabic" : ""}`}
                    style={{
                      fontSize: "clamp(32px, 5vw, 64px)",
                      fontWeight: 800,
                      letterSpacing: "-0.03em",
                      color: hovered === c.id ? "#fff" : "rgba(255,255,255,0.6)",
                      transform: hovered === c.id ? "translateX(16px)" : "translateX(0)",
                    }}
                  >
                    {projectData?.client || c.name}
                  </span>

                  {/* Category + arrow */}
                  <div className="hidden lg:flex items-center gap-4 flex-shrink-0">
                    <span
                      className={`t-label ${isArabic ? "arabic" : ""}`}
                      style={{ color: hovered === c.id ? "rgba(255,255,255,0.8)" : "rgba(255,255,255,0.18)" }}
                    >
                      {projectData?.category || c.category}
                    </span>
                    <div
                      style={{
                        width: 56, height: 56,
                        borderRadius: "50%",
                        border: `1px solid ${hovered === c.id ? c.accent : "rgba(255,255,255,0.1)"}`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                        transform: hovered === c.id ? "rotate(-45deg) scale(1.05)" : "rotate(0deg) scale(1)",
                        background: hovered === c.id ? "rgba(255,255,255,0.05)" : "transparent",
                        boxShadow: hovered === c.id ? `0 0 20px ${c.accent}40` : "none"
                      }}
                    >
                      <ArrowUpRight size={20} color={hovered === c.id ? c.accent : "rgba(255,255,255,0.3)"} />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Case Study Modal */}
      <AnimatePresence>
        {modal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[2000] flex items-end lg:items-center justify-center p-4 lg:p-8"
            style={{ background: "rgba(0,0,0,0.92)", backdropFilter: "blur(30px)" }}
            onClick={() => setModal(null)}
          >
            <motion.div
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 60, opacity: 0 }}
              transition={{ type: "spring", damping: 26, stiffness: 300 }}
              className="relative w-full rounded-2xl overflow-hidden"
              style={{
                maxWidth: 780,
                background: "#0c0c0c",
                border: `1px solid ${modal.accent}22`,
                maxHeight: "90vh",
                overflowY: "auto",
              }}
              onClick={e => e.stopPropagation()}
            >
              {/* Accent strip */}
              <div style={{ height: 3, background: modal.accent, width: "100%" }} />

              <div className="p-8 lg:p-12">
                <div className="flex items-start justify-between mb-8">
                  <div>
                    <p className={`t-label mb-3 ${isArabic ? "arabic" : ""}`} style={{ color: modal.accent }}>
                      {t.portfolio.projects.find(p => p.id === modal.index)?.category || modal.category}
                    </p>
                    <h3 className={isArabic ? "arabic" : ""} style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 800, letterSpacing: "-0.025em" }}>
                      {t.portfolio.projects.find(p => p.id === modal.index)?.client || modal.name}
                    </h3>
                    <p className={`mt-1 t-body ${isArabic ? "arabic" : ""}`}>
                      {t.portfolio.projects.find(p => p.id === modal.index)?.title || modal.tagline}
                    </p>
                  </div>
                  <button
                    onClick={() => setModal(null)}
                    className="p-3 rounded-full hover:bg-white/10 transition-colors"
                  >
                    <X size={24} color="#fff" />
                  </button>
                </div>

                <div className="w-full aspect-video rounded-xl mb-12 flex items-center justify-center" style={{ background: "rgba(255,255,255,0.02)" }}>
                  <span className="t-label" style={{ color: "rgba(255,255,255,0.2)" }}>Project Visuals Placeholder</span>
                </div>

                <div className="grid md:grid-cols-[1fr_240px] gap-12">
                  <div>
                    <p className="t-body">{modal.desc}</p>
                  </div>
                  <div className="space-y-6">
                    {modal.metrics.map((m, i) => (
                      <div key={i} className="border-l-2 pl-4" style={{ borderColor: modal.accent }}>
                        <div style={{ fontSize: 32, fontWeight: 800, color: "#fff", lineHeight: 1 }}>{m.v}</div>
                        <div className="t-label mt-1" style={{ color: "rgba(255,255,255,0.5)" }}>{m.l}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
