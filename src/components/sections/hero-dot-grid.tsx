"use client";

import { useMemo } from "react";

const GRID_COLS = 40;
const GRID_ROWS = 40;
const SPACING = 40;
const VIEW_WIDTH = GRID_COLS * SPACING;
const VIEW_HEIGHT = GRID_ROWS * SPACING;

const GLOW_COLORS = [
  "var(--color-brand-cyan)",
  "var(--color-brand-blue)",
  "var(--color-brand-blue-light)",
  "var(--color-brand-indigo)",
  "#ffffff",
];

// Deterministic pseudo-random (seeded by index) — server and client
// must render identical output, or React throws a hydration mismatch.
function seededRandom(seed: number) {
  return Math.abs(Math.sin(seed * 999) * 10000) % 1;
}

interface Dot {
  cx: number;
  cy: number;
  glows: boolean;
  color: string;
  delay: number;
  duration: number;
}

export function HeroDotGrid() {
  const dots = useMemo<Dot[]>(() => {
    const result: Dot[] = [];
    let i = 0;
    for (let row = 0; row < GRID_ROWS; row++) {
      for (let col = 0; col < GRID_COLS; col++) {
        const seed = i;
        const glows = seededRandom(seed) > 0.72; // ~28% of dots twinkle
        result.push({
          cx: col * SPACING + SPACING / 2,
          cy: row * SPACING + SPACING / 2,
          glows,
          color:
            GLOW_COLORS[
              Math.floor(seededRandom(seed + 1) * GLOW_COLORS.length)
            ],
          delay: seededRandom(seed + 2) * 6,
          duration: 3 + seededRandom(seed + 3) * 4,
        });
        i++;
      }
    }
    return result;
  }, []);

  return (
    <svg
      viewBox={`0 0 ${VIEW_WIDTH} ${VIEW_HEIGHT}`}
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 h-full w-full"
      style={{
        maskImage:
          "radial-gradient(ellipse 60% 50% at 50% 40%, black 40%, transparent 80%)",
        WebkitMaskImage:
          "radial-gradient(ellipse 60% 50% at 50% 40%, black 40%, transparent 80%)",
      }}
    >
      {dots.map((dot, idx) =>
        dot.glows ? (
          <circle
            key={idx}
            cx={dot.cx}
            cy={dot.cy}
            r={1.6}
            fill={dot.color}
            style={{
              animation: `dot-twinkle ${dot.duration}s ease-in-out ${dot.delay}s infinite`,
              filter: `drop-shadow(0 0 3px ${dot.color})`,
            }}
          />
        ) : (
          <circle
            key={idx}
            cx={dot.cx}
            cy={dot.cy}
            r={1.2}
            fill="var(--color-neutral-500)"
            opacity={0.25}
          />
        )
      )}
    </svg>
  );
}
