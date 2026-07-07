import { ProjectPageShell } from "@/components/sections/work/project-page-shell";
import { CaseStudySection } from "@/components/sections/work/case-study/case-study-section";
import { CaseStudyNav } from "@/components/sections/work/case-study/case-study-nav";
import { OverviewPanel } from "@/components/sections/work/case-study/overview-panel";
import { BusinessGoalsList } from "@/components/sections/work/case-study/business-goals-list";
import { SplitSection } from "@/components/sections/work/case-study/split-screen";
import { PersonasGrid } from "@/components/sections/work/case-study/personas-grid";
import { JourneyMap } from "@/components/sections/work/case-study/journey-map";
import { MasonryGallery } from "@/components/sections/work/case-study/mansory-gallery";
import { BusinessResults } from "@/components/sections/work/case-study/business-results";
import { RelatedProjects } from "@/components/sections/work/case-study/related-projects";
import { getRelatedProjects } from "@/lib/services/project-service";
import type { Project } from "@/types/project";

export function UiUxTemplate({ project }: { project: Project }) {
  const cs = project.caseStudy;
  if (!cs) return <ProjectPageShell project={project}>{null}</ProjectPageShell>;

  const related = getRelatedProjects(project);

  const navItems = [
    { id: "overview", label: "Overview" },
    { id: "business-goals", label: "Business Goals" },
    cs.research && { id: "research", label: "Research" },
    cs.personas && { id: "personas", label: "Personas" },
    cs.journeyMap && { id: "journey-map", label: "Journey Map" },
    cs.wireframes && { id: "wireframes", label: "Wireframes" },
    cs.designSystem && { id: "design-system", label: "Design System" },
    cs.highFidelity && { id: "high-fidelity", label: "High-Fidelity UI" },
    cs.accessibility && { id: "accessibility", label: "Accessibility" },
    { id: "challenges", label: "Challenges" },
    { id: "business-results", label: "Business Results" },
    { id: "key-learnings", label: "Key Learnings" },
    related.length > 0 && { id: "related-projects", label: "Related Projects" },
  ].filter((item): item is { id: string; label: string } => Boolean(item));

  return (
    <ProjectPageShell project={project}>
      <div className="flex gap-12">
        <CaseStudyNav items={navItems} />

        <div className="min-w-0 flex-1">
          <CaseStudySection
            id="overview"
            eyebrow="Overview"
            title="Project Overview"
          >
            <OverviewPanel
              overview={cs.overview}
              problem={cs.problem}
              coverImage={cs.coverImage}
            />
          </CaseStudySection>

          <CaseStudySection
            id="business-goals"
            eyebrow="Goals"
            title="Business Goals"
          >
            <SplitSection
              image={cs.businessGoalsImage}
              alt="Business goals"
              side="right"
            >
              <BusinessGoalsList goals={cs.businessGoals} />
            </SplitSection>
          </CaseStudySection>

          {cs.research && (
            <CaseStudySection
              id="research"
              eyebrow="Discovery"
              title="Research"
            >
              <SplitSection image={cs.researchImage} alt="Research" side="left">
                <p>{cs.research}</p>
              </SplitSection>
            </CaseStudySection>
          )}

          {cs.personas && (
            <CaseStudySection
              id="personas"
              eyebrow="Who We Designed For"
              title="Personas"
            >
              <PersonasGrid personas={cs.personas} />
            </CaseStudySection>
          )}

          {cs.journeyMap && (
            <CaseStudySection
              id="journey-map"
              eyebrow="The Experience"
              title="Journey Map"
            >
              <JourneyMap stages={cs.journeyMap} />
            </CaseStudySection>
          )}

          {cs.wireframes && (
            <CaseStudySection
              id="wireframes"
              eyebrow="Early Exploration"
              title="Wireframes"
            >
              <MasonryGallery
                images={cs.wireframes}
                alt={`${project.title} wireframe`}
              />
            </CaseStudySection>
          )}

          {cs.designSystem && (
            <CaseStudySection
              id="design-system"
              eyebrow="Foundation"
              title="Design System"
            >
              <SplitSection
                image={cs.designSystemImage}
                alt="Design system"
                side="right"
              >
                <p>{cs.designSystem}</p>
              </SplitSection>
            </CaseStudySection>
          )}

          {cs.highFidelity && (
            <CaseStudySection
              id="high-fidelity"
              eyebrow="Final Design"
              title="High-Fidelity UI"
            >
              <MasonryGallery
                images={cs.highFidelity}
                alt={`${project.title} screen`}
              />
            </CaseStudySection>
          )}

          {cs.accessibility && (
            <CaseStudySection
              id="accessibility"
              eyebrow="Inclusive Design"
              title="Accessibility"
            >
              <SplitSection
                image={cs.accessibilityImage}
                alt="Accessibility"
                side="right"
              >
                <p>{cs.accessibility}</p>
              </SplitSection>
            </CaseStudySection>
          )}

          <CaseStudySection
            id="challenges"
            eyebrow="Obstacles"
            title="Challenges"
          >
            <SplitSection
              image={cs.challengesImage}
              alt="Challenges"
              side="left"
            >
              <p>{cs.challenges}</p>
            </SplitSection>
          </CaseStudySection>

          <CaseStudySection
            id="business-results"
            eyebrow="Impact"
            title="Business Results"
          >
            <BusinessResults
              summary={cs.businessResults}
              metrics={cs.resultMetrics}
            />
          </CaseStudySection>

          <CaseStudySection
            id="key-learnings"
            eyebrow="Reflection"
            title="Key Learnings"
          >
            <SplitSection
              image={cs.keyLearningsImage}
              alt="Key learnings"
              side="right"
            >
              <p>{cs.keyLearnings}</p>
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
        </div>
      </div>
    </ProjectPageShell>
  );
}
