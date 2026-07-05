"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";
import type { Service } from "@/config/services";

export function ServiceCard({
  service,
  index,
}: {
  service: Service;
  index: number;
}) {
  const Icon = service.icon;
  const cardRef = useRef<HTMLDivElement>(null);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    cardRef.current?.style.setProperty(
      "--spot-x",
      `${e.clientX - rect.left}px`
    );
    cardRef.current?.style.setProperty("--spot-y", `${e.clientY - rect.top}px`);
  }

  return (
    <motion.div variants={fadeUp} className="h-full">
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        className="border-border/60 group bg-card/40 relative flex h-full flex-col overflow-hidden rounded-2xl p-8 shadow-lg backdrop-blur-xl transition-transform duration-300 hover:-translate-y-1"
      >
        <div
          aria-hidden="true"
          className="absolute -top-1/3 -left-1/3 h-2/3 w-2/3 rotate-12 rounded-full bg-white/10 blur-3xl transition-transform duration-700 group-hover:translate-x-4 group-hover:translate-y-2"
        />
        {/* Cursor-tracked spotlight */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(240px circle at var(--spot-x, 50%) var(--spot-y, 50%), color-mix(in srgb, var(--color-brand-blue) 18%, transparent), transparent 70%)",
          }}
        />

        {/* Ghost index number */}
        <span
          aria-hidden="true"
          className="font-display text-foreground/5 absolute -top-4 right-4 text-8xl font-bold select-none"
        >
          0{index + 1}
        </span>

        {/* Top edge highlight */}
        <div
          aria-hidden="true"
          className="absolute inset-x-6 top-0 h-px bg-linear-to-r from-transparent via-white/20 to-transparent"
        />

        <div className="relative z-10 flex h-full flex-col">
          <div className="gradient-brand mb-6 flex h-14 w-14 items-center justify-center rounded-2xl shadow-[0_8px_24px_-8px_var(--color-brand-blue)] transition-shadow duration-300 group-hover:shadow-[0_10px_32px_-6px_var(--color-brand-blue)]">
            <Icon size={24} className="text-white" />
          </div>

          <h3 className="font-display text-foreground text-lg font-semibold">
            {service.title}
          </h3>
          <p className="text-foreground/70 mt-2 text-sm leading-relaxed">
            {service.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
