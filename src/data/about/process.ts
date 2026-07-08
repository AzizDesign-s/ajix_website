import type { ProcessStep } from "@/types/about";

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Research",
    description: "Understand the real problem before proposing solutions.",
    icon: "search",
  },
  {
    step: "02",
    title: "Define",
    description: "Frame goals, constraints, and success metrics clearly.",
    icon: "target",
  },
  {
    step: "03",
    title: "Ideate",
    description: "Explore multiple directions before committing to one.",
    icon: "lightbulb",
  },
  {
    step: "04",
    title: "Prototype",
    description:
      "Build interactive, testable versions — not just static screens.",
    icon: "layout-template",
  },
  {
    step: "05",
    title: "Validate",
    description: "Test with real users, gather signal, not opinions.",
    icon: "check-circle",
  },
  {
    step: "06",
    title: "Build",
    description: "Ship production-quality code, not just handoff files.",
    icon: "hammer",
  },
  {
    step: "07",
    title: "Measure",
    description: "Track outcomes against the goals defined in step two.",
    icon: "bar-chart",
  },
  {
    step: "08",
    title: "Iterate",
    description: "Refine based on real usage, continuously.",
    icon: "refresh-cw",
  },
];
