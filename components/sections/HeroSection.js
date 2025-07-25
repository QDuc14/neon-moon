export default function HeroSection() {
  return (
    <header className="text-center py-24 px-4" id="home">
      <h1 className="text-5xl font-bold tracking-widest text-glow mb-4">Neon Moon</h1>
      <p className="text-xl text-accent italic">
        Starlight, Starry Sky. And The Moon That Shines Twice
      </p>
      <style jsx>{`
        .neon-text {
          text-shadow: 0 0 5px #fff, 0 0 10px #c084fc, 0 0 20px #9333ea;
        }
      `}</style>
    </header>
  );
}
