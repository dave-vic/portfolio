"use client";
import { motion } from "motion/react";
import Reveal from "@/components/Reveal";
import type { CaseData } from "@/content/cases/types";
import { at, t, u } from "@/lib/u";
import { Drift, EASE, Pic, bbox, mono, skin } from "./ui";

export default function More({ c }: { c: CaseData }) {
  const m = c.more;
  const n = m.cards.length;
  const gx = m.cards.reduce((a, k) => a + k.x + k.w / 2, 0) / n;
  const gy = m.cards.reduce((a, k) => a + k.y + k.h / 2, 0) / n;
  const badgeText = (d: number) => ({ ...t(d >= 90 ? 48 : 42, 1), color: c.colors.accentInk });
  return (
    <section data-label={c.label} aria-labelledby={`${c.slug}-more`} style={{ color: "#fff" }}>
      <motion.div className="only-d sec" style={{ height: u(1500), background: c.colors.dark }} initial="stack" whileInView="fan" viewport={{ once: true, amount: 0.3 }}>
        <Drift dist={110} style={{ position: "absolute", left: 0, right: 0, top: u(380), textAlign: "center" }}>
          <p className="anton" aria-hidden style={{ ...t(460, 0.85), color: c.colors.accent, whiteSpace: "nowrap" }}>{m.word}</p>
        </Drift>
        <p style={{ ...at(56, 120), ...mono(12, 6), color: c.colors.tint }}>{m.label}</p>
        <Reveal style={at(56, 160, m.hw ?? 900)}><h2 id={`${c.slug}-more`} style={{ ...t(48, 1.1, -0.96), fontWeight: 400, margin: 0 }}>{m.h}</h2></Reveal>
        {m.cards.map((k, i) => {
          const dx = ((gx - (k.x + k.w / 2)) / k.w) * 100, dy = ((gy - (k.y + k.h / 2)) / k.h) * 100;
          return (
            <motion.div
              key={i}
              style={{ ...at(k.x, k.y, k.w, k.h), zIndex: 1, rotate: -(k.rot ?? 0) }}
              variants={{ stack: { x: `${dx}%`, y: `${dy + 6}%`, rotate: (i % 2 ? 2 : -2) * (i + 1) * 0.5 }, fan: { x: "0%", y: "0%", rotate: -(k.rot ?? 0) } }}
              transition={{ duration: 1.2, ease: EASE, delay: 0.15 + i * 0.08 }}
            >
              <Pic img={k.img} style={{ width: "100%", height: "100%", borderRadius: u(k.r), ...skin(k.img, k.shadow ?? 0.35, k.badge[2] >= 90 ? 30 : 24, 60, "#111") }} />
            </motion.div>
          );
        })}
        {m.cards.map((k, i) => (
          <motion.div key={`b${i}`} style={{ zIndex: 2, position: "absolute", inset: 0, pointerEvents: "none" }} variants={{ stack: { opacity: 0, scale: 0.6 }, fan: { opacity: 1, scale: 1 } }} transition={{ duration: 0.6, ease: EASE, delay: 0.9 + i * 0.1 }}>
            <div style={{ ...at(k.badge[0], k.badge[1], k.badge[2], k.badge[2]), borderRadius: "50%", background: c.colors.accent, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span className="anton" style={badgeText(k.badge[2])}>{String.fromCharCode(65 + i)}</span>
            </div>
            <p style={{ ...at(k.capAt[0], k.capAt[1], k.capAt[2]), ...mono(12, 5, 1.5), color: c.colors.tint, whiteSpace: "pre-line" }}>{k.cap}</p>
          </motion.div>
        ))}
      </motion.div>

      {(["t", "m"] as const).map((bp) => {
        const T = bp === "t";
        const W = T ? 754 : 390, per = T ? n : 2, gap = 16;
        const ratio = m.cards[0].h / m.cards[0].w, tilt = T ? 3 : 2, a = (tilt * Math.PI) / 180;
        const cw = T ? (n === 4 ? 184.1 : (W - 16 * (per - 1)) / per) : 191;
        const iw = cw / (Math.cos(a) + ratio * Math.sin(a));
        const [, bh] = bbox(iw, iw * ratio, tilt);
        const ws = Math.min(T ? 242 : 124, (460 * W) / m.wordW);
        const rows: number[][] = [];
        for (let i = 0; i < n; i += per) rows.push(m.cards.map((_, j) => j).slice(i, i + per));
        return (
          <div key={bp} className={T ? "only-t" : "only-m"} style={{ background: c.colors.dark, padding: `${u(T ? 96 : 64)} ${u(T ? 40 : 20)}`, overflow: "hidden" }}>
            <Drift dist={T ? 40 : 24}><p className="anton" aria-hidden style={{ ...t(ws, 0.85), color: c.colors.accent, whiteSpace: "nowrap" }}>{m.word}</p></Drift>
            <p style={{ ...mono(11, 6, 1.4), color: c.colors.tint, marginTop: u(20) }}>{m.label}</p>
            <h2 style={{ ...t(T ? 48 : 30, 1.25, T ? -0.96 : -0.6), fontWeight: 400, margin: `${u(20)} 0 0` }}>{m.h}</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: u(28), marginTop: u(T ? 32 : 20), marginRight: u(T ? -40 : -20) }}>
              {rows.map((r, ri) => (
                <div key={ri} style={{ display: "flex", gap: u(T ? gap : 14) }}>
                  {r.map((i) => {
                    const k = m.cards[i];
                    const rot = (i % 2 ? 1 : -1) * tilt;
                    return (
                      <Reveal key={i} y={40} delay={(i % per) * 0.1} style={{ width: u(cw), flex: "none", display: "flex", flexDirection: "column", gap: u(T ? 14 : 12) }}>
                        <div style={{ position: "relative", width: u(cw), height: u(bh) }}>
                          <Pic img={k.img} style={{ position: "absolute", left: u((cw - iw) / 2), top: u((bh - iw * ratio) / 2), width: u(iw), height: u(iw * ratio), borderRadius: u(T ? 6.5 : 6.9), transform: `rotate(${rot}deg)`, ...skin(k.img, 0.35, 12, 30, "#111") }} />
                        </div>
                        <div style={{ display: "flex", gap: u(8), alignItems: "flex-start" }}>
                          <span className="anton" style={{ width: u(30), height: u(30), flex: "none", borderRadius: "50%", background: c.colors.accent, color: c.colors.accentInk, display: "flex", alignItems: "center", justifyContent: "center", ...t(18, 1) }}>{String.fromCharCode(65 + i)}</span>
                          <p style={{ ...mono(10, 5, 1.4), color: c.colors.tint, whiteSpace: "pre-line" }}>{k.cap}</p>
                        </div>
                      </Reveal>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </section>
  );
}
