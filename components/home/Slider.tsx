"use client";
import Link from "next/link";
import { AnimatePresence, motion, useInView, useMotionValue, useReducedMotion, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";
import Reveal from "@/components/Reveal";
import { at, t, u } from "@/lib/u";

const EASE = [0.2, 0.7, 0.1, 1] as const;
const SLIDES = [
  { name: "LOCO POS", client: "NERDION TECH · TANZANIA", role: "LEAD DESIGNER · WEB · MOBILE · POS", year: "2026", img: "/home/slide-loco.jpg", alt: "Loco business overview dashboard",
    desc: "A SHOP, A RESTAURANT AND A HOTEL RUN THEIR WHOLE DAY ON LOCO. I DESIGNED IT FOR THE OWNER, THE CASHIER, THE WAITER AND THE CUSTOMER ORDERING ONLINE.",
    stats: [["4", "SURFACES"], ["300+", "SCREENS"], ["13", "DEVICES"]] },
  { name: "TALENT HUB", client: "SILVER ROCK TECHNOLOGIES · GHANA", role: "LEAD PRODUCT DESIGNER", year: "2025 – 2026", img: "/home/slide-th.jpg", alt: "Ghana Talent Hub welcome screen",
    desc: "ONE NATIONAL PLATFORM, FIVE PRODUCTS: FOR STUDENTS, PARENTS, SCHOOLS, RECRUITERS AND GOVERNMENT, IN A FOCUSED MODE AND A PLAYFUL ONE.",
    stats: [["5", "AUDIENCES"], ["2", "MODES"], ["AA", "WCAG 2.1"]] },
  { name: "HR PORTAL", client: "THE NINANI GROUP · GHANA", role: "UX · UI · AI FEATURE", year: "2025", img: "/home/slide-hr.jpg", alt: "Ninani HR portal home on a tablet",
    desc: "SIX ROLES, ONE PORTAL: FROM AN EMPLOYEE ASKING FOR LEAVE TO THE COO SIGNING IT OFF, WITH AN AI HELPER ON HAND.",
    stats: [["6", "ROLES"], ["3", "SCREEN SIZES"], ["1", "AI HELPER"]] },
];

/** advances on its own only while on screen, starting after the entrance has played */
function useSlides(active: boolean) {
  const [[k, dir], setK] = useState<[number, number]>([0, 1]);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (!active || paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setK(([v]) => [(v + 1) % SLIDES.length, 1]), 6000);
    return () => clearInterval(id);
  }, [paused, active]);
  return { k, dir, go: (d: number) => { setPaused(true); setK(([v]) => [(v + d + SLIDES.length) % SLIDES.length, d]); } };
}

/** letters shuffle and settle on the new name when the slide changes (Figma motion) */
const GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
function useScramble(text: string) {
  const [out, setOut] = useState(text);
  const first = useRef(true);
  useEffect(() => {
    if (first.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches) { first.current = false; setOut(text); return; }
    let f = 0; const total = 16;
    const id = setInterval(() => {
      f++;
      setOut([...text].map((c, i) => (c === " " || i < (f / total) * text.length ? c : GLYPHS[Math.floor(Math.random() * GLYPHS.length)])).join(""));
      if (f >= total) { clearInterval(id); setOut(text); }
    }, 40);
    return () => clearInterval(id);
  }, [text]);
  return out;
}

/** the screens fly in from the top right, tilted in 3D, and land in a stack */
function Fly({ i, children, style }: { i: number; children: React.ReactNode; style: React.CSSProperties }) {
  return (
    <motion.div style={{ ...style, transformPerspective: 1600 }}
      initial={{ opacity: 0, x: u(520), y: u(-420), rotate: 18, rotateX: 35, rotateY: -25 }}
      whileInView={{ opacity: 1, x: 0, y: 0, rotate: 0, rotateX: 0, rotateY: 0 }}
      viewport={{ once: true, margin: "0px 0px -15% 0px" }}
      transition={{ duration: 1.25, ease: EASE, delay: 0.7 + i * 0.14 }}>
      {children}
    </motion.div>
  );
}

/** the big name glides in from the right in grey, then settles in ink and starts to run */
function NameIn({ children }: { children: React.ReactNode }) {
  return (
    <motion.div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}
      initial={{ opacity: 0, x: u(700), color: "#a9a7a2" }}
      whileInView={{ opacity: 1, x: 0, color: "#141414" }}
      viewport={{ once: true, margin: "0px 0px -15% 0px" }}
      transition={{ opacity: { duration: 0.6, delay: 0.3 }, x: { duration: 1.3, ease: EASE, delay: 0.3 }, color: { duration: 0.8, delay: 1.2 } }}>
      {children}
    </motion.div>
  );
}

