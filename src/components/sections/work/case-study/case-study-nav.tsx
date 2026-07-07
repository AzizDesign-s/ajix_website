"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface NavItem {
  id: string;
  label: string;
}

export function CaseStudyNav({ items }: { items: NavItem[] }) {
  const [active, setActive] = useState(items[0]?.id);

  useEffect(() => {
    const sections = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        const mostVisible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (mostVisible) setActive(mostVisible.target.id);
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [items]);

  return (
    <nav
      aria-label="Case study sections"
      className="sticky top-32 hidden max-h-[calc(100vh-10rem)] w-48 shrink-0 flex-col gap-1 overflow-y-auto lg:flex"
    >
      {items.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          className={cn(
            "border-l-2 py-1.5 pl-4 text-sm transition-colors duration-200",
            active === item.id
              ? "border-accent text-foreground font-medium"
              : "border-border/40 text-foreground/50 hover:text-foreground/80"
          )}
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}
