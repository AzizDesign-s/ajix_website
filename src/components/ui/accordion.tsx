"use client";

import { useState, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionItemData {
  id: string;
  trigger: ReactNode;
  content: ReactNode;
}

interface AccordionProps {
  items: AccordionItemData[];
  className?: string;
}

export function Accordion({ items, className }: AccordionProps) {
  // Single-open behavior: opening one item closes any other. Standard,
  // expected FAQ pattern — keeps the page scannable rather than everything
  // expanded at once.
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div
      className={cn(
        "divide-border/40 border-border/40 bg-surface/40 divide-y rounded-2xl border",
        className
      )}
    >
      {items.map((item) => {
        const isOpen = openId === item.id;

        return (
          <div key={item.id}>
            <button
              type="button"
              onClick={() => setOpenId(isOpen ? null : item.id)}
              aria-expanded={isOpen}
              aria-controls={`accordion-panel-${item.id}`}
              className="focus-visible:ring-ring flex w-full items-center justify-between gap-4 px-6 py-5 text-left focus-visible:ring-2 focus-visible:outline-none"
            >
              <span className="text-foreground text-sm font-medium sm:text-base">
                {item.trigger}
              </span>
              <ChevronDown
                size={18}
                className={cn(
                  "text-muted-foreground shrink-0 transition-transform duration-300",
                  isOpen && "text-accent rotate-180"
                )}
              />
            </button>

            {/* CSS grid-rows trick: animating grid-template-rows between
                0fr and 1fr smoothly animates height without ever needing
                to know the content's actual pixel height in JS. */}
            <div
              id={`accordion-panel-${item.id}`}
              role="region"
              className="grid transition-[grid-template-rows] duration-300 ease-out"
              style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                <div className="text-foreground/65 px-6 pb-5 text-sm leading-relaxed">
                  {item.content}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
