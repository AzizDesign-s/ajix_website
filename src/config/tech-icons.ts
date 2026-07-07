// Maps a technology name (as it appears in Project.technologies) to its
// Simple Icons slug. Anything not listed here falls back to a text badge
// in TechStackRow - same pattern as the Illustrator/Photoshop/XD fallback
// in the homepage Tools Marquee (Phase 11/12).

import {
  Zap,
  Smartphone,
  Wallet,
  RefreshCw,
  Layers,
  MousePointerClick,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

export const featureIconMap: Record<string, LucideIcon> = {
  zap: Zap,
  smartphone: Smartphone,
  wallet: Wallet,
  "refresh-cw": RefreshCw,
  layers: Layers,
  "mouse-pointer-click": MousePointerClick,
  sparkles: Sparkles,
};

export const techIconSlugs: Record<string, string> = {
  React: "react",
  "React 18": "react",
  "React 19": "react",
  "Next.js": "nextdotjs",
  Vite: "vite",
  TypeScript: "typescript",
  JavaScript: "javascript",
  "Tailwind CSS": "tailwindcss",
  "Framer Motion": "framer",
  Framer: "framer",
  Figma: "figma",
  FigJam: "figma",
};
