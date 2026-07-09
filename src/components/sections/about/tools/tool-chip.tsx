import Image from "next/image";
import type { AboutTool } from "@/types/about";

export function ToolChip({ tool }: { tool: AboutTool }) {
  return (
    <div className="border-border/50 bg-surface/50 hover:border-border-hover flex items-center gap-2.5 rounded-full border px-4 py-2.5 transition-colors duration-300">
      {tool.iconSlug ? (
        <Image
          src={`https://cdn.simpleicons.org/${tool.iconSlug}`}
          alt={tool.name}
          width={18}
          height={18}
          unoptimized
          className="h-4.5 w-4.5"
        />
      ) : (
        <span className="bg-accent/20 text-accent flex h-4.5 w-4.5 items-center justify-center rounded-full text-[9px] font-bold">
          {tool.name.slice(0, 2).toUpperCase()}
        </span>
      )}
      <span className="text-foreground/80 text-sm font-medium">
        {tool.name}
      </span>
    </div>
  );
}
