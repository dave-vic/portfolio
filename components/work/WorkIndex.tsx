"use client";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useState, type CSSProperties, type ReactNode } from "react";
import { at, t, u } from "@/lib/u";
import { FILTERS, PROJECTS, type Filter, type Project } from "./data";

const EASE = [0.2, 0.7, 0.1, 1] as const;
type BP = "d" | "t" | "m";

const CSS = `
.wk-row .wk-thumb img { transition: transform .8s cubic-bezier(.2,.7,.1,1); transform-origin: center; }
.wk-row:hover .wk-thumb img { transform: scale(1.06); }
.wk-arrow { display: inline-block; transition: transform .45s cubic-bezier(.2,.7,.1,1), color .3s; }
a.wk-row:hover .wk-arrow { transform: translateX(${u(6)}); color: var(--laterite); }
a.wk-row:hover .wk-title { color: var(--laterite); }
.wk-title { transition: color .3s; }
.wk-chip { transition: background-color .3s, color .3s; }
.wk-chip:not([aria-pressed="true"]):hover { background: rgba(20,20,20,.07); }
@media (prefers-reduced-motion: reduce) { .wk-row .wk-thumb img, .wk-arrow { transition: none; } }
`;

function Thumb({ p, bp }: { p: Project; bp: BP }) {
  const th = p.thumb;
  if (th.kind === "nda")
    return (
      <div role="img" aria-label="Under NDA" style={{ width: "100%", height: "100%", background: "#1c1c1a", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <span className="mono nowrap" style={{ ...t(bp === "d" ? 10.77 : bp === "t" ? 10 : 15, "normal", (bp === "d" ? 10.77 : bp === "t" ? 10 : 15) * 0.08), color: "#edebe3" }}>UNDER NDA</span>
      </div>
    );
  const src = th.kind === "img" ? th.src : th[bp];
  const pos = th.kind === "img" ? th.pos : "center";
  return <img src={src} alt={`${p.title} preview`} loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: pos }} />;
}

/** Row shell: a link when the project has a case study, a plain block otherwise. */
function Shell({ p, style, children }: { p: Project; style: CSSProperties; children: ReactNode }) {
  return p.href ? (
    <Link href={p.href} className="wk-row" style={{ display: "block", ...style }}>{children}</Link>
  ) : (
    <div className="wk-row" style={style}>{children}</div>
  );
}

function Arrow({ p, size, lh }: { p: Project; size: number; lh: number }) {
  return <span aria-hidden className="sans wk-arrow" style={{ ...t(size, lh), opacity: p.href ? 1 : 0.25 }}>→</span>;
}

function RowD({ p }: { p: Project }) {
  const mono: CSSProperties = { ...t(11, 1.6, 0.33) };
  return (
    <Shell p={p} style={{ position: "relative", height: u(230), borderTop: "1px solid var(--ink)" }}>
      <p className="mono abs" style={{ ...at(0, 31), ...t(11, 1.4, 0.33), color: "var(--laterite)" }}>{p.n}</p>
      <div className="wk-thumb" style={{ ...at(54, 29, 280, 170), overflow: "hidden" }}><Thumb p={p} bp="d" /></div>
      <h2 className="sans wk-title" style={{ ...at(374, 27, 520), ...t(38, 1.1, -0.57), fontWeight: 500, margin: 0 }}>{p.title}</h2>
      <p className="sans" style={{ ...at(374, 81, 440), ...t(16, 1.5), color: "var(--ink-2)" }}>{p.desc}</p>
      <p className="mono abs nowrap" style={{ ...at(944, 31), ...mono }}>SECTOR<br />{p.sector}</p>
      <p className="mono abs" style={{ ...at(1094, 31, 300), ...mono }}>ROLE<br />{p.role}</p>
      <p className="mono abs nowrap" style={{ ...at(1424, 31), ...mono }}>YEAR<br />{p.year}</p>
      <span className="abs" style={at(1564, 29)}><Arrow p={p} size={28} lh={1.4} /></span>
    </Shell>
  );
}

function RowT({ p }: { p: Project }) {
  return (
    <Shell p={p} style={{ display: "flex", padding: `${u(24)} 0`, borderTop: "1px solid var(--ink)" }}>
      <p className="mono" style={{ ...t(11, 1.5, 0.33), color: "var(--laterite)", width: u(38), flex: "none" }}>{p.n}</p>
      <div className="wk-thumb" style={{ width: u(260), height: u(170), overflow: "hidden", flex: "none" }}><Thumb p={p} bp="t" /></div>
      <div style={{ marginLeft: u(24), flex: 1, minWidth: 0 }}>
        <div style={{ display: "flex", alignItems: "center", gap: u(12) }}>
          <h2 className="sans wk-title" style={{ ...t(32, 1.1, -0.48), fontWeight: 500, margin: 0, flex: 1 }}>{p.title}</h2>
          <Arrow p={p} size={24} lh={1.45} />
        </div>
        <p className="sans" style={{ ...t(17, 1.45), color: "var(--ink-2)", marginTop: u(10) }}>{p.desc}</p>
        <p className="mono" style={{ ...t(11, 1.5, 0.33), color: "var(--muted-small)", marginTop: u(10) }}>{p.meta}</p>
      </div>
    </Shell>
  );
}

