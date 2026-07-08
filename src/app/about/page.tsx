import type { Metadata } from "next";
import { AboutHero } from "@/components/sections/about/hero/about-hero";
import { MyJourneySection } from "@/components/sections/about/journey/my-journey-section";
import { DesignPhilosophySection } from "@/components/sections/about/philosophy/design-philosophy-section";
import { SkillsSection } from "@/components/sections/about/skill/skills-section";
import { DesignProcessSection } from "@/components/sections/about/process/design-process-section";
import { BusinessImpactSection } from "@/components/sections/about/metrics/buisness-impact-section";
import {
  getProfile,
  getJourneyMilestones,
  getPhilosophyPrinciples,
  getSkills,
  getSkillCategoryOrder,
  getProcessSteps,
  getBusinessMetrics,
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

  return (
    <>
      <AboutHero profile={profile} />
      <MyJourneySection milestones={milestones} />
      <DesignPhilosophySection principles={principles} />
      <SkillsSection skills={skills} categoryOrder={skillCategoryOrder} />
      <DesignProcessSection steps={processSteps} />
      <BusinessImpactSection metrics={businessMetrics} />
    </>
  );
}
