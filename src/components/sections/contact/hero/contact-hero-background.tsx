"use client";

import { useMemo } from "react";

function seededRandom(seed: number) {
  return Math.abs(Math.sin(seed * 999) * 10000) % 1;
}

const RING_COUNT = 4;
const DOT_COUNT = 10;

export function ContactHeroBackground() {
  const dots = useMemo(() => {
    return Array.from({ length: DOT_COUNT }).map((_, i) => ({
      top: 15 + seededRandom(i) * 70,
      left: 15 + seededRandom(i + 1) * 70,
      duration: 10 + seededRandom(i + 2) * 8,
      delay: seededRandom(i + 3) * 6,
    }));
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {/* Radar ping rings, expanding from center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        {Array.from({ length: RING_COUNT }).map((_, i) => (
          <div
            key={i}
            className="border-accent/40 absolute top-1/2 left-1/2 h-105 w-105 -translate-x-1/2 -translate-y-1/2 rounded-full border"
            style={{
              animation: `ping-ring 5s ease-out ${i * 1.25}s infinite`,
            }}
          />
        ))}
        <div className="gradient-brand h-4 w-4 rounded-full opacity-70 blur-[1px]" />
      </div>

      {/* Slow-drifting connection dots */}

      {dots.map((dot, i) => (
        <div
          key={i}
          className="bg-brand-cyan absolute h-1.5 w-1.5 animate-pulse rounded-full"
          style={{
            top: `${dot.top}%`,
            left: `${dot.left}%`,
            animationDuration: `${dot.duration}s`,
            animationDelay: `${dot.delay}s`,
            boxShadow: "0 0 6px 1px var(--color-brand-cyan)",
          }}
        />
      ))}

      {/* Vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 75% 65% at 50% 40%, transparent 45%, var(--color-background) 100%)",
        }}
      />
    </div>
  );
}
