import type { Metadata } from "next";
import { AboutHero } from "@/components/sections/about/hero/about-hero";
import { MyJourneySection } from "@/components/sections/about/journey/my-journey-section";
import { DesignPhilosophySection } from "@/components/sections/about/philosophy/design-philosophy-section";
import { SkillsSection } from "@/components/sections/about/skill/skills-section";
import { DesignProcessSection } from "@/components/sections/about/process/design-process-section";
import { BusinessImpactSection } from "@/components/sections/about/metrics/buisness-impact-section";
import { IndustriesSection } from "@/components/sections/about/industry/industries-section";
import { ToolsSection } from "@/components/sections/about/tools/tools-section";
import { WhyHireSection } from "@/components/sections/about/why-hire/why-hire-section";
import { LetsConnect } from "@/components/sections/home/cta/lets-connect";
import {
  getProfile,
  getJourneyMilestones,
  getPhilosophyPrinciples,
  getSkills,
  getSkillCategoryOrder,
  getProcessSteps,
  getBusinessMetrics,
  getIndustries,
  getToolsByCategory,
  getToolCategoryOrder,
  getWhyHireStatement,
  getWhyHireFocusAreas,
} from "@/lib/services/about-service";

export const metadata: Metadata = {
  title: "About",
  description:
    "Abdul Aziz (AJIX) — Enterprise Product Designer. Experience, design philosophy, process, and measurable impact.",
};

export default function AboutPage() {
  const profile = getProfile();
  const milestones = getJourneyMilestones();
  const principles = getPhilosophyPrinciples();
  const skills = getSkills();
  const skillCategoryOrder = getSkillCategoryOrder();
  const processSteps = getProcessSteps();
  const businessMetrics = getBusinessMetrics();
  const industries = getIndustries();
  const toolsByCategory = getToolsByCategory();
  const toolCategoryOrder = getToolCategoryOrder();
  const whyHireStatement = getWhyHireStatement();
  const whyHireFocusAreas = getWhyHireFocusAreas();

  return (
    <>
      <AboutHero profile={profile} />
      <MyJourneySection milestones={milestones} />
      <DesignPhilosophySection principles={principles} />
      <SkillsSection skills={skills} categoryOrder={skillCategoryOrder} />
      <DesignProcessSection steps={processSteps} />
      <BusinessImpactSection metrics={businessMetrics} />
      <IndustriesSection industries={industries} />
      <ToolsSection
        toolsByCategory={toolsByCategory}
        categoryOrder={toolCategoryOrder}
      />
      <WhyHireSection
        statement={whyHireStatement}
        focusAreas={whyHireFocusAreas}
      />
      <LetsConnect
        eyebrow="Ready When You Are"
        title={
          <>
            Convinced yet?
            <br />
            Let&apos;s talk <span className="text-shimmer">opportunities.</span>
          </>
        }
        description="Open to enterprise product design roles and select freelance engagements across the UAE and beyond."
      />
    </>
  );
}
