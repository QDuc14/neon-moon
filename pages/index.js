import HeroSection from "@/components/sections/HeroSection";
import BlogSection from "@/components/sections/BlogSection";
import GamesSection from "@/components/sections/GamesSection";
import { getAllPosts } from "@/lib/posts";
import games from "@/data/games";

export default function Home({ posts }) {
  return (
    <div className="min-h-[100svh] md:h-screen overflow-y-auto md:overflow-y-scroll md:snap-y md:snap-mandatory scroll-smooth pb-[calc(4rem+env(safe-area-inset-bottom))] md:pb-16">
      <section className="min-h-[100svh] md:h-screen md:snap-start scroll-mt-20 md:scroll-mt-24" id="home">
        <HeroSection />
      </section>
      <section className="min-h-[100svh] md:h-screen md:snap-start scroll-mt-20 md:scroll-mt-24" id="blog">
        <BlogSection posts={posts} />
      </section>
      <section className="min-h-[100svh] md:h-screen md:snap-start scroll-mt-20 md:scroll-mt-24" id="games">
        <GamesSection games={games} />
      </section>
    </div>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts();
  return { props: { posts } };
}
