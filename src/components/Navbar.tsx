"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/components/providers/LanguageProvider";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);
  const { t, language, toggleLanguage } = useLanguage();
  const isArabic = language === "ar";

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const go = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[900] ${isArabic ? "rtl" : ""}`}
        style={{
          background:   scrolled ? "rgba(5,5,5,0.88)" : "transparent",
          backdropFilter: scrolled ? "blur(28px)" : "none",
          borderBottom:   scrolled ? "1px solid rgba(255,255,255,0.05)" : "none",
          transition: "background 0.4s ease, backdrop-filter 0.4s ease",
        }}
      >
        <div className="wrap flex items-center justify-between" style={{ height: 80 }}>

          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            data-cursor="true"
            style={{ cursor: "none" }}
            className="relative w-48 h-14"
          >
            <img 
              src="/logo.png" 
              alt="BrandMe" 
              className="w-full h-full object-contain origin-left scale-[1.6]"
            />
          </button>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-10">
            {["work", "services", "process", "contact"].map((link) => (
              <button
                key={link}
                onClick={() => go(`#${link}`)}
                data-cursor="true"
                className="t-label hover:text-white transition-colors duration-300"
                style={{ color: "rgba(255,255,255,0.5)", cursor: "none" }}
              >
                {t.nav[link as keyof typeof t.nav]}
              </button>
            ))}
            <button
              onClick={toggleLanguage}
              className="t-label hover:text-white transition-colors"
              style={{ color: "rgba(255,255,255,0.5)", cursor: "none" }}
            >
              {isArabic ? "EN" : "عربي"}
            </button>
          </nav>

          {/* CTA */}
          <div className="hidden lg:block flex-shrink-0">
            <button
              onClick={() => go("#contact")}
              className={`mag-btn ${isArabic ? "arabic" : ""}`}
              style={{
                background: "rgba(123,198,0,0.1)",
                color: "#7BC600",
                border: "1px solid rgba(123,198,0,0.3)",
                padding: "0 32px", // slightly tighter for navbar
                minHeight: "48px", // navbar buttons can be slightly smaller than hero, but user requested 56px min. Let's use 56px to strictly follow the prompt.
              }}
            >
              {t.nav.startProject}
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setOpen(v => !v)}
          >
            <span style={{ width: 24, height: 1, background: open ? "transparent" : "#fff", display: "block", transition: "all 0.3s" }} />
            <span style={{ width: open ? 24 : 16, height: 1, background: "#fff", display: "block", transition: "all 0.3s" }} />
            <span style={{ width: 24, height: 1, background: open ? "transparent" : "#fff", display: "block", transition: "all 0.3s" }} />
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      {open && (
        <div
          className="fixed inset-0 z-[800] flex flex-col justify-center px-8"
          style={{ background: "#050505" }}
        >
          {["work", "services", "process", "contact"].map((link, i) => (
            <button
              key={link}
              onClick={() => go(`#${link}`)}
              className={`text-left border-b ${isArabic ? "arabic text-right" : ""}`}
              style={{
                fontSize: "clamp(36px, 8vw, 64px)",
                fontWeight: 800,
                color: "#fff",
                padding: "20px 0",
                borderColor: "rgba(255,255,255,0.06)",
                animation: `fadeUp 0.5s ease ${i * 0.06}s both`,
              }}
            >
              {t.nav[link as keyof typeof t.nav]}
            </button>
          ))}
          <button
            onClick={() => go("#contact")}
            className={`mag-btn mt-10 ${isArabic ? "arabic" : ""}`}
            style={{
              background: "#7BC600",
              color: "#050505",
              width: "fit-content",
            }}
          >
            {t.nav.startProject}
          </button>
        </div>
      )}
    </>
  );
}
