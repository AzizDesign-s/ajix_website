"use client";

import { motion } from "framer-motion";
import { CornerLeftUp } from "lucide-react";

export function ProcessLoopIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: 0.8 }}
      className="text-muted-foreground mt-6 flex items-center justify-center gap-2 text-xs font-medium tracking-wide uppercase"
    >
      <CornerLeftUp size={14} className="text-accent" />
      Iterate feeds back into Research — the cycle continues
    </motion.div>
  );
}
