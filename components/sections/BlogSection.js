import Link from 'next/link';

export default function BlogSection({ posts = [] }) {
  const latest = posts.slice(0, 6);
  return (
    <div className="flex flex-col justify-center h-full text-center px-8 pb-24 md:pb-0">
      <h2 className="text-3xl text-center text-purple-200 font-bold mb-10">Latest Blog Posts</h2>
      {!latest.length ? (
        <p className="text-purple-300">No posts yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 md:px-[80px]">
          {latest.map((p) => (
            <Link
              href={`/blog/${p.slug}`}
              key={p.slug}
              className="block bg-purple-950/40 p-6 rounded-xl border border-purple-800 shadow-xl hover:shadow-blue-600 transition-shadow text-left"
            >
              <p className="text-xs text-purple-300">{p.date}</p>
              <h3 className="text-xl font-semibold text-light mb-2">{p.title}</h3>
              <p className="text-glow text-sm line-clamp-3">{p.excerpt}</p>
            </Link>
          ))}
        </div>
      )}
      <div className="mt-8">
        <Link
          href="/blog"
          className="inline-block px-6 py-3 rounded-full border border-purple-500 text-purple-300 hover:bg-purple-800 transition"
        >
          View more
        </Link>
      </div>
    </div>
  );
}
