"use client";
import Reveal from "@/components/Reveal";
import type { CaseData } from "@/content/cases/types";
import { at, t, u } from "@/lib/u";
import { Count, mono } from "./ui";

export default function Outcome({ c }: { c: CaseData }) {
  const o = c.outcome!;
  const bg = c.colors.outcome ?? c.colors.brand;
  const cols = [o.learned && ["What I learned", o.learned], o.next && ["What comes next", o.next]].filter(Boolean) as [string, string][];
  const H = cols.length ? 940 : 700;
  return (
    <section data-label={c.label} aria-labelledby={`${c.slug}-outcome`} style={{ color: "#fff" }}>
      <div className="only-d sec" style={{ height: u(H), background: bg }}>
        <p style={{ ...at(56, 110), ...mono(11, 3, 1.4) }}>{o.label}</p>
        <Reveal style={at(56, 150, 1150)}><h2 id={`${c.slug}-outcome`} style={{ ...t(52, 1.1, -1.04), fontWeight: 400, margin: 0 }}>{o.h}</h2></Reveal>
        {o.nums.map(([n, l], i) => (
          <Reveal key={i} delay={i * 0.12} y={40} style={at(56 + i * 404, 340, 380, 240)}>
            <div style={{ ...at(0, 70, 1, 170), background: "#34342f" }} />
            <Count v={n} className="anton" style={{ ...at(24, 0), ...t(200, 1, -8), whiteSpace: "nowrap" }} />
            <p style={{ ...at(24, 200), ...t(16, 1.4), whiteSpace: "nowrap" }}>{l}</p>
          </Reveal>
        ))}
        {cols.map(([h, b], i) => (
          <Reveal key={h} delay={0.1 + i * 0.1} y={24} style={at(56 + i * 824, 680, 748)}>
            <h3 style={{ ...t(26, 1.4, -0.26), fontWeight: 500, margin: 0 }}>{h}</h3>
            <p style={{ ...t(17, 1.5), marginTop: u(9) }}>{b}</p>
          </Reveal>
        ))}
      </div>

      {(["t", "m"] as const).map((bp) => {
        const T = bp === "t";
        return (
          <div key={bp} className={T ? "only-t" : "only-m"} style={{ background: bg, padding: `${u(T ? 96 : 64)} ${u(T ? 40 : 20)}` }}>
            <p style={mono(11, 3, 1.4)}>{o.label}</p>
            <h2 style={{ ...t(T ? 48 : 30, 1.25, T ? -0.96 : -0.6), fontWeight: 400, margin: `${u(24)} 0 0` }}>{o.h}</h2>
            <div style={{ display: "grid", gridTemplateColumns: T ? "repeat(4, 1fr)" : "1fr 1fr", columnGap: u(16), rowGap: u(24), marginTop: u(24) }}>
              {o.nums.map(([n, l], i) => (
                <Reveal key={i} y={24} delay={i * 0.08} style={{ display: "flex", flexDirection: "column", gap: u(6) }}>
                  <Count v={n} className="anton" style={{ ...t(T ? 116 : 84, 0.9, T ? -4.64 : -3.36) }} />
                  <p style={t(15, 1.25)}>{l}</p>
                </Reveal>
              ))}
            </div>
            {cols.length > 0 && (
              <>
                <div style={{ height: 1, background: "rgba(255,255,255,.27)", marginTop: u(24) }} />
                <div style={{ display: "flex", flexDirection: T ? "row" : "column", gap: u(T ? 40 : 24), marginTop: u(24) }}>
                  {cols.map(([h, b]) => (
                    <div key={h} style={{ flex: 1, display: "flex", flexDirection: "column", gap: u(8) }}>
                      <h3 style={{ ...t(T ? 24 : 22, 1.25, T ? -0.24 : -0.22), fontWeight: 500, margin: 0 }}>{h}</h3>
                      <p style={t(16, 1.25)}>{b}</p>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        );
      })}
    </section>
  );
}
