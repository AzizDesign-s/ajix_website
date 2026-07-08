"use client";

import { useMemo } from "react";

const PARTICLE_COUNT = 16;

function seededRandom(seed: number) {
  return Math.abs(Math.sin(seed * 999) * 10000) % 1;
}

interface Particle {
  left: number;
  duration: number;
  delay: number;
  size: number;
  opacity: number;
}

export function AboutHeroBackground() {
  const particles = useMemo<Particle[]>(() => {
    return Array.from({ length: PARTICLE_COUNT }).map((_, i) => ({
      left: seededRandom(i) * 100,
      duration: 7 + seededRandom(i + 1) * 6,
      delay: seededRandom(i + 2) * 8,
      size: 2 + seededRandom(i + 3) * 3,
      opacity: 0.35 + seededRandom(i + 4) * 0.4,
    }));
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {/* Radial spotlight - circular, centered on where the badge sits */}
      <div
        className="absolute top-1/2 left-[62%] h-150 w-150 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 blur-[110px] lg:left-[68%]"
        style={{
          background:
            "radial-gradient(circle, var(--color-brand-blue) 0%, var(--color-brand-indigo) 45%, transparent 75%)",
        }}
      />

      {/* Secondary soft glow, left side, keeps the text side from feeling bare */}
      <div className="bg-brand-cyan/10 absolute top-1/3 left-[15%] h-72 w-72 rounded-full blur-[100px]" />

      {/* Rising light particles, with real glow */}
      {particles.map((particle, i) => (
        <span
          key={i}
          className="particle-mote bg-accent absolute bottom-0 rounded-full"
          style={
            {
              left: `${particle.left}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              boxShadow: "0 0 8px 2px var(--color-brand-cyan)",
              "--particle-duration": `${particle.duration}s`,
              "--particle-delay": `${particle.delay}s`,
              "--particle-opacity": particle.opacity,
            } as React.CSSProperties
          }
        />
      ))}

      {/* Vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 75% 65% at 50% 35%, transparent 45%, var(--color-background) 100%)",
        }}
      />
    </div>
  );
}
