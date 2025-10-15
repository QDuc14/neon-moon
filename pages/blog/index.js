import Head from 'next/head';
import { getAllPosts } from '@/lib/posts';
import BlogGrid from '@/components/blog/BlogGrid';

export async function getStaticProps(){
  const posts = getAllPosts();
  return { props: { posts } };
}

export default function BlogIndex({ posts }) {
  return (
    <section className="mx-auto max-w-6xl px-6 pt-28 pb-16">
      <Head><title>Blog – Neon Moon</title></Head>
      <h1 className="text-3xl md:text-4xl font-bold text-purple-200 tracking-tight">Blog</h1>
      <p className="text-purple-300/90 mt-2 mb-8">News, patch notes, and studio updates.</p>
      <BlogGrid posts={posts} />
    </section>
  );
}
