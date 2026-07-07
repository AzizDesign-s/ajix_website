"use client";

import { useRef, type ReactNode, type MouseEventHandler } from "react";
import { cn } from "@/lib/utils";

interface GlowPanelProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}

export function GlowPanel({ children, onClick, className }: GlowPanelProps) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove: MouseEventHandler<HTMLDivElement> = (e) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const mx = ((e.clientX - rect.left) / rect.width) * 100;
    const my = ((e.clientY - rect.top) / rect.height) * 100;
    ref.current?.style.setProperty("--mx", `${mx}%`);
    ref.current?.style.setProperty("--my", `${my}%`);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onClick={onClick}
      className={cn(
        "glow-border border-border/40 relative rounded-2xl border",
        onClick && "cursor-zoom-in",
        className
      )}
    >
      {children}
    </div>
  );
}
