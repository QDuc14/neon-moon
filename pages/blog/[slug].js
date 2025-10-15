import Head from 'next/head';
import { getAllPosts, getPostBySlug } from '@/lib/posts';

export async function getStaticPaths(){
  const posts = getAllPosts();
  return { paths: posts.map(p => ({ params: { slug: p.slug }})), fallback: false };
}

export async function getStaticProps({ params }){
  const post = getPostBySlug(params.slug);
  return { props: { post } };
}

export default function BlogPost({ post }){
  return (
    <article className="mx-auto max-w-3xl px-6 pt-28 pb-16">
      <Head><title>{post.title} – Neon Moon</title></Head>
      <p className="text-sm text-purple-300">{post.date}</p>
      <h1 className="mt-1 text-3xl md:text-4xl font-bold text-light tracking-tight">{post.title}</h1>
      {post.cover && (
        <div className="mt-6">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={post.cover} alt={post.title} className="rounded-xl shadow-xl w-full" />
        </div>
      )}
      <div className="content mt-6" dangerouslySetInnerHTML={{ __html: post.html }} />
    </article>
  );
}
