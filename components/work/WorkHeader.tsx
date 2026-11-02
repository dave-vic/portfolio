"use client";
import Link from "next/link";
import { motion } from "motion/react";
import type { CSSProperties } from "react";
import { at, t, u } from "@/lib/u";

const EASE = [0.2, 0.7, 0.1, 1] as const;

type Tile = { x: number; y: number; w: number; h: number; src: string; img?: CSSProperties; pos?: string; href?: string; label?: string; from: "top" | "left" | "right" | "bottom" };
type Tag = { x: number; y: number; a: string; b: string };
type Layout = { W: number; H: number; off: number; work: { x: number; y: number; size: number; ls: number }; tiles: Tile[]; tags: Tag[]; tagSize: number; padX: number; padY: number; bottom: number; side: number; top?: number };

const TAGS = {
  hr: ["06  NINANI HR PORTAL", "HR · 6 ROLES"],
  th: ["02  GHANA TALENT HUB", "EDTECH · 5 AUDIENCES"],
  cl: ["05  CLAIMS REDESIGN", "INSURANCE · 3 PERSONAS"],
};

const D: Layout = {
  W: 1728, H: 1117, off: 0, work: { x: 59, y: 219, size: 760, ls: -7.6 }, tagSize: 11, padX: 8, padY: 6, bottom: 1057, side: 56,
  tiles: [
    { x: 0, y: 250, w: 90, h: 300, src: "/work/h-left.jpg", from: "left" },
    { x: 140, y: 200, w: 520, h: 660, src: "/work/h-hr.jpg", pos: "top", href: "/work/hr-portal", label: "Ninani HR portal", from: "top" },
    { x: 710, y: 200, w: 380, h: 480, src: "/work/h-talent.jpg", href: "/work/talent-hub", label: "Ghana Talent Hub", from: "top",
      img: { position: "absolute", height: "100%", width: "195.41%", left: "-3.91%", top: 0, maxWidth: "none", objectFit: "fill" } },
    { x: 1140, y: 200, w: 400, h: 560, src: "/work/h-claims.jpg", pos: "top", href: "/work/claims", label: "Claims experience redesign", from: "top" },
    { x: 1590, y: 250, w: 200, h: 300, src: "/work/h-right.jpg", from: "right" },
  ],
  tags: [{ x: 150, y: 872, a: TAGS.hr[0], b: TAGS.hr[1] }, { x: 720, y: 692, a: TAGS.th[0], b: TAGS.th[1] }, { x: 1150, y: 772, a: TAGS.cl[0], b: TAGS.cl[1] }],
};
const T: Layout = {
  W: 834, H: 900, off: 66, work: { x: 20, y: 285, size: 370, ls: 0 }, tagSize: 10, padX: 7, padY: 5, bottom: 860, side: 40, top: 24,
  tiles: [
    { x: 40, y: 180, w: 300, h: 400, src: "/work/h-talent.jpg", href: "/work/talent-hub", label: "Ghana Talent Hub", from: "left" },
    { x: 470, y: 140, w: 300, h: 330, src: "/work/h-hr-mid.jpg", href: "/work/hr-portal", label: "Ninani HR portal", from: "top" },
    { x: 400, y: 560, w: 320, h: 220, src: "/work/h-claims-mid.jpg", href: "/work/claims", label: "Claims experience redesign", from: "bottom" },
  ],
  tags: [{ x: 40, y: 588, a: TAGS.th[0], b: TAGS.th[1] }, { x: 470, y: 478, a: TAGS.hr[0], b: TAGS.hr[1] }, { x: 400, y: 788, a: TAGS.cl[0], b: TAGS.cl[1] }],
};
const M: Layout = {
  W: 430, H: 640, off: 71, work: { x: 11, y: 245, size: 190, ls: 0 }, tagSize: 10, padX: 7, padY: 5, bottom: 600, side: 20, top: 24,
  tiles: [
    { x: 20, y: 150, w: 150, h: 200, src: "/work/h-talent.jpg", href: "/work/talent-hub", label: "Ghana Talent Hub", from: "left" },
    { x: 250, y: 108, w: 160, h: 178, src: "/work/h-hr-mid.jpg", href: "/work/hr-portal", label: "Ninani HR portal", from: "top" },
    { x: 150, y: 392, w: 180, h: 150, src: "/work/h-claims-mid.jpg", href: "/work/claims", label: "Claims experience redesign", from: "bottom" },
  ],
  tags: [{ x: 20, y: 358, a: TAGS.th[0], b: TAGS.th[1] }, { x: 250, y: 294, a: TAGS.hr[0], b: TAGS.hr[1] }, { x: 150, y: 550, a: TAGS.cl[0], b: TAGS.cl[1] }],
};

