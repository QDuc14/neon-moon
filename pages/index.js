import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth pb-16">
      <section className="h-screen snap-start" id="home">
        <HeroSection />
      </section>
      <section className="h-screen snap-start" id="about">
        <AboutSection />
      </section>
      <section className="h-screen snap-start" id="projects">
        <ProjectsSection />
      </section>
      <section className="h-screen snap-start" id="contact">
        <ContactSection />
      </section>
    </div>
  );
}
