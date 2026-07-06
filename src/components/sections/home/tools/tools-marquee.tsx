"use client";

import Image from "next/image";
import type { Tool } from "@/config/tools";
import { cn } from "@/lib/utils";

function ToolLogo({ tool }: { tool: Tool }) {
  return (
    <div
      title={tool.label}
      className="group border-border/60 bg-card/40 hover:border-border-hover flex h-16 w-28 shrink-0 items-center justify-center rounded-xl border backdrop-blur-sm transition-colors duration-300"
    >
      <div
        aria-hidden="true"
        className="absolute h-1/2 w-1/2 rounded-full opacity-[0.1] blur-[60px]"
      />
      {/* Liquid glass sheen - soft light blob, gives the "glass" a highlight */}
      <div
        aria-hidden="true"
        className="absolute -top-1/3 -left-1/3 h-2/3 w-2/3 rotate-12 rounded-full bg-white/10 blur-3xl transition-transform duration-700 group-hover:translate-x-4 group-hover:translate-y-2"
      />
      {/* Top edge highlight - like light catching a glass rim */}
      <div
        aria-hidden="true"
        className="absolute inset-x-4 top-0 h-px bg-linear-to-r from-transparent via-white/40 to-transparent"
      />

      {tool.type === "icon" ? (
        <Image
          src={`https://cdn.simpleicons.org/${tool.slug}`}
          alt={tool.label}
          width={28}
          height={28}
          unoptimized
          className="h-7 w-7 object-contain opacity-50 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0"
        />
      ) : (
        <span className="text-foreground/50 group-hover:text-accent text-lg font-bold opacity-50 transition-all duration-300 group-hover:opacity-100">
          {tool.badgeText}
        </span>
      )}
    </div>
  );
}

export function ToolsMarquee({
  tools,
  direction = "left",
  duration = 32,
}: {
  tools: Tool[];
  direction?: "left" | "right";
  duration?: number;
}) {
  return (
    <div className="marquee-row relative overflow-hidden">
      <div
        className={cn(
          "flex w-max gap-4",
          direction === "left" ? "marquee-track" : "marquee-track-reverse"
        )}
        style={{ "--marquee-duration": `${duration}s` } as React.CSSProperties}
      >
        {[...tools, ...tools].map((tool, index) => (
          <ToolLogo key={`${tool.label}-${index}`} tool={tool} />
        ))}
      </div>
    </div>
  );
}
