import type { LucideIcon } from "lucide-react";

export interface Profile {
  name: string;
  role: string;
  positioningStatement: string;
  portraitImage?: string;
  location: string;
  yearsExperience: number;
  resumeUrl: string;
  experienceHighlights: string[];
}

export interface JourneyMilestone {
  year: string;
  title: string;
  description: string;
}

export interface PhilosophyPrinciple {
  icon: string; // key into featureIconMap (src/config/feature-icons.ts)
  title: string;
  description: string;
}

export type SkillCategoryName =
  | "Product Design"
  | "UX Strategy"
  | "User Research"
  | "Design Systems"
  | "React Development"
  | "Framer Development"
  | "Branding"
  | "Accessibility"
  | "Analytics"
  | "Collaboration";

export interface Skill {
  name: string;
  category: SkillCategoryName;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  icon: string; // key into featureIconMap
}

export interface BusinessMetric {
  label: string;
  value: number;
  suffix?: string;
  context: string;
  icon: string; // key into featureIconMap
  projectSlug?: string; // links to the case study that produced this number, if applicable
}

export interface Industry {
  name: string;
  icon: string; // key into featureIconMap
}

export interface AboutTool {
  name: string;
  category: "Design" | "Development" | "Analytics" | "Collaboration";
  iconSlug?: string; // Simple Icons slug — falls back to text badge if omitted
}
