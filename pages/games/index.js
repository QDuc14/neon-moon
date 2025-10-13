import Head from 'next/head';
import games from '@/data/games';

export default function GamesPage(){
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <Head><title>Games – Neon Moon</title></Head>
      <h1 className="text-3xl font-bold text-purple-200 mb-6">Games</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {games.map(g => (
          <div key={g.key} className="bg-purple-950/40 rounded-xl border border-purple-800 overflow-hidden shadow-xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={g.image} alt={g.title} className="w-full aspect-[16/7] object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-light">{g.title}</h3>
              <p className="mt-1 text-purple-200/80 text-sm">{g.blurb}</p>
              <div className="mt-3 flex flex-wrap gap-3">
                {g.links.map(l => (
                  <a key={l.label} href={l.href} className="inline-flex items-center gap-2 rounded-xl border border-purple-700/60 px-3 py-1.5 text-sm hover:bg-purple-800/40">{l.label}</a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
