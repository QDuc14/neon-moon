import ScrollHeader from "@/components/ScrollHeader";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <ScrollHeader>
        <nav className="flex justify-between items-center px-6 py-4 border-b border-purple-800 bg-black/30 backdrop-blur-md sticky top-0 z-20">
          <div className="flex items-center gap-2">
            <img src="/Logo.png" alt="Logo" className="h-10 w-auto" />
            <span className="text-purple-300 font-bold text-lg">Neon Moon</span>
          </div>

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

      {children}

      <Footer />
    </>
  );
}
