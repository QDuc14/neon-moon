import Link from 'next/link';

export default function BlogGrid({ posts }) {
  if (!posts?.length) return <p className="text-purple-300">No posts yet.</p>;
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {posts.map((p) => (
        <article key={p.slug} className="block bg-purple-950/40 p-4 rounded-xl border border-purple-800 shadow-xl hover:shadow-blue-600 transition-shadow">
          <p className="text-xs text-purple-300">{p.date}</p>
          <h3 className="mt-1 text-lg font-semibold text-light">{p.title}</h3>
          <p className="mt-1 text-sm text-purple-200/80 line-clamp-2">{p.excerpt}</p>
          <Link href={`/blog/${p.slug}`} className="mt-3 inline-flex items-center gap-2 text-sm text-purple-200">
            Read More →
          </Link>
        </article>
      ))}
    </div>
  );
}
