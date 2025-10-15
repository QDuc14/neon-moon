export default function HeroSection() {
  return (
    <div className="flex flex-col justify-center items-center h-full text-center px-4">
      <h1 className="text-4xl md:text-6xl font-bold tracking-widest text-glow mb-4">Neon Moon</h1>
      <p className="text-xl text-accent italic">
        Starlight, Starry Sky. And The Moon That Shines Twice
      </p>
      <style jsx>{`
        .neon-text {
          text-shadow: 0 0 5px #fff, 0 0 10px #c084fc, 0 0 20px #9333ea;
        }
      `}</style>
    </div>
  );
}
