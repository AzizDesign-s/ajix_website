"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";
import type { JourneyMilestone } from "@/types/about";

export function JourneyMilestoneRow({
  milestone,
}: {
  milestone: JourneyMilestone;
}) {
  return (
    <motion.div
      variants={fadeUp}
      className="border-border/40 flex items-start gap-4 border-b py-6 last:border-b-0"
    >
      <div className="border-border/60 bg-surface/60 flex h-11 w-16 shrink-0 items-center justify-center rounded-xl border">
        <span className="gradient-brand-text font-display text-sm font-bold">
          {milestone.year}
        </span>
      </div>
      <div>
        <h3 className="font-display text-foreground text-base font-semibold">
          {milestone.title}
        </h3>
        <p className="text-foreground/60 mt-1 text-sm leading-relaxed">
          {milestone.description}
        </p>
      </div>
    </motion.div>
  );
}
