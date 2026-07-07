"use client";

import { useRef } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

type FrameAspect = "video" | "square" | "portrait" | "landscape";

const aspectClasses: Record<FrameAspect, string> = {
  video: "aspect-video",
  square: "aspect-square",
  portrait: "aspect-[3/4]",
  landscape: "aspect-[4/3]",
};

interface ImageFrameProps {
  src: string;
  alt: string;
  aspect?: FrameAspect;
  onClick?: () => void;
  priority?: boolean;
  className?: string;
}

export function ImageFrame({
  src,
  alt,
  aspect = "video",
  onClick,
  priority,
  className,
}: ImageFrameProps) {
  const frameRef = useRef<HTMLDivElement>(null);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = frameRef.current?.getBoundingClientRect();
    if (!rect) return;
    const mx = ((e.clientX - rect.left) / rect.width) * 100;
    const my = ((e.clientY - rect.top) / rect.height) * 100;
    frameRef.current?.style.setProperty("--mx", `${mx}%`);
    frameRef.current?.style.setProperty("--my", `${my}%`);
  }

  return (
    <div
      ref={frameRef}
      onMouseMove={handleMouseMove}
      onClick={onClick}
      className={cn(
        "glow-border border-border/40 bg-background/60 relative overflow-hidden rounded-2xl border",
        aspectClasses[aspect],
        onClick && "cursor-zoom-in",
        className
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(min-width: 1024px) 50vw, 100vw"
        priority={priority}
        className="object-contain p-4"
      />
    </div>
  );
}
