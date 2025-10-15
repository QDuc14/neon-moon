import Image from "next/image";

export default function AboutSection() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center h-full text-left px-8 gap-10 max-w-7xl mx-auto" id="about">
      
      {/* Left side: Text and Symbol */}
      <div className="flex-1 relative z-10">
        <div className="mb-6">
          <Image src="/Logo.png" alt="Faction Symbol" width={60} height={60} className="my-2" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-light mb-4">About Us</h2>
        <p className="text-purple-300 mb-4 leading-relaxed">
          We shape stories not just to be told — but to be lived. Our games blend vivid
          aesthetics, deep choice-making, and emotionally charged narratives to immerse players in luminous, alternate realities.
        </p>
        <p className="text-purple-400">
          We are dreamers, developers, and storytellers — building experiences that linger in memory long after the screen fades to black.
        </p>
      </div>

      {/* Right side: Character Image */}
      <div className="flex-1 relative z-10">
        <Image
          src="/WordLogo.png"
          alt="Xiangli Yao"
          width={600}
          height={800}
          className="w-full h-auto object-contain drop-shadow-2xl"
        />
      </div>
    </div>
  );
}
  
