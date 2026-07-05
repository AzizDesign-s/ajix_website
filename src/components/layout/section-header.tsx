"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  const isCenter = align === "center";

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className={cn(
        "flex max-w-2xl flex-col gap-4",
        isCenter && "mx-auto items-center text-center",
        className
      )}
    >
      {eyebrow && (
        <div className="flex items-center gap-3">
          {isCenter && (
            <motion.span
              variants={{
                hidden: { scaleX: 0 },
                visible: {
                  scaleX: 1,
                  transition: { duration: 0.5, ease: [0.65, 0, 0.35, 1] },
                },
              }}
              style={{ transformOrigin: "right" }}
              className="gradient-brand h-px w-8"
            />
          )}

          {!isCenter && (
            <motion.span
              variants={{
                hidden: { scaleX: 0 },
                visible: {
                  scaleX: 1,
                  transition: { duration: 0.5, ease: [0.65, 0, 0.35, 1] },
                },
              }}
              style={{ transformOrigin: "right" }}
              className="gradient-brand h-px w-8"
            />
          )}

          <motion.span
            variants={{
              hidden: { color: "var(--muted-foreground)" },
              visible: {
                color: "var(--accent)",
                transition: { delay: 0.5, duration: 0.4, ease: "easeOut" },
              },
            }}
            className="text-xs font-semibold tracking-widest uppercase"
          >
            {eyebrow}
          </motion.span>

          {isCenter && (
            <motion.span
              variants={{
                hidden: { scaleX: 0 },
                visible: {
                  scaleX: 1,
                  transition: { duration: 0.5, ease: [0.65, 0, 0.35, 1] },
                },
              }}
              style={{ transformOrigin: "left" }}
              className="gradient-brand h-px w-8"
            />
          )}
        </div>
      )}

      <h2 className="font-display text-foreground text-3xl font-semibold tracking-tight md:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="text-foreground/70 text-base leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
}
