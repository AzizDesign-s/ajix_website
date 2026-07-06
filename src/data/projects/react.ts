import type { Project } from "@/types/project";

export const reactProjects: Project[] = [
  {
    id: "3",
    slug: "skyride-dubai",
    title: "SkyRide Dubai",
    description: "Flying taxi booking app for RTA Nol Card.",
    category: "react",
    tool: "React + Vite",
    image: "/images/projects/placeholder-mockup.svg",
    gallery: ["/images/projects/placeholder-mockup.svg"],
    technologies: ["React 18", "Vite", "Tailwind CSS", "Framer Motion"],
    tags: ["Mobile", "Booking", "Dubai"],
    status: "completed",
    showInSelectedProjects: true,
    span: "lg:col-span-5 lg:row-span-1",
    breakout: "bottom-right",
    imageWidth: "w-[58%]",
    seo: {
      title: "SkyRide Dubai — Project",
      description:
        "Flying taxi booking app integrating Dubai's RTA Nol Card ecosystem.",
    },
    relatedSlugs: ["apex-drive-admin"],
  },
  {
    id: "4",
    slug: "apex-drive-admin",
    title: "Apex DriveOS Admin",
    description: "Lead pipeline and service management SaaS.",
    category: "react",
    tool: "React + Zustand",
    image: "/images/projects/placeholder-mockup.svg",
    gallery: ["/images/projects/placeholder-mockup.svg"],
    technologies: ["React", "Zustand", "Tailwind CSS"],
    tags: ["SaaS", "Admin Panel", "Automotive"],
    status: "completed",
    showInSelectedProjects: true,
    span: "lg:col-span-4 lg:row-span-1",
    breakout: "bottom-right",
    imageWidth: "w-[62%]",
    seo: {
      title: "Apex DriveOS Admin — Project",
      description:
        "Kanban lead management and service order SaaS for auto dealerships.",
    },
    relatedSlugs: ["skyride-dubai"],
  },
];
