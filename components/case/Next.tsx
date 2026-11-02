"use client";
import Link from "next/link";
import { useState } from "react";
import Reveal from "@/components/Reveal";
import type { CaseData } from "@/content/cases/types";
import { at, t, u } from "@/lib/u";
import { FlowShot, ShotBox, mono } from "./ui";

export default function Next({ c }: { c: CaseData }) {
  const n = c.next;
  const [hov, setHov] = useState(false);
  const arrow = (s: string) => {
    const [a, b] = s.split("→");
    return b === undefined ? s : <>{a}<span style={{ display: "inline-block", transform: hov ? `translateX(${u(18)})` : "none", transition: "transform .5s cubic-bezier(.2,.7,.1,1)" }}>→</span>{b}</>;
  };
  const title = (size: number, ls: number) => (
    <span style={{ display: "block", ...t(size, size >= 100 ? 0.95 : 1, ls), fontWeight: 500, whiteSpace: "pre" }}>
      {n.title.map((l, i) => <span key={i} style={{ display: "block" }}>{arrow(l)}</span>)}
    </span>
  );
  const hover = { onMouseEnter: () => setHov(true), onMouseLeave: () => setHov(false), onFocus: () => setHov(true), onBlur: () => setHov(false) };
  return (
    <section data-label={c.label} aria-label="Next case study" style={{ background: "var(--sand)" }}>
      <div className="only-d sec" style={{ height: u(700) }}>
        <Link href={n.href} {...hover} style={{ position: "absolute", inset: 0, display: "block" }} aria-label={`Next case study: ${n.title.join(" ").replace("→", "").trim()}`}>
          <p style={{ ...at(56, 140), ...mono(11, 3, 1.4) }}>NEXT CASE STUDY · {n.num}</p>
          <Reveal style={at(56, 180)}>{title(120, -6)}</Reveal>
          <p style={{ ...at(56, 440, 560), ...t(18, 1.4) }}>{n.desc}</p>
          {n.img && (
            <div style={{ position: "absolute", inset: 0, transform: hov ? `translateY(${u(-12)}) rotate(-1deg)` : "none", transformOrigin: "80% 50%", transition: "transform .6s cubic-bezier(.2,.7,.1,1)" }}>
              <ShotBox s={n.img} />
            </div>
          )}
        </Link>
      </div>

      {(["t", "m"] as const).map((bp) => {
        const T = bp === "t";
        const text = (
          <div style={{ display: "flex", flexDirection: "column", gap: u(T ? 18 : 24), width: T ? u(422) : undefined, flex: "none" }}>
            <p style={mono(11, 3, 1.4)}>NEXT CASE STUDY · {n.num}</p>
            {title(T ? 56 : 42, T ? -2.8 : -2.1)}
            <p style={t(16, 1.25)}>{n.desc}</p>
          </div>
        );
        return (
          <div key={bp} className={T ? "only-t" : "only-m"} style={{ padding: `${u(T ? 96 : 64)} ${u(T ? 40 : 20)}` }}>
            <Link href={n.href} {...hover} style={{ display: "flex", flexDirection: T ? "row" : "column", alignItems: T ? "center" : "stretch", gap: u(T ? 32 : 24) }}>
              {text}
              {n.img && (
                <div style={{ display: "flex", justifyContent: "center", flex: 1, paddingTop: T ? 0 : u(16) }}>
                  <FlowShot s={n.img} w={T ? 280 : 230} r={T ? 8.6 : 7.1} rot={n.img.rot} />
                </div>
              )}
            </Link>
          </div>
        );
      })}
    </section>
  );
}
