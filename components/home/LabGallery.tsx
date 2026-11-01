"use client";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { at, t, u } from "@/lib/u";

const EASE = [0.2, 0.7, 0.1, 1] as const;
// desktop cards: image (curved card art from Figma) and caption positions
const CARDS = [
  { img: "lab1.webp", x: 42, y: 195.67, w: 210, h: 488.62, cap: "01  SIGNAL", cy: 700 },
  { img: "lab2.svg", x: 266, y: 219.6, w: 220, h: 440.78, cap: "02  VOICESCRIPT", cy: 676, label: { t: "03", x: 292, y: 412, c: "var(--on-dark)" } },
  { img: "lab3.webp", x: 500, y: 243.54, w: 230, h: 392.93, cap: "03  ORAD", cy: 652 },
  { img: "lab4.webp", x: 744, y: 290, w: 240, h: 300, cap: "04  PRD TO PROTOTYPE", cy: 604, hot: true },
  { img: "lab5.svg", x: 998, y: 243.54, w: 230, h: 392.93, cap: "05  RESEARCH SYNTHESIS", cy: 652, label: { t: "AI", x: 1079, y: 412, c: "var(--laterite)" } },
  { img: "lab6.webp", x: 1242, y: 219.6, w: 220, h: 440.78, cap: "06  CLAIMS AUDIT", cy: 676 },
  { img: "lab7.svg", x: 1476, y: 195.67, w: 210, h: 488.62, cap: "07  NEXT EXPERIMENT", cy: 700, small: { t: "[ 06 ]", x: 1559, y: 434 } },
];
// tablet / mobile: flat rounded cards in a swipe strip
const FLAT = [
  { kind: "img", src: "lab-signal.jpg", cap: "01  SIGNAL" },
  { kind: "txt", bg: "var(--laterite)", c: "var(--on-dark)", t: "03", cap: "02  VOICESCRIPT" },
  { kind: "img", src: "lab-orad.jpg", cap: "03  ORAD" },
  { kind: "img", src: "lab-prd.jpg", cap: "04  PRD TO PROTOTYPE", hot: true },
  { kind: "txt", bg: "var(--ink)", c: "var(--laterite)", t: "AI", cap: "05  RESEARCH SYNTHESIS" },
  { kind: "img", src: "lab-claims.jpg", cap: "06  CLAIMS AUDIT" },
  { kind: "blank", bg: "var(--sand)", t: "[ 07 ]", cap: "07  NEXT EXPERIMENT" },
] as const;

function Corner({ children, href }: { children: React.ReactNode; href: string }) {
  const tick = (s: React.CSSProperties) => <span style={{ position: "absolute", background: "var(--ink)", ...s }} />;
  return (
    <Link href={href} className="sans" style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", ...t(13, 1.4, 0.52), fontWeight: 500 }}>
      {tick({ left: 0, top: 0, width: u(8), height: 1.5 })}{tick({ left: 0, top: 0, width: 1.5, height: u(8) })}
      {tick({ right: 0, top: 0, width: u(8), height: 1.5 })}{tick({ right: 0, top: 0, width: 1.5, height: u(8) })}
      {tick({ left: 0, bottom: 0, width: u(8), height: 1.5 })}{tick({ left: 0, bottom: 0, width: 1.5, height: u(8) })}
      {tick({ right: 0, bottom: 0, width: u(8), height: 1.5 })}{tick({ right: 0, bottom: 0, width: 1.5, height: u(8) })}
      {children}
    </Link>
  );
}

