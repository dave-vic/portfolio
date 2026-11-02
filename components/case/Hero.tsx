"use client";
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform, type MotionValue } from "motion/react";
import type { CSSProperties } from "react";
import type { CaseData, Shot } from "@/content/cases/types";
import { at, t, u } from "@/lib/u";
import { DriftTop, EASE, Pic, mono, skin } from "./ui";

/* Talent Hub's tablet / mobile collage slots (left, centre, right), relative to the collage frame */
const SLOTS_T: [number, number, number, number, number, number][] = [[-16.3, 67.3, 377, 243.8, -7, 7.54], [141.2, 119.4, 497.6, 321.6, 2, 7.28], [582.1, -10, 173.4, 325.8, 6, 6.31]];
const SLOTS_M: [number, number, number, number, number, number][] = [[-9.3, 36, 214.5, 138.7, -7, 4.29], [69.4, 73, 280.8, 181.5, 2, 4.11], [294, -5.6, 97.5, 183.2, 6, 3.55]];

function collage(c: CaseData, bp: "t" | "m"): { cards: Shot[]; sticker: [number, number, number] } {
  const h = c.hero;
  if (h.scale) {
    const s = bp === "t" ? 754 / 1616 : 390 / 1616;
    const ox = 50, oy = 540 - (bp === "t" ? 249 : 140.5) / s; // keep the collage centred in its frame
    const cards = h.cards.map((k) => ({ ...k, x: (k.x - ox) * s, y: (k.y - oy) * s, w: k.w * s, h: k.h * s, r: k.r * s * 1.6 }));
    const [sx, sy] = h.stickerAt ?? [1180, 760];
    const d = bp === "t" ? 140 : 92;
    return { cards, sticker: [(sx - ox) * s + 85 * s - d / 2, (sy - oy) * s + 85 * s - d / 2, d] };
  }
  const slots = bp === "t" ? SLOTS_T : SLOTS_M;
  return {
    cards: h.cards.map((k, i) => ({ ...k, x: slots[i][0], y: slots[i][1], w: slots[i][2], h: slots[i][3], rot: slots[i][4], r: slots[i][5] })),
    sticker: bp === "t" ? [-6.1, 448, 140] : [-2.6, 252.8, 92],
  };
}

/** a hero screen: drops in with a tilt, then follows the cursor a little */
function Card({ s, i, mx, my, depth, flow }: { s: Shot; i: number; mx: MotionValue<number>; my: MotionValue<number>; depth: number; flow?: boolean }) {
  const x = useTransform(mx, (v) => v * depth);
  const y = useTransform(my, (v) => v * depth * 0.7);
  const rot = -(s.rot ?? 0);
  return (
    <motion.div style={{ ...at(s.x, s.y, s.w, s.h), x, y, zIndex: i === 1 ? 2 : 1 }}>
      <motion.div
        style={{ width: "100%", height: "100%" }}
        initial={{ opacity: 0, y: -140, rotate: rot + (i === 1 ? -10 : i === 0 ? 14 : -14) }}
        animate={{ opacity: 1, y: 0, rotate: rot }}
        transition={{ duration: 1.1, ease: EASE, delay: 0.25 + [0, 0.3, 0.15][i] }}
      >
        <Pic img={s.img} eager style={{ width: "100%", height: "100%", borderRadius: u(s.r), ...(flow ? skin(s.img, s.shadow, 10, 26, "#1a1a1a") : skin(s.img, s.shadow, 24, 60, "#1a1a1a")) }} />
      </motion.div>
    </motion.div>
  );
}

function Sticker({ c, box, size, tilt = 0 }: { c: CaseData; box: CSSProperties; size: number; tilt?: number }) {
  const reduce = useReducedMotion();
  return (
    <div aria-hidden style={{ ...box, zIndex: 3, transform: tilt ? `rotate(${tilt}deg)` : undefined }}>
      <motion.div
        style={{ width: "100%", height: "100%", borderRadius: "50%", background: c.colors.accent, color: c.colors.accentInk, display: "flex", alignItems: "center", justifyContent: "center" }}
        initial={{ scale: 0, rotate: -90 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.9, ease: EASE, delay: 0.8 }}
      >
        <motion.p
          style={{ ...mono(size, 6), textAlign: "center", lineHeight: size >= 15 ? "normal" : 1.5 }}
          animate={reduce ? undefined : { rotate: [0, 360] }}
          transition={{ duration: 24, ease: "linear", repeat: Infinity, delay: 1.7 }}
        >
          {c.hero.sticker.lines.map((l) => <span key={l} style={{ display: "block" }}>{l}</span>)}
        </motion.p>
      </motion.div>
    </div>
  );
}

