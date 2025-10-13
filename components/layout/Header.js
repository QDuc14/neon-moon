import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const leftNav = [
    { label: 'Home', href: '#home' },
    { label: 'Blog', href: '#blog' },
    { label: 'Games', href: '#games' }
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-30 bg-midnight backdrop-blur-md border-b border-purple-800 text-purple-300">
      <nav className="flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center gap-2 hover:scale-105 hover:rotate-1 transition-transform duration-300 ease-out">
          {/* <img src="/Logo.png" alt="Logo" className="h-10 w-10" /> */}
          <img src="/WordLogo.png" alt="WordLogo" className="h-10 w-10"/>
        </div>

        {/* Desktop Nav (anchors) */}
        <div className="hidden md:flex gap-6 absolute left-1/2 transform -translate-x-1/2">
          {leftNav.map((n) => (
            <a key={n.label} href={n.href} className="hover:text-highlight text-light transition-colors duration-300 font-medium">
              {n.label}
            </a>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-purple-300 hover:text-white"
        >
          {menuOpen ? (
            <XMarkIcon className="w-6 h-6" />
          ) : (
            <Bars3Icon className="w-6 h-6" />
          )}
        </button>
      </nav>

      {/* Mobile Menu Panel */}
      {menuOpen && (
        <div className="md:hidden bg-midnight border-t border-purple-800 flex flex-col items-center gap-4 py-4">
          {leftNav.map((n) => (
            <a
              key={n.label}
              href={n.href}
              className="hover:text-white text-purple-300 font-medium transition-colors duration-300"
              onClick={() => setMenuOpen(false)}
            >
              {n.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
