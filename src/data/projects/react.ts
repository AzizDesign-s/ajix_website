import { Zap, Smartphone, Wallet, RefreshCw } from "lucide-react";
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
    liveUrl: "https://framer-portfolio-template.example.com",
    gallery: [
      {
        src: "/images/projects/placeholder-mockup.svg",
        orientation: "portrait",
      },
      {
        src: "/images/projects/placeholder-mockup.svg",
        orientation: "portrait",
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
    technologies: ["React 18", "Vite", "Tailwind CSS", "Framer Motion"],
    tags: ["Mobile", "Booking", "Dubai"],
    status: "completed",
    showInSelectedProjects: true,
    span: "lg:col-span-5 lg:row-span-1",
    breakout: "bottom-right",
    imageWidth: "w-[58%]",
    reactContent: {
      about:
        "A mobile-first booking flow simulating a futuristic flying taxi service, integrated with Dubai's RTA Nol Card payment ecosystem. Built solo, from Figma handoff through production deploy.",
      aboutImage: "/images/projects/placeholder-mockup.svg",
      features: [
        {
          icon: "zap",
          title: "Instant Booking",
          description:
            "Book a ride in under 3 taps, with live fare estimation.",
        },
        {
          icon: "wallet",
          title: "Nol Card Integration",
          description:
            "Silver, Gold, and Platinum tiers with tier-specific perks and gradients.",
        },
        {
          icon: "smartphone",
          title: "Boarding Pass UI",
          description:
            "A generated digital boarding pass for each confirmed trip.",
        },
        {
          icon: "refresh-cw",
          title: "State-Based Routing",
          description:
            "No prop-drilling — global state managed centrally in App.jsx.",
        },
      ],
      architecture:
        "Global state (cards, trips, transactions) lives in App.jsx and flows down without prop-drilling. A custom useRef guard prevents duplicate trip records under React StrictMode's double-invoked effects.",
      architectureImage: "/images/projects/placeholder-mockup.svg",
    },
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
    gallery: [
      {
        src: "/images/projects/placeholder-mockup.svg",
        orientation: "landscape",
      },
    ],
    technologies: ["React", "Zustand", "Tailwind CSS"],
    tags: ["SaaS", "Admin Panel", "Automotive"],
    status: "completed",
    showInSelectedProjects: true,
    span: "lg:col-span-4 lg:row-span-1",
    breakout: "bottom-right",
    imageWidth: "w-[62%]",
    reactContent: {
      about:
        "An admin panel for automotive dealerships covering lead pipelines, service scheduling, and reporting — built with Zustand for lightweight, boilerplate-free state management.",
      architecture:
        "Zustand stores are split by domain (leads, inventory, notifications) rather than one global store, keeping each slice independently testable.",
      // Deliberately no aboutImage, no features, no architectureImage —
      // proves the React template also gracefully handles partial data.
    },
    seo: {
      title: "Apex DriveOS Admin — Project",
      description:
        "Kanban lead management and service order SaaS for auto dealerships.",
    },
    relatedSlugs: ["skyride-dubai"],
  },
];
