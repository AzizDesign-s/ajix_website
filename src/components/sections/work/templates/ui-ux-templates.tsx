import { ProjectPageShell } from "@/components/sections/work/project-page-shell";
import type { Project } from "@/types/project";

export function UiUxTemplate({ project }: { project: Project }) {
  return (
    <ProjectPageShell project={project}>
      <div
        id="case-study"
        className="border-border/40 bg-surface/40 rounded-2xl border p-8"
      >
        <p className="text-foreground/60 text-sm">
          Full case study engine (Problem, Research, Personas, Journey Map,
          Wireframes, Business Results) arrives in Phase 3.
        </p>
      </div>
    </ProjectPageShell>
  );
}
