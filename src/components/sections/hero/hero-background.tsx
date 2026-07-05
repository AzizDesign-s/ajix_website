"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { HeroDotGrid } from "@/components/sections/hero/hero-dot-grid";

export function HeroBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spring smooths raw cursor position into a lagging, glow-like drift
  const springX = useSpring(mouseX, { stiffness: 40, damping: 20, mass: 0.6 });
  const springY = useSpring(mouseY, { stiffness: 40, damping: 20, mass: 0.6 });

  useEffect(() => {
    function handleMove(e: MouseEvent) {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    }

    // Center the spotlight initially so it doesn't jump in from (0,0)
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      mouseX.set(rect.width / 2);
      mouseY.set(rect.height / 2);
    }

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [mouseX, mouseY]);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {/* Fine dot-grid texture */}
      <HeroDotGrid />

      {/* Aurora blob - top left, slow ambient drift */}
      <motion.div
        animate={{ x: [0, 40, -20, 0], y: [0, -20, 20, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-32 -left-32 h-125 w-125 rounded-full blur-[130px]"
        style={{ background: "var(--color-brand-cyan)", opacity: 0.15 }}
      />

      {/* Aurora blob - top right, slow ambient drift */}
      <motion.div
        animate={{ x: [0, -30, 30, 0], y: [0, 30, -10, 0] }}
        transition={{
          duration: 26,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute -top-20 -right-32 h-137.5 w-137.5 rounded-full blur-[140px]"
        style={{ background: "var(--color-brand-indigo)", opacity: 0.15 }}
      />

      {/* Mouse-reactive spotlight */}
      <motion.div
        style={{
          left: springX,
          top: springY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        className="absolute h-137.5 w-137.5 rounded-full blur-[110px]"
      >
        <div className="gradient-brand h-full w-full rounded-full opacity-[0.12]" />
      </motion.div>

      {/* Center ambient glow behind headline */}
      <div className="gradient-brand absolute top-0 left-1/2 h-125 w-200 -translate-x-1/2 rounded-full opacity-[0.06] blur-[150px]" />

      {/* Vignette to focus attention center */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 35%, transparent 50%, var(--color-background) 100%)",
        }}
      />
    </div>
  );
}
