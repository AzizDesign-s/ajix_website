"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Collection } from "@/config/collections";
import { cn } from "@/lib/utils";

interface CollectionCardProps {
  collection: Collection;
  index: number;
  hoveredIndex: number | null;
  onHover: (index: number | null) => void;
}

export function CollectionCard({
  collection,
  index,
  hoveredIndex,
  onHover,
}: CollectionCardProps) {
  const isHovered = hoveredIndex === index;
  const isDimmed = hoveredIndex !== null && hoveredIndex !== index;

  // Alternate tilt direction so the "fanned stack" reads naturally
  const baseRotate = index % 2 === 0 ? -2 : 2;

  return (
    <Link
      href={`/work?category=${collection.slug}`}
      onMouseEnter={() => onHover(index)}
      onMouseLeave={() => onHover(null)}
      className="focus-visible:ring-ring block rounded-2xl focus-visible:ring-2 focus-visible:outline-none"
      aria-label={`View ${collection.title} projects`}
    >
      <motion.div
        animate={{
          rotate: isHovered ? 0 : baseRotate,
          y: isHovered ? -12 : 0,
          scale: isHovered ? 1.03 : isDimmed ? 0.97 : 1,
        }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "group border-border/60 bg-card/40 relative flex h-72 flex-col justify-between overflow-hidden rounded-2xl border p-6 shadow-lg backdrop-blur-xl transition-[border-color,opacity,box-shadow] duration-300",
          isHovered && "border-border-hover shadow-2xl",
          isDimmed && "opacity-60"
        )}
      >
        {/* Liquid glass sheen - soft light blob, gives the "glass" a highlight */}
        <div
          aria-hidden="true"
          className="absolute -top-1/3 -left-1/3 h-2/3 w-2/3 rotate-12 rounded-full bg-white/10 blur-3xl transition-transform duration-700 group-hover:translate-x-4 group-hover:translate-y-2"
        />

        {/* Top edge highlight - like light catching a glass rim */}
        <div
          aria-hidden="true"
          className="absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"
        />

        {/* Category gradient wash on hover */}
        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-500 group-hover:opacity-100",
            collection.gradient
          )}
          aria-hidden="true"
        />

        <div className="relative z-10 flex items-start justify-between">
          <span className="text-muted-foreground text-xs font-medium tracking-widest uppercase">
            0{index + 1}
          </span>
          <motion.div
            animate={{
              rotate: isHovered ? 45 : 0,
              opacity: isHovered ? 1 : 0.4,
            }}
            transition={{ duration: 0.3 }}
          >
            <ArrowUpRight size={20} className="text-foreground" />
          </motion.div>
        </div>

        <div className="relative z-10">
          <h3 className="font-display text-foreground text-xl font-semibold md:text-2xl">
            {collection.title}
          </h3>
          <p className="text-foreground/70 mt-2 text-sm leading-relaxed">
            {collection.description}
          </p>
        </div>
      </motion.div>
    </Link>
  );
}
