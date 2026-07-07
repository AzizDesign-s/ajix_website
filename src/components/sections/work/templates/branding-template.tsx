import { ProjectPageShell } from "@/components/sections/work/project-page-shell";
import { CaseStudySection } from "@/components/sections/work/case-study/case-study-section";
import { SplitSection } from "@/components/sections/work/case-study/split-screen";
import { LogoShowcase } from "@/components/sections/work/branding/logo-showcase";
import { ColorSwatchGrid } from "@/components/sections/work/branding/color-swatch-grid";
import { TypographySpecimen } from "@/components/sections/work/branding/typography-specimen";
import { MasonryGallery } from "@/components/sections/work/case-study/mansory-gallery";
import { RelatedProjects } from "@/components/sections/work/case-study/related-projects";
import { getRelatedProjects } from "@/lib/services/project-service";
import type { Project } from "@/types/project";

export function BrandingTemplate({ project }: { project: Project }) {
  const content = project.brandingContent;
  if (!content)
    return <ProjectPageShell project={project}>{null}</ProjectPageShell>;

  const related = getRelatedProjects(project);

  return (
    <ProjectPageShell project={project}>
      <CaseStudySection
        id="overview"
        eyebrow="Overview"
        title="Project Overview"
      >
        <SplitSection
          image={content.overviewImage}
          alt="Project overview"
          side="right"
        >
          <p>{content.overview}</p>
        </SplitSection>
      </CaseStudySection>

      <CaseStudySection id="logo" eyebrow="Mark" title="Logo">
        <LogoShowcase
          logoImage={content.logoImage}
          logoOnDarkImage={content.logoOnDarkImage}
        />
      </CaseStudySection>

      {content.colorPalette && (
        <CaseStudySection
          id="color-palette"
          eyebrow="Palette"
          title="Color Palette"
        >
          <ColorSwatchGrid colors={content.colorPalette} />
        </CaseStudySection>
      )}

      {content.typography && (
        <CaseStudySection
          id="typography"
          eyebrow="Type System"
          title="Typography"
        >
          <TypographySpecimen specimens={content.typography} />
        </CaseStudySection>
      )}

      {content.applications && (
        <CaseStudySection
          id="applications"
          eyebrow="In Practice"
          title="Brand Applications"
        >
          <MasonryGallery
            images={content.applications}
            alt={`${project.title} application`}
          />
        </CaseStudySection>
      )}

      {project.gallery.length > 0 && (
        <CaseStudySection id="gallery" eyebrow="More" title="Gallery">
          <MasonryGallery
            images={project.gallery}
            alt={`${project.title} visual`}
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
