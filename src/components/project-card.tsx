import Link from "next/link";
import type { Project } from "@/lib/content/projects";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/work/${project.slug}`} className="group block">
      <div className="relative overflow-hidden rounded-lg aspect-[4/3] bg-neutral-100">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="mt-3">
        <p className="text-xs tracking-widest uppercase text-neutral-400">
          {project.category}
        </p>
        <h3 className="text-lg font-semibold mt-0.5 group-hover:text-[var(--color-red)] transition-colors">
          {project.title}
        </h3>
      </div>
    </Link>
  );
}
