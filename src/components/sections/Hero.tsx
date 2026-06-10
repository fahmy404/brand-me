"use client";

import { useState, useEffect, useRef } from "react";
import MagneticButton from "@/components/ui/MagneticButton";
import { useLanguage } from "@/components/providers/LanguageProvider";
export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const { t, language } = useLanguage();
  const arabic = language === "ar";
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  // Canvas particle animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = canvas.width = window.innerWidth;
    let h = canvas.height = window.innerHeight;

    let mx = w / 2;
    let my = h / 2;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
    };
    window.addEventListener("mousemove", onMove);

    class Particle {
      x: number; y: number; vx: number; vy: number; radius: number;
      constructor() {
        this.x = Math.random() * w;
        this.y = Math.random() * h;
        this.vx = (Math.random() - 0.5) * 0.8;
        this.vy = (Math.random() - 0.5) * 0.8;
        this.radius = Math.random() * 2 + 0.5;
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > w) this.vx *= -1;
        if (this.y < 0 || this.y > h) this.vy *= -1;

        // Mouse interaction
        const dx = mx - this.x;
        const dy = my - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 150) {
          this.x -= dx * 0.01;
          this.y -= dy * 0.01;
        }
      }
      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(123, 198, 0, 0.4)";
        ctx.fill();
        // Glow
        ctx.shadowBlur = 10;
        ctx.shadowColor = "#7BC600";
      }
    }

    const particles: Particle[] = [];
    const count = Math.min(window.innerWidth / 15, 100);
    for (let i = 0; i < count; i++) particles.push(new Particle());

    let raf: number;
    const animate = () => {
      ctx.clearRect(0, 0, w, h);
      ctx.shadowBlur = 0;

      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();

        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(123, 198, 0, ${0.15 - dist / 120 * 0.15})`;
            ctx.lineWidth = 1;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(animate);
    };
    animate();

    const onResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  const activeLines = t.hero.headline;

  const go = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen flex flex-col overflow-hidden"
      style={{ background: "#050505" }}
    >
      {/* Animated Green Particle Network */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{ opacity: 0.8 }}
      />

      {/* Stronger ambient spotlight */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background: "radial-gradient(circle at center, rgba(123,198,0,0.15) 0%, transparent 60%)",
        }}
      />

      {/* Content wrapper */}
      <div className="relative z-10 flex flex-col wrap w-full">

        {/* Top spacer for navbar */}
        <div style={{ height: 160 }} className="flex-shrink-0" />

        {/* Main content */}
        <div className="flex flex-col pt-8 pb-32 lg:pb-40">

          <div style={{ marginBottom: "clamp(2rem, 4vw, 4rem)" }}>
            <p className={`t-label mb-4 ${arabic ? "arabic" : ""}`} style={{ color: "rgba(255,255,255,0.4)" }}>
              {t.hero.subheadline}
            </p>
          </div>

          {/* Giant headline */}
          <h1
            className={`t-hero ${arabic ? "arabic" : ""}`}
            style={{ color: "#fff", marginBottom: "clamp(3rem, 6vw, 6rem)" }}
          >
            {mounted && activeLines.map((line: any, i: number) => (
              <span
                key={`${arabic}-${i}`}
                className="word-clip"
                style={{ display: "block" }}
              >
                <span
                  className="word-inner"
                  style={{
                    color: line.green ? "#7BC600" : "#fff",
                    textShadow: line.green ? "0 0 40px rgba(123,198,0,0.4)" : "none",
                    animationDelay: `${i * 0.07}s`,
                    display: "block",
                  }}
                >
                  {line.text}
                </span>
              </span>
            ))}
          </h1>

          {/* Bottom bar */}
          <div
            className="flex flex-col md:flex-row md:items-end justify-between gap-8 pt-8 lg:pt-12"
            style={{ animation: "fadeUp 0.9s ease 0.5s both" }}
          >
            {/* Tagline */}
            <p
              className={`t-body ${arabic ? "arabic" : ""}`}
              style={{ maxWidth: 440, color: "rgba(255,255,255,0.7)" }}
            >
              {t.hero.desc}
            </p>

            {/* CTAs */}
            <div className="flex items-center gap-4 flex-shrink-0" style={{ marginBottom: "120px" }}>
              <MagneticButton
                className={`mag-btn mag-btn--primary ${arabic ? "arabic" : ""}`}
                onClick={() => go("#portfolio")}
                data-cursor="true"
                data-cursor-label="View"
              >
                {t.hero.btnWork}
              </MagneticButton>
              <MagneticButton
                className={`mag-btn mag-btn--outline ${arabic ? "arabic" : ""}`}
                onClick={() => go("#contact")}
                data-cursor="true"
              >
                {t.hero.btnProject}
              </MagneticButton>
            </div>
          </div>
        </div>

        {/* Stats bar at bottom */}
        <div
          className="border-t flex flex-col sm:flex-row backdrop-blur-sm mt-8"
          style={{
            borderColor: "rgba(123,198,0,0.15)",
            animation: "fadeIn 1s ease 1s both",
            background: "rgba(0,0,0,0.2)",
          }}
        >
          {[
            t.hero.stats.s1,
            t.hero.stats.s2,
            t.hero.stats.s3,
            t.hero.stats.s4,
          ].map((s, i) => (
            <div
              key={i}
              className={`flex-1 flex flex-col justify-center py-6 sm:py-8 ${arabic ? "arabic" : ""}`}
              style={{
                borderRight: i < 3 && !arabic ? "1px solid rgba(123,198,0,0.15)" : "none",
                borderLeft: i < 3 && arabic ? "1px solid rgba(123,198,0,0.15)" : "none",
                paddingLeft: !arabic ? "clamp(1.5rem, 3vw, 3rem)" : "0",
                paddingRight: arabic ? "clamp(1.5rem, 3vw, 3rem)" : "0",
              }}
            >
              <div
                style={{
                  fontSize: "clamp(28px, 3.5vw, 42px)",
                  fontWeight: 800,
                  color: "#7BC600",
                  lineHeight: 1.1,
                  textShadow: "0 0 20px rgba(123,198,0,0.3)",
                  marginBottom: 8
                }}
              >
                {s.n}
              </div>
              <div className="t-label" style={{ color: "rgba(255,255,255,0.4)" }}>
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
