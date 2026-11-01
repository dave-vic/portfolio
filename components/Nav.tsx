"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { u, t } from "@/lib/u";

const LINKS = [
  { href: "/work", label: "WORK" },
  { href: "/about", label: "ABOUT" },
  { href: "/lab", label: "LAB" },
  { href: "/#contact", label: "CONTACT" },
];

export default function Nav() {
  const [label, setLabel] = useState("(01) INDEX");
  const [open, setOpen] = useState(false);

  // middle label follows the section in view, like the Figma frames
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-label]"));
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && setLabel(e.target.getAttribute("data-label") || "")),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  // step aside over the contact section, which has its own top row (as in Figma)
  const [hide, setHide] = useState(false);
  useEffect(() => {
    const c = document.getElementById("contact");
    if (!c) return;
    const io = new IntersectionObserver(([e]) => setHide(e.isIntersecting), { rootMargin: "0px 0px -92% 0px" });
    io.observe(c);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      {/* white text + difference blend = ink on light sections, light on dark ones */}
      <header
        style={{ position: "fixed", inset: "0 0 auto 0", zIndex: 50, mixBlendMode: "difference", color: "#fff", pointerEvents: "none", opacity: hide ? 0 : 1, visibility: hide ? "hidden" : "visible", transition: "opacity .35s, visibility .35s" }}
      >
        {/* desktop */}
        <div className="only-d mono" style={{ position: "relative", height: u(80) }}>
          <Link href="/" style={{ ...t(12, 1.4), position: "absolute", left: u(56), top: u(36), pointerEvents: "auto" }}>
            DAVIDA DZATO®<br />PRODUCT DESIGNER · UX · AI
          </Link>
          <p style={{ ...t(12), position: "absolute", left: "50%", top: u(36), transform: "translateX(-50%)" }} className="nowrap">{label}</p>
          <nav style={{ position: "absolute", right: u(56), top: u(36), display: "flex", gap: u(28), pointerEvents: "auto" }} aria-label="Main">
            {LINKS.map((l) => (
              <Link key={l.href} href={l.href} className="navlink" style={t(12)}>{l.label}</Link>
            ))}
          </nav>
        </div>
        {/* tablet */}
        <div className="only-t mono" style={{ position: "relative", height: u(66) }}>
          <Link href="/" style={{ ...t(10, 1.5, 0.3), position: "absolute", left: u(40), top: u(20), pointerEvents: "auto" }}>
            DAVIDA DZATO®<br />PRODUCT DESIGNER · UX · AI
          </Link>
          <nav style={{ position: "absolute", right: u(40), top: u(27), display: "flex", gap: u(22), pointerEvents: "auto" }} aria-label="Main">
            {LINKS.map((l) => (
              <Link key={l.href} href={l.href} className="navlink" style={t(11, 1.5, 0.33)}>{l.label}</Link>
            ))}
          </nav>
        </div>
        {/* mobile: name only (menu button sits outside the blend) */}
        <div className="only-m mono" style={{ position: "relative", height: u(71) }}>
          <Link href="/" style={{ ...t(10, 1.5, 0.3), position: "absolute", left: u(20), top: u(23), pointerEvents: "auto" }}>
            DAVIDA DZATO®<br />PRODUCT DESIGNER · UX · AI
          </Link>
        </div>
      </header>

      <div className="only-m">
        <button
          onClick={() => setOpen(true)}
          aria-expanded={open}
          aria-controls="menu"
          className="mono"
          style={{ position: "fixed", zIndex: 51, top: u(20), right: u(20), width: u(72), height: u(35), borderRadius: 99, background: "var(--ink)", color: "var(--on-dark)", display: "flex", alignItems: "center", justifyContent: "center", gap: u(8), ...t(11, 1.5, 0.33) }}
        >
          MENU <span style={{ width: u(8), height: u(8), borderRadius: "50%", background: "var(--laterite)" }} />
        </button>
      </div>

      {open && (
        <div id="menu" role="dialog" aria-modal="true" aria-label="Menu"
          style={{ position: "fixed", inset: 0, zIndex: 60, background: "var(--ink)", color: "var(--on-dark)", padding: `${u(20)} ${u(20)}` }}>
          <div className="mono" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
            <p style={t(10, 1.5, 0.3)}>DAVIDA DZATO®<br />PRODUCT DESIGNER · UX · AI</p>
            <button onClick={() => setOpen(false)} className="mono"
              style={{ height: u(35), padding: `0 ${u(16)}`, borderRadius: 99, background: "var(--bone)", color: "var(--ink)", ...t(11, 1.5, 0.33) }}>
              CLOSE ✕
            </button>
          </div>
          <nav aria-label="Menu" style={{ marginTop: u(64), display: "grid", gap: u(6) }}>
            {[{ href: "/", label: "Index" }, { href: "/work", label: "Work" }, { href: "/about", label: "About" }, { href: "/lab", label: "Lab" }, { href: "/#contact", label: "Contact" }].map((l, i) => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
                style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", borderBottom: "1px solid #3a3a37", padding: `${u(10)} 0`, ...t(44, 1.05, -1.3) }}>
                <span>{l.label}</span><span className="mono" style={t(11)}>0{i + 1}</span>
              </Link>
            ))}
          </nav>
          <div className="mono" style={{ position: "absolute", left: u(20), right: u(20), bottom: u(28), display: "flex", justifyContent: "space-between", ...t(11, 1.6, 0.33) }}>
            <a href="mailto:davidadzato45@gmail.com">DAVIDADZATO45@GMAIL.COM</a>
            <span><a href="https://www.linkedin.com/in/davida-dzato-b870021a0/" target="_blank" rel="noopener">LINKEDIN</a> · <a href="https://github.com/dave-vic" target="_blank" rel="noopener">GITHUB</a></span>
          </div>
        </div>
      )}
      <style>{`.navlink{background:linear-gradient(currentColor,currentColor) 0 100%/0 1px no-repeat;padding-bottom:3px;transition:background-size .35s cubic-bezier(.2,.7,.1,1)}.navlink:hover{background-size:100% 1px}`}</style>
    </>
  );
}
