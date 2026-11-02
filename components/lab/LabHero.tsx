"use client";
import { motion } from "motion/react";
import { at, t, u } from "@/lib/u";
import { StaggerGroup, StaggerItem, EASE } from "@/components/about/Stagger";

// desktop curved cards (same art as the Home lab gallery)
const CARDS = [
  { img: "lab1.webp", x: 42, y: 195.67, w: 210, h: 488.62, cap: "01  SIGNAL", cy: 700 },
  { img: "lab2.svg", x: 266, y: 219.6, w: 220, h: 440.78, cap: "02  VOICESCRIPT", cy: 676, label: { t: "03", x: 292, y: 412, c: "var(--on-dark)" } },
  { img: "lab3.webp", x: 500, y: 243.54, w: 230, h: 392.93, cap: "03  ORAD", cy: 652 },
  { img: "lab4.webp", x: 744, y: 290, w: 240, h: 300, cap: "04  PRD TO PROTOTYPE", cy: 604, hot: true },
  { img: "lab5.svg", x: 998, y: 243.54, w: 230, h: 392.93, cap: "05  RESEARCH SYNTHESIS", cy: 652, label: { t: "AI", x: 1079, y: 412, c: "var(--laterite)" } },
  { img: "lab6.webp", x: 1242, y: 219.6, w: 220, h: 440.78, cap: "06  CLAIMS AUDIT", cy: 676 },
  { img: "lab7.svg", x: 1476, y: 195.67, w: 210, h: 488.62, cap: "07  NEXT EXPERIMENT", cy: 700, small: { t: "[ 06 ]", x: 1559, y: 434 } },
];
// tablet / mobile swipe strip (Lab frames use their own photos; 06 reuses 01 as in Figma)
const FLAT = [
  { kind: "img", src: "/lab/strip-signal.jpg", cap: "01  SIGNAL" },
  { kind: "txt", bg: "var(--laterite)", c: "var(--on-dark)", t: "03", pos: [22, 101, 15, 75], cap: "02  VOICESCRIPT" },
  { kind: "img", src: "/lab/strip-orad.jpg", cap: "03  ORAD" },
  { kind: "img", src: "/lab/strip-prd.jpg", cap: "04  PRD TO PROTOTYPE", hot: true },
  { kind: "txt", bg: "var(--ink)", c: "var(--laterite)", t: "AI", pos: [69, 109, 51, 81], cap: "05  RESEARCH SYNTHESIS" },
  { kind: "img", src: "/lab/strip-signal.jpg", cap: "06  CLAIMS AUDIT" },
  { kind: "blank", bg: "var(--sand)", t: "[ 07 ]", cap: "07  NEXT EXPERIMENT" },
] as const;

const INTRO = "AI products I designed and built myself, and the AI workflows I use in client work.";

function Corner({ children, href }: { children: React.ReactNode; href: string }) {
  const tick = (s: React.CSSProperties) => <span style={{ position: "absolute", background: "var(--ink)", ...s }} />;
  return (
    <a href={href} className="sans" style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", ...t(13, 1.4, 0.52), fontWeight: 500 }}>
      {tick({ left: 0, top: 0, width: u(8), height: 1.5 })}{tick({ left: 0, top: 0, width: 1.5, height: u(8) })}
      {tick({ right: 0, top: 0, width: u(8), height: 1.5 })}{tick({ right: 0, top: 0, width: 1.5, height: u(8) })}
      {tick({ left: 0, bottom: 0, width: u(8), height: 1.5 })}{tick({ left: 0, bottom: 0, width: 1.5, height: u(8) })}
      {tick({ right: 0, bottom: 0, width: u(8), height: 1.5 })}{tick({ right: 0, bottom: 0, width: 1.5, height: u(8) })}
      {children}
    </a>
  );
}

