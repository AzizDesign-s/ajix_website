"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { Skill } from "@/types/about";

type FilterValue = Skill["category"] | "All";

interface SkillFilterTabsProps {
  categories: Skill["category"][];
  active: FilterValue;
  onChange: (value: FilterValue) => void;
}

export function SkillFilterTabs({
  categories,
  active,
  onChange,
}: SkillFilterTabsProps) {
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const options: FilterValue[] = ["All", ...categories];

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

  return (
    <div
      ref={containerRef}
      className="border-border/50 bg-surface/60 relative flex flex-wrap items-center gap-1 rounded-full border p-1.5 backdrop-blur-xl"
    >
      <motion.div
        animate={{ left: indicator.left, width: indicator.width }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="gradient-brand absolute top-1.5 bottom-1.5 rounded-full"
      />
      {options.map((option) => (
        <button
          key={option}
          ref={(el) => {
            buttonRefs.current[option] = el;
          }}
          onClick={() => onChange(option)}
          className={cn(
            "relative z-10 rounded-full px-4 py-2 text-xs font-medium whitespace-nowrap transition-colors duration-300 sm:text-sm",
            active === option
              ? "text-white"
              : "text-foreground/70 hover:text-foreground"
          )}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
