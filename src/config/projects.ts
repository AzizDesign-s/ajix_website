export type Breakout =
  "top-right" | "top-left" | "bottom-right" | "bottom-left" | "center";

export interface Project {
  slug: string;
  title: string;
  description: string;
  category: "UI/UX" | "Development" | "Framer";
  tool: string;
  image: string;
  span: string; // Tailwind grid span classes
  breakout: Breakout;
  imageWidth: string; // Tailwind width class for the image
}

export const projects: Project[] = [
  {
    slug: "nexora-dealer-os",
    title: "Nexora Dealer OS",
    description: "Enterprise dashboard for luxury auto dealerships.",
    category: "UI/UX",
    tool: "Figma",
    image: "/images/projects/placeholder-mockup.svg",
    span: "lg:col-span-7 lg:row-span-2",
    breakout: "center",
    imageWidth: "w-[62%]",
  },
  {
    slug: "skyride-dubai",
    title: "SkyRide Dubai",
    description: "Flying taxi booking app for RTA Nol Card.",
    category: "Development",
    tool: "React + Vite",
    image: "/images/projects/placeholder-mockup.svg",
    span: "lg:col-span-5 lg:row-span-1",
    breakout: "bottom-right",
    imageWidth: "w-[58%]",
  },
  {
    slug: "bmw-m-dashboard",
    title: "BMW M Dashboard",
    description: "Physics-based speed simulation dashboard.",
    category: "UI/UX",
    tool: "Figma",
    image: "/images/projects/placeholder-mockup.svg",
    span: "lg:col-span-5 lg:row-span-1",
    breakout: "top-right",
    imageWidth: "w-[58%]",
  },
  {
    slug: "apex-drive-admin",
    title: "Apex DriveOS Admin",
    description: "Lead pipeline and service management SaaS.",
    category: "Development",
    tool: "React + Zustand",
    image: "/images/projects/placeholder-mockup.svg",
    span: "lg:col-span-4 lg:row-span-1",
    breakout: "bottom-right",
    imageWidth: "w-[62%]",
  },
  {
    slug: "framer-portfolio-template",
    title: "Portfolio Template",
    description: "Reusable Framer template for creatives.",
    category: "Framer",
    tool: "Framer",
    image: "/images/projects/placeholder-mockup.svg",
    span: "lg:col-span-4 lg:row-span-1",
    breakout: "top-right",
    imageWidth: "w-[62%]",
  },
  {
    slug: "framer-agency-landing",
    title: "Agency Landing Page",
    description: "Conversion-focused landing page system.",
    category: "Framer",
    tool: "Framer",
    image: "/images/projects/placeholder-mockup.svg",
    span: "lg:col-span-4 lg:row-span-1",
    breakout: "bottom-right",
    imageWidth: "w-[62%]",
  },
];
