"use client";

import Image from "next/image";
import type { Tool } from "@/config/tools";
import { cn } from "@/lib/utils";

function ToolLogo({ tool }: { tool: Tool }) {
  return (
    <div
      title={tool.label}
      className="group border-border/40 bg-surface/40 hover:border-border-hover flex h-16 w-28 shrink-0 items-center justify-center rounded-xl border backdrop-blur-sm transition-colors duration-300"
    >
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