// screens drop in from above the frame, turning as they fall, then land (Figma motion)
const FROM = { top: { y: "-130%", x: 0 }, bottom: { y: "60%", x: 0 }, left: { x: "-120%", y: 0 }, right: { x: "120%", y: 0 } };
const TURN = [-9, 7, -6, 8, -7];

function Header({ L, cls }: { L: Layout; cls: string }) {
  const o = L.off;
  const mono = (s: number, ls: number): CSSProperties => ({ ...t(s, 1.5, ls) });
  return (
    <div className={`${cls} sec`} style={{ height: u(L.H + o), background: "var(--bone)" }}>
      {/* giant WORK */}
      <motion.p className="anton abs nowrap" aria-hidden
        style={{ ...at(L.work.x, L.work.y + o), ...t(L.work.size, 1, L.work.ls), color: "var(--laterite)", margin: 0 }}
        initial={{ opacity: 0, x: u(L.W * 0.45), color: "#e6cbbd" }} animate={{ opacity: 1, x: 0, color: "#a93f15" }}
        transition={{ opacity: { duration: 0.5 }, x: { duration: 1.3, ease: EASE }, color: { duration: 1, delay: 0.5 } }}>WORK</motion.p>

      {/* tiles slide / drop in over the word */}
      {L.tiles.map((k, i) => {
        const inner = (
          <img decoding="async" src={k.src} alt={k.label ? `${k.label} preview` : ""} className="wk-tile-img"
            style={k.img ?? { width: "100%", height: "100%", objectFit: "cover", objectPosition: k.pos ?? "center" }} />
        );
        return (
          <motion.div key={k.src + i} style={{ ...at(k.x, k.y + o, k.w, k.h), overflow: "hidden" }}
            initial={{ opacity: 0, rotate: TURN[i % TURN.length], ...FROM[k.from] }} animate={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
            transition={{ duration: 1.2, ease: EASE, delay: 0.9 + i * 0.14 }}>
            {k.href ? <Link href={k.href} aria-label={k.label} style={{ display: "block", width: "100%", height: "100%", position: "relative" }}>{inner}</Link> : inner}
          </motion.div>
        );
      })}

      {L.tags.map((g, i) => (
        <motion.div key={g.a} className="mono abs" aria-hidden
          style={{ ...at(g.x, g.y + o), background: "var(--bone)", padding: `${u(L.padY)} ${u(L.padX)}`, color: "var(--laterite)", whiteSpace: "pre", ...mono(L.tagSize, L.tagSize * 0.03) }}
          initial={{ opacity: 0, y: u(12) }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE, delay: 1.9 + i * 0.1 }}>
          {g.a}<br />{g.b}
        </motion.div>
      ))}

      {L.top !== undefined && <p className="mono abs nowrap" style={{ ...at(L.side, L.top + o), ...mono(11, 0.33) }}>(WORK) ALL PROJECTS</p>}
      <p className="mono abs nowrap" style={{ ...at(L.side, L.bottom + o), ...t(11, L.off ? 1.5 : 1.4, 0.33) }}>16 PROJECTS · 2022 TO 2026</p>
      <p className="mono abs pre" style={{ position: "absolute", right: u(L.side), top: u(L.bottom + o), ...t(11, L.off ? 1.5 : 1.4, 0.33) }}>{`SCROLL  ↓`}</p>
    </div>
  );
}

export default function WorkHeader() {
  return (
    <section data-label="(WORK) ALL PROJECTS" aria-label="Work">
      <h1 style={{ position: "absolute", width: 1, height: 1, overflow: "hidden", clip: "rect(0 0 0 0)" }}>Work: all projects</h1>
      <Header L={D} cls="only-d" />
      <Header L={T} cls="only-t" />
      <Header L={M} cls="only-m" />
    </section>
  );
}
