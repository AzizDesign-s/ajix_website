import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function SocialLink({
  href,
  label,
  children,
  className,
}: {
  href: string;
  label: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={cn(
        "border-border/60 bg-surface/60 text-foreground/80 hover:border-accent/50 hover:text-accent focus-visible:ring-ring flex h-11 w-11 items-center justify-center rounded-full border backdrop-blur-sm transition-colors duration-300 focus-visible:ring-2 focus-visible:outline-none",
        className
      )}
    >
      {children}
    </a>
  );
}
