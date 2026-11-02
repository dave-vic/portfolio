"use client";
import { motion } from "motion/react";
import Reveal from "@/components/Reveal";
import { at, t, u } from "@/lib/u";

const EASE = [0.2, 0.7, 0.1, 1] as const;
const LEDE = "Four stages. Hire me for one of them, or for the whole line. AI speeds up each step, I stay accountable for every decision.";
const STAGES = [
  { n: "1", name: "UNDERSTAND", note: "Users, numbers and the current process, before anyone draws a screen.", d: { x: 460, y: 740, w: 300, h: 560, size: 532, nx: 62, ny: 201, noteY: 650 } },
  { n: "2", name: "SHAPE", note: "PRD, priorities and a plan the business signs off.", d: { x: 800, y: 440, w: 330, h: 860, size: 817, nx: -37, ny: 309, noteY: 350 } },
  { n: "3", name: "DESIGN", note: "Journeys, a design system and a prototype people can test.", d: { x: 1170, y: 680, w: 280, h: 620, size: 589, nx: -6, ny: 223, noteY: 590 } },
  { n: "4", name: "SHIP + GROW", note: "Hand-off, QA, then the pitch, the partners and the next customers.", d: { x: 1470, y: 320, w: 258, h: 980, size: 931, nx: -101, ny: 353, noteY: 230 } },
];

function Bar({ i, style, children }: { i: number; style: React.CSSProperties; children: React.ReactNode }) {
  // the wrapper is what scrolls into view; the white bar rises inside it
  return (
    <motion.div style={{ ...style, overflow: "hidden" }} initial={"hide"} whileInView="show" viewport={{ once: true, margin: "0px 0px -5% 0px" }}>
      <motion.div
        style={{ position: "absolute", inset: 0, background: "#fff", overflow: "hidden" }}
        variants={{ hide: { y: "100%" }, show: { y: 0 } }}
        transition={{ duration: 1.2, ease: EASE, delay: i * 0.15 }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

export default function Process() {
  return (
    <section data-label="(05) PROCESS" aria-labelledby="process" style={{ color: "var(--on-dark)" }}>
      <div className="only-d sec" style={{ height: u(1300), background: "var(--ink)" }}>
        <Reveal style={at(56, 130)}>
          <h2 id="process" className="anton" style={{ ...t(72, 1), fontWeight: 400, margin: 0, whiteSpace: "nowrap" }}>HOW A PRODUCT<br />MOVES THROUGH ME</h2>
        </Reveal>
        <p className="abs" style={{ ...at(56, 290, 340), ...t(16, 1.5), color: "var(--muted)" }}>{LEDE}</p>
        {STAGES.map((s, i) => (
          <div key={s.n}>
            <Reveal delay={0.2 + i * 0.15} y={20} style={at(s.d.x, s.d.noteY, 240)}><p style={{ ...t(14, 1.45) }}>{s.note}</p></Reveal>
            <Bar i={i} style={at(s.d.x, s.d.y, s.d.w, s.d.h)}>
              <p className="anton" style={{ position: "absolute", left: u(16), top: u(14), ...t(22), color: "var(--ink)" }}>{s.name}</p>
              <p className="anton" aria-hidden style={{ position: "absolute", left: u(s.d.nx), top: u(s.d.ny), ...t(s.d.size, 0.8), color: "var(--ink)" }}>{s.n}</p>
            </Bar>
          </div>
        ))}
      </div>

      {(["t", "m"] as const).map((bp) => {
        const T = bp === "t";
        const bw = T ? 179 : 93, gap = T ? 12 : 6, bh = T ? [250, 406, 312, 520] : [182, 296, 228, 380];
        const nOff = T ? [39, 14, 14, 14] : [20, 7, 7, 7], nFromBottom = T ? 209 : 108;
        return (
          <div key={bp} className={T ? "only-t" : "only-m"} style={{ background: "var(--ink)", padding: `${u(T ? 104 : 72)} ${u(T ? 40 : 20)}` }}>
            <p className="mono" style={{ ...t(11, 1.5, 0.33), color: "var(--muted)" }}>(05) PROCESS</p>
            <h2 className="anton" style={{ ...t(T ? 56 : 40, 1), fontWeight: 400, margin: `${u(24)} 0 0` }}>HOW A PRODUCT<br />MOVES THROUGH ME</h2>
            <p style={{ ...t(T ? 17 : 16, 1.45), color: "var(--muted)", marginTop: u(24) }}>{LEDE}</p>
            <div style={{ display: "flex", alignItems: "flex-end", gap: u(gap), height: u(Math.max(...bh)), marginTop: u(24) }}>
              {STAGES.map((s, i) => (
                <Bar key={s.n} i={i} style={{ position: "relative", width: u(bw), height: u(bh[i]), flex: "none" }}>
                  <p className="anton" style={{ position: "absolute", left: u(8), top: u(8), ...t(T ? 16 : 11, 1.5), color: "var(--ink)" }}>{s.name}</p>
                  <p className="anton" aria-hidden style={{ position: "absolute", left: u(nOff[i]), top: u(bh[i] - nFromBottom), ...t(T ? 304 : 158, 0.8), color: "var(--ink)" }}>{s.n}</p>
                </Bar>
              ))}
            </div>
            <div style={{ display: "grid", gridTemplateColumns: T ? "1fr 1fr" : "1fr", columnGap: u(24), marginTop: u(9) }}>
              {STAGES.map((s) => (
                <Reveal key={s.n} y={16} style={{ paddingTop: u(15), paddingBottom: u(1) }}>
                  <p className="mono" style={{ ...t(11, 1.5, 0.33), color: "var(--peach)" }}>0{s.n}  {s.name}</p>
                  <p style={{ ...t(15, 1.45), color: "var(--muted)", marginTop: u(6) }}>{s.note}</p>
                </Reveal>
              ))}
            </div>
          </div>
        );
      })}
    </section>
  );
}
