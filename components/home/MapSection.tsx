"use client";
import { motion, useReducedMotion } from "motion/react";
import Reveal from "@/components/Reveal";
import { at, t, u } from "@/lib/u";

const EASE = [0.2, 0.7, 0.1, 1] as const;
const PLACES = [
  ["01", "COURT SYSTEM", "DISTRICT COURTS"],
  ["02", "MISIKA MERCHANT LOAN", "NATIONWIDE ON *171#"],
  ["03", "GHANA TALENT HUB", "NATIONWIDE"],
  ["04", "ELYSIUM TOURS", "CAPE COAST AND BEYOND"],
  ["05", "KB AKUFFO & CO.", "LAW FIRM, ACCRA"],
  ["06", "BEYOND GHANA", "LOCO IN TANZANIA · BLACCBOOK IN THE USA"],
];
// desktop frame: faint cloud box
const BOX = { x: 973, y: 139.88, w: 670.5, h: 903.3 };
// pins: ring top-left (28px), label box, connector line — desktop coordinates
const PINS = [
  { r: [1318.1, 379], label: "TAMALE · *171# · MISIKA", lx: 1073.1, ly: 380.5, line: [1256.1, 393] },
  { r: [1212.8, 744.85], label: "KUMASI · TALENT HUB · PARENTS", lx: 967.8, ly: 746.35, line: [1150.8, 758.85] },
  { r: [1405.85, 892], label: "ACCRA · COURTS · LAW FIRM", lx: 1085.85, ly: 893.5, line: [1343.85, 906] },
  { r: [1431.5, 871.75], label: "TEMA · TALENT HUB · SCHOOLS", lx: 1521.5, ly: 873.25, line: [1461.5, 885.75] },
  { r: [1266, 944], label: "CAPE COAST · ELYSIUM · TOURS", lx: 985, ly: 946, line: [1204, 958] },
];
const MARKS: [number, number][] = [[1214,974],[1265,944],[1103,934],[1305,934],[1062,924],[1133,924],[1315,924],[1356,913],[1082,903],[1295,903],[1346,903],[1082,883],[1447,883],[1174,863],[1133,853],[1174,843],[1244,843],[1558,843],[1406,832],[1427,812],[1103,802],[1174,782],[1406,782],[1427,772],[1457,772],[1386,762],[1315,751],[1366,741],[1224,711],[1487,681],[1224,670],[1356,670],[1255,640],[1265,630],[1477,620],[1174,589],[1457,579],[1487,569],[1305,559],[1143,549],[1224,549],[1376,539],[1113,529],[1204,519],[1123,478],[1366,458],[1113,448],[1153,448],[1457,438],[1133,428],[1143,417],[1406,397],[1386,367],[1417,357],[1153,336],[1386,336],[1184,316],[1437,316],[1214,306],[1366,306],[1437,215],[1305,205],[1194,195],[1285,195]];

function Cloud({ W, ring, dot, labels }: { W: number; ring: number; dot: number; labels: boolean }) {
  const reduce = useReducedMotion();
  const k = W / BOX.w, H = BOX.h * k;
  const X = (x: number) => (x - BOX.x) * k, Y = (y: number) => (y - BOX.y) * k;
  return (
    <div style={{ position: "relative", width: u(W), height: u(H) }}>
      <img src="/home/points-faint.svg" alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} />
      <motion.img
        src="/home/points-ghana.svg" alt="Map of Ghana drawn in points"
        style={{ position: "absolute", left: u(X(1013.5)), top: u(Y(170.25)), width: u(590.3 * k), height: u(853.4 * k) }}
        initial={reduce ? false : { clipPath: "inset(100% 0 0 0)" }}
        whileInView={{ clipPath: "inset(0% 0 0 0)" }}
        viewport={{ once: true, margin: "0px 0px -15% 0px" }}
        transition={{ duration: 1.8, ease: EASE }}
      />
      {MARKS.map(([x, y], i) => (
        <span key={i} className="mono" style={{ position: "absolute", left: u(X(x)), top: u(Y(y)), ...t(10 * Math.max(k, 0.7), 1) }}>+</span>
      ))}
      {PINS.map((p, i) => {
        const cx = X(p.r[0] + 14), cy = Y(p.r[1] + 14);
        return (
          <motion.div key={p.label}
            initial={reduce ? false : { opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "0px 0px -15% 0px" }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.9 + i * 0.15 }}
            style={{ position: "absolute", left: 0, top: 0, width: "100%", height: "100%", pointerEvents: "none", transformOrigin: `${u(cx)} ${u(cy)}` }}
          >
            <img src="/home/pin-ring.svg" alt="" style={{ position: "absolute", left: u(cx - ring / 2), top: u(cy - ring / 2), width: u(ring), height: u(ring) }} />
            <span className="ping" style={{ position: "absolute", left: u(cx - ring / 2), top: u(cy - ring / 2), width: u(ring), height: u(ring), borderRadius: "50%", border: "1px solid var(--laterite)" }} />
            <img src="/home/pin-dot.svg" alt="" style={{ position: "absolute", left: u(cx - dot / 2), top: u(cy - dot / 2), width: u(dot), height: u(dot) }} />
            {labels && (
              <>
                <span style={{ position: "absolute", left: u(X(p.line[0])), top: u(Y(p.line[1])), width: u(60), height: 1, background: "var(--ink-2)" }} />
                <span className="mono nowrap" style={{ position: "absolute", left: u(X(p.lx)), top: u(Y(p.ly)), background: "var(--bone)", border: "1px solid var(--ink-2)", borderRadius: 99, padding: `${u(5)} ${u(12)}`, ...t(11, 1.2, 0.22) }}>{p.label}</span>
              </>
            )}
          </motion.div>
        );
      })}
    </div>
  );
}

