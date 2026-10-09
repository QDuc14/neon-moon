import { useEffect, useRef, useState } from "react";

export function Brand() {
  return <a className="brand" href="#home" aria-label="Neon Moon home"><svg viewBox="0 0 32 32" fill="none" aria-hidden="true"><path d="M25 23.5A12 12 0 0 1 15 3a12.5 12.5 0 1 0 10 20.5Z" stroke="currentColor" strokeWidth="1.3" /><path d="m24 4 1.2 3.3L28.5 8l-3.3 1.2L24 12.5l-.7-3.3L20 8l3.3-.7L24 4Z" fill="currentColor" /></svg><span>NEON MOON<small>GAME STUDIO</small></span></a>;
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggle = useRef(null);
  useEffect(() => {
    if (!menuOpen) return;
    const close = (event) => { if (event.key === "Escape") { setMenuOpen(false); toggle.current?.focus(); } };
    const resize = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
    document.addEventListener("keydown", close);
    window.addEventListener("resize", resize);
    return () => { document.removeEventListener("keydown", close); window.removeEventListener("resize", resize); };
  }, [menuOpen]);
  return <header className="site-header"><div className="header-inner"><Brand /><button ref={toggle} className="menu-toggle" aria-expanded={menuOpen} aria-controls="site-navigation" aria-label={menuOpen ? "Close navigation" : "Open navigation"} onClick={() => setMenuOpen(!menuOpen)}><span>{menuOpen ? "CLOSE" : "MENU"}</span><span aria-hidden="true">{menuOpen ? "×" : "+"}</span></button><nav id="site-navigation" className={`site-nav ${menuOpen ? "is-open" : ""}`} aria-label="Main navigation">{[{ label: "Home", href: "#home" }, { label: "Studio", href: "#studio" }, { label: "Philosophy", href: "#philosophy" }].map((link) => <a href={link.href} key={link.href} onClick={() => setMenuOpen(false)}>{link.label}</a>)}</nav><span className="header-note"><span className="status-dot" /> BETWEEN TWO ERAS</span></div></header>;
}
