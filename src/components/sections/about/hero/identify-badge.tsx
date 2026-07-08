"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import Image from "next/image";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

const CARD_WIDTH = 220;
const CARD_HEIGHT = 320;
const CARD_DEPTH = 10;

export function IdentityBadge() {
  const prefersReducedMotion = useReducedMotion();
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springX = useSpring(rotateX, { stiffness: 50, damping: 18 });
  const springY = useSpring(rotateY, { stiffness: 50, damping: 18 });

  useEffect(() => {
    function handleMouseMove(e: MouseEvent) {
      const offsetX = (e.clientY / window.innerHeight - 0.5) * -10;
      const offsetY = (e.clientX / window.innerWidth - 0.5) * 16;
      rotateX.set(offsetX);
      rotateY.set(offsetY);
    }
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [rotateX, rotateY]);

  return (
    <div
      className="relative flex h-95 w-[320px] items-center justify-center"
      style={{ perspective: 1600 }}
    >
      {/* Lanyard strap */}
      <div
        aria-hidden="true"
        className="from-border/60 absolute top-0 left-1/2 h-16 w-3 -translate-x-1/2 rounded-full bg-linear-to-b to-transparent"
      />

      {/* Mouse-tilt wrapper */}
      <motion.div
        style={{
          rotateX: prefersReducedMotion ? 0 : springX,
          rotateY: prefersReducedMotion ? 0 : springY,
          transformStyle: "preserve-3d",
        }}
      >
        {/* Auto-rotating card */}
        <motion.div
          animate={prefersReducedMotion ? {} : { rotateY: 360 }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
          style={{ transformStyle: "preserve-3d" }}
          className="relative"
        >
          {/* FRONT FACE */}
          <div
            className="absolute top-1/2 left-1/2 flex flex-col items-center rounded-2xl border border-white/15 bg-[linear-gradient(160deg,var(--color-neutral-900),var(--color-neutral-950))] px-6 py-7 shadow-2xl"
            style={{
              width: CARD_WIDTH,
              height: CARD_HEIGHT,
              marginLeft: -CARD_WIDTH / 2,
              marginTop: -CARD_HEIGHT / 2,
              transform: `translateZ(${CARD_DEPTH / 2}px)`,
            }}
          >
            {/* Punch hole */}
            <div className="h-2.5 w-8 rounded-full bg-black/40" />

            {/* Logo mark */}
            <div className="mt-6 flex h-16 w-16 items-center justify-center rounded-full bg-white/95 p-3 shadow-lg">
              <Image
                src="/images/logo/ajix-icon-light.svg"
                alt="AJIX"
                width={48}
                height={30}
                className="h-auto w-full"
              />
            </div>

            <p className="font-display mt-5 text-center text-base font-semibold text-white">
              Abdul Aziz
            </p>
            <p className="mt-1 text-center text-xs tracking-wide text-white/50 uppercase">
              Enterprise Product Designer
            </p>

            {/* Status chip */}
            <div className="border-success/30 bg-success/10 mt-4 flex items-center gap-1.5 rounded-full border px-3 py-1">
              <span className="bg-success h-1.5 w-1.5 rounded-full" />
              <span className="text-success text-[10px] font-medium tracking-wide uppercase">
                Verified Access
              </span>
            </div>

            {/* Barcode detail */}
            <div className="mt-auto flex h-8 w-full items-end justify-center gap-0.5">
              {Array.from({ length: 24 }).map((_, i) => (
                <span
                  key={i}
                  className="bg-white/25"
                  style={{ width: 2, height: `${8 + ((i * 37) % 20)}px` }}
                />
              ))}
            </div>

            {/* Holographic sweep */}
            <motion.div
              aria-hidden="true"
              animate={{ x: ["-120%", "220%"] }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                repeatDelay: 2,
                ease: "easeInOut",
              }}
              className="absolute inset-y-0 w-1/3 bg-linear-to-r from-transparent via-white/20 to-transparent"
              style={{ mixBlendMode: "overlay" }}
            />
          </div>

          {/* BACK FACE */}
          <div
            className="absolute top-1/2 left-1/2 flex flex-col items-center justify-center gap-4 rounded-2xl border border-white/15 bg-[linear-gradient(160deg,var(--color-neutral-900),var(--color-neutral-950))] shadow-2xl"
            style={{
              width: CARD_WIDTH,
              height: CARD_HEIGHT,
              marginLeft: -CARD_WIDTH / 2,
              marginTop: -CARD_HEIGHT / 2,
              transform: `rotateY(180deg) translateZ(${CARD_DEPTH / 2}px)`,
            }}
          >
            <div className="gradient-brand h-14 w-14 rounded-2xl opacity-80" />
            <p className="text-xs tracking-widest text-white/40 uppercase">
              AJIX Enterprise
            </p>
          </div>

          {/* THIN EDGES - sells the card as having real depth */}
          <div
            className="absolute top-1/2 left-1/2 bg-neutral-800"
            style={{
              width: CARD_DEPTH,
              height: CARD_HEIGHT,
              marginTop: -CARD_HEIGHT / 2,
              transform: `translateX(${-CARD_WIDTH / 2}px) rotateY(-90deg) translateZ(${CARD_DEPTH / 2}px)`,
            }}
          />
          <div
            className="absolute top-1/2 left-1/2 bg-neutral-800"
            style={{
              width: CARD_DEPTH,
              height: CARD_HEIGHT,
              marginTop: -CARD_HEIGHT / 2,
              transform: `translateX(${CARD_WIDTH / 2 - CARD_DEPTH}px) rotateY(-90deg) translateZ(${CARD_DEPTH / 2}px)`,
            }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
