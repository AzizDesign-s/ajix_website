import type { LucideIcon } from "lucide-react";
import {
  LayoutDashboard,
  Code2,
  Boxes,
  Wand2,
  Search,
  PenTool,
  FlaskConical,
  Accessibility,
} from "lucide-react";

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    icon: LayoutDashboard,
    title: "Product Design",
    description:
      "End-to-end UX for complex, data-heavy products — research through high-fidelity design.",
  },
  {
    icon: Code2,
    title: "Frontend Engineering",
    description:
      "Production React builds with clean architecture, from design system to deployment.",
  },
  {
    icon: Boxes,
    title: "Design Systems",
    description:
      "Scalable, token-based systems that keep large products consistent as they grow.",
  },
  {
    icon: Wand2,
    title: "Motion & Interaction",
    description:
      "Purposeful animation that clarifies interfaces instead of decorating them.",
  },
  {
    icon: Search,
    title: "User Research",
    description:
      "Interviews, surveys, and behavioral analysis that ground decisions in real user needs.",
  },
  {
    icon: PenTool,
    title: "Wireframing & Prototyping",
    description:
      "Low to high-fidelity flows that validate ideas fast, before a line of code is written.",
  },
  {
    icon: FlaskConical,
    title: "Usability Testing",
    description:
      "Structured testing sessions that surface friction points and validate design decisions.",
  },
  {
    icon: Accessibility,
    title: "Accessibility (WCAG)",
    description:
      "Inclusive design audits and fixes so products work for people of all abilities.",
  },
];
