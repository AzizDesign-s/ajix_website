import type { Skill } from "@/types/about";

export const skills: Skill[] = [
  // Product Design
  { name: "Interaction Design", category: "Product Design" },
  { name: "Prototyping", category: "Product Design" },
  { name: "Design Critique", category: "Product Design" },

  // UX Strategy
  { name: "Product Thinking", category: "UX Strategy" },
  { name: "Information Architecture", category: "UX Strategy" },
  { name: "Stakeholder Alignment", category: "UX Strategy" },

  // User Research
  { name: "User Interviews", category: "User Research" },
  { name: "Usability Testing", category: "User Research" },
  { name: "Journey Mapping", category: "User Research" },

  // Design Systems
  { name: "Design Tokens", category: "Design Systems" },
  { name: "Component Libraries", category: "Design Systems" },
  { name: "Documentation", category: "Design Systems" },

  // React Development
  { name: "React", category: "React Development" },
  { name: "Next.js", category: "React Development" },
  { name: "TypeScript", category: "React Development" },

  // Framer Development
  { name: "Framer", category: "Framer Development" },
  { name: "CMS Collections", category: "Framer Development" },
  { name: "Scroll Animation", category: "Framer Development" },

  // Branding
  { name: "Logo Design", category: "Branding" },
  { name: "Typography Systems", category: "Branding" },
  { name: "Brand Guidelines", category: "Branding" },

  // Accessibility
  { name: "WCAG Compliance", category: "Accessibility" },
  { name: "Keyboard Navigation", category: "Accessibility" },
  { name: "Screen Reader Testing", category: "Accessibility" },

  // Analytics
  { name: "Mixpanel", category: "Analytics" },
  { name: "Amplitude", category: "Analytics" },
  { name: "Hotjar", category: "Analytics" },

  // Collaboration
  { name: "Cross-functional Workflow", category: "Collaboration" },
  { name: "Engineering Handoff", category: "Collaboration" },
  { name: "Async Documentation", category: "Collaboration" },
];

// Fixed display order for the filter tabs — matches your plan's list order
export const skillCategoryOrder: Skill["category"][] = [
  "Product Design",
  "UX Strategy",
  "User Research",
  "Design Systems",
  "React Development",
  "Framer Development",
  "Branding",
  "Accessibility",
  "Analytics",
  "Collaboration",
];
