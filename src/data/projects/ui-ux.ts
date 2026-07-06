import type { Project } from "@/types/project";

export const uiUxProjects: Project[] = [
  {
    id: "1",
    slug: "nexora-dealer-os",
    title: "Nexora Dealer OS",
    description: "Enterprise dashboard for luxury auto dealerships.",
    category: "ui-ux",
    tool: "Figma",
    image: "/images/projects/placeholder-mockup.svg",
    gallery: ["/images/projects/placeholder-mockup.svg"],
    technologies: ["Figma", "FigJam"],
    tags: ["Enterprise", "Dashboard", "Automotive"],
    status: "completed",
    showInSelectedProjects: true,
    span: "lg:col-span-7 lg:row-span-2",
    breakout: "center",
    imageWidth: "w-[62%]",
    architectureUrl: "/work/nexora-dealer-os/architecture",
    caseStudy: {
      problem:
        "Dealership staff juggled disconnected spreadsheets and legacy CRMs to manage leads, service orders, and inventory.",
      businessGoals: [
        "Reduce lead response time",
        "Unify service and sales workflows",
        "Give managers real-time visibility",
      ],
      research:
        "Contextual interviews with 6 dealership staff across sales and service roles.",
      challenges:
        "Balancing information density with clarity for non-technical daily users.",
      businessResults: "40% faster lead-to-close time in pilot rollout.",
      keyLearnings:
        "Enterprise UX succeeds by removing steps, not adding features.",
    },
    seo: {
      title: "Nexora Dealer OS — Case Study",
      description: "Enterprise dashboard design for luxury auto dealerships.",
    },
    relatedSlugs: ["bmw-m-dashboard"],
  },
  {
    id: "2",
    slug: "bmw-m-dashboard",
    title: "BMW M Dashboard",
    description: "Physics-based speed simulation dashboard.",
    category: "ui-ux",
    tool: "Figma",
    image: "/images/projects/placeholder-mockup.svg",
    gallery: ["/images/projects/placeholder-mockup.svg"],
    technologies: ["Figma"],
    tags: ["Automotive", "Simulation"],
    status: "completed",
    showInSelectedProjects: true,
    span: "lg:col-span-5 lg:row-span-1",
    breakout: "top-right",
    imageWidth: "w-[58%]",
    caseStudy: {
      problem:
        "Existing dashboard concepts felt static and disconnected from real driving physics.",
      businessGoals: ["Explore a physics-informed interface concept"],
      challenges:
        "Representing real-time gauge behavior in a static design tool.",
      businessResults: "Concept validated through a working React prototype.",
      keyLearnings:
        "Designing for motion requires prototyping in code, not just Figma.",
    },
    seo: {
      title: "BMW M Dashboard — Case Study",
      description: "Physics-based speed simulation dashboard concept.",
    },
    relatedSlugs: ["nexora-dealer-os"],
  },
];
