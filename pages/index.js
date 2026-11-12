import Head from "next/head";

const principles = [
  { number: "01", title: "Echoes of the past", text: "Folklore, forgotten places, and the stories we carry. The familiar becomes a doorway to something unexpected.", tag: "Rooted in wonder" },
  { number: "02", title: "Visions of tomorrow", text: "Strange horizons. Unfamiliar possibilities. We imagine what lies ahead through the lens of what came before.", tag: "Drawn to the unknown" },
  { number: "03", title: "Worlds to remember", text: "Atmosphere you can feel. Stories you can step into. We create with the moments that stay with you in mind.", tag: "Made to linger" },
];


function LunarArtwork() {
  return (
    <div className="lunar-art" aria-hidden="true">
      <div className="lunar-aura" />
      <svg className="lunar-svg" viewBox="0 0 640 640" fill="none">
        <defs>
          <radialGradient id="moonSurface" cx=".27" cy=".27" r=".85"><stop stopColor="var(--art-0)" /><stop offset=".35" stopColor="var(--art-1)" /><stop offset=".69" stopColor="var(--art-2)" /><stop offset="1" stopColor="var(--art-3)" /></radialGradient>
          <radialGradient id="moonShadow" cx=".85" cy=".45" r=".85"><stop offset=".15" stopColor="var(--art-4)" /><stop offset=".65" stopColor="var(--art-5)" /><stop offset="1" stopColor="var(--art-6)" stopOpacity="0" /></radialGradient>
          <linearGradient id="orbit" x1="50" y1="50" x2="570" y2="590" gradientUnits="userSpaceOnUse"><stop stopColor="var(--art-7)" stopOpacity=".65" /><stop offset=".5" stopColor="var(--art-8)" stopOpacity=".15" /><stop offset="1" stopColor="var(--art-9)" stopOpacity=".65" /></linearGradient>
          <filter id="lunarTexture"><feTurbulence type="fractalNoise" baseFrequency=".035" numOctaves="5" seed="12" /><feColorMatrix type="saturate" values="0" /><feBlend in="SourceGraphic" mode="multiply" /></filter>
          <filter id="glow"><feGaussianBlur stdDeviation="3" /></filter>
          <clipPath id="moonClip"><circle cx="320" cy="320" r="192" /></clipPath>
        </defs>
        <g stroke="url(#orbit)"><circle cx="320" cy="320" r="281" strokeDasharray="1 9" /><circle cx="320" cy="320" r="266" /><circle cx="320" cy="320" r="244" strokeDasharray="370 30 75 30" /><path d="M320 21v70M320 549v70M21 320h70M549 320h70M108 108l37 37M495 495l37 37M108 532l37-37M495 145l37-37" /><ellipse cx="320" cy="320" rx="306" ry="103" transform="rotate(-33 320 320)" /></g>
        <circle cx="320" cy="320" r="193" stroke="var(--art-10)" strokeOpacity=".35" strokeWidth="5" filter="url(#glow)" />
        <g clipPath="url(#moonClip)"><circle cx="320" cy="320" r="192" fill="url(#moonSurface)" /><rect x="128" y="128" width="384" height="384" fill="var(--art-11)" opacity=".5" filter="url(#lunarTexture)" /><g fill="var(--art-12)" opacity=".3"><ellipse cx="234" cy="228" rx="39" ry="31" /><circle cx="200" cy="342" r="27" /><ellipse cx="293" cy="389" rx="48" ry="57" /><circle cx="310" cy="200" r="21" /><circle cx="227" cy="414" r="12" /><circle cx="363" cy="288" r="44" /></g><circle cx="390" cy="277" r="224" fill="url(#moonShadow)" /></g>
        <path d="M286 131a192 192 0 0 0-120 299" stroke="var(--art-13)" strokeOpacity=".7" strokeWidth="1.5" />
        <g fill="var(--art-14)"><circle cx="95" cy="465" r="4" /><circle cx="544" cy="174" r="3" /><path d="m320 38 4 8-4 8-4-8z" /></g>
        <g fill="var(--art-15)" fontFamily="var(--font-body)" fontSize="22" letterSpacing="0" textAnchor="middle"><text x="320" y="22">Luna</text><text x="320" y="638">∞ / ∞</text></g>
      </svg>
      <span className="art-note art-note-top">Ancient light / New worlds</span><span className="art-note art-note-bottom">The same moon. Another era.</span>
    </div>
  );
}


export default function Home() {
 return <>
 <Head><title>Neon Moon | The moon remembers. The future awaits.</title><meta name="description" content="Neon Moon is a game studio exploring old myths and future worlds. Under one moon, we imagine worlds to remember." /></Head>
 <section className="hero section-shell" id="home" aria-labelledby="hero-title">
  <LunarArtwork />
  <div className="hero-copy"><h1 id="hero-title">The moon remembers.<br />The future awaits.</h1><p className="hero-description">Old souls. New worlds. A game studio between eras.</p><a className="explore-link" href="#studio">Explore the studio</a></div>
  <div className="hero-bottom"><span>Past / Present / Possible</span><a href="#studio">Scroll to discover</a><span>A world between eras</span></div>
 </section>
 <section className="studio" id="studio" aria-labelledby="studio-title"><div className="section-shell studio-inner">
  <h2 id="studio-title">A little ancient.<br />A little otherworldly.</h2>
  <div className="studio-story"><p className="studio-intro">The moon has watched a thousand stories unfold. We’re here to imagine a few more.</p><div className="studio-text"><p>We are Neon Moon, a game studio imagining what lives between memory and possibility.</p><p>Neon Moon brings old myths and future worlds into the same orbit. We’re drawn to the space where the familiar turns mysterious, where a forgotten echo becomes a new beginning.</p></div></div>
  <div className="studio-signature"><span>Some things are timeless.</span><span>From what was, to what could be.</span></div>
 </div></section>
 <section className="philosophy" id="philosophy" aria-labelledby="philosophy-title"><div className="section-shell philosophy-inner">
  <div className="philosophy-heading"><h2 id="philosophy-title">Different eras.<br />One imagination.</h2><p>Our creative compass.<br />What guides us through the worlds we dream of.</p></div>
  <div className="principles">{principles.map(item=><article className="principle" key={item.number}><span className="principle-number" aria-hidden="true">{item.number}</span><h3>{item.title}</h3><div className="principle-copy"><p>{item.text}</p><span className="principle-tag">{item.tag}</span></div></article>)}</div>
 </div></section>
 <section className="closing section-shell" aria-labelledby="closing-title"><h2 id="closing-title">Under one moon.<br />Beyond every era.</h2><div className="closing-note"><p>The story is still unfolding.</p><p>Yesterday’s wonder.<br />Tomorrow’s possibility.</p></div></section>
 </>;
}
