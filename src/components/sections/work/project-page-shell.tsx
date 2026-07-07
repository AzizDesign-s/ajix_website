import type { ReactNode } from "react";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { ProjectActionButtons } from "@/components/ui/work/project-action-buttons";
import { ImageFrame } from "@/components/sections/work/case-study/image-frame";
import { getCategoryBySlug } from "@/lib/services/category-service";
import { WorkHeroBackground } from "@/components/sections/work/hero/work-hero-background";
import { HeroBackground } from "@/components/sections/home/hero/hero-background";
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
      <Section className="relative overflow-hidden pb-0">
        <HeroBackground />
        <WorkHeroBackground />
        <Container className="relative z-10">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-10">
            <div>
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
            </div>

            <ImageFrame
              src={project.image}
              alt={project.title}
              aspect="video"
              priority
            />
          </div>
        </Container>
      </Section>

      <Section>
        <Container>{children}</Container>
      </Section>
    </>
  );
}
