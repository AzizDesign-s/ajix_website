"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { CaseStudyJourneyStage } from "@/types/project";

const LINE_DURATION = 1.2;

export function JourneyMap({ stages }: { stages: CaseStudyJourneyStage[] }) {
  const count = stages.length;

  return (
    <div>
      <div className="relative hidden h-3 lg:block">
        <div className="bg-border/40 absolute top-1/2 right-0 left-0 h-px -translate-y-1/2" />
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: LINE_DURATION, ease: [0.65, 0, 0.35, 1] }}
          style={{ transformOrigin: "left" }}
          className="gradient-brand absolute top-1/2 right-0 left-0 h-px -translate-y-1/2"
        />
        <div className="absolute inset-0 flex items-center justify-between">
          {stages.map((_, index) => (
            <motion.span
              key={index}
              initial={{ scale: 0.7, backgroundColor: "#475569" }}
              whileInView={{ scale: [0.7, 1.3, 1], backgroundColor: "#2563EB" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.4,
                delay: (index / Math.max(count - 1, 1)) * LINE_DURATION,
                ease: "easeOut",
              }}
              className="h-3 w-3 rounded-full shadow-[0_0_12px_2px_var(--color-brand-blue)]"
            />
          ))}
        </div>
      </div>

      <div
        className={cn(
          "mt-6 grid gap-6 lg:mt-8",
          count === 1 && "grid-cols-1",
          count === 2 && "grid-cols-1 md:grid-cols-2",
          count === 3 && "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
          count === 4 && "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
        )}
      >
        {stages.map((stage, index) => (
          <motion.div
            key={stage.stage}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.5,
              delay: (index / Math.max(count - 1, 1)) * LINE_DURATION + 0.15,
              ease: "easeOut",
            }}
          >
            <span className="bg-accent/15 text-accent inline-flex h-6 w-6 items-center justify-center rounded-full text-xs font-semibold">
              {index + 1}
            </span>
            <h4 className="font-display text-foreground mt-2 text-sm font-semibold">
              {stage.stage}
            </h4>
            <p className="text-foreground/60 mt-1 text-sm">
              {stage.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
