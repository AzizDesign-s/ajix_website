"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { fadeUp } from "@/lib/motion";
import type { Project, Breakout } from "@/types/project";
import { getCategoryBySlug } from "@/lib/services/category-service";
import { cn } from "@/lib/utils";

const categoryStyles: Record<
  Project["category"],
  { dot: string; bracket: string }
> = {
  "ui-ux": { dot: "bg-brand-blue", bracket: "var(--color-brand-blue)" },
  react: { dot: "bg-brand-cyan", bracket: "var(--color-brand-cyan)" },
  framer: { dot: "bg-brand-indigo", bracket: "var(--color-brand-indigo)" },
  branding: {
    dot: "bg-brand-blue-light",
    bracket: "var(--color-brand-blue-light)",
  },
};

const breakoutPosition: Record<Breakout, string> = {
  "top-right": "-top-6 -right-3 sm:-right-6 rotate-6",
  "top-left": "-top-6 -left-3 sm:-left-6 -rotate-6",
  "bottom-right": "-bottom-6 -right-3 sm:-right-6 -rotate-6",
  "bottom-left": "-bottom-6 -left-3 sm:-left-6 rotate-6",
  center: "top-40 left-1/2 -translate-x-1/2 -translate-y-1/2",
};

export function ProjectCard({ project }: { project: Project }) {
  const { dot, bracket } = categoryStyles[project.category];
  const categoryLabel =
    getCategoryBySlug(project.category)?.name ?? project.category;
  const textAtTop = project.breakout.startsWith("bottom");

  return (
    <motion.div
      variants={fadeUp}
      className={cn("relative h-full min-h-60 overflow-hidden", project.span)}
      style={{ "--bracket-color": bracket } as React.CSSProperties}
    >
      <Link
        href={`/work/${project.slug}`}
        className="focus-visible:ring-ring group relative block h-full rounded-2xl focus-visible:ring-2 focus-visible:outline-none"
        aria-label={`View ${project.title} case study`}
      >
        {/* Clipped panel: background, border, brackets, text */}
        <div className="corner-brackets border-border/40 bg-card/40 relative flex h-full flex-col overflow-hidden rounded-2xl border p-4 backdrop-blur-xl transition-colors duration-300">
          {/* Liquid glass sheen */}
          <div
            aria-hidden="true"
            className="absolute -top-1/3 -left-1/3 h-2/3 w-2/3 rotate-12 rounded-full bg-white/10 blur-3xl transition-transform duration-700 group-hover:translate-x-4 group-hover:translate-y-2"
          />

          {/* Top edge highlight */}
          <div
            aria-hidden="true"
            className="absolute inset-x-4 top-0 h-px bg-linear-to-r from-transparent via-white/40 to-transparent"
          />

          <div className="relative z-10 flex items-center justify-between">
            <span className="border-border/50 bg-background/50 text-foreground/80 flex items-center gap-1.5 rounded-full border px-3 py-1 text-[11px] font-medium backdrop-blur-sm">
              <span className={cn("h-1.5 w-1.5 rounded-full", dot)} />
              {categoryLabel}
            </span>
            <div className="border-border/50 bg-background/50 text-foreground flex h-8 w-8 items-center justify-center rounded-full border opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
              <ArrowUpRight size={16} />
            </div>
          </div>

          <div
            className={cn(
              "relative z-10 max-w-[65%]",
              textAtTop ? "mt-4" : "mt-auto"
            )}
          >
            <h3 className="font-display text-foreground text-lg font-semibold md:text-xl">
              {project.title}
            </h3>
            <p className="text-foreground/60 mt-1 line-clamp-2 text-sm leading-relaxed">
              {project.description}
            </p>
            <span className="text-muted-foreground mt-2 inline-block text-xs font-medium tracking-wide uppercase">
              {project.tool}
            </span>
          </div>
        </div>

        {/* Image - sibling of the clipped panel, free to overflow past the card edge */}
        <motion.div
          aria-hidden="true"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className={cn(
            "pointer-events-none absolute z-20 transition-transform duration-500 ease-out group-hover:scale-105",
            breakoutPosition[project.breakout],
            project.imageWidth
          )}
          style={{ filter: "drop-shadow(0 18px 32px rgba(0,0,0,0.45))" }}
        >
          <Image
            src={project.image}
            alt={project.title}
            width={480}
            height={360}
            className="h-auto w-full object-contain"
          />
        </motion.div>
      </Link>
    </motion.div>
  );
}
