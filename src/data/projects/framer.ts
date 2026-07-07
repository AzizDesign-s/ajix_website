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
    gallery: [
      {
        src: "/images/projects/placeholder-mockup.svg",
        orientation: "landscape",
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
    technologies: ["Framer"],
    tags: ["Template", "Portfolio"],
    status: "completed",
    showInSelectedProjects: true,
    span: "lg:col-span-4 lg:row-span-1",
    breakout: "top-right",
    imageWidth: "w-[62%]",
    liveUrl: "https://framer-portfolio-template.example.com",
    framerContent: {
      about:
        "A fully responsive Framer template built for photographers and visual artists — component-driven sections, CMS-powered project galleries, and buttery page transitions out of the box.",
      aboutImage: "/images/projects/placeholder-mockup.svg",
      features: [
        {
          icon: "layers",
          title: "Modular Sections",
          description:
            "Every section is a swappable Framer component with its own variants.",
        },
        {
          icon: "sparkles",
          title: "Scroll-Linked Motion",
          description:
            "Parallax and reveal animations tuned for 60fps on every device.",
        },
        {
          icon: "mouse-pointer-click",
          title: "Interactive Cursor",
          description:
            "A custom cursor that reacts contextually to hoverable elements.",
        },
        {
          icon: "zap",
          title: "Instant CMS Sync",
          description:
            "New projects added in the CMS appear live with zero redeploy.",
        },
      ],
      cmsDetails: [
        { label: "CMS Collections", value: "Projects, Testimonials" },
        { label: "Fields per Item", value: "8 (title, cover, gallery, tags…)" },
        { label: "Publishing", value: "Instant, no rebuild required" },
        { label: "Localization Ready", value: "Yes — EN base, extendable" },
      ],
    },
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
    gallery: [
      {
        src: "/images/projects/placeholder-mockup.svg",
        orientation: "landscape",
      },
    ],
    technologies: ["Framer"],
    tags: ["Landing Page", "Agency"],
    status: "completed",
    showInSelectedProjects: true,
    span: "lg:col-span-4 lg:row-span-1",
    breakout: "bottom-right",
    imageWidth: "w-[62%]",
    framerContent: {
      about:
        "A conversion-focused landing page system built for a digital agency, with A/B-tested hero variants and a modular pricing section.",
      // Deliberately no aboutImage, no features, no cmsDetails, and no
      // liveUrl on this project — proves both the Framer template's optional
      // sections AND the Live Website section (which needs liveUrl) hide
      // correctly when that data isn't present.
    },
    seo: {
      title: "Agency Landing Page — Project",
      description: "A conversion-focused Framer landing page system.",
    },
    relatedSlugs: ["framer-portfolio-template"],
  },
];
