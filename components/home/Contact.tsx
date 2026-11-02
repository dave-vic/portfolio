"use client";
import { motion } from "motion/react";
import { useState } from "react";
import Link from "next/link";
import { at, t, u } from "@/lib/u";

const EASE = [0.2, 0.7, 0.1, 1] as const;
const EMAIL = "davidadzato45@gmail.com";
const LI = "https://www.linkedin.com/in/davida-dzato-b870021a0/";
const GH = "https://github.com/dave-vic";

function Letters({ text, style, delay = 0 }: { text: string; style: React.CSSProperties; delay?: number }) {
  return (
    <span aria-label={text} style={{ display: "inline-flex", overflow: "hidden", ...style }}>
      {[...text].map((c, i) => (
        <motion.span key={i} aria-hidden style={{ display: "inline-block" }}
          initial={{ opacity: 0, filter: "blur(16px)" }} whileInView={{ opacity: 1, filter: "blur(0px)" }} viewport={{ once: true }}
          transition={{ duration: 1, ease: EASE, delay: 0.4 + delay + i * 0.06 }}>{c}</motion.span>
      ))}
    </span>
  );
}

/** No backend needed: the form opens the visitor's email app with the message filled in. */
function Form({ cols, pad, width }: { cols: boolean; pad: number; width?: number }) {
  const [sent, setSent] = useState(false);
  const label: React.CSSProperties = { ...t(11, "normal", 0.22), color: "var(--muted-small)" };
  const box: React.CSSProperties = { display: "grid", gap: u(6), paddingBottom: u(10), borderBottom: "1px solid var(--muted)" };
  const value: React.CSSProperties = { ...t(13, "normal", 0.13), textTransform: "uppercase" };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const f = new FormData(e.currentTarget);
        const body = `${f.get("message")}\n\n${f.get("name")} · ${f.get("company")}\n${f.get("email")}`;
        window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent("Portfolio enquiry from " + (f.get("name") || "a visitor"))}&body=${encodeURIComponent(body)}`;
        setSent(true);
      }}
      className="mono"
      style={{ background: "var(--bone)", color: "var(--ink)", padding: u(pad), display: "flex", flexDirection: "column", gap: u(22), width: width ? u(width) : "100%" }}
    >
      <div style={{ display: "grid", gridTemplateColumns: cols ? "1fr 1fr" : "1fr", gap: u(cols ? 24 : 22) }}>
        <label style={box}><span style={label}>YOUR NAME:</span><input name="name" required className="field mono" style={value} placeholder="AMA OWUSU" autoComplete="name" /></label>
        <label style={box}><span style={label}>COMPANY NAME:</span><input name="company" className="field mono" style={value} placeholder="REMOTE PRODUCT CO." autoComplete="organization" /></label>
      </div>
      <label style={box}><span style={label}>YOUR EMAIL:</span><input name="email" type="email" required className="field mono" style={value} placeholder="AMA@PRODUCT.CO" autoComplete="email" /></label>
      <label style={box}>
        <span style={label}>WHAT ARE YOU BUILDING?</span>
        <textarea name="message" rows={2} required className="field sans" style={{ ...t(15, 1.45, 0.15) }} placeholder="We’re hiring a product designer for our product team, fully remote. Are you open to a chat this week?" />
      </label>
      <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", gap: u(16) }}>
        {sent && <span style={{ ...t(11, 1.4), color: "var(--muted-small)" }}>OPENING YOUR EMAIL APP…</span>}
        <button type="submit" className="pre" style={{ ...t(12, "normal", 0.24) }}>{`SUBMIT  →`}</button>
      </div>
    </form>
  );
}

export default function Contact() {
  const toTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  return (
    <section id="contact" data-label="(08) CONTACT" aria-labelledby="contact-h" style={{ color: "var(--on-dark)", position: "relative" }}>
      <h2 id="contact-h" style={{ position: "absolute", width: 1, height: 1, overflow: "hidden", clip: "rect(0 0 0 0)" }}>Contact</h2>
      <div className="only-d sec" style={{ height: u(1117) }}>
        <motion.img className="bleed" loading="lazy" decoding="async" src="/home/hero-photo.jpg" alt="" style={{ position: "absolute", left: 0, top: "-1.57%", width: "100%", height: "103.13%", objectFit: "cover" }}
          initial={{ scale: 1.12, opacity: 0.6 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1.6, ease: EASE }} />
        {/* soft shade on the right so the contact links stay readable over the light paper in the photo */}
        <div aria-hidden style={{ position: "absolute", top: 0, bottom: 0, right: "calc(-1 * var(--gx))", width: "calc(42% + var(--gx))", background: "linear-gradient(to left, rgba(70,22,6,.62), rgba(70,22,6,.38) 55%, rgba(70,22,6,0))", pointerEvents: "none" }} />
        {[["OPEN TO", "REMOTE ROLES WORLDWIDE", 56], ["BASED IN", "ACCRA, GHANA · GMT", 486], ["COPYRIGHT", "© 2026 DAVIDA DZATO", 916], ["WORKING ACROSS", "PRODUCT DESIGN · PM · ANALYSIS · AI", 1346]].map(([a, b, x]) => (
          <p key={a as string} className="mono abs" style={{ ...at(x as number, 40), ...t(11, 1.4, 0.22) }}>{a}<br />{b}</p>
        ))}
        <Letters text="LET’S" style={{ ...at(56, 280), ...t(240, 0.9, -14.4), fontWeight: 500 }} />
        <Letters text="BUILD" delay={0.15} style={{ ...at(1012, 280), ...t(240, 0.9, -14.4), fontWeight: 500 }} />
        <motion.p className="serif abs" style={{ ...at(62, 500), ...t(24), textShadow: "0 1px 12px rgba(0,0,0,.35)" }} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: EASE, delay: 1.2 }}>Hire me</motion.p>
        <motion.p className="serif abs" style={{ ...at(1028, 500), ...t(24), textShadow: "0 1px 12px rgba(0,0,0,.35)" }} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: EASE, delay: 1.2 }}>Connect online</motion.p>
        <p className="abs" style={{ ...at(1638, 236), ...t(40) }}>®</p>
        {/* contact details on a dark glass panel so they read clearly over the photo */}
        <motion.div className="mono abs" style={{ ...at(1356, 610, 316), padding: `${u(26)} ${u(28)}`, background: "rgba(20,20,20,.62)", backdropFilter: "blur(14px)", WebkitBackdropFilter: "blur(14px)", borderRadius: u(14), border: "1px solid rgba(255,255,255,.14)", display: "grid", gap: u(22), ...t(14, 1.6, 0.28) }}
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: EASE, delay: 1.6 }}>
          <p><span style={{ color: "rgba(245,242,236,.6)" }}>EMAIL</span><br /><a href={`mailto:${EMAIL}`} style={{ textDecoration: "underline", textUnderlineOffset: u(4) }}>{EMAIL.toUpperCase()}</a></p>
          <p><span style={{ color: "rgba(245,242,236,.6)" }}>SOCIAL</span><br /><a href={LI} target="_blank" rel="noopener" style={{ textDecoration: "underline", textUnderlineOffset: u(4) }}>LINKEDIN ↗</a><br /><a href={GH} target="_blank" rel="noopener" style={{ textDecoration: "underline", textUnderlineOffset: u(4) }}>GITHUB ↗</a></p>
          <p><span style={{ color: "rgba(245,242,236,.6)" }}>ELSEWHERE</span><br /><a href="/Davida-Dzato-CV.pdf" download style={{ textDecoration: "underline", textUnderlineOffset: u(4) }}>DOWNLOAD CV ↓</a></p>
        </motion.div>
        <p className="mono abs" style={{ ...at(56, 1069), ...t(12, "normal", 0.24) }}>DAVIDA DZATO</p>
        <button onClick={toTop} className="mono abs" style={{ ...at(816, 1069), ...t(12, "normal", 0.24), color: "var(--on-dark)" }}>(BACK TO TOP)</button>
        <p className="mono abs pre" style={{ ...at(1508, 1069), ...t(12, "normal", 0.24) }}><Link href="/work">WORK</Link>{"    "}<Link href="/about">ABOUT</Link>{"    "}<Link href="/">INDEX</Link></p>
        <motion.div style={{ ...at(0, 800, 620) }} initial="hide" whileInView="show" viewport={{ once: true }}>
          <motion.div variants={{ hide: { y: u(360) }, show: { y: 0 } }} transition={{ duration: 1.1, ease: EASE, delay: 1.4 }}>
            <Form cols pad={32} width={620} />
          </motion.div>
        </motion.div>
      </div>

      {(["t", "m"] as const).map((bp) => {
        const T = bp === "t";
        return (
          <div key={bp} className={T ? "only-t" : "only-m"} style={{ position: "relative", overflow: "hidden", padding: `${u(T ? 88 : 56)} ${u(T ? 40 : 20)} ${u(24)}` }}>
            <img loading="lazy" decoding="async" src="/home/hero-photo.jpg" alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
            <div style={{ position: "relative" }}>
              <p className="mono" style={t(11, 1.5, 0.33)}>OPEN TO REMOTE ROLES WORLDWIDE<br />BASED IN ACCRA, GHANA · GMT</p>
              <p className="sans" style={{ ...t(T ? 200 : 118, 0.88, T ? -10 : -5.9), fontWeight: 400, marginTop: u(18) }}>
                <Letters text="LET’S" style={{}} /><br /><Letters text="BUILD" delay={0.15} style={{}} />
              </p>
              <p className="serif" style={{ ...t(T ? 20 : 17), fontStyle: "italic", marginTop: u(18) }}>Hire me. Connect online.</p>
              <div style={{ height: u(T ? 200 : 120), marginTop: u(18) }} />
              <p className="mono" style={{ ...t(12, 1.8, 0.3), marginTop: u(18), padding: `${u(16)} ${u(18)}`, background: "rgba(20,20,20,.62)", backdropFilter: "blur(14px)", WebkitBackdropFilter: "blur(14px)", borderRadius: u(10), border: "1px solid rgba(255,255,255,.14)" }}>
                EMAIL: <a href={`mailto:${EMAIL}`} style={{ textDecoration: "underline" }}>{EMAIL.toUpperCase()}</a><br />
                SOCIAL: <a href={LI} target="_blank" rel="noopener" style={{ textDecoration: "underline" }}>LINKEDIN</a> · <a href={GH} target="_blank" rel="noopener" style={{ textDecoration: "underline" }}>GITHUB</a><br />
                ELSEWHERE: <a href="/Davida-Dzato-CV.pdf" download style={{ textDecoration: "underline" }}>DOWNLOAD CV ↓</a>
              </p>
              <div style={{ marginTop: u(18), borderRadius: u(4), overflow: "hidden" }}><Form cols={T} pad={24} /></div>
              <div className="mono" style={{ display: "flex", justifyContent: "space-between", marginTop: u(18), ...t(11, 1.5, 0.33) }}>
                <span>© 2026</span>
                <button onClick={toTop} style={{ color: "var(--on-dark)" }}>(BACK TO TOP)</button>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
