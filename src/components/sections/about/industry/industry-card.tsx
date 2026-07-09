"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { featureIconMap } from "@/config/feature-icons";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import type { Industry } from "@/types/about";

export function IndustryCard({ industry }: { industry: Industry }) {
  const Icon = featureIconMap[industry.icon];
  const prefersReducedMotion = useReducedMotion();
  const cardRef = useRef<HTMLDivElement>(null);

  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);
  const springX = useSpring(tiltX, { stiffness: 220, damping: 20 });
  const springY = useSpring(tiltY, { stiffness: 220, damping: 20 });

  // Icon and glow shift slightly opposite the tilt, deepening the 3D illusion
  const iconX = useTransform(springY, [-8, 8], [-4, 4]);
  const iconY = useTransform(springX, [-8, 8], [4, -4]);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (prefersReducedMotion) return;
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;

    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;

    tiltX.set(py * -16);
    tiltY.set(px * 16);
  }

  function handleMouseLeave() {
    tiltX.set(0);
    tiltY.set(0);
  }

  return (
    <div style={{ perspective: 800 }}>
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX: prefersReducedMotion ? 0 : springX,
          rotateY: prefersReducedMotion ? 0 : springY,
          transformStyle: "preserve-3d",
        }}
        whileHover={{ scale: 1.04 }}
        transition={{ scale: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } }}
        className="border-border/40 bg-surface/40 relative flex flex-col items-center gap-3 rounded-2xl border px-5 py-7 text-center shadow-md transition-shadow duration-300 hover:shadow-xl"
      >
        <motion.div
          style={{ x: iconX, y: iconY }}
          className="gradient-brand flex h-12 w-12 items-center justify-center rounded-xl"
        >
          {Icon && <Icon size={20} className="text-white" />}
        </motion.div>
        <span className="text-foreground text-sm font-medium">
          {industry.name}
        </span>
      </motion.div>
    </div>
  );
}
