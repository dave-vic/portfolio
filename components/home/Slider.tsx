"use client";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";
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

function useSlides() {
  const [k, setK] = useState(0);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setK((v) => (v + 1) % SLIDES.length), 5000);
    return () => clearInterval(id);
  }, [paused]);
  return { k, go: (d: number) => { setPaused(true); setK((v) => (v + d + SLIDES.length) % SLIDES.length); } };
}

function Front({ s, radius, shadow }: { s: (typeof SLIDES)[number]; radius: number; shadow?: boolean }) {
  const reduce = useReducedMotion();
  return (
    <AnimatePresence mode="popLayout" initial={false}>
      <motion.div key={s.img}
        initial={reduce ? false : { opacity: 0, rotate: -6, x: "18%" }}
        animate={{ opacity: 1, rotate: 0, x: 0 }}
        exit={reduce ? undefined : { opacity: 0, rotate: 6, x: "-18%" }}
        transition={{ duration: 0.8, ease: EASE }}
        style={{ position: "absolute", inset: 0, borderRadius: u(radius), overflow: "hidden", boxShadow: shadow ? `0 ${u(24)} ${u(60)} rgba(0,0,0,.18)` : undefined, background: "#fff" }}
      >
        <img src={s.img} alt={s.alt} style={{ width: "100%", height: "auto", minHeight: "100%", objectFit: "cover", objectPosition: "top" }} />
      </motion.div>
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
  const { k, go } = useSlides();
  const s = SLIDES[k];
  const n = `0${k + 1} / 03`;
  return (
    <section data-label="(04) WORK" aria-roledescription="carousel" aria-label="Featured work">
      {/* desktop */}
      <div className="only-d sec" style={{ height: u(1117), background: "var(--bone)" }}>
        {[["FEATURED", `(${n})`, 56], ["CLIENT:", s.client, 476], ["ROLE:", s.role, 896], ["YEAR:", s.year, 1316]].map(([a, b, x]) => (
          <p key={a as string} className="mono abs" style={{ ...at(x as number, 110), ...t(12, 1.4, 0.24) }}>{a}<br />{b}</p>
        ))}
        <Marquee text={s.name} size={300} ls={-12} top={330} left={-120} />
        {/* stacked cards behind */}
        <div style={{ ...at(464, 236.19, 832.93, 554.59), display: "flex", alignItems: "center", justifyContent: "center" }}>
          <img src="/home/slide-back1.jpg" alt="" style={{ width: u(800), height: u(500), objectFit: "cover", objectPosition: "top", borderRadius: u(4), transform: "rotate(-4deg)" }} />
        </div>
        <div style={{ ...at(437.83, 292, 825.07, 541.18), display: "flex", alignItems: "center", justifyContent: "center" }}>
          <img src="/home/slide-back2.jpg" alt="" style={{ width: u(800), height: u(500), objectFit: "cover", objectPosition: "top", borderRadius: u(4), transform: "rotate(3deg)" }} />
        </div>
        <div style={at(461, 290, 806.4, 504)}><Front s={s} radius={7} shadow /></div>
        <p className="mono abs" style={{ ...at(864, 874, 620), transform: "translateX(-50%)", textAlign: "center", ...t(12, 1.5, 0.24) }}>{s.desc}</p>
        <p className="mono abs" style={{ ...at(660, 938), ...t(11, 1.4, 0.33), whiteSpace: "pre" }}>{s.stats.map(([a, b]) => `${a} ${b}`).join("      ·      ")}</p>
        <Link href="/work" className="mono abs pre" style={{ ...at(802, 972), ...t(11, 1.4, 0.33), color: "var(--laterite)" }}>{`SEE ALL WORK  →`}</Link>
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
              <Marquee text={s.name} size={T ? 190 : 120} ls={T ? -7.6 : -4.8} top={0} left={-10} />
              <div style={{ position: "absolute", left: u(T ? 80 : 28), top: u(T ? 67 : 72), width: u(W), height: u(H), transform: "rotate(4deg)", borderRadius: u(4), overflow: "hidden" }}>
                <img src="/home/slide-back1.jpg" alt="" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }} />
              </div>
              <div style={{ position: "absolute", left: u(T ? 58 : 28), top: u(T ? 114 : 72), width: u(W), height: u(H), transform: "rotate(-3deg)", borderRadius: u(4), overflow: "hidden" }}>
                <img src="/home/slide-back2.jpg" alt="" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }} />
              </div>
              <div style={{ position: "absolute", left: u(T ? 73 : 28), top: u(T ? 114 : 72), width: u(W), height: u(H), transform: "rotate(-1deg)" }}>
                <Front s={s} radius={T ? 5.85 : 3.25} shadow />
              </div>
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
