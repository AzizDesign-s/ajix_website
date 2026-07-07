import type { Project } from "@/types/project";

export const brandingProjects: Project[] = [
  {
    id: "7",
    slug: "ajix-brand-identity",
    title: "AJIX Brand Identity",
    description: "Personal brand system and visual language.",
    category: "branding",
    tool: "Illustrator",
    image: "/images/projects/placeholder-mockup.svg",
    gallery: [
      { src: "/images/projects/placeholder-mockup.svg", orientation: "square" },
      {
        src: "/images/projects/placeholder-mockup.svg",
        orientation: "landscape",
      },
    ],
    technologies: ["Illustrator"],
    tags: ["Branding", "Personal Brand"],
    status: "completed",
    showInSelectedProjects: false,
    span: "lg:col-span-4 lg:row-span-1",
    breakout: "top-left",
    imageWidth: "w-[60%]",
    brandingContent: {
      overview:
        "A full personal brand system built for AJIX — logotype, color language, and typography designed to feel premium, technical, and distinctly enterprise-focused across every touchpoint.",
      overviewImage: "/images/projects/placeholder-mockup.svg",
      logoImage: "/images/logo-full-dark.svg",
      logoOnDarkImage: "/images/logo-full-dark.svg",
      colorPalette: [
        { name: "Brand Cyan", hex: "#22D3EE" },
        { name: "Brand Blue", hex: "#2563EB" },
        { name: "Brand Indigo", hex: "#4F46E5" },
        { name: "Blue Light", hex: "#60A5FA" },
        { name: "Neutral 950", hex: "#01040E" },
        { name: "Neutral 900", hex: "#0A1E4F" },
        { name: "Neutral 50", hex: "#F8FAFC" },
        { name: "White", hex: "#FFFFFF" },
      ],
      typography: [
        {
          role: "Display",
          fontFamily: "Space Grotesk",
          weight: "600 · Semibold",
          sample: "Designing systems that scale.",
          fontClass: "font-display",
        },
        {
          role: "Body",
          fontFamily: "Inter",
          weight: "400 · Regular",
          sample: "Research-driven, accessible, scalable digital products.",
          fontClass: "font-sans",
        },
      ],
      applications: [
        {
          src: "/images/projects/placeholder-mockup.svg",
          orientation: "square",
        },
        {
          src: "/images/projects/placeholder-mockup.svg",
          orientation: "landscape",
        },
        {
          src: "/images/projects/placeholder-mockup.svg",
          orientation: "portrait",
        },
      ],
    },
    seo: {
      title: "AJIX Brand Identity — Project",
      description: "Personal brand identity system for AJIX.",
    },
    relatedSlugs: ["nexora-brand-system"],
  },
  {
    id: "8",
    slug: "nexora-brand-system",
    title: "Nexora Brand System",
    description: "Full identity system for an enterprise SaaS.",
    category: "branding",
    tool: "Illustrator",
    image: "/images/projects/placeholder-mockup.svg",
    gallery: [
      {
        src: "/images/projects/placeholder-mockup.svg",
        orientation: "landscape",
      },
    ],
    technologies: ["Illustrator"],
    tags: ["Branding", "Enterprise"],
    status: "completed",
    showInSelectedProjects: false,
    span: "lg:col-span-4 lg:row-span-1",
    breakout: "bottom-left",
    imageWidth: "w-[60%]",
    brandingContent: {
      overview:
        "A concise brand identity refresh for Nexora's enterprise dashboard product, focused on establishing a clearer visual hierarchy across the platform.",
      logoImage: "/images/projects/placeholder-mockup.svg",
      // Deliberately no overviewImage, no logoOnDarkImage, no colorPalette,
      // no typography, no applications — proves the Branding template also
      // gracefully handles a minimal case, same as every other template.
    },
    seo: {
      title: "Nexora Brand System — Project",
      description: "Full brand identity system for an enterprise SaaS product.",
    },
    relatedSlugs: ["ajix-brand-identity"],
  },
];
