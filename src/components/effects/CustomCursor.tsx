"use client";

import { useRef, useEffect } from "react";

export default function CustomCursor() {
  const dotRef   = useRef<HTMLDivElement>(null);
  const ringRef  = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot   = dotRef.current;
    const ring  = ringRef.current;
    const label = labelRef.current;
    if (!dot || !ring || !label) return;

    let rx = -100, ry = -100, mx = -100, my = -100;
    let raf: number;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX; my = e.clientY;
      dot.style.transform = `translate(calc(${mx}px - 50%), calc(${my}px - 50%))`;
    };

    const lerp = () => {
      rx += (mx - rx) * 0.11;
      ry += (my - ry) * 0.11;
      ring.style.transform  = `translate(calc(${rx}px - 50%), calc(${ry}px - 50%))`;
      label.style.transform = `translate(calc(${rx}px - 50%), calc(${ry + 26}px - 50%))`;
      raf = requestAnimationFrame(lerp);
    };
    lerp();

    const expand = (e: Event) => {
      const el = e.currentTarget as HTMLElement;
      const lbl = el.dataset.cursorLabel || "";
      ring.classList.add("--expanded");
      if (lbl) { label.textContent = lbl; label.classList.add("--visible"); }
    };
    const contract = () => {
      ring.classList.remove("--expanded");
      label.classList.remove("--visible");
    };

    window.addEventListener("mousemove", onMove, { passive: true });

    const targets = document.querySelectorAll("[data-cursor]");
    targets.forEach(el => {
      el.addEventListener("mouseenter", expand);
      el.addEventListener("mouseleave", contract);
    });

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      targets.forEach(el => {
        el.removeEventListener("mouseenter", expand);
        el.removeEventListener("mouseleave", contract);
      });
    };
  }, []);

  return (
    <>
      <div ref={dotRef}   className="cursor-dot" />
      <div ref={ringRef}  className="cursor-ring" />
      <div ref={labelRef} className="cursor-label" />
    </>
  );
}
