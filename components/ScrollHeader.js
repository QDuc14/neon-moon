import { useState } from "react";
import { Menu, X } from "lucide-react"; // Optional: install `lucide-react` icons

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="flex justify-between items-center px-4 py-4 border-b border-purple-800 bg-black/30 sticky top-0 z-20 backdrop-blur-md">
        {/* Logo and title */}
        <div className="flex items-center space-x-2">
          <img src="/logo.png" alt="Logo" className="w-8 h-8" />
          <span className="text-purple-300 font-bold text-lg">Neon Moon</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6">
          {["Home", "About", "Projects", "Contact"].map((cat) => (
            <a
              key={cat}
              href={`#${cat.toLowerCase()}`}
              className="text-purple-300 hover:text-white transition-colors duration-300 font-medium"
            >
              {cat}
            </a>
          ))}
        </div>

        {/* Hamburger Button */}
        <button
          className="md:hidden text-purple-300"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-black text-purple-300 shadow-lg transform transition-transform duration-300 z-30 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="flex flex-col p-6 space-y-4">
          {["Home", "About", "Projects", "Contact"].map((cat) => (
            <a
              key={cat}
              href={`#${cat.toLowerCase()}`}
              className="text-lg hover:text-white transition"
              onClick={() => setMenuOpen(false)} // auto-close
            >
              {cat}
            </a>
          ))}
        </div>
      </div>

      {/* Optional dark background overlay */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 bg-black/60 z-20 md:hidden"
        />
      )}
    </>
  );
}
