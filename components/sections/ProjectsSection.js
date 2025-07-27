import Link from "next/link";
import projects from "@/data/projects";

export default function ProjectsSection() {
  return (
    <div className="flex flex-col justify-center h-full text-center px-8" id="projects">
      <h2 className="text-3xl text-center text-purple-200 font-bold mb-10">Featured Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:px-[160px]">
        {projects.map((project, idx) => (
          <Link
            href={project.link}
            key={idx}
            className="block bg-purple-950/40 p-6 rounded-xl border border-purple-800 shadow-xl hover:shadow-blue-600 transition-shadow"
          >
            <h3 className="text-2xl font-semibold text-light mb-2">{project.title}</h3>
            <p className="text-glow text-sm">{project.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
