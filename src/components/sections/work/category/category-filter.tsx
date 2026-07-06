"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { Category, ProjectCategorySlug } from "@/types/project";

export function CategoryFilter({ categories }: { categories: Category[] }) {
  const [active, setActive] = useState<ProjectCategorySlug>(
    categories[0]?.slug
  );
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  // Scroll-spy: highlight whichever category section is currently in view
  useEffect(() => {
    const sections = categories
      .map((category) => document.getElementById(`category-${category.slug}`))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        const mostVisible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (mostVisible) {
          const slug = mostVisible.target.id.replace(
            "category-",
            ""
          ) as ProjectCategorySlug;
          setActive(slug);
        }
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [categories]);

  // Move the sliding indicator to sit behind whichever button is active
  useEffect(() => {
    const button = buttonRefs.current[active];
    const container = containerRef.current;
    if (!button || !container) return;

    const buttonRect = button.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();
    setIndicator({
      left: buttonRect.left - containerRect.left,
      width: buttonRect.width,
    });
  }, [active]);

  function handleClick(slug: ProjectCategorySlug) {
    setActive(slug);
    document.getElementById(`category-${slug}`)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  return (
    <div className="sticky top-20 z-30 flex justify-center px-4 py-3">
      <div
        ref={containerRef}
        className="border-border/50 bg-surface/70 relative flex items-center gap-1 rounded-full border p-1.5 shadow-lg backdrop-blur-xl"
      >
        <motion.div
          animate={{ left: indicator.left, width: indicator.width }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="gradient-brand absolute top-1.5 bottom-1.5 rounded-full"
        />
        {categories.map((category) => (
          <button
            key={category.slug}
            ref={(el) => {
              buttonRefs.current[category.slug] = el;
            }}
            onClick={() => handleClick(category.slug)}
            className={cn(
              "relative z-10 rounded-full px-2 py-2 text-[12px] font-medium transition-colors duration-300 sm:px-5 sm:text-sm",
              active === category.slug
                ? "text-white"
                : "text-foreground/70 hover:text-foreground"
            )}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
}
