import Head from "next/head";

const principles = [
  { number: "01", icon: "◒", title: "Echoes of the past", text: "Folklore, forgotten places, and the stories we carry. The familiar becomes a doorway to something unexpected.", tag: "ROOTED IN WONDER" },
  { number: "02", icon: "✳", title: "Visions of tomorrow", text: "Strange horizons. Unfamiliar possibilities. We imagine what lies ahead through the lens of what came before.", tag: "DRAWN TO THE UNKNOWN" },
  { number: "03", icon: "◎", title: "Worlds to remember", text: "Atmosphere you can feel. Stories you can step into. We create with the moments that stay with you in mind.", tag: "MADE TO LINGER" },
];

function LunarArtwork() {
  return (
    <div className="lunar-art" aria-hidden="true">
      <div className="lunar-aura" />
      <svg className="lunar-svg" viewBox="0 0 640 640" fill="none">
        <defs>
          <radialGradient id="moonSurface" cx=".27" cy=".27" r=".85"><stop stopColor="#e0d8c7" /><stop offset=".35" stopColor="#aca6a1" /><stop offset=".69" stopColor="#605a68" /><stop offset="1" stopColor="#272233" /></radialGradient>
          <radialGradient id="moonShadow" cx=".85" cy=".45" r=".85"><stop offset=".15" stopColor="#0c0b13" /><stop offset=".65" stopColor="#15101f" /><stop offset="1" stopColor="#21192a" stopOpacity="0" /></radialGradient>
          <linearGradient id="orbit" x1="50" y1="50" x2="570" y2="590" gradientUnits="userSpaceOnUse"><stop stopColor="#b5a88f" stopOpacity=".65" /><stop offset=".5" stopColor="#736176" stopOpacity=".15" /><stop offset="1" stopColor="#b69ad5" stopOpacity=".65" /></linearGradient>
          <filter id="lunarTexture"><feTurbulence type="fractalNoise" baseFrequency=".035" numOctaves="5" seed="12" /><feColorMatrix type="saturate" values="0" /><feBlend in="SourceGraphic" mode="multiply" /></filter>
          <filter id="glow"><feGaussianBlur stdDeviation="3" /></filter>
          <clipPath id="moonClip"><circle cx="320" cy="320" r="192" /></clipPath>
        </defs>
        <g stroke="url(#orbit)"><circle cx="320" cy="320" r="281" strokeDasharray="1 9" /><circle cx="320" cy="320" r="266" /><circle cx="320" cy="320" r="244" strokeDasharray="370 30 75 30" /><path d="M320 21v70M320 549v70M21 320h70M549 320h70M108 108l37 37M495 495l37 37M108 532l37-37M495 145l37-37" /><ellipse cx="320" cy="320" rx="306" ry="103" transform="rotate(-33 320 320)" /></g>
        <circle cx="320" cy="320" r="193" stroke="#d6bcf1" strokeOpacity=".35" strokeWidth="5" filter="url(#glow)" />
        <g clipPath="url(#moonClip)"><circle cx="320" cy="320" r="192" fill="url(#moonSurface)" /><rect x="128" y="128" width="384" height="384" fill="#ada5ad" opacity=".5" filter="url(#lunarTexture)" /><g fill="#514b58" opacity=".3"><ellipse cx="234" cy="228" rx="39" ry="31" /><circle cx="200" cy="342" r="27" /><ellipse cx="293" cy="389" rx="48" ry="57" /><circle cx="310" cy="200" r="21" /><circle cx="227" cy="414" r="12" /><circle cx="363" cy="288" r="44" /></g><circle cx="390" cy="277" r="224" fill="url(#moonShadow)" /></g>
        <path d="M286 131a192 192 0 0 0-120 299" stroke="#e5d4ed" strokeOpacity=".7" strokeWidth="1.5" />
        <g fill="#d5bced"><circle cx="95" cy="465" r="4" /><circle cx="544" cy="174" r="3" /><path d="m320 38 4 8-4 8-4-8z" /></g>
        <g fill="#a99ba9" fontFamily="monospace" fontSize="22" letterSpacing="2" textAnchor="middle"><text x="320" y="22">LUNA</text><text x="320" y="638">∞ / ∞</text></g>
      </svg>
      <span className="art-note art-note-top">ANCIENT LIGHT / NEW WORLDS</span><span className="art-note art-note-bottom">THE SAME MOON. ANOTHER ERA.</span>
    </div>
  );
}

export default function Home() {
  return <>
    <Head><title>Neon Moon — The moon remembers. The future awaits.</title><meta name="description" content="Neon Moon is a game studio exploring old myths and future worlds. Under one moon, we imagine worlds to remember." /></Head>
    <section className="hero section-shell" id="home" aria-labelledby="hero-title">
      <div className="hero-copy"><p className="eyebrow"><span className="status-dot" /> A GAME STUDIO BETWEEN ERAS</p><h1 id="hero-title">The moon<br />remembers.<br /><em>The future awaits.</em></h1><p className="hero-description">Old souls. New worlds.<br />We are Neon Moon — a game studio imagining<br className="desktop-break" /> what lives between memory and possibility.</p><a className="explore-link" href="#studio">Explore the studio <span aria-hidden="true">↗</span></a></div>
      <LunarArtwork />
      <div className="hero-bottom"><span>PAST / PRESENT / POSSIBLE</span><a href="#studio">SCROLL TO DISCOVER <span aria-hidden="true">↓</span></a><span className="hero-coordinate">A WORLD BETWEEN ERAS</span></div>
    </section>
    <section className="studio section-shell" id="studio" aria-labelledby="studio-title"><div className="section-index"><span className="tiny-star" aria-hidden="true">✦</span><span>01 / THE STUDIO</span></div><div className="studio-content"><p className="eyebrow">SOME THINGS ARE TIMELESS</p><h2 id="studio-title">A little ancient.<br />A little <em>otherworldly.</em></h2><div className="studio-text"><p>The moon has watched a thousand stories unfold. We’re here to imagine a few more.</p><p>Neon Moon brings old myths and future worlds into the same orbit. We’re drawn to the space where the familiar turns mysterious, where a forgotten echo becomes a new beginning.</p></div><div className="studio-signature"><span aria-hidden="true">☾</span> FROM WHAT WAS, TO WHAT COULD BE.</div></div></section>
    <section className="philosophy section-shell" id="philosophy" aria-labelledby="philosophy-title"><div className="philosophy-heading"><div><p className="eyebrow">02 / OUR CREATIVE COMPASS</p><h2 id="philosophy-title">Different eras.<br /><em>One imagination.</em></h2></div><p>What guides us through<br />the worlds we dream of.</p></div><div className="principles">{principles.map((item) => <article className="principle" key={item.number}><div className="principle-top"><span>{item.number} /</span><span className="principle-icon" aria-hidden="true">{item.icon}</span></div><h3>{item.title}</h3><p>{item.text}</p><span className="principle-tag">{item.tag}</span></article>)}</div></section>
    <section className="closing section-shell" aria-labelledby="closing-title"><div className="closing-orbit" aria-hidden="true"><span>✦</span></div><p className="eyebrow">THE STORY IS STILL UNFOLDING</p><h2 id="closing-title">Under one moon.<br /><em>Beyond every era.</em></h2><p>Yesterday’s wonder. Tomorrow’s possibility.</p><span className="closing-mark" aria-hidden="true">☾</span></section>
  </>;
}
