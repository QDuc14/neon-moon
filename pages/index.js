import React from "react";
import Link from "next/link";
import ScrollHeader from "@/components/ScrollHeader";

export default function NeonMoonStudio() {
  const projects = [
    {
      title: "Project A",
      description: "Comming Soon...",
      link: "/projects/orbit-echo"
    },
    {
      title: "Project B",
      description: "Comming Soon...",
      link: "/projects/nightwave"
    },
    {
      title: "Project C",
      description: "Comming Soon...",
      link: "/projects/dream-coder"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-purple-900 to-indigo-950 text-white font-sans relative overflow-hidden">
      {/* Navigation */}
      <ScrollHeader>
        <nav className="flex justify-between items-center px-6 py-4 border-b border-purple-800 bg-black/30 backdrop-blur-md sticky top-0 z-20">
        {/* Logo on left */}
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="Logo" className="h-10 w-auto" />
          <span className="text-purple-300 font-bold text-lg">Neon Moon</span>
        </div>

        {/* Menu items on right */}
        <div className="absolute left-1/2 transform -translate-x-1/2 flex gap-6">
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

      </nav>
      </ScrollHeader>

      {/* Hero Section */}
      <header className="text-center py-24 px-4" id="home">
        <h1 className="text-6xl font-bold tracking-widest neon-text mb-4">Neon Moon</h1>
        <p className="text-xl text-purple-300 italic">
          Starlight, Starry Sky. And The Moon That Shines Twice
        </p>
      </header>

      {/* About Section */}
      <section className="text-center px-6 max-w-3xl mx-auto mb-20" id="about">
        <h2 className="text-3xl font-bold text-purple-200 mb-4">About Us</h2>
        <p className="text-purple-400 text-lg">
          Neon Moon Studio — crafting realms where the dream becomes playable.
        </p>
      </section>

      {/* Projects Section */}
      <section className="px-6 mb-24" id="projects">
        <h2 className="text-3xl text-center text-purple-200 font-bold mb-10">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <Link
              href={project.link}
              key={idx}
              className="block bg-purple-950/40 p-6 rounded-xl border border-purple-800 shadow-xl hover:shadow-purple-600 transition-shadow"
            >
              <h3 className="text-2xl font-semibold text-purple-100 mb-2">{project.title}</h3>
              <p className="text-purple-400 text-sm">{project.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="text-center mb-20 px-6" id="contact">
        <h3 className="text-2xl text-purple-300 mb-4">Let’s Create Together</h3>
        <p className="text-purple-400 mb-4">Reach out and tell us about your next vision.</p>
        <a
          href="mailto:hello@neonmoon.studio"
          className="inline-block px-6 py-3 rounded-full border border-purple-500 text-purple-300 hover:bg-purple-800 transition"
        >
          Contact Us
        </a>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 border-t border-purple-800 text-purple-400">
        <p>&copy; {new Date().getFullYear()} Neon Moon Studio</p>
      </footer>

      <style jsx>{`
        .neon-text {
          text-shadow: 0 0 5px #fff, 0 0 10px #c084fc, 0 0 20px #9333ea;
        }
      `}</style>
    </div>
  );
}