"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { RotateCw } from "lucide-react";
import { featureIconMap } from "@/config/feature-icons";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import type { PhilosophyPrinciple } from "@/types/about";

export function PhilosophyCard({
  principle,
}: {
  principle: PhilosophyPrinciple;
}) {
  const [flipped, setFlipped] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const Icon = featureIconMap[principle.icon];

  return (
    <button
      type="button"
      onClick={() => setFlipped((current) => !current)}
      aria-pressed={flipped}
      aria-label={`${principle.title}. ${flipped ? "Showing description. Press to flip back." : "Press to reveal description."}`}
      className="focus-visible:ring-ring relative h-56 w-full rounded-2xl text-left focus-visible:ring-2 focus-visible:outline-none"
      style={{ perspective: 1200 }}
    >
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={
          prefersReducedMotion
            ? { duration: 0 }
            : { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
        }
        className="relative h-full w-full"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* FRONT */}
        <div
          className="glow-border border-border/40 bg-surface/50 absolute inset-0 flex flex-col items-start justify-between rounded-2xl border p-6 backdrop-blur-xl"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="gradient-brand flex h-12 w-12 items-center justify-center rounded-xl">
            {Icon && <Icon size={22} className="text-white" />}
          </div>
          <div>
            <h3 className="font-display text-foreground text-lg font-semibold">
              {principle.title}
            </h3>
            <span className="text-muted-foreground mt-2 flex items-center gap-1.5 text-xs">
              <RotateCw size={12} />
              Tap to read more
            </span>
          </div>
        </div>

        {/* BACK */}
        <div
          className="corner-brackets border-border/40 bg-card absolute inset-0 flex flex-col justify-center rounded-2xl border p-6"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <h3 className="font-display text-accent text-sm font-semibold tracking-wide uppercase">
            {principle.title}
          </h3>
          <p className="text-foreground/75 mt-3 text-sm leading-relaxed">
            {principle.description}
          </p>
        </div>
      </motion.div>
    </button>
  );
}