function RowM({ p }: { p: Project }) {
  return (
    <Shell p={p} style={{ display: "block", padding: `${u(24)} 0`, borderTop: "1px solid var(--ink)" }}>
      <div className="wk-thumb" style={{ width: "100%", height: u(234), overflow: "hidden" }}><Thumb p={p} bp="m" /></div>
      <div style={{ display: "flex", alignItems: "flex-start", gap: u(12), marginTop: u(14) }}>
        <p className="mono" style={{ ...t(11, 1.5, 0.33), color: "var(--laterite)", paddingTop: u(9), flex: "none" }}>{p.n}</p>
        <h2 className="sans wk-title" style={{ ...t(26, 1.1, -0.39), fontWeight: 500, margin: 0, paddingTop: u(3), flex: 1 }}>{p.title}</h2>
        <Arrow p={p} size={24} lh={1.45} />
      </div>
      <p className="sans" style={{ ...t(16, 1.45), color: "var(--ink-2)", marginTop: u(10) }}>{p.desc}</p>
      <p className="mono" style={{ ...t(11, 1.5, 0.33), color: "var(--muted-small)", marginTop: u(10) }}>{p.meta}</p>
    </Shell>
  );
}

function Chips({ f, set, bp }: { f: Filter; set: (f: Filter) => void; bp: BP }) {
  const label: CSSProperties = { ...t(11, bp === "d" ? 1.4 : 1.5, 0.33), color: "var(--muted-small)" };
  return (
    <div role="group" aria-label="Filter projects" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", columnGap: u(8), rowGap: u(8) }}>
      <span className="mono nowrap" style={{ ...label, marginRight: u(bp === "d" ? 47 : 0) }}>VIEWING AS</span>
      {FILTERS.map((k) => {
        const on = k === f;
        return (
          <button key={k} type="button" className="mono nowrap wk-chip" aria-pressed={on} onClick={() => set(k)}
            style={{ ...t(11, bp === "d" ? 1.4 : 1.5, 0.33), padding: `${u(7)} ${u(14)}`, borderRadius: 99, border: "1px solid var(--ink)",
              background: on ? "var(--ink)" : "transparent", color: on ? "var(--on-dark)" : "var(--ink)" }}>
            {k}
          </button>
        );
      })}
    </div>
  );
}

function List({ rows, bp }: { rows: Project[]; bp: BP }) {
  const reduce = useReducedMotion();
  const Row = bp === "d" ? RowD : bp === "t" ? RowT : RowM;
  return (
    <div style={{ position: "relative" }}>
      <AnimatePresence mode="popLayout" initial={false}>
        {rows.map((p, i) => (
          <motion.div key={p.n} layout={!reduce}
            initial={{ opacity: 0, y: 48 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={reduce ? undefined : { opacity: 0, transition: { duration: 0.25 } }}
            viewport={{ once: true, margin: "0px 0px -6% 0px" }}
            transition={{ duration: 0.85, ease: EASE, delay: (i % 4) * 0.08, layout: { duration: 0.6, ease: EASE } }}>
            <Row p={p} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

const NOTE = "Some client work is under NDA. Ask me and I’ll walk you through it on a call.";

export default function WorkIndex() {
  const [f, setF] = useState<Filter>("EVERYTHING");
  const rows = f === "EVERYTHING" ? PROJECTS : PROJECTS.filter((p) => p.cats.includes(f));
  return (
    <section data-label="(WORK) ALL PROJECTS" aria-label="Project index">
      <style>{CSS}</style>
      <p aria-live="polite" style={{ position: "absolute", width: 1, height: 1, overflow: "hidden", clip: "rect(0 0 0 0)" }}>
        {`Showing ${rows.length} of ${PROJECTS.length} projects`}
      </p>

      {/* desktop */}
      <div className="only-d wide-frame" style={{ background: "var(--bone)", padding: `0 ${u(56)} ${u(55)}`, overflow: "hidden" }}>
        <div style={{ position: "relative", height: u(240) }}>
          <div style={{ position: "absolute", left: 0, top: u(141) }}><Chips f={f} set={setF} bp="d" /></div>
          <p className="mono abs nowrap" style={{ right: 0, top: u(150), ...t(11, 1.4, 0.33), color: "var(--muted-small)" }}>SORT: NEWEST FIRST</p>
        </div>
        <List rows={rows} bp="d" />
        <div style={{ borderTop: "1px solid var(--ink)", paddingTop: u(39) }}>
          <p className="serif" style={{ ...t(18, 1.4), fontStyle: "italic" }}>{NOTE}</p>
        </div>
      </div>

      {/* tablet + mobile */}
      {(["t", "m"] as const).map((bp) => {
        const T = bp === "t";
        return (
          <div key={bp} className={T ? "only-t" : "only-m"} style={{ background: "var(--bone)", padding: `${u(T ? 72 : 48)} ${u(T ? 40 : 20)} ${u(T ? 104 : 72)}`, overflow: "hidden" }}>
            <div style={{ paddingBottom: u(28) }}><Chips f={f} set={setF} bp={bp} /></div>
            <List rows={rows} bp={bp} />
            <div style={{ borderTop: "1px solid var(--ink)", paddingTop: u(24) }}>
              <p className="serif" style={{ ...t(17, 1.25), fontStyle: "italic" }}>{NOTE}</p>
            </div>
          </div>
        );
      })}
    </section>
  );
}
