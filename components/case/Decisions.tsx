"use client";
import Reveal from "@/components/Reveal";
import type { CaseData, Chip } from "@/content/cases/types";
import { at, t, u } from "@/lib/u";
import { mono } from "./ui";

const RULE = "rgba(26,26,23,.18)";
const pill = { display: "inline-flex", alignItems: "center", borderRadius: 99, padding: `${u(9)} ${u(16)}`, ...t(14, 1.4), fontWeight: 500, whiteSpace: "nowrap" } as const;

function ChipView({ c }: { c: Chip }) {
  if (c.kind === "pill")
    return (
      <div style={{ display: "flex", gap: u(10), alignItems: "center" }}>
        <span style={{ ...pill, background: "var(--bone)" }}>{c.a}</span>
        <span style={{ ...t(14, 1.4), color: "#6b6b67", whiteSpace: "nowrap" }}>{c.b}</span>
      </div>
    );
  if (c.kind === "ba")
    return (
      <div style={{ display: "flex", gap: u(10) }}>
        {[["Before", c.before, "#2f9fd0"], ["After", c.after, "#1d6e93"]].map(([a, b, bg]) => (
          <div key={a} style={{ background: bg, color: "#fff", borderRadius: u(10), padding: `${u(12)} ${u(18)}`, display: "flex", flexDirection: "column", gap: u(4) }}>
            <span style={{ ...t(24, 1.4), fontWeight: 500 }}>{a}</span>
            <span style={{ ...mono(11, 3, 1.4), whiteSpace: "pre" }}>{b}</span>
          </div>
        ))}
      </div>
    );
  if (c.kind === "outline")
    return (
      <div style={{ display: "flex", gap: u(10) }}>
        {c.items.map((x) => <span key={x} style={{ ...pill, border: "1px solid var(--ink)", padding: `${u(9)} ${u(16)}`, whiteSpace: "pre" }}>{x}</span>)}
      </div>
    );
  return (
    <div style={{ display: "flex", gap: u(6), alignItems: "center" }}>
      {c.done.map((x) => <span key={x} style={{ ...pill, background: "var(--ink)", color: "#f5f2ec" }}>{x}</span>)}
      {c.todo.map((x) => <span key={x} style={{ ...pill, border: "1px solid #767672", color: "#6b6b67", padding: `${u(9)} ${u(16)}` }}>{x}</span>)}
    </div>
  );
}

export default function Decisions({ c }: { c: CaseData }) {
  const d = c.decisions!;
  const numC = c.colors.decision ?? "#a84014";
  return (
    <section data-label={c.label} aria-labelledby={`${c.slug}-decisions`}>
      <div className="only-d sec" style={{ height: u(1240), background: "var(--bone)" }}>
        <p style={{ ...at(56, 110), ...mono(11, 3, 1.4) }}>{d.label}</p>
        <Reveal style={at(56, 150, 1000)}><h2 id={`${c.slug}-decisions`} style={{ ...t(60, 1.05, -1.5), fontWeight: 400, margin: 0 }}>{d.h}</h2></Reveal>
        {d.items.map((it, i) => {
          const y = 340 + i * 200;
          return (
            <Reveal key={i} y={30} delay={0.05} style={at(0, y, 1728, 200)}>
              <div style={{ ...at(56, 0, 1616, 1), background: RULE }} />
              <p className="anton" style={{ ...at(56, 0), fontSize: u(150), lineHeight: u(104), color: numC, whiteSpace: "nowrap" }}>0{i + 1}</p>
              <p style={{ ...at(300, 34), ...mono(11, 3, 1.4), color: "var(--laterite)" }}>DECISION 0{i + 1}</p>
              <h3 style={{ ...at(300, 58, 500), ...t(30, 1.15, -0.3), fontWeight: 500, margin: 0 }}>{it.title}</h3>
              <p style={{ ...at(880, 34, 470), ...t(16, 1.5), color: "var(--ink-2)" }}>{it.body}</p>
              <div style={at(it.chipAt[0], it.chipAt[1] - y)}><ChipView c={it.chip} /></div>
            </Reveal>
          );
        })}
        <div style={{ ...at(56, 1140, 1616, 1), background: RULE }} />
      </div>

      {(["t", "m"] as const).map((bp) => {
        const T = bp === "t";
        return (
          <div key={bp} className={T ? "only-t" : "only-m"} style={{ background: "var(--bone)", padding: `${u(T ? 96 : 64)} ${u(T ? 40 : 20)}` }}>
            <p style={mono(11, 3, 1.4)}>{d.label}</p>
            <h2 style={{ ...t(T ? 48 : 30, 1.25, T ? -1.2 : -0.75), fontWeight: 400, margin: `${u(24)} 0 0` }}>{d.h}</h2>
            {d.items.map((it, i) => (
              <div key={i}>
                <div style={{ height: 1, background: "#c9c7bd", marginTop: u(24) }} />
                <Reveal y={20} style={{ marginTop: u(24), display: "flex", flexDirection: T ? "row" : "column", gap: u(T ? 28 : 10) }}>
                  <div style={{ display: "flex", flexDirection: T ? "column" : "row", alignItems: T ? "flex-start" : "center", gap: u(T ? 6 : 14), width: T ? u(170) : undefined, flex: "none" }}>
                    <p className="anton" style={{ ...t(T ? 92 : 58, 0.9), color: numC }}>0{i + 1}</p>
                    <p style={{ ...mono(11, 3, 1.4), color: "var(--laterite)" }}>DECISION 0{i + 1}</p>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: u(10), paddingTop: u(T ? 10 : 0) }}>
                    <h3 style={{ ...t(T ? 28 : 22, 1.25, T ? -0.28 : -0.22), fontWeight: 500, margin: 0 }}>{it.title}</h3>
                    <p style={{ ...t(T ? 16 : 15, 1.25), color: "var(--ink-2)" }}>{it.body}</p>
                  </div>
                </Reveal>
              </div>
            ))}
          </div>
        );
      })}
    </section>
  );
}
