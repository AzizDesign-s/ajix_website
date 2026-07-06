import type { ReactNode } from "react";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { ProjectActionButtons } from "@/components/ui/work/project-action-buttons";
import { getCategoryBySlug } from "@/lib/services/category-service";
import type { Project } from "@/types/project";

export function ProjectPageShell({
  project,
  children,
}: {
  project: Project;
  children: ReactNode;
}) {
  const categoryLabel =
    getCategoryBySlug(project.category)?.name ?? project.category;

  return (
    <>
      <Section className="pb-0">
        <Container>
          <p className="text-accent text-xs font-semibold tracking-widest uppercase">
            {categoryLabel}
          </p>
          <h1 className="font-display text-foreground mt-3 text-4xl font-semibold md:text-5xl">
            {project.title}
          </h1>
          <p className="text-foreground/70 mt-4 max-w-2xl text-base">
            {project.description}
          </p>
          <ProjectActionButtons project={project} />
        </Container>
      </Section>

      <Section>
        <Container>{children}</Container>
      </Section>
    </>
  );
}
