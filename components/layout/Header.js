import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = ["Home", "About", "Projects", "Contact"];

  return (
    <header className="fixed top-0 left-0 w-full z-30 bg-black backdrop-blur-md border-b border-purple-800 text-purple-300">
      <nav className="flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center gap-2 hover:scale-105 hover:rotate-1 transition-transform duration-300 ease-out">
          <img src="/Logo.png" alt="Logo" className="h-10 w-auto" />
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-6 absolute left-1/2 transform -translate-x-1/2">
          {navItems.map((cat) => (
            <a
              key={cat}
              href={`#${cat.toLowerCase()}`}
              className="hover:text-white transition-colors duration-300 font-medium"
            >
              {cat}
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
        <div className="md:hidden bg-black border-t border-purple-800 flex flex-col items-center gap-4 py-4">
          {navItems.map((cat) => (
            <a
              key={cat}
              href={`#${cat.toLowerCase()}`}
              className="hover:text-white text-purple-300 font-medium transition-colors duration-300"
              onClick={() => setMenuOpen(false)}
            >
              {cat}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
