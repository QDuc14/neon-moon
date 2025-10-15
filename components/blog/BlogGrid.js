import Link from 'next/link';

export default function BlogGrid({ posts }) {
  if (!posts?.length) return <p className="text-purple-300">No posts yet.</p>;
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {posts.map((p, i) => (
        <Link
          key={p.slug}
          href={`/blog/${p.slug}`}
          className={(i === 0
            ? "md:col-span-2 "
            : "") +
            "group block rounded-xl overflow-hidden border border-purple-800 bg-purple-950/40 hover:border-purple-600 hover:shadow-blue-600/40 shadow-xl transition-colors transition-shadow"}
        >
          {p.cover && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={p.cover}
              alt=""
              className="w-full object-cover opacity-90 group-hover:opacity-100 transition-opacity aspect-[16/9] md:aspect-auto md:h-44"
            />
          )}
          <div className="p-4 flex flex-col min-h-[160px]">
            <p className="text-xs text-purple-300">{p.date}</p>
            <h3 className="mt-1 text-lg font-semibold text-light line-clamp-2">{p.title}</h3>
            <p className="mt-1 text-sm text-purple-200/80 line-clamp-2 flex-1">{p.excerpt}</p>
            <span className="mt-3 inline-flex items-center gap-2 text-sm text-purple-200 group-hover:text-highlight">
              Read More →
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
