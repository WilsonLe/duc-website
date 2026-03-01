import type { Project } from "@/lib/site-config";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div
      className={cn(
        project.color,
        "rounded-2xl aspect-video flex flex-col justify-end p-6 cursor-pointer hover:scale-[1.02] transition-transform"
      )}
    >
      <p className="text-xs text-neutral-500 mb-1">{project.category}</p>
      <h3 className="text-xl font-semibold">{project.title}</h3>
    </div>
  );
}
