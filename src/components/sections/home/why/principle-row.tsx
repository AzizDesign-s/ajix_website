"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";
import type { Principle } from "@/config/principle";

export function PrincipleRow({ principle }: { principle: Principle }) {
  const Icon = principle.icon;

  return (
    <motion.div
      variants={fadeUp}
      className="group border-border/40 flex items-start gap-4 border-b py-6 transition-colors duration-300 last:border-b-0"
    >
      <div className="border-border/60 bg-surface/60 text-accent group-hover:border-accent/50 group-hover:text-accent flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border transition-colors duration-300">
        <Icon size={18} />
      </div>
      <div>
        <h3 className="font-display text-foreground text-base font-semibold">
          {principle.title}
        </h3>
        <p className="text-foreground/60 mt-1 text-sm leading-relaxed">
          {principle.description}
        </p>
      </div>
    </motion.div>
  );
}
