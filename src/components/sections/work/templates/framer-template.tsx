import { ProjectPageShell } from "@/components/sections/work/project-page-shell";
import { CaseStudySection } from "@/components/sections/work/case-study/case-study-section";
import { SplitSection } from "@/components/sections/work/case-study/split-screen";
import { MasonryGallery } from "@/components/sections/work/case-study/mansory-gallery";
import { FeatureCard } from "@/components/sections/work/dev-overview/feature-card";
import { DetailList } from "@/components/sections/work/framer/detail-list";
import { BrowserPreview } from "@/components/sections/work/framer/browser-preview";
import { RelatedProjects } from "@/components/sections/work/case-study/related-projects";
import { getRelatedProjects } from "@/lib/services/project-service";
import type { Project } from "@/types/project";

export function FramerTemplate({ project }: { project: Project }) {
  const content = project.framerContent;
  if (!content)
    return <ProjectPageShell project={project}>{null}</ProjectPageShell>;

  const related = getRelatedProjects(project);

  return (
    <ProjectPageShell project={project}>
      <CaseStudySection id="about" eyebrow="Overview" title="About the Site">
        <SplitSection
          image={content.aboutImage}
          alt="Project overview"
          side="right"
        >
          <p>{content.about}</p>
        </SplitSection>
      </CaseStudySection>

      {project.gallery.length > 0 && (
        <CaseStudySection
          id="preview-gallery"
          eyebrow="Screens"
          title="Preview Gallery"
        >
          <MasonryGallery
            images={project.gallery}
            alt={`${project.title} screen`}
          />
        </CaseStudySection>
      )}

      {content.features && (
        <CaseStudySection id="features" eyebrow="Highlights" title="Features">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {content.features.map((feature) => (
              <FeatureCard key={feature.title} feature={feature} />
            ))}
          </div>
        </CaseStudySection>
      )}

      {content.cmsDetails && (
        <CaseStudySection
          id="cms-details"
          eyebrow="Content Management"
          title="CMS Details"
        >
          <DetailList items={content.cmsDetails} />
        </CaseStudySection>
      )}

      {project.liveUrl && (
        <CaseStudySection
          id="live-website"
          eyebrow="See It Live"
          title="Live Website"
        >
          <BrowserPreview
            image={project.image}
            liveUrl={project.liveUrl}
            title={project.title}
          />
        </CaseStudySection>
      )}

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
