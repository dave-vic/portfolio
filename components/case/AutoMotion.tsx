"use client";
import { useEffect, useRef, type ReactNode } from "react";

/**
 * Case pages: every block below the hero enters the way the Figma case-motion frames were built.
 * Giant words slide in from their side, screens rise and settle from a slight zoom,
 * round badges pop open, everything else rises a little. Each part plays as it scrolls into view.
 */
export default function AutoMotion({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const root = ref.current;
    if (!root || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const sections = Array.from(root.querySelectorAll<HTMLElement>(":scope > section")).slice(1);
    const items: HTMLElement[] = [];
    for (const sec of sections) {
      for (const bp of Array.from(sec.querySelectorAll<HTMLElement>(":scope > .only-d, :scope > .only-t, :scope > .only-m, :scope > div"))) {
        if (bp.closest("[data-noauto]") || bp.offsetParent === null) continue;
        const W = bp.clientWidth || window.innerWidth;
        // flow layouts: go one level deeper when a child is just a wrapper column
        let kids = Array.from(bp.children) as HTMLElement[];
        if (kids.length === 1 && kids[0].children.length > 2) kids = Array.from(kids[0].children) as HTMLElement[];
        for (const el of kids) {
          if (el.closest("[data-noauto]") || el.dataset.noauto !== undefined || el.offsetHeight === 0 || el.style.opacity !== "") continue; // skip parts that already animate themselves
          const r = el.getBoundingClientRect();
          const big = Array.from(el.querySelectorAll<HTMLElement>(".anton, h2, p")).concat(el).some((n) => parseFloat(getComputedStyle(n).fontSize) >= W * 0.075);
          const img = !!el.querySelector("img") && r.width > W * 0.11 && r.height > 70;
          const cs = getComputedStyle(el);
          const round = Math.abs(r.width - r.height) < 8 && r.width > 50 && r.width < W * 0.2 && cs.borderRadius.includes("50%");
          const cls = big ? (r.left + r.width / 2 < W / 2 ? "am-big-l" : "am-big-r") : round ? "am-round" : img ? "am-img" : "am-txt";
          el.classList.add("am", cls);
          items.push(el);
        }
      }
    }
    let batch = 0, frame = 0;
    const io = new IntersectionObserver((es) => {
      const hits = es.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top || a.boundingClientRect.left - b.boundingClientRect.left);
      cancelAnimationFrame(frame);
      hits.forEach((e) => {
        const el = e.target as HTMLElement;
        el.style.transitionDelay = `${Math.min(batch++, 8) * 0.08}s`;
        el.classList.add("in");
        io.unobserve(el);
      });
      frame = requestAnimationFrame(() => { batch = 0; });
    }, { rootMargin: "0px 0px -8% 0px" });
    items.forEach((el) => io.observe(el));
    return () => { io.disconnect(); items.forEach((el) => el.classList.remove("am", "in", "am-big-l", "am-big-r", "am-round", "am-img", "am-txt")); };
  }, []);
  return <div ref={ref}>{children}</div>;
}
