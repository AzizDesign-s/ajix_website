import type { LucideIcon } from "lucide-react";
import {
  Microscope,
  Building2,
  Accessibility,
  Boxes,
  Code2,
  TrendingUp,
} from "lucide-react";

export interface Principle {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const principles: Principle[] = [
  {
    icon: Microscope,
    title: "Research First",
    description:
      "Every decision traces back to real user data, not assumptions.",
  },
  {
    icon: Building2,
    title: "Enterprise Thinking",
    description:
      "Designed for scale, complexity, and long-term maintainability.",
  },
  {
    icon: Accessibility,
    title: "Accessibility",
    description: "WCAG-compliant by default, not bolted on at the end.",
  },
  {
    icon: Boxes,
    title: "Design Systems",
    description:
      "Reusable, token-based foundations that keep products consistent.",
  },
  {
    icon: Code2,
    title: "Developer Friendly",
    description:
      "Design handoffs that engineers can actually build without guesswork.",
  },
  {
    icon: TrendingUp,
    title: "Business Impact",
    description: "Measured against real outcomes, not just visual polish.",
  },
];
