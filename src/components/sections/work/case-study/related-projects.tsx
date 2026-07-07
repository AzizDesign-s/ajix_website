import { ProjectCard } from "@/components/sections/home/project/project-card";
import type { Project } from "@/types/project";

export function RelatedProjects({ projects }: { projects: Project[] }) {
  if (projects.length === 0) return null;

  return (
    <div
      className={
        projects.length === 1
          ? "grid grid-cols-1"
          : "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:auto-rows-57.5 lg:grid-cols-12"
      }
    >
      {projects.map((project) => (
        <ProjectCard
          key={project.slug}
          project={project}
          forceSpan={projects.length > 1 ? "lg:col-span-6" : undefined}
        />
      ))}
    </div>
  );
}
