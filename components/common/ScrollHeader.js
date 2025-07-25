import { useEffect, useRef, useState } from "react";

export default function ScrollHeader({ children }) {
  const [hidden, setHidden] = useState(false);
  const lastYRef = useRef(0); // avoids re-triggering useEffect

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      const goingDown = currentY > lastYRef.current && currentY > 50;
      setHidden(goingDown);
      lastYRef.current = currentY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`sticky top-0 z-30 transition-transform duration-300 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      {children}
    </div>
  );
}
