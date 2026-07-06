import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { ProjectCard } from "@/components/sections/home/project/project-card";
import { EmptyState } from "@/components/ui/work/empty-state";
import type { Category, Project } from "@/types/project";

export function CategorySection({
  category,
  projects,
}: {
  category: Category;
  projects: Project[];
}) {
  return (
    <Section id={`category-${category.slug}`} className="scroll-mt-32">
      <Container>
        <SectionHeader eyebrow={category.name} title={category.description} />

        <div className="mt-12">
          {projects.length === 0 ? (
            <EmptyState
              title="No projects yet"
              description={`New ${category.name.toLowerCase()} work is on the way.`}
            />
          ) : (
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:auto-rows-57.5 lg:grid-cols-12 lg:gap-6">
              {projects.map((project) => (
                <ProjectCard
                  key={project.slug}
                  project={project}
                  forceSpan="lg:col-span-6"
                />
              ))}
            </div>
          )}
        </div>
      </Container>
    </Section>
  );
}
