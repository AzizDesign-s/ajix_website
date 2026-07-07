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
      coverImage: "/images/projects/placeholder-mockup.svg",
      overview: {
        role: "Lead Product Designer",
        timeline: "12 weeks",
        tools: ["Figma", "FigJam", "Maze"],
      },
      problem:
        "Dealership staff juggled disconnected spreadsheets and legacy CRMs to manage leads, service orders, and inventory — no single view existed for daily operations.",
      businessGoals: [
        "Reduce average lead response time",
        "Unify service and sales workflows into one platform",
        "Give managers real-time visibility across all locations",
      ],
      businessGoalsImage: "/images/projects/placeholder-mockup.svg",
      research:
        "Ran contextual interviews with 6 dealership staff across sales and service roles, plus a 2-week diary study to map daily friction points before any wireframes were drawn.",
      researchImage: "/images/projects/placeholder-mockup.svg",
      personas: [
        {
          name: "Layla, Sales Manager",
          role: "Oversees 4 sales reps across 2 locations",
          goal: "See lead status across the whole team at a glance",
          frustration:
            "Currently has to call each rep individually for updates",
        },
        {
          name: "Omar, Service Advisor",
          role: "Manages daily service bay scheduling",
          goal: "Slot in urgent repairs without breaking existing bookings",
          frustration: "Paper-based scheduling causes frequent double-bookings",
        },
      ],
      journeyMap: [
        {
          stage: "Lead Capture",
          description: "Inquiry lands from web, walk-in, or referral.",
        },
        {
          stage: "Qualification",
          description: "Rep reviews and assigns priority manually.",
        },
        {
          stage: "Follow-Up",
          description: "Manual reminders, frequently missed.",
        },
        {
          stage: "Conversion",
          description: "Deal closed, handed off to service team.",
        },
      ],
      wireframes: [
        {
          src: "/images/projects/placeholder-mockup.svg",
          orientation: "landscape",
        },
        {
          src: "/images/projects/placeholder-mockup.svg",
          orientation: "portrait",
        },
        {
          src: "/images/projects/placeholder-mockup.svg",
          orientation: "square",
        },
        {
          src: "/images/projects/placeholder-mockup.svg",
          orientation: "landscape",
        },
      ],
      designSystem:
        "Built a token-based component library in Figma — 40+ components covering data tables, status badges, and Kanban cards — shared directly with engineering as the single source of truth.",
      designSystemImage: "/images/projects/placeholder-mockup.svg",
      highFidelity: [
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
      accessibility:
        "All data tables support full keyboard navigation and screen-reader-announced status changes; color-coded priority badges always pair with a text label, never color alone.",
      accessibilityImage: "/images/projects/placeholder-mockup.svg",
      challenges:
        "Balancing information density with clarity for non-technical daily users who aren't tech-savvy but need to scan dozens of leads quickly.",
      challengesImage: "/images/projects/placeholder-mockup.svg",
      businessResults:
        "Pilot rollout across 2 dealership locations showed measurable gains within the first month.",
      resultMetrics: [
        { label: "Faster Lead Response", value: 40, suffix: "%" },
        { label: "Fewer Missed Follow-Ups", value: 65, suffix: "%" },
        { label: "Staff Satisfaction", value: 92, suffix: "%" },
      ],
      keyLearnings:
        "Enterprise UX succeeds by removing steps, not adding features — the biggest win came from a single unified inbox, not new functionality.",
      keyLearningsImage: "/images/projects/placeholder-mockup.svg",
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
      overview: {
        role: "Solo Designer",
        timeline: "2 weeks",
        tools: ["Figma"],
      },
      highFidelity: [
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
      problem:
        "Existing dashboard concepts felt static and disconnected from real driving physics.",
      businessGoals: ["Explore a physics-informed interface concept"],
      challenges:
        "Representing real-time gauge behavior in a static design tool.",
      businessResults:
        "Concept validated through a working React prototype built afterward.",
      accessibility:
        "All data tables support full keyboard navigation and screen-reader-announced status changes; color-coded priority badges always pair with a text label, never color alone.",
      accessibilityImage: "/images/projects/placeholder-mockup.svg",
      keyLearnings:
        "Designing for motion requires prototyping in code, not just Figma.",
      // Deliberately no coverImage, no *Image fields, no personas, no journey
      // map, no galleries — proves the engine gracefully renders a shorter,
      // text-only case study when that's genuinely all the data that exists.
    },
    seo: {
      title: "BMW M Dashboard — Case Study",
      description: "Physics-based speed simulation dashboard concept.",
    },
    relatedSlugs: ["nexora-dealer-os"],
  },
];
