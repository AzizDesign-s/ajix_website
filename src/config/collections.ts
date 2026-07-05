export interface Collection {
  slug: string;
  title: string;
  description: string;
  gradient: string;
}

export const collections: Collection[] = [
  {
    slug: "enterprise-product-design",
    title: "Enterprise Product Design",
    description: "Full UX case studies for complex, data-heavy platforms.",
    gradient: "from-brand-blue/30 via-brand-indigo/20 to-transparent",
  },
  {
    slug: "frontend-engineering",
    title: "Frontend Engineering",
    description: "React builds, from design system to production deploy.",
    gradient: "from-brand-cyan/30 via-brand-blue/20 to-transparent",
  },
  {
    slug: "interactive-experiences",
    title: "Interactive Experiences",
    description: "Motion-driven interfaces, Framer & GSAP prototypes.",
    gradient: "from-brand-indigo/30 via-brand-blue-light/20 to-transparent",
  },
  {
    slug: "brand-identity",
    title: "Brand Identity",
    description: "Logos, typography systems, and full brand languages.",
    gradient: "from-brand-blue-light/30 via-brand-cyan/20 to-transparent",
  },
];
