"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { LayoutDashboard, Code2, Wand2, Palette } from "lucide-react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

const CUBE_SIZE = 200;
const HALF = CUBE_SIZE / 2;

const faces = [
  {
    label: "Design",
    icon: LayoutDashboard,
    rotateY: 0,
    tint: "var(--color-brand-blue)",
  },
  { label: "Code", icon: Code2, rotateY: 90, tint: "var(--color-brand-cyan)" },
  {
    label: "Motion",
    icon: Wand2,
    rotateY: 180,
    tint: "var(--color-brand-indigo)",
  },
  {
    label: "Branding",
    icon: Palette,
    rotateY: 270,
    tint: "var(--color-brand-blue-light)",
  },
];

export function DisciplineCube() {
  const prefersReducedMotion = useReducedMotion();
  const rotateX = useMotionValue(0);
  const springRotateX = useSpring(rotateX, { stiffness: 60, damping: 20 });

  useEffect(() => {
    function handleMouseMove(e: MouseEvent) {
      const offset = (e.clientY / window.innerHeight - 0.5) * -16;
      rotateX.set(offset);
    }
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [rotateX]);

  return (
    <div
      className="relative flex h-80 w-80 items-center justify-center"
      style={{ perspective: 1400 }}
    >
      {/* Glow behind the cube */}
      <div
        aria-hidden="true"
        className="gradient-brand absolute h-52 w-52 rounded-full opacity-20 blur-[80px]"
      />

      {/* Mouse-tilt wrapper */}
      <motion.div
        style={{
          rotateX: prefersReducedMotion ? 0 : springRotateX,
          transformStyle: "preserve-3d",
        }}
        className="relative"
      >
        {/* Auto-rotating cube */}
        <motion.div
          animate={prefersReducedMotion ? {} : { rotateY: 360 }}
          transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
          style={{
            width: CUBE_SIZE,
            height: CUBE_SIZE,
            transformStyle: "preserve-3d",
          }}
          className="relative"
        >
          {faces.map(({ label, icon: Icon, rotateY, tint }) => (
            <div
              key={label}
              className="absolute inset-0 flex flex-col items-center justify-center gap-3 rounded-2xl border border-white/10 backdrop-blur-md"
              style={{
                transform: `rotateY(${rotateY}deg) translateZ(${HALF}px)`,
                background: `linear-gradient(135deg, ${tint}25, ${tint}08)`,
              }}
            >
              <div
                className="flex h-14 w-14 items-center justify-center rounded-2xl"
                style={{ background: tint }}
              >
                <Icon size={26} className="text-white" />
              </div>
              <span className="text-sm font-semibold tracking-wide text-white uppercase">
                {label}
              </span>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