function Place({ n, a, b, style }: { n: string; a: string; b: string; style?: React.CSSProperties }) {
  return (
    <p className="mono pre" style={{ ...t(12, 1.4, 0.24), color: "var(--muted-small)", ...style }}>
      <span style={{ color: "var(--laterite-2)" }}>{n}</span>{`   ${a}\n      ${b}`}
    </p>
  );
}

export default function MapSection() {
  return (
    <section data-label="(03) WHERE THE WORK LIVES" aria-labelledby="where">
      <div className="only-d sec" style={{ height: u(1117), background: "var(--bone)" }}>
        <p className="mono abs" style={{ ...at(56, 200), ...t(12, 1.4, 0.24) }}>(01)<br />WHERE THE WORK LIVES</p>
        <Reveal style={at(56, 290, 700)}>
          <h2 id="where" style={{ ...t(64, 1.02, -1.92), fontWeight: 400, margin: 0 }}>Products used from a court registry in Accra to a feature phone in Tamale.</h2>
        </Reveal>
        {PLACES.map(([n, a, b], i) => (
          <Reveal key={n} delay={0.05 * i} y={16} style={at(56, 560 + i * 64)}><Place n={n} a={a} b={b} /></Reveal>
        ))}
        <p className="mono abs" style={{ ...at(56, 1037), ...t(16, 1.4, 0.32) }}>+</p>
        <p className="mono abs pre" style={{ ...at(90, 1039), ...t(12, 1.4, 0.24), color: "var(--muted-small)" }}>{`05°33′N   0°12′W   ·   DRAWN FROM 3,500 POINTS`}</p>
        <div style={at(BOX.x, BOX.y)}><Cloud W={BOX.w} ring={28} dot={10} labels /></div>
      </div>

      {(["t", "m"] as const).map((bp) => {
        const T = bp === "t";
        return (
          <div key={bp} className={T ? "only-t" : "only-m"} style={{ background: "var(--bone)", padding: `${u(T ? 104 : 72)} ${u(T ? 40 : 20)} ${u(T ? 120 : 72)}` }}>
            <p className="mono" style={t(11, 1.5, 0.33)}>(03) WHERE THE WORK LIVES</p>
            <Reveal><h2 style={{ ...t(T ? 42 : 30, 1.08, T ? -1.05 : -0.75), fontWeight: 400, margin: `${u(T ? 36 : 28)} 0 0` }}>Products used from a court registry in Accra to a feature phone in Tamale.</h2></Reveal>
            <div style={{ display: "flex", justifyContent: "center", marginTop: u(T ? 36 : 28) }}>
              <Cloud W={T ? 520 : 390} ring={T ? 22 : 16} dot={T ? 8 : 6} labels={false} />
            </div>
            <div style={{ marginTop: u(T ? 36 : 28) }}>
              {PLACES.map(([n, a, b]) => (
                <div key={n} className="mono" style={{ display: "flex", gap: u(16), padding: `${u(15)} 0 ${u(14)}`, ...t(11, 1.5, 0.33) }}>
                  <span style={{ color: "var(--laterite)", width: u(14) }}>{n}</span>
                  <span>{a}<br />{b}</span>
                </div>
              ))}
            </div>
            <p className="mono pre" style={{ ...t(11, 1.5, 0.33), color: "var(--muted-small)", marginTop: u(T ? 36 : 28) }}>{`05°33′N   0°12′W   ·   DRAWN FROM 3,500 POINTS`}</p>
          </div>
        );
      })}
    </section>
  );
}
