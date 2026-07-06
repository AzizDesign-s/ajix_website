"use client";

import { motion } from "framer-motion";

export function WorkHeroBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <motion.div
        animate={{
          x: [0, 60, -40, 0],
          y: [0, -50, 30, 0],
          scale: [1, 1.15, 0.95, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-24 left-[5%] h-105 w-105 rounded-full blur-[110px]"
        style={{ background: "var(--color-brand-cyan)", opacity: 0.18 }}
      />
      <motion.div
        animate={{
          x: [0, -70, 50, 0],
          y: [0, 40, -30, 0],
          scale: [1, 0.9, 1.2, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5,
        }}
        className="absolute top-10 right-[8%] h-95 w-95 rounded-full blur-[110px]"
        style={{ background: "var(--color-brand-indigo)", opacity: 0.16 }}
      />
      <motion.div
        animate={{
          x: [0, 40, -60, 0],
          y: [0, 60, -20, 0],
          scale: [1, 1.1, 0.9, 1],
        }}
        transition={{
          duration: 26,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
        className="absolute bottom-[-10%] left-[30%] h-112.5 w-112.5 rounded-full blur-[120px]"
        style={{ background: "var(--color-brand-blue)", opacity: 0.14 }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, transparent 40%, var(--color-background) 100%)",
        }}
      />
    </div>
  );
}
