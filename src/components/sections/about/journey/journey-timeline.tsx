"use client";

import { motion } from "framer-motion";
import type { JourneyMilestone } from "@/types/about";

const LINE_DURATION = 1.6;

export function JourneyTimeline({
  milestones,
}: {
  milestones: JourneyMilestone[];
}) {
  const count = milestones.length;

  return (
    <div className="hidden lg:block">
      {/* Line + dots track */}
      <div className="relative h-3">
        <div className="bg-border/40 absolute top-1/2 right-0 left-0 h-px -translate-y-1/2" />

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: LINE_DURATION, ease: [0.65, 0, 0.35, 1] }}
          style={{ transformOrigin: "left" }}
          className="gradient-brand absolute top-1/2 right-0 left-0 h-px -translate-y-1/2 shadow-[0_0_10px_1px_var(--color-brand-blue)]"
        />

        <div className="absolute inset-0 flex items-center justify-between">
          {milestones.map((_, index) => (
            <motion.span
              key={index}
              initial={{ scale: 0.7, backgroundColor: "#475569" }}
              whileInView={{
                scale: [0.7, 1.35, 1],
                backgroundColor: "#2563EB",
              }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.5,
                delay: (index / (count - 1)) * LINE_DURATION,
                ease: "easeOut",
              }}
              className="h-3 w-3 rounded-full shadow-[0_0_14px_2px_var(--color-brand-blue)]"
            />
          ))}
        </div>
      </div>

      {/* Milestone content beneath each dot */}
      <div
        className="mt-8 grid gap-6"
        style={{ gridTemplateColumns: `repeat(${count}, minmax(0, 1fr))` }}
      >
        {milestones.map((milestone, index) => (
          <motion.div
            key={milestone.year}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.5,
              delay: (index / (count - 1)) * LINE_DURATION + 0.2,
              ease: "easeOut",
            }}
          >
            <span className="gradient-brand-text font-display text-sm font-bold">
              {milestone.year}
            </span>
            <h3 className="font-display text-foreground mt-2 text-base font-semibold">
              {milestone.title}
            </h3>
            <p className="text-foreground/60 mt-1 text-sm leading-relaxed">
              {milestone.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
