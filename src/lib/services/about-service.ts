import { profile } from "@/data/about/profile";
import { journeyMilestones } from "@/data/about/journey";
import { philosophyPrinciples } from "@/data/about/philosophy";
import { skills, skillCategoryOrder } from "@/data/about/skills";
import type { Skill } from "@/types/about";
import { processSteps } from "@/data/about/process";
import { businessMetrics } from "@/data/about/metrics";
import { industries } from "@/data/about/industries";
import { aboutTools, toolCategoryOrder } from "@/data/about/tools";
import { whyHireStatement, whyHireFocusAreas } from "@/data/about/why-hire";
import type { AboutTool } from "@/types/about";

export function getProfile() {
  return profile;
}

export function getJourneyMilestones() {
  return journeyMilestones;
}

export function getPhilosophyPrinciples() {
  return philosophyPrinciples;
}

export function getSkills(): Skill[] {
  return skills;
}

export function getSkillCategoryOrder(): Skill["category"][] {
  return skillCategoryOrder;
}

export function getSkillsByCategory(category: Skill["category"]): Skill[] {
  return skills.filter((skill) => skill.category === category);
}

export function getProcessSteps() {
  return processSteps;
}

export function getBusinessMetrics() {
  return businessMetrics;
}

export function getIndustries() {
  return industries;
}

export function getAboutTools() {
  return aboutTools;
}

export function getToolsByCategory(): Record<
  AboutTool["category"],
  AboutTool[]
> {
  return aboutTools.reduce(
    (grouped, tool) => {
      grouped[tool.category] = [...(grouped[tool.category] ?? []), tool];
      return grouped;
    },
    {} as Record<AboutTool["category"], AboutTool[]>
  );
}

export function getToolCategoryOrder(): AboutTool["category"][] {
  return toolCategoryOrder;
}

export function getWhyHireStatement() {
  return whyHireStatement;
}

export function getWhyHireFocusAreas() {
  return whyHireFocusAreas;
}
