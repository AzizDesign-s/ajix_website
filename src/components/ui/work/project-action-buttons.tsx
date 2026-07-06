import { ExternalLink, GitBranch } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import type { Project } from "@/types/project";

export function ProjectActionButtons({ project }: { project: Project }) {
  const hasLive = Boolean(project.liveUrl);
  const hasGithub = Boolean(project.githubUrl);
  const hasArchitecture = Boolean(project.architectureUrl);
  const hasCaseStudy = Boolean(project.caseStudy);

  if (!hasLive && !hasGithub && !hasArchitecture && !hasCaseStudy) return null;

  return (
    <div className="mt-6 flex flex-wrap gap-3">
      {hasLive && (
        <Button asChild variant="gradient" size="md">
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
            <ExternalLink size={16} className="mr-2" />
            Live Preview
          </a>
        </Button>
      )}
      {hasCaseStudy && (
        <Button asChild variant="secondary" size="md">
          <a href={`/work/${project.slug}#case-study`}>Detailed Case Study</a>
        </Button>
      )}
      {hasArchitecture && (
        <Button asChild variant="secondary" size="md">
          <a href={project.architectureUrl}>
            <GitBranch size={16} className="mr-2" />
            Architecture
          </a>
        </Button>
      )}
      {hasGithub && (
        <Button asChild variant="ghost" size="md">
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
            <FaGithub size={16} className="mr-2" />
            GitHub
          </a>
        </Button>
      )}
    </div>
  );
}