function usePointer() {
  const mx = useMotionValue(0), my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 18 }), sy = useSpring(my, { stiffness: 60, damping: 18 });
  const reduce = useReducedMotion();
  const onMove = (e: React.MouseEvent<HTMLElement>) => {
    if (reduce) return;
    const r = e.currentTarget.getBoundingClientRect();
    mx.set(((e.clientX - r.left) / r.width - 0.5) * 2);
    my.set(((e.clientY - r.top) / r.height - 0.5) * 2);
  };
  const onLeave = () => { mx.set(0); my.set(0); };
  return { sx, sy, onMove, onLeave };
}

export default function Hero({ c }: { c: CaseData }) {
  const h = c.hero;
  const { sx, sy, onMove, onLeave } = usePointer();
  const big = { ...t(300, 0.9, -3), fontWeight: 400, margin: 0, whiteSpace: "nowrap" as const };
  const order = [0, 2, 1]; // paint: left, right, centre on top
  const depth = [-14, 18, 10];
  return (
    <section data-label={c.label} aria-label={`${h.w1} ${h.w2}`}>
      {/* desktop 1728 × 1117 */}
      <div className="only-d sec" style={{ height: u(1117), background: "var(--bone)" }} onMouseMove={onMove} onMouseLeave={onLeave}>
        <DriftTop dist={-90} style={at(40, 95)}><h1 className="anton" style={big}>{h.w1}</h1></DriftTop>
        <DriftTop dist={90} style={{ position: "absolute", right: u(40), top: u(770) }}><p className="anton" aria-hidden style={big}>{h.w2}</p></DriftTop>
        {order.map((i) => <Card key={i} s={h.cards[i]} i={i} mx={sx} my={sy} depth={depth[i]} />)}
        <Sticker c={c} size={15} box={at(...(h.stickerAt ?? [1180, 760]), 170, 170)} />
        {h.meta.map(([k, v], i) => (
          <p key={k} style={{ ...at(56 + i * 364, 1062, 330), ...mono(12, 4) }}>{k}<br />{v}</p>
        ))}
        <p style={{ position: "absolute", right: u(48), top: u(1062), ...mono(12, 4), color: c.colors.stat, textAlign: "right" }}>{h.stat}</p>
      </div>

      {/* tablet 834 + mobile 430 */}
      {(["t", "m"] as const).map((bp) => {
        const T = bp === "t";
        const W = T ? 754 : 390, base = T ? 224 : 118;
        const s1 = Math.min(base, (300 * W) / h.w1w), s2 = Math.min(base, (300 * W) / h.w2w);
        const col = collage(c, bp);
        const word = (s: number): CSSProperties => ({ ...t(s, 0.92, -s / 100), fontWeight: 400, margin: 0, whiteSpace: "nowrap" });
        return (
          <div key={bp} className={T ? "only-t" : "only-m"} style={{ background: "var(--bone)", padding: `${u(T ? 66 + 40 : 71 + 32)} ${u(T ? 40 : 20)} ${u(T ? 96 : 64)}`, overflow: "hidden" }} onMouseMove={onMove} onMouseLeave={onLeave}>
            <p style={mono(11, 0, 1.4)}>{c.label}</p>
            <h1 className="anton" style={{ ...word(s1), marginTop: u(14) }}>{h.w1}</h1>
            <div style={{ position: "relative", height: u(T ? 498 : 281), marginTop: u(14) }}>
              {order.map((i) => <Card key={i} s={col.cards[i]} i={i} mx={sx} my={sy} depth={depth[i] * 0.4} flow />)}
              <Sticker c={c} size={T ? 11 : 8} box={at(col.sticker[0], col.sticker[1], col.sticker[2], col.sticker[2])} tilt={12} />
            </div>
            <p className="anton" aria-hidden style={{ ...word(s2), marginTop: u(14), textAlign: "right" }}>{h.w2}</p>
            <div style={{ display: "flex", flexDirection: T ? "row" : "column", gap: u(T ? 32 : 12), marginTop: u(14) }}>
              {h.meta.map(([k, v]) => <p key={k} style={mono(11, 4, 1.4)}>{k}<br />{v}</p>)}
            </div>
            <p style={{ ...mono(11, 4, 1.4), color: c.colors.brand, marginTop: u(T ? 14 : 12) }}>{h.stat}</p>
          </div>
        );
      })}
    </section>
  );
}
