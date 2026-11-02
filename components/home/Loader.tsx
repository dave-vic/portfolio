"use client";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { finishIntro } from "@/lib/intro";
import { t, u } from "@/lib/u";

const EASE = [0.2, 0.7, 0.1, 1] as const;
const COUNT_MS = 2000;
/** plays on every full page load; moving between pages inside the site does not replay it */
let playedThisLoad = false;

/**
 * Figma "Loader": the bracketed photo with "Bringing the work in", a counter 000 → 100 over a rust line,
 * then "Welcome", the brackets open up and the page takes over. Once per visit; SKIP ends it at once.
 */
export default function Loader() {
  const [gone, setGone] = useState(false);
  const [n, setN] = useState(0);
  const [phase, setPhase] = useState<"count" | "welcome" | "grow" | "out">("count");
  const raf = useRef(0);
  const timers = useRef<number[]>([]);

  const end = () => {
    cancelAnimationFrame(raf.current);
    timers.current.forEach(clearTimeout);
    window.scrollTo(0, 0);
    document.documentElement.style.overflow = "";
    finishIntro();
    setGone(true);
  };

  useEffect(() => {
    if (playedThisLoad || window.matchMedia("(prefers-reduced-motion: reduce)").matches) { end(); return; }
    playedThisLoad = true;
    document.documentElement.style.overflow = "hidden";
    const t0 = performance.now() + 250;
    const tick = (now: number) => {
      const p = Math.min(1, Math.max(0, (now - t0) / COUNT_MS));
      const e = 1 - Math.pow(1 - p, 2.2); // eases out, like a real load slowing near the end
      setN(Math.round(e * 100));
      if (p < 1) raf.current = requestAnimationFrame(tick);
      else {
        setPhase("welcome");
        timers.current.push(window.setTimeout(() => setPhase("grow"), 550));
        timers.current.push(window.setTimeout(() => { setPhase("out"); finishIntro(); }, 1350));
        timers.current.push(window.setTimeout(end, 2050));
      }
    };
    raf.current = requestAnimationFrame(tick);
    const ts = timers.current;
    return () => { cancelAnimationFrame(raf.current); ts.forEach(clearTimeout); document.documentElement.style.overflow = ""; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (gone) return null;
  const welcome = phase !== "count";
  const grow = phase === "grow" || phase === "out";
  const mono = { ...t(11, 1.45, 0.33) };
  const pad = `clamp(20px, ${u(56)}, 56px)`;

  return (
    <motion.div id="dd-loader" role="status" aria-label="Loading"
      animate={{ opacity: phase === "out" ? 0 : 1 }}
      transition={{ duration: 0.7, ease: EASE }}
      style={{ position: "fixed", inset: 0, zIndex: 200, background: "var(--bone)", color: "var(--ink)", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: `clamp(16px, ${u(36)}, 40px) ${pad} clamp(20px, ${u(44)}, 48px)`, pointerEvents: phase === "out" ? "none" : "auto" }}>
      {/* top row */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: welcome ? 0.3 : 1 }} transition={{ duration: 0.6 }}
        className="mono" style={{ display: "flex", justifyContent: "space-between", ...mono }}>
        <p>DAVIDA DZATO®<br />PRODUCT DESIGN · PM · ANALYSIS · AI</p>
        <button onClick={end} className="mono pre" style={{ ...mono, height: "fit-content" }}>{`SKIP  →`}</button>
      </motion.div>

      {/* centre: ( photo ) + caption */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <motion.div initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: grow ? 2.6 : 1 }}
          transition={{ duration: grow ? 1.2 : 0.8, ease: EASE }}
          style={{ display: "flex", alignItems: "center", gap: `clamp(6px, ${u(14)}, 14px)` }}>
          <span className="sans" style={{ fontSize: `clamp(44px, ${u(76)}, 80px)`, lineHeight: 1, fontWeight: 300 }}>(</span>
          <motion.span initial={{ width: 0 }} animate={{ width: `clamp(64px, ${u(110)}, 116px)` }} transition={{ duration: 1, ease: EASE, delay: 0.2 }}
            style={{ display: "block", height: `clamp(38px, ${u(64)}, 68px)`, overflow: "hidden", position: "relative" }}>
            <img src="/home/hero-photo.jpg" alt="" style={{ position: "absolute", height: "100%", width: "auto", maxWidth: "none", left: "50%", transform: "translateX(-50%) scale(1.7)" }} />
          </motion.span>
          <span className="sans" style={{ fontSize: `clamp(44px, ${u(76)}, 80px)`, lineHeight: 1, fontWeight: 300 }}>)</span>
        </motion.div>
        <div style={{ height: `clamp(26px, ${u(40)}, 40px)`, position: "relative", width: "100%", marginTop: `clamp(10px, ${u(16)}, 16px)` }}>
          <AnimatePresence mode="wait" initial={false}>
            <motion.p key={welcome ? "w" : "b"} className="serif"
              initial={{ opacity: 0, filter: "blur(6px)" }} animate={{ opacity: grow ? 0 : 1, filter: "blur(0px)" }} exit={{ opacity: 0, filter: "blur(6px)" }}
              transition={{ duration: 0.45 }}
              style={{ position: "absolute", left: 0, right: 0, textAlign: "center", fontStyle: "italic", fontSize: `clamp(16px, ${u(24)}, 26px)`, lineHeight: 1.2 }}>
              {welcome ? "Welcome" : "Bringing the work in"}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>

      {/* bottom: counter, place, rust progress line */}
      <motion.div animate={{ opacity: welcome ? 0 : 1 }} transition={{ duration: 0.5 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <p className="anton" aria-live="off" style={{ fontSize: `clamp(72px, ${u(150)}, 170px)`, lineHeight: 0.9, fontVariantNumeric: "tabular-nums" }}>{String(n).padStart(3, "0")}</p>
          <p className="mono" style={{ ...mono, textAlign: "right", whiteSpace: "nowrap" }}>ACCRA, GHANA<br />05°33′N &nbsp;0°12′W</p>
        </div>
        <div style={{ position: "relative", height: 2, marginTop: `clamp(12px, ${u(20)}, 20px)`, background: "var(--line)" }}>
          <div style={{ position: "absolute", inset: 0, width: `${n}%`, background: "var(--laterite)" }} />
        </div>
      </motion.div>
    </motion.div>
  );
}
