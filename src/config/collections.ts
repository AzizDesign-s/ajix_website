export interface Collection {
  slug: string;
  title: string;
  description: string;
  gradient: string;
  image: string;
}

export const collections: Collection[] = [
  {
    slug: "enterprise-product-design",
    title: "Enterprise Product Design",
    description: "Full UX case studies for complex, data-heavy platforms.",
    gradient: "from-brand-blue/40 via-brand-indigo/20 to-transparent",
    image: "https://picsum.photos/seed/ajix-enterprise/800/1000",
  },
  {
    slug: "frontend-engineering",
    title: "Frontend Engineering",
    description: "React builds, from design system to production deploy.",
    gradient: "from-brand-cyan/40 via-brand-blue/20 to-transparent",
    image: "https://picsum.photos/seed/ajix-frontend/800/1000",
  },
  {
    slug: "interactive-experiences",
    title: "Interactive Experiences",
    description: "Motion-driven interfaces, Framer & GSAP prototypes.",
    gradient: "from-brand-indigo/40 via-brand-blue-light/20 to-transparent",
    image: "https://picsum.photos/seed/ajix-interactive/800/1000",
  },
  {
    slug: "brand-identity",
    title: "Brand Identity",
    description: "Logos, typography systems, and full brand languages.",
    gradient: "from-brand-blue-light/40 via-brand-cyan/20 to-transparent",
    image: "https://picsum.photos/seed/ajix-brand/800/1000",
  },
];
