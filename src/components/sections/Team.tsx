"use client";

import { useRef } from "react";
import { useRevealObserver } from "@/hooks/useRevealObserver";
import { ExternalLink } from "lucide-react";

const team = [
  { initials: "AM", name: "Ahmed Mohamed",  role: "Creative Director",  bio: "10+ years crafting visual identities that dominate markets.",                            color: "#7BC600" },
  { initials: "SR", name: "Sara Radwan",    role: "Brand Strategist",   bio: "Former McKinsey consultant. Turns brand chaos into market leadership.",                   color: "#8b5cf6" },
  { initials: "KF", name: "Khalid Farouk", role: "Head of Digital",    bio: "Performance marketer who has managed $2M+ in ad spend.",                                  color: "#f59e0b" },
  { initials: "NM", name: "Nour Mostafa",  role: "Content Director",   bio: "Storyteller who builds brand narratives that create loyal communities.",                   color: "#00c896" },
];

export default function Team() {
  const ref = useRef<HTMLElement>(null);
  useRevealObserver(ref);

  return (
    <section id="team" ref={ref} className="relative section-pad" style={{ background: "#050505" }}>
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(123,198,0,0.05) 0%, transparent 70%)" }}
      />
      <div className="container relative z-10">
        <div className="reveal flex items-center gap-4 mb-6">
          <div className="w-8 h-px" style={{ background: "#7BC600" }} />
          <span className="text-xs tracking-widest uppercase font-medium" style={{ color: "#7BC600" }}>The Team</span>
        </div>
        <div className="reveal flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <h2 style={{ fontSize: "clamp(1.8rem, 4.5vw, 3.5rem)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.02em" }}>
            The minds behind <span style={{ color: "#7BC600" }}>your success.</span>
          </h2>
          <p className="text-sm max-w-xs" style={{ color: "rgba(255,255,255,0.4)", lineHeight: 1.7 }}>
            Strategists, creatives, and growth experts united by one mission.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {team.map((m, i) => (
            <div
              key={i}
              className="reveal group relative overflow-hidden rounded-2xl p-6 card-hover"
              style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", transitionDelay: `${i * 0.08}s` }}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                style={{ background: `radial-gradient(circle at 50% 0%, ${m.color}10, transparent 70%)` }} />
              <div className="relative z-10 w-14 h-14 rounded-2xl flex items-center justify-center text-lg font-bold mb-5 transition-transform duration-300 group-hover:scale-105"
                style={{ background: `${m.color}18`, border: `1px solid ${m.color}30`, color: m.color }}>
                {m.initials}
              </div>
              <h3 className="relative z-10 text-base font-bold mb-1" style={{ color: "#fff" }}>{m.name}</h3>
              <p className="relative z-10 text-xs font-medium mb-3" style={{ color: m.color }}>{m.role}</p>
              <p className="relative z-10 text-xs leading-relaxed mb-5" style={{ color: "rgba(255,255,255,0.45)" }}>{m.bio}</p>
              <div className="relative z-10 flex items-center gap-1.5 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ color: "rgba(255,255,255,0.4)" }}>
                <ExternalLink size={11} />
                <span>Connect</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