export default function LabHero() {
  return (
    <section data-label="(LAB) EXPERIMENTS" aria-label="Lab">
      <div className="only-d sec" style={{ height: u(1117), background: "var(--bone)" }}>
        {CARDS.map((c, i) => (
          <motion.div key={c.img}
            initial={{ opacity: 0, y: 70, rotateY: (3 - i) * -14 }}
            animate={{ opacity: 1, y: 0, rotateY: 0 }}
            transition={{ duration: 1.1, ease: EASE, delay: 0.15 + Math.abs(3 - i) * 0.09 }}
            style={{ position: "absolute", inset: 0, pointerEvents: "none", perspective: 1200 }}
          >
            <img decoding="async" src={`/home/${c.img}`} alt="" style={at(c.x, c.y, c.w, c.h)} />
            {c.label && <p className="pixel abs" style={{ ...at(c.label.x, c.label.y), ...t(56, 1), color: c.label.c }}>{c.label.t}</p>}
            {c.small && <p className="mono abs" style={{ ...at(c.small.x, c.small.y), ...t(12, 1), color: "var(--muted-small)" }}>{c.small.t}</p>}
            <p className="mono abs pre" style={{ ...at(c.x, c.cy), ...t(11, "normal", 0.22), color: c.hot ? "var(--laterite)" : "var(--ink)" }}>{c.cap}</p>
          </motion.div>
        ))}
        <motion.h1 className="sans abs"
          initial={{ y: 120, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: EASE, delay: 0.45 }}
          style={{ ...at(40, 835), ...t(340, 0.8, -20.4), fontWeight: 500, margin: 0 }}>Lab</motion.h1>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.8 }}>
          <div style={{ ...at(1462, 887, 210, 44) }}><Corner href="#experiments">SEE ALL EXPERIMENTS</Corner></div>
          <p className="abs" style={{ ...at(1672, 977, 460), transform: "translateX(-100%)", textAlign: "right", ...t(20, 1.4, -0.1) }}>{INTRO}</p>
        </motion.div>
      </div>

      {(["t", "m"] as const).map((bp) => {
        const T = bp === "t";
        const w = T ? 200 : 150, hs = T ? [241, 263, 280, 297, 280, 263, 241] : [181, 197, 210, 223, 210, 197, 181];
        return (
          <div key={bp} className={T ? "only-t" : "only-m"} style={{ background: "var(--bone)", padding: `${u(T ? 104 : 72)} 0` }}>
            <p className="mono" style={{ ...t(11, 1.5, 0.33), padding: `0 ${u(T ? 40 : 20)}` }}>(LAB) EXPERIMENTS</p>
            <div style={{ overflowX: "auto", marginTop: u(T ? 36 : 28), scrollSnapType: "x mandatory", scrollbarWidth: "none" }}>
              <StaggerGroup gap={0.08} amount={0.2} style={{ display: "flex", alignItems: "center", gap: u(10), padding: `0 ${u(T ? 40 : 20)}`, width: "max-content", height: u(T ? 322 : 248) }}>
                {FLAT.map((c, i) => (
                  <StaggerItem key={c.cap} kind="side" style={{ width: u(w), scrollSnapAlign: "start" }}>
                    <div style={{ position: "relative", height: u(hs[i]), borderRadius: u(14), overflow: "hidden", background: "bg" in c ? c.bg : undefined }}>
                      {c.kind === "img" && <img decoding="async" src={c.src} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />}
                      {c.kind === "txt" && <span className="pixel" style={{ position: "absolute", left: u(T ? c.pos[0] : c.pos[2]), top: u(T ? c.pos[1] : c.pos[3]), ...t(T ? 52 : 40, "normal"), color: c.c }}>{c.t}</span>}
                      {c.kind === "blank" && <span className="mono" style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", ...t(11, 1.5, 0.33), color: "var(--muted-small)" }}>{c.t}</span>}
                    </div>
                    <p className="mono pre" style={{ ...t(10, 1.5, 0.3), marginTop: u(10), color: "hot" in c && c.hot ? "var(--laterite)" : "var(--ink)" }}>{c.cap}</p>
                  </StaggerItem>
                ))}
              </StaggerGroup>
            </div>
            <div style={{ padding: `0 ${u(T ? 40 : 20)}`, marginTop: u(T ? 36 : 28), display: "flex", flexDirection: "column", alignItems: "flex-start", gap: u(16) }}>
              <motion.h1 className="sans" initial={{ y: 60, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1.1, ease: EASE, delay: 0.3 }}
                style={{ ...t(T ? 220 : 150, 0.85, T ? -13.2 : -9), fontWeight: 500, margin: 0 }}>Lab</motion.h1>
              <p style={t(T ? 17 : 16, 1.45)}>{INTRO}</p>
              <a href="#experiments" className="mono pre" style={{ border: "1px solid var(--ink)", borderRadius: 99, padding: `${u(12)} ${u(20)}`, ...t(11, 1.5, 0.33) }}>{`SEE ALL EXPERIMENTS  →`}</a>
            </div>
          </div>
        );
      })}
    </section>
  );
}
