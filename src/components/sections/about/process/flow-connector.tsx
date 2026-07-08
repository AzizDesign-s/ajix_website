"use client";

import { motion } from "framer-motion";

export function FlowConnector({ delay = 0 }: { delay?: number }) {
  return (
    <div
      className="relative hidden h-px flex-1 items-center self-center lg:flex"
      aria-hidden="true"
    >
      <div className="bg-border/50 h-px w-full" />
      <motion.span
        animate={{ left: ["0%", "100%"] }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
          repeatDelay: 1.2,
          delay,
          ease: "easeInOut",
        }}
        className="gradient-brand absolute h-1.5 w-1.5 -translate-y-1/2 rounded-full shadow-[0_0_8px_2px_var(--color-brand-blue)]"
        style={{ top: "50%" }}
      />
    </div>
  );
}
