"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevents a hydration mismatch: server doesn't know the theme yet
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div className={cn("bg-surface h-9 w-9 rounded-full", className)} />;
  }

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={cn(
        "border-border bg-surface text-foreground hover:bg-surface-hover focus-visible:ring-ring flex h-9 w-9 items-center justify-center rounded-full border transition-colors focus-visible:ring-2 focus-visible:outline-none",
        className
      )}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}
