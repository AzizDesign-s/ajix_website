import type { AboutTool } from "@/types/about";

export const aboutTools: AboutTool[] = [
  { name: "Figma", category: "Design", iconSlug: "figma" },
  { name: "FigJam", category: "Design", iconSlug: "figma" },
  { name: "React", category: "Development", iconSlug: "react" },
  { name: "Next.js", category: "Development", iconSlug: "nextdotjs" },
  { name: "Tailwind CSS", category: "Development", iconSlug: "tailwindcss" },
  { name: "TypeScript", category: "Development", iconSlug: "typescript" },
  { name: "Framer Motion", category: "Development", iconSlug: "framer" },
  { name: "Mixpanel", category: "Analytics", iconSlug: "mixpanel" },
  { name: "Amplitude", category: "Analytics", iconSlug: "amplitude" },
  { name: "Hotjar", category: "Analytics", iconSlug: "hotjar" },
  { name: "Git", category: "Collaboration", iconSlug: "git" },
  { name: "GitHub", category: "Collaboration", iconSlug: "github" },
  { name: "Jira", category: "Collaboration", iconSlug: "jira" },
  { name: "Confluence", category: "Collaboration", iconSlug: "confluence" },
];

export const toolCategoryOrder: AboutTool["category"][] = [
  "Design",
  "Development",
  "Analytics",
  "Collaboration",
];
