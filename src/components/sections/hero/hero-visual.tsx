"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function HeroVisual() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const ring1Rotate = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const ring2Rotate = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const orbScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.85, 1.1, 0.9]);
  const orbOpacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0.5, 1, 1, 0.4]
  );
  const chipLeftY = useTransform(scrollYProgress, [0, 1], [10, -60]);
  const chipRightY = useTransform(scrollYProgress, [0, 1], [-10, 50]);

  return (
    <div
      ref={containerRef}
      className="relative flex h-120 w-full max-w-2xl items-center justify-center"
    >
      {/* Outer glow */}
      <motion.div
        style={{ scale: orbScale, opacity: orbOpacity }}
        aria-hidden="true"
        className="gradient-brand absolute h-70 w-70 rounded-full opacity-35 blur-[70px]"
      />

      {/* Rotating ring - outer */}
      <motion.div
        style={{ rotate: ring1Rotate }}
        aria-hidden="true"
        className="border-accent/25 absolute h-100 w-100 rounded-full border"
      >
        <span className="bg-accent absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full shadow-[0_0_12px_2px_var(--color-brand-cyan)]" />
      </motion.div>

      {/* Rotating ring - inner, opposite direction */}
      <motion.div
        style={{ rotate: ring2Rotate }}
        aria-hidden="true"
        className="border-primary/30 absolute h-80 w-80 rounded-full border border-dashed"
      >
        <span className="bg-primary absolute top-1/2 -right-1 h-1.5 w-1.5 -translate-y-1/2 rounded-full shadow-[0_0_10px_2px_var(--color-brand-blue)]" />
      </motion.div>

      {/* Glass orb core */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        style={{ animation: "float-idle 6s ease-in-out infinite" }}
        className="relative flex h-40 w-40 items-center justify-center rounded-full border border-white/10 bg-[radial-gradient(circle_at_35%_30%,var(--color-brand-blue-light),var(--color-brand-blue)_45%,var(--color-brand-indigo)_75%,transparent_100%)] shadow-2xl backdrop-blur-sm"
      >
        <div className="absolute inset-2 rounded-full bg-[conic-gradient(from_0deg,transparent,var(--color-brand-cyan),transparent_60%)] opacity-40 blur-md" />
        <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-white/95 p-3 shadow-lg">
          <Image
            src="/ajix-icon-light.svg"
            alt="AJIX logo mark"
            width={64}
            height={40}
            className="h-auto w-full"
            priority
          />
        </div>
      </motion.div>

      {/* Left metric chip - connected to orb */}
      <motion.div
        style={{ y: chipLeftY }}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.6 }}
        className="absolute top-1/2 left-0 hidden -translate-y-1/2 items-center gap-0 md:flex lg:left-6"
      >
        <div className="border-border/60 bg-card/90 rounded-xl border px-4 py-3 shadow-lg backdrop-blur-md">
          <p className="font-display gradient-brand-text text-xl font-semibold">
            4+
          </p>
          <p className="text-muted-foreground text-xs">Years Experience</p>
        </div>
        <div className="from-border h-px w-16 bg-linear-to-r to-transparent lg:w-24" />
      </motion.div>

      {/* Right metric chip - connected to orb */}
      <motion.div
        style={{ y: chipRightY }}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.75 }}
        className="absolute top-1/2 right-0 hidden -translate-y-1/2 items-center gap-0 md:flex lg:right-6"
      >
        <div className="from-border h-px w-16 bg-linear-to-l to-transparent lg:w-24" />
        <div className="border-border/60 bg-card/90 rounded-xl border px-4 py-3 shadow-lg backdrop-blur-md">
          <p className="font-display gradient-brand-text text-xl font-semibold">
            10+
          </p>
          <p className="text-muted-foreground text-xs">Projects Shipped</p>
        </div>
      </motion.div>
    </div>
  );
}
