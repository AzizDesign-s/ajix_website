import type { ReactNode } from "react";
import { ImageFrame } from "@/components/sections/work/case-study/image-frame";
import { cn } from "@/lib/utils";

interface SplitSectionProps {
  image?: string;
  alt: string;
  side?: "left" | "right";
  children: ReactNode;
}

export function SplitSection({
  image,
  alt,
  side = "right",
  children,
}: SplitSectionProps) {
  // No image provided for this section on this project — render content
  // full-width, exactly as the engine behaved before this phase. This is
  // what keeps a partial case study (like BMW's) working correctly.
  if (!image) {
    return (
      <div className="text-foreground/70 max-w-2xl text-base leading-relaxed">
        {children}
      </div>
    );
  }

  return (
    <div className="grid items-center gap-8 lg:grid-cols-2">
      <div className={cn("lg:order-1", side === "right" && "lg:order-2")}>
        <ImageFrame src={image} alt={alt} aspect="video" />
      </div>
      <div
        className={cn(
          "text-foreground/70 text-base leading-relaxed lg:order-2",
          side === "right" && "lg:order-1"
        )}
      >
        {children}
      </div>
    </div>
  );
}
