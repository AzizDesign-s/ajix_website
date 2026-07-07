import { ProjectPageShell } from "@/components/sections/work/project-page-shell";
import { CaseStudySection } from "@/components/sections/work/case-study/case-study-section";
import { SplitSection } from "@/components/sections/work/case-study/split-screen";
import { MasonryGallery } from "@/components/sections/work/case-study/mansory-gallery";
import { TechStackRow } from "@/components/sections/work/dev-overview/tech-stack-row";
import { FeatureCard } from "@/components/sections/work/dev-overview/feature-card";
import { RelatedProjects } from "@/components/sections/work/case-study/related-projects";
import { getRelatedProjects } from "@/lib/services/project-service";
import type { Project } from "@/types/project";

export function ReactTemplate({ project }: { project: Project }) {
  const content = project.reactContent;
  if (!content)
    return <ProjectPageShell project={project}>{null}</ProjectPageShell>;

  const related = getRelatedProjects(project);

  return (
    <ProjectPageShell project={project}>
      <CaseStudySection id="about" eyebrow="Overview" title="About the Build">
        <SplitSection
          image={content.aboutImage}
          alt="Project overview"
          side="right"
        >
          <p>{content.about}</p>
        </SplitSection>
      </CaseStudySection>

      {project.gallery.length > 0 && (
        <CaseStudySection id="gallery" eyebrow="Screens" title="Gallery">
          <MasonryGallery
            images={project.gallery}
            alt={`${project.title} screen`}
          />
        </CaseStudySection>
      )}

      <CaseStudySection id="tech-stack" eyebrow="Built With" title="Tech Stack">
        <TechStackRow technologies={project.technologies} />
      </CaseStudySection>

      {content.features && (
        <CaseStudySection
          id="features"
          eyebrow="Highlights"
          title="Key Features"
        >
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {content.features.map((feature) => (
              <FeatureCard key={feature.title} feature={feature} />
            ))}
          </div>
        </CaseStudySection>
      )}

      <CaseStudySection
        id="architecture"
        eyebrow="Under the Hood"
        title="Architecture"
      >
        <SplitSection
          image={content.architectureImage}
          alt="Architecture"
          side="left"
        >
          <p>{content.architecture}</p>
        </SplitSection>
      </CaseStudySection>

      {related.length > 0 && (
        <CaseStudySection
          id="related-projects"
          eyebrow="Continue Exploring"
          title="Related Projects"
        >
          <RelatedProjects projects={related} />
        </CaseStudySection>
      )}
    </ProjectPageShell>
  );
}
