import HeroSection from "@/components/sections/HeroSection";
import BlogSection from "@/components/sections/BlogSection";
import GamesSection from "@/components/sections/GamesSection";
import { getAllPosts } from "@/lib/posts";
import games from "@/data/games";

export default function Home({ posts }) {
  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth pb-16">
      <section className="h-screen snap-start" id="home">
        <HeroSection />
      </section>
      <section className="h-screen snap-start" id="blog">
        <BlogSection posts={posts} />
      </section>
      <section className="h-screen snap-start" id="games">
        <GamesSection games={games} />
      </section>
    </div>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts();
  return { props: { posts } };
}
