"use client";
import { useState } from "react";
import Reveal from "@/components/Reveal";
import type { CaseData } from "@/content/cases/types";
import { at, t, u } from "@/lib/u";
import { FlowShot, Pin, ShotBox, mono } from "./ui";

const STROKE = "#a84014";

export default function UpClose({ c }: { c: CaseData }) {
  const q = c.upclose!;
  const [act, setAct] = useState<number | null>(null);
  const on = (i: number) => ({ onMouseEnter: () => setAct(i), onMouseLeave: () => setAct(null), onFocus: () => setAct(i), onBlur: () => setAct(null) });
  const dim = (i: number) => ({ opacity: act === null || act === i ? 1 : 0.45, transition: "opacity .35s, transform .45s cubic-bezier(.2,.7,.1,1)" });
  const ts = q.textSize ?? 16;
  return (
    <section data-label={c.label} aria-labelledby={`${c.slug}-upclose`}>
      <div className="only-d sec" style={{ height: u(q.height), background: c.colors.soft }}>
        <p style={{ ...at(56, 120), ...mono(12, 6) }}>{q.label}</p>
        <Reveal style={at(56, 160, 1100)}><h2 id={`${c.slug}-upclose`} style={{ ...t(64, 1.05, -1.28), fontWeight: 400, margin: 0 }}>{q.h}</h2></Reveal>
        <Reveal delay={0.1} style={{ position: "absolute", inset: 0 }}>
          <ShotBox s={q.main} />
          {q.main.cap && <p style={{ ...at(q.main.x, q.main.y + q.main.h + 20, q.main.w), ...mono(11, 5), color: "#6b6b66" }}>{q.main.cap}</p>}
        </Reveal>
        {q.details.map((d, i) => d.onMain && (
          <button key={`p${i}`} type="button" aria-label={`Detail ${i + 1}`} {...on(i)} style={{ ...at(d.onMain[0], d.onMain[1], 28, 28), zIndex: 2 }}>
            <Pin n={i + 1} active={act === i} />
          </button>
        ))}
        {q.details.map((d, i) => (
          <Reveal key={i} delay={0.15 + i * 0.12} y={24} style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
            <div style={{ position: "absolute", inset: 0, ...dim(i) }}>
              <div style={{ ...at(d.pin[0], d.pin[1], 28, 28) }}><Pin n={i + 1} active={act === i} /></div>
              <p style={{ ...at(d.text_[0], d.text_[1], d.text_[2]), ...t(ts, 1.35), pointerEvents: "auto" }} {...on(i)}>{d.text}</p>
              <div {...on(i)} style={{ pointerEvents: "auto" }}>
                <ShotBox s={d.zoom} stroke={STROKE} style={{ transform: act === i ? `translateY(${u(-6)}) scale(1.02)` : undefined, transition: "transform .45s cubic-bezier(.2,.7,.1,1)" }} />
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {(["t", "m"] as const).map((bp) => {
        const T = bp === "t";
        const W = T ? 754 : 390, col = T ? 712 : 350;
        const phone = q.main.phone;
        return (
          <div key={bp} className={T ? "only-t" : "only-m"} style={{ background: c.colors.soft, padding: `${u(T ? 96 : 64)} ${u(T ? 40 : 20)}` }}>
            <p style={mono(11, 6, 1.4)}>{q.label}</p>
            <h2 style={{ ...t(T ? 48 : 30, 1.25, T ? -0.96 : -0.6), fontWeight: 400, margin: `${u(24)} 0 0` }}>{q.h}</h2>
            <Reveal style={{ marginTop: u(24), display: "flex", flexDirection: "column", alignItems: "center" }}>
              <FlowShot s={q.main} w={phone ? (T ? 370 : 260) : W} r={phone ? (T ? 26 : 19) : T ? 10.6 : 5.5} style={{ boxShadow: "none" }} />
              {q.main.cap && <p style={{ ...mono(11, 5, 1.4), color: "#6b6b66", marginTop: u(16), alignSelf: "flex-start" }}>{q.main.cap}</p>}
            </Reveal>
            {q.details.map((d, i) => {
              const zw = Math.min(d.zoom.w, col);
              return (
                <Reveal key={i} y={20} style={{ display: "flex", gap: u(T ? 14 : 12), marginTop: u(24) }}>
                  <Pin n={i + 1} />
                  <div style={{ display: "flex", flexDirection: "column", gap: u(10), minWidth: 0 }}>
                    <p style={t(T ? 17 : 16, 1.25)}>{d.text}</p>
                    <FlowShot s={d.zoom} w={zw} r={zw < d.zoom.w ? (T ? 10 : 6.3) : 10} stroke={STROKE} />
                  </div>
                </Reveal>
              );
            })}
          </div>
        );
      })}
    </section>
  );
}
