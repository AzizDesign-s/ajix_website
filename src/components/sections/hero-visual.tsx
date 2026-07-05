"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useMouseParallax } from "@/hooks/use-mouse-parallax";

export function HeroVisual() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { x, y } = useMouseParallax(16);

  // Scroll-linked parallax: tracks scroll progress as this element
  // moves through the viewport (not the whole page)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const orbScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.85, 1.1, 0.9]);
  const orbOpacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0.4, 1, 1, 0.3]
  );
  const cardBackY = useTransform(scrollYProgress, [0, 1], [40, -120]);
  const cardMidY = useTransform(scrollYProgress, [0, 1], [20, -70]);
  const cardFrontY = useTransform(scrollYProgress, [0, 1], [0, -30]);

  return (
    <div
      ref={containerRef}
      className="relative flex h-[520px] w-full max-w-3xl items-center justify-center"
      style={{ perspective: 1200 }}
    >
      {/* Glowing orb - reacts to scroll */}
      <motion.div
        style={{ scale: orbScale, opacity: orbOpacity }}
        className="absolute h-[380px] w-[380px] rounded-full blur-[90px]"
      >
        <div className="gradient-brand h-full w-full rounded-full opacity-60" />
      </motion.div>

      {/* Back card */}
      <motion.div
        style={{ x, y: cardBackY, rotateZ: -6 }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="border-border/60 bg-surface/80 absolute top-8 left-6 h-56 w-64 rounded-2xl border shadow-lg backdrop-blur-md md:left-16"
      />

      {/* Mid card */}
      <motion.div
        style={{ x, y: cardMidY, rotateZ: 5 }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="border-border/60 bg-card/90 absolute top-4 right-6 h-56 w-64 rounded-2xl border shadow-lg backdrop-blur-md md:right-16"
      >
        <div className="flex h-full flex-col gap-3 p-5">
          <div className="bg-primary/60 h-2 w-16 rounded-full" />
          <div className="bg-muted h-2 w-24 rounded-full" />
          <div className="gradient-brand mt-2 h-20 rounded-lg opacity-20" />
          <div className="bg-muted h-2 w-full rounded-full" />
        </div>
      </motion.div>

      {/* Front card */}
      <motion.div
        style={{ x, y: cardFrontY }}
        initial={{ opacity: 0, y: 40, scale: 0.9 }}
        animate={{
          opacity: 1,
          scale: 1,
          transition: { duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] },
        }}
        className="border-border/60 bg-card relative z-10 h-60 w-72 rounded-2xl border shadow-2xl backdrop-blur-md"
      >
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="flex h-full flex-col justify-between p-6"
        >
          <div className="flex items-center justify-between">
            <div className="bg-accent h-2 w-14 rounded-full" />
            <div className="gradient-brand h-7 w-7 rounded-full opacity-80" />
          </div>
          <div className="gradient-brand h-20 rounded-lg opacity-25" />
          <div className="flex gap-2">
            <div className="gradient-brand h-7 flex-1 rounded-md" />
            <div className="bg-muted h-7 w-7 rounded-md" />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
