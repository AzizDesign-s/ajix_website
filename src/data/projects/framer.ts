import type { Project } from "@/types/project";

export const framerProjects: Project[] = [
  {
    id: "5",
    slug: "framer-portfolio-template",
    title: "Portfolio Template",
    description: "Reusable Framer template for creatives.",
    category: "framer",
    tool: "Framer",
    image: "/images/projects/placeholder-mockup.svg",
    gallery: ["/images/projects/placeholder-mockup.svg"],
    technologies: ["Framer"],
    tags: ["Template", "Portfolio"],
    status: "completed",
    showInSelectedProjects: true,
    span: "lg:col-span-4 lg:row-span-1",
    breakout: "top-right",
    imageWidth: "w-[62%]",
    seo: {
      title: "Portfolio Template — Project",
      description:
        "A reusable Framer template built for creative professionals.",
    },
    relatedSlugs: ["framer-agency-landing"],
  },
  {
    id: "6",
    slug: "framer-agency-landing",
    title: "Agency Landing Page",
    description: "Conversion-focused landing page system.",
    category: "framer",
    tool: "Framer",
    image: "/images/projects/placeholder-mockup.svg",
    gallery: ["/images/projects/placeholder-mockup.svg"],
    technologies: ["Framer"],
    tags: ["Landing Page", "Agency"],
    status: "completed",
    showInSelectedProjects: true,
    span: "lg:col-span-4 lg:row-span-1",
    breakout: "bottom-right",
    imageWidth: "w-[62%]",
    seo: {
      title: "Agency Landing Page — Project",
      description: "A conversion-focused Framer landing page system.",
    },
    relatedSlugs: ["framer-portfolio-template"],
  },
];
