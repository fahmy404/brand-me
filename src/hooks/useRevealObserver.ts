import { useEffect, RefObject } from "react";

export function useRevealObserver(ref: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const items = container.querySelectorAll(".reveal");
    if (!items.length) return;

    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    items.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, [ref]);
}