/** the front screen: drag or swipe it away and the next project comes forward from the stack */
function Front({ s, dir, radius, shadow, onFlick }: { s: (typeof SLIDES)[number]; dir: number; radius: number; shadow?: boolean; onFlick: (d: number) => void }) {
  const reduce = useReducedMotion();
  return (
    <AnimatePresence mode="popLayout" initial={false} custom={dir}>
      <Card key={s.img} s={s} radius={radius} shadow={shadow} onFlick={onFlick} reduce={!!reduce} />
    </AnimatePresence>
  );
}

const flick = {
  enter: { opacity: 0, scale: 0.9, y: "4%", rotate: -3 },
  show: { opacity: 1, scale: 1, y: "0%", x: 0, rotate: 0 },
  exit: (d: number) => ({ opacity: 0, x: d > 0 ? "-115%" : "115%", rotate: d > 0 ? -16 : 16, transition: { duration: 0.6, ease: EASE } }),
};

function Card({ s, radius, shadow, onFlick, reduce }: { s: (typeof SLIDES)[number]; radius: number; shadow?: boolean; onFlick: (d: number) => void; reduce: boolean }) {
  const x = useMotionValue(0);
  const tilt = useTransform(x, [-400, 0, 400], [-12, 0, 12]);
  return (
    <motion.div
      variants={flick} initial="enter" animate="show" exit={reduce ? undefined : "exit"}
      transition={{ duration: 0.8, ease: EASE }}
      drag="x" dragSnapToOrigin dragElastic={0.6}
      onDragEnd={(_, info) => {
        if (info.offset.x < -90 || info.velocity.x < -500) onFlick(1);
        else if (info.offset.x > 90 || info.velocity.x > 500) onFlick(-1);
      }}
      whileDrag={{ scale: 1.02 }}
      aria-label={`${s.name}. Drag or swipe to see the next project`}
      style={{ x, rotate: tilt, position: "absolute", inset: 0, borderRadius: u(radius), overflow: "hidden", boxShadow: shadow ? `0 ${u(24)} ${u(60)} rgba(0,0,0,.18)` : undefined, background: "#fff", cursor: "grab", touchAction: "pan-y", zIndex: 2 }}
    >
      <img decoding="async" draggable={false} src={s.img} alt={s.alt} style={{ width: "100%", height: "auto", minHeight: "100%", objectFit: "cover", objectPosition: "top", pointerEvents: "none", userSelect: "none" }} />
    </motion.div>
  );
}

/** the two screens waiting behind: the next projects in the loop */
function Back({ s, rot, style }: { s: (typeof SLIDES)[number]; rot: number; style?: React.CSSProperties }) {
  return (
    <AnimatePresence initial={false}>
      <motion.img key={s.img} decoding="async" src={s.img} alt=""
        initial={{ opacity: 0, rotate: rot * 2 }} animate={{ opacity: 1, rotate: rot }} exit={{ opacity: 0 }}
        transition={{ duration: 0.7, ease: EASE }}
        style={{ position: "absolute", objectFit: "cover", objectPosition: "top", borderRadius: u(4), boxShadow: `0 ${u(10)} ${u(30)} rgba(0,0,0,.08)`, ...style }} />
    </AnimatePresence>
  );
}

function Marquee({ text, size, ls, top, left }: { text: string; size: number; ls: number; top: number; left: number }) {
  const unit = `${text}  ·  `;
  return (
    <div aria-hidden style={{ position: "absolute", left: u(left), top: u(top), whiteSpace: "pre" }}>
      <div className="marquee">
        {[0, 1].map((i) => <span key={i} className="sans" style={{ ...t(size, 1, ls), paddingRight: 0 }}>{unit.repeat(3)}</span>)}
      </div>
    </div>
  );
}