export default function LabGallery() {
  const reduce = useReducedMotion();
  return (
    <section data-label="(06) LAB" aria-labelledby="lab">
      <div className="only-d sec" style={{ height: u(1117), background: "var(--bone)" }}>
        {CARDS.map((c, i) => (
          <motion.div key={c.img}
            initial={reduce ? false : { opacity: 0, y: 70, rotateY: (3 - i) * -14 }}
            whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
            viewport={{ once: true, margin: "0px 0px -10% 0px" }}
            transition={{ duration: 1, ease: EASE, delay: Math.abs(3 - i) * 0.08 }}
            style={{ position: "absolute", inset: 0, pointerEvents: "none", perspective: 1200 }}
          >
            <img src={`/home/${c.img}`} alt="" style={at(c.x, c.y, c.w, c.h)} />
            {c.label && <p className="pixel abs" style={{ ...at(c.label.x, c.label.y), ...t(56, 1), color: c.label.c }}>{c.label.t}</p>}
            {c.small && <p className="mono abs" style={{ ...at(c.small.x, c.small.y), ...t(12, 1), color: "var(--muted-small)" }}>{c.small.t}</p>}
            <p className="mono abs pre" style={{ ...at(c.x, c.cy), ...t(11, "normal", 0.22), color: c.hot ? "var(--laterite)" : "var(--ink)" }}>{c.cap}</p>
          </motion.div>
        ))}
        <motion.h2 id="lab" className="sans abs"
          initial={reduce ? false : { y: 120, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }}
          transition={{ duration: 1.1, ease: EASE, delay: 0.3 }}
          style={{ ...at(40, 835), ...t(340, 0.8, -20.4), fontWeight: 500, margin: 0 }}>Lab</motion.h2>
        <div style={{ ...at(1462, 887, 210, 44) }}><Corner href="/lab">SEE ALL EXPERIMENTS</Corner></div>
        <p className="abs" style={{ ...at(1672, 977, 460), transform: "translateX(-100%)", textAlign: "right", ...t(20, 1.4, -0.1) }}>
          AI products I designed and built myself, and the AI workflows I use in client work.
        </p>
      </div>

      {(["t", "m"] as const).map((bp) => {
        const T = bp === "t";
        const w = T ? 200 : 150, gap = 10, hs = T ? [241, 263, 280, 297, 280, 263, 241] : [181, 197, 210, 223, 210, 197, 181];
        return (
          <div key={bp} className={T ? "only-t" : "only-m"} style={{ background: "var(--bone)", padding: `${u(T ? 104 : 72)} 0 ${u(T ? 104 : 72)}` }}>
            <p className="mono" style={{ ...t(11, 1.5, 0.33), padding: `0 ${u(T ? 40 : 20)}` }}>(06) LAB</p>
            <div style={{ overflowX: "auto", marginTop: u(T ? 36 : 28), scrollSnapType: "x mandatory", scrollbarWidth: "none" }}>
              <div style={{ display: "flex", alignItems: "center", gap: u(gap), padding: `0 ${u(T ? 40 : 20)}`, width: "max-content", height: u(T ? 322 : 248) }}>
                {FLAT.map((c, i) => (
                  <div key={c.cap} style={{ width: u(w), scrollSnapAlign: "start" }}>
                    <div style={{ height: u(hs[i]), borderRadius: u(14), overflow: "hidden", background: "bg" in c ? c.bg : undefined, display: "flex", alignItems: "center", justifyContent: "center" }}>
                      {c.kind === "img" && <img src={`/home/${c.src}`} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />}
                      {c.kind === "txt" && <span className="pixel" style={{ ...t(T ? 52 : 40, 1), color: c.c }}>{c.t}</span>}
                      {c.kind === "blank" && <span className="mono" style={{ ...t(11, 1.5, 0.33), color: "var(--muted-small)" }}>{c.t}</span>}
                    </div>
                    <p className="mono pre" style={{ ...t(10, 1.5, 0.3), marginTop: u(10), color: "hot" in c && c.hot ? "var(--laterite)" : "var(--ink)" }}>{c.cap}</p>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ padding: `0 ${u(T ? 40 : 20)}`, marginTop: u(T ? 36 : 28) }}>
              <h2 className="sans" style={{ ...t(T ? 220 : 150, 0.85, T ? -13.2 : -9), fontWeight: 500, margin: 0 }}>Lab</h2>
              <p style={{ ...t(T ? 17 : 16, 1.45), marginTop: u(16) }}>AI products I designed and built myself, and the AI workflows I use in client work.</p>
              <Link href="/lab" className="mono" style={{ display: "inline-block", marginTop: u(16), border: "1px solid var(--ink)", borderRadius: 99, padding: `${u(13)} ${u(21)}`, ...t(11, 1.5, 0.33) }}>{`SEE ALL EXPERIMENTS  →`}</Link>
            </div>
          </div>
        );
      })}
    </section>
  );
}
