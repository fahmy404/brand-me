import { useEffect, useRef, RefObject } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Runs a GSAP context after the preloader finishes (3.4s delay).
 * Returns the ref to attach to the section container.
 */
export function useGsapAfterLoad<T extends HTMLElement>(
  animateFn: (ctx: gsap.Context) => void,
  delay = 3400
): RefObject<T | null> {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!ref.current) return;
      const ctx = gsap.context(() => {
        animateFn(ctx);
      }, ref);

      return () => ctx.revert();
    }, delay);

    return () => clearTimeout(timer);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return ref;
}
