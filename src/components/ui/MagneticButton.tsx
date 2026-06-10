"use client";

import { useRef, useCallback } from "react";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  "data-cursor"?: string;
  "data-cursor-label"?: string;
  type?: "button" | "submit";
}

export default function MagneticButton({
  children,
  className = "mag-btn mag-btn--primary",
  style,
  onClick,
  type = "button",
  ...rest
}: MagneticButtonProps) {
  const btnRef = useRef<HTMLButtonElement>(null);

  const onMouseMove = useCallback((e: React.MouseEvent) => {
    const btn = btnRef.current;
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    const cx   = rect.left + rect.width  / 2;
    const cy   = rect.top  + rect.height / 2;
    const dx   = (e.clientX - cx) * 0.38;
    const dy   = (e.clientY - cy) * 0.38;
    btn.style.translate = `${dx}px ${dy}px`;
  }, []);

  const onMouseLeave = useCallback(() => {
    const btn = btnRef.current;
    if (!btn) return;
    btn.style.translate = "0px 0px";
    btn.style.transition = "translate 0.55s cubic-bezier(0.23, 1, 0.32, 1), transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)";
    setTimeout(() => { if (btn) btn.style.transition = ""; }, 560);
  }, []);

  return (
    <button
      ref={btnRef}
      type={type}
      className={className}
      style={{ willChange: "transform", ...style }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      data-cursor="true"
      {...rest}
    >
      {children}
    </button>
  );
}
