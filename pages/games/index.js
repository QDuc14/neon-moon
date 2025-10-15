import Head from 'next/head';
import games from '@/data/games';

export default function GamesPage(){
  const isSingle = games.length === 1;
  return (
    <section className="mx-auto max-w-6xl px-6 pt-28 pb-16">
      <Head><title>Games – Neon Moon</title></Head>
      <h1 className="text-3xl md:text-4xl font-bold text-purple-200 tracking-tight">Games</h1>
      <p className="text-purple-300/90 mt-2 mb-8">Playable builds, platforms, and project info.</p>
      <div className={isSingle ? "grid gap-6 max-w-3xl mx-auto" : "grid gap-6 md:grid-cols-2"}>
        {games.map(g => (
          <div
            key={g.key}
            className="rounded-xl overflow-hidden border border-purple-800 bg-purple-950/40 hover:border-purple-600 hover:shadow-blue-600/40 shadow-xl transition-colors transition-shadow"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={g.image} alt="" className="w-full aspect-[16/7] object-cover opacity-95" />
            <div className="p-5">
              <h3 className="text-xl font-semibold text-light">{g.title}</h3>
              <p className="mt-1 text-purple-200/80 text-sm">{g.blurb}</p>
              {g.links?.length ? (
                <div className="mt-4">
                  <p className="text-xs uppercase tracking-wide text-purple-400/80 mb-2">Platforms</p>
                  <div className="flex flex-wrap gap-3">
                  {g.links.map(l => (
                    <a
                      key={l.label}
                      href={l.href}
                      className="inline-flex items-center gap-2 rounded-lg border border-purple-700/60 px-3 py-1.5 text-sm hover:bg-purple-800/40"
                    >
                      {l.label}
                    </a>
                  ))}
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
