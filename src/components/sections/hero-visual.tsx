"use client";

import { motion } from "framer-motion";
import { useMouseParallax } from "@/hooks/use-mouse-parallax";

export function HeroVisual() {
  const { x, y } = useMouseParallax(24);

  return (
    <div
      className="relative h-[420px] w-full max-w-md"
      style={{ perspective: 1200 }}
    >
      {/* Back card */}
      <motion.div
        style={{ x, y, rotateZ: -8 }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="border-border bg-surface absolute top-10 left-4 h-64 w-72 rounded-2xl border shadow-lg"
      />

      {/* Middle card */}
      <motion.div
        style={{ x, y, rotateZ: 4 }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="border-border bg-card absolute top-4 right-2 h-64 w-72 rounded-2xl border shadow-lg"
      >
        <div className="flex h-full flex-col gap-3 p-5">
          <div className="bg-primary/60 h-2 w-16 rounded-full" />
          <div className="bg-muted h-2 w-24 rounded-full" />
          <div className="from-primary/20 to-accent/20 mt-2 h-20 rounded-lg bg-gradient-to-br" />
          <div className="bg-muted h-2 w-full rounded-full" />
          <div className="bg-muted h-2 w-3/4 rounded-full" />
        </div>
      </motion.div>

      {/* Front card */}
      <motion.div
        style={{ x, y }}
        initial={{ opacity: 0, y: 40, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="border-border bg-card absolute top-24 left-1/2 h-52 w-64 -translate-x-1/2 rounded-2xl border shadow-xl"
      >
        <div className="flex h-full flex-col justify-between p-5">
          <div className="flex items-center justify-between">
            <div className="bg-accent h-2 w-12 rounded-full" />
            <div className="bg-primary/30 h-6 w-6 rounded-full" />
          </div>
          <div className="from-accent/30 via-primary/20 to-secondary/20 h-16 rounded-lg bg-gradient-to-br" />
          <div className="flex gap-2">
            <div className="bg-primary h-6 flex-1 rounded-md" />
            <div className="bg-muted h-6 w-6 rounded-md" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
