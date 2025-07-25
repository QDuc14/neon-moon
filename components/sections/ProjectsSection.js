import Link from "next/link";
import projects from "@/data/projects";

export default function ProjectsSection() {
  return (
    <section className="px-6 mb-24" id="projects">
      <h2 className="text-3xl text-center text-purple-200 font-bold mb-10">Featured Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, idx) => (
          <Link
            href={project.link}
            key={idx}
            className="block bg-purple-950/40 p-6 rounded-xl border border-purple-800 shadow-xl hover:shadow-purple-600 transition-shadow"
          >
            <h3 className="text-2xl font-semibold text-purple-100 mb-2">{project.title}</h3>
            <p className="text-purple-400 text-sm">{project.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
