import Link from 'next/link';

export default function GamesSection({ games = [] }) {
  const featured = games.slice(0, 3);
  return (
    <div className="flex flex-col justify-center h-full text-center px-8 pb-24 md:pb-0">
      <h2 className="text-3xl text-center text-purple-200 font-bold mb-10">Featured Games</h2>
      {!featured.length ? (
        <p className="text-purple-300">No games yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:px-[80px]">
          {featured.map((g, idx) => (
            <div
              key={g.key ?? idx}
              className="bg-purple-950/40 p-0 rounded-xl border border-purple-800 shadow-xl overflow-hidden text-left"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              {g.image && <img src={g.image} alt={g.title} className="w-full aspect-[16/9] object-cover" />}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-light mb-2">{g.title}</h3>
                <p className="text-glow text-sm line-clamp-3">{g.blurb}</p>
                {g.links?.length ? (
                  <div className="mt-3 flex flex-wrap gap-3">
                    {g.links.slice(0,3).map((l) => (
                      <a
                        key={l.label}
                        href={l.href}
                        className="inline-flex items-center gap-2 rounded-xl border border-purple-700/60 px-3 py-1.5 text-sm hover:bg-purple-800/40"
                      >
                        {l.label}
                      </a>
                    ))}
                  </div>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="mt-8">
        <Link
          href="/games"
          className="inline-block px-6 py-3 rounded-full border border-purple-500 text-purple-300 hover:bg-purple-800 transition"
        >
          View more
        </Link>
      </div>
    </div>
  );
}
