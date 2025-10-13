import Head from 'next/head';
import { getAllPosts } from '@/lib/posts';
import BlogGrid from '@/components/blog/BlogGrid';

export async function getStaticProps(){
  const posts = getAllPosts();
  return { props: { posts } };
}

export default function BlogIndex({ posts }) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <Head><title>Blog – Neon Moon</title></Head>
      <h1 className="text-3xl font-bold text-purple-200 mb-6">Blog</h1>
      <BlogGrid posts={posts} />
    </section>
  );
}
