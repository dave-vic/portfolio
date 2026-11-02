"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
  const path = usePathname();

  // once the page scrolls, the nav sits on a bar that takes the tone of the section underneath it
  const [bar, setBar] = useState<null | "light" | "dark">(null);
  useEffect(() => {
    let raf = 0;
    const tone = (): "light" | "dark" => {
      const header = document.querySelector<HTMLElement>("header[data-nav]");
      const y = (header?.offsetHeight ?? 80) + 2;
      for (const el of document.elementsFromPoint(window.innerWidth / 2, y)) {
        if (el.closest("header[data-nav]")) continue;
        for (let n: Element | null = el; n; n = n.parentElement) {
          const bg = getComputedStyle(n).backgroundColor;
          const m = bg.match(/rgba?\(([\d.]+), ([\d.]+), ([\d.]+)(?:, ([\d.]+))?\)/);
          if (m && (m[4] === undefined || parseFloat(m[4]) > 0.5)) {
            const l = (0.299 * +m[1] + 0.587 * +m[2] + 0.114 * +m[3]) / 255;
            return l < 0.5 ? "dark" : "light";
          }
        }
        break;
      }
      return "light";
    };
    const on = () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(() => setBar(window.scrollY > 24 ? tone() : null)); };
    on();
    window.addEventListener("scroll", on, { passive: true });
    window.addEventListener("resize", on);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("scroll", on); window.removeEventListener("resize", on); };
  }, [path]);

  // middle label follows the section in view, like the Figma frames
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-label]"));
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && setLabel(e.target.getAttribute("data-label") || "")),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    setLabel(els[0]?.getAttribute("data-label") || "");
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [path]);

  // step aside over the contact section, which has its own top row (as in Figma)
  const [hide, setHide] = useState(false);
  useEffect(() => {
    setHide(false);
    const c = document.getElementById("contact");
    if (!c) return;
    const io = new IntersectionObserver(([e]) => setHide(e.isIntersecting), { rootMargin: "0px 0px -92% 0px" });
    io.observe(c);
    return () => io.disconnect();
  }, [path]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      {/* at the top: white text + difference blend (ink on light, light on dark). Scrolled: a soft bar in the tone of the section below */}
      <header data-nav
        style={{
          position: "fixed", inset: "0 0 auto 0", zIndex: 50, pointerEvents: "none",
          mixBlendMode: bar ? "normal" : "difference",
          color: bar === "dark" ? "var(--on-dark)" : bar === "light" ? "var(--ink)" : "#fff",
          background: bar === "dark" ? "rgba(20,20,20,.86)" : bar === "light" ? "rgba(238,235,228,.88)" : "transparent",
          backdropFilter: bar ? "blur(14px)" : "none", WebkitBackdropFilter: bar ? "blur(14px)" : "none",
          borderBottom: `1px solid ${bar === "dark" ? "rgba(255,255,255,.08)" : bar === "light" ? "rgba(20,20,20,.08)" : "transparent"}`,
          opacity: hide ? 0 : 1, visibility: hide ? "hidden" : "visible",
          transition: "opacity .35s, visibility .35s, background-color .35s, color .35s, border-color .35s",
        }}
      >
        {/* desktop */}
        <div className="only-d mono" style={{ position: "relative", height: u(96) }}>
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
