import { ProjectPageShell } from "@/components/sections/work/project-page-shell";
import type { Project } from "@/types/project";

export function FramerTemplate({ project }: { project: Project }) {
  return (
    <ProjectPageShell project={project}>
      <div className="border-border/40 bg-surface/40 rounded-2xl border p-8">
        <p className="text-foreground/60 text-sm">
          Preview gallery and CMS details arrive in Phase 5.
        </p>
      </div>
    </ProjectPageShell>
  );
}