export default function Slider() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { amount: 0.4 });
  const { k, dir, go } = useSlides(inView);
  const b1 = SLIDES[(k + 1) % SLIDES.length], b2 = SLIDES[(k + 2) % SLIDES.length];
  const s = SLIDES[k];
  const name = useScramble(s.name);
  const n = `0${k + 1} / 03`;
  return (
    <section ref={ref} data-label="(04) WORK" aria-roledescription="carousel" aria-label="Featured work">
      {/* desktop */}
      <div className="only-d sec" style={{ height: u(1117), background: "var(--bone)" }}>
        {[["FEATURED", `(${n})`, 56], ["CLIENT:", s.client, 476], ["ROLE:", s.role, 896], ["YEAR:", s.year, 1316]].map(([a, b, x], i) => (
          <Reveal key={a as string} delay={i * 0.12} y={10} style={at(x as number, 110)}><p className="mono" style={{ ...t(12, 1.4, 0.24) }}>{a}<br />{b}</p></Reveal>
        ))}
        <NameIn><Marquee text={name} size={300} ls={-12} top={330} left={-120} /></NameIn>
        {/* stacked cards behind */}
        <Fly i={0} style={{ ...at(464, 236.19, 832.93, 554.59), display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Back s={b2} rot={-4} style={{ width: u(800), height: u(500) }} />
        </Fly>
        <Fly i={1} style={{ ...at(437.83, 292, 825.07, 541.18), display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Back s={b1} rot={3} style={{ width: u(800), height: u(500) }} />
        </Fly>
        <Fly i={2} style={at(461, 290, 806.4, 504)}><Front s={s} dir={dir} radius={7} shadow onFlick={go} /></Fly>
        <Reveal delay={1.5} y={14} style={at(554, 874, 620)}><p className="mono" style={{ textAlign: "center", ...t(12, 1.5, 0.24) }}>{s.desc}</p></Reveal>
        <Reveal delay={1.65} y={14} style={at(660, 956)}><p className="mono" style={{ ...t(11, 1.4, 0.33), whiteSpace: "pre" }}>{s.stats.map(([a, b]) => `${a} ${b}`).join("      ·      ")}</p></Reveal>
        <Link href="/work" className="mono abs pre" style={{ ...at(802, 992), ...t(11, 1.4, 0.33), color: "var(--laterite)" }}>{`SEE ALL WORK  →`}</Link>
        <div className="mono abs" style={{ ...at(56, 1053), display: "flex", gap: u(48), ...t(12, "normal", 0.24) }}>
          <button onClick={() => go(-1)} aria-label="Previous project" className="pre">{`←  PREV`}</button>
          <button onClick={() => go(1)} aria-label="Next project" className="pre">{`NEXT  →`}</button>
        </div>
        <p className="mono abs" style={{ ...at(1620, 1053), ...t(12, "normal", 0.24) }} aria-live="polite">{n}</p>
      </div>

      {/* tablet + mobile */}
      {(["t", "m"] as const).map((bp) => {
        const T = bp === "t";
        const W = T ? 674 : 374, H = T ? 421 : 234;
        return (
          <div key={bp} className={T ? "only-t" : "only-m"} style={{ background: "var(--bone)", padding: `${u(T ? 104 : 72)} ${u(T ? 40 : 20)} ${u(T ? 104 : 72)}` }}>
            <div className="mono" style={{ display: "flex", justifyContent: "space-between", ...t(11, 1.5, 0.33) }}>
              <p>(04) WORK<br />FEATURED · {n}</p>
              <p style={{ color: "var(--muted-small)" }}>CLIENT<br />{s.client}</p>
            </div>
            <div style={{ position: "relative", height: u(T ? 563 : 334), marginTop: u(20), marginLeft: u(T ? -40 : -20), marginRight: u(T ? -40 : -20), overflow: "hidden" }}>
              <NameIn><Marquee text={name} size={T ? 190 : 120} ls={T ? -7.6 : -4.8} top={0} left={-10} /></NameIn>
              <Back s={b2} rot={4} style={{ left: u(T ? 80 : 28), top: u(T ? 67 : 72), width: u(W), height: u(H) }} />
              <Back s={b1} rot={-3} style={{ left: u(T ? 58 : 28), top: u(T ? 114 : 72), width: u(W), height: u(H) }} />
              <Fly i={0} style={{ position: "absolute", left: u(T ? 73 : 28), top: u(T ? 114 : 72), width: u(W), height: u(H) }}>
                <div style={{ position: "absolute", inset: 0, transform: "rotate(-1deg)" }}><Front s={s} dir={dir} radius={T ? 5.85 : 3.25} shadow onFlick={go} /></div>
              </Fly>
            </div>
            <p className="mono" style={{ ...t(11, 1.5, 0.33), marginTop: u(20) }}>{s.desc}</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: u(12), marginTop: u(20) }}>
              {s.stats.map(([a, b]) => (
                <div key={b} style={{ padding: `${u(13)} 0 0` }}>
                  <p className="sans" style={{ ...t(T ? 36 : 28, 1.1, T ? -0.54 : -0.42), fontWeight: 500 }}>{a}</p>
                  <p className="mono" style={{ ...t(11, 1.5, 0.33), color: "var(--muted-small)", marginTop: u(4) }}>{b}</p>
                </div>
              ))}
            </div>
            <div className="mono" style={{ display: "flex", justifyContent: "space-between", marginTop: u(20), ...t(11, 1.5, 0.33) }}>
              <span style={{ display: "flex", gap: u(30) }}>
                <button onClick={() => go(-1)} aria-label="Previous project" className="pre">{`←  PREV`}</button>
                <button onClick={() => go(1)} aria-label="Next project" className="pre">{`NEXT  →`}</button>
              </span>
              <Link href="/work" className="pre" style={{ color: "var(--laterite)" }}>{`SEE ALL WORK  →`}</Link>
            </div>
          </div>
        );
      })}
    </section>
  );
}
