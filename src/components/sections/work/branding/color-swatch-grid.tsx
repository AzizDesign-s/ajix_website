"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import type { BrandColorSwatch } from "@/types/project";
import { GlowPanel } from "@/components/ui/work/glow-panel";
import { cn } from "@/lib/utils";

export function ColorSwatchGrid({ colors }: { colors: BrandColorSwatch[] }) {
  const [copiedHex, setCopiedHex] = useState<string | null>(null);

  async function handleCopy(hex: string) {
    try {
      await navigator.clipboard.writeText(hex);
      setCopiedHex(hex);
      setTimeout(() => setCopiedHex(null), 1800);
    } catch {
      // Clipboard API can fail in insecure contexts or if permission is
      // denied - fail silently rather than showing an alarming error for
      // what's a minor convenience feature, not a critical action.
    }
  }

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
      {colors.map((color) => {
        const isCopied = copiedHex === color.hex;

        return (
          <GlowPanel key={color.hex} className="bg-surface/40 overflow-hidden">
            <button
              type="button"
              onClick={() => handleCopy(color.hex)}
              className="group block w-full text-left"
              aria-label={`Copy ${color.name} hex code ${color.hex}`}
            >
              <div
                className="h-24 w-full"
                style={{ backgroundColor: color.hex }}
              />
              <div className="flex items-center justify-between px-4 py-3">
                <div>
                  <p className="text-foreground text-sm font-medium">
                    {color.name}
                  </p>
                  <p className="text-muted-foreground text-xs uppercase">
                    {color.hex}
                  </p>
                </div>
                <span
                  className={cn(
                    "flex h-7 w-7 items-center justify-center rounded-full transition-colors",
                    isCopied
                      ? "bg-success/20 text-success"
                      : "bg-background/40 text-foreground/50 group-hover:text-foreground"
                  )}
                >
                  {isCopied ? <Check size={14} /> : <Copy size={14} />}
                </span>
              </div>
            </button>
          </GlowPanel>
        );
      })}
    </div>
  );
}
