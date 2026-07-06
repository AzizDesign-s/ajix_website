"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { DisciplineCube } from "@/components/sections/work/hero/discipline-cube";
import { WorkHeroBackground } from "@/components/sections/work/hero/work-hero-background";
import { HeroBackground } from "@/components/sections/home/hero/hero-background";
import { fadeUp, staggerContainer } from "@/lib/motion";

const rotatingWords = ["Design.", "Code.", "Animate.", "Brand."];

interface WorkHeroProps {
  stats: {
    totalProjects: number;
    totalCategories: number;
    totalTechnologies: number;
  };
}

export function WorkHero({ stats }: WorkHeroProps) {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((current) => (current + 1) % rotatingWords.length);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  return (
    <Section className="relative overflow-hidden pt-28 pb-20">
      <WorkHeroBackground />
      <HeroBackground />

      <Container className="relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.span
              variants={fadeUp}
              className="text-accent text-xs font-semibold tracking-widest uppercase"
            >
              Work
            </motion.span>

            <motion.h1
              variants={fadeUp}
              className="font-display text-foreground mt-4 text-4xl leading-tight font-semibold tracking-tight md:text-6xl"
            >
              I{" "}
              <span className="relative inline-block h-[1.1em] overflow-hidden align-bottom">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={rotatingWords[wordIndex]}
                    initial={{ y: "110%", opacity: 0 }}
                    animate={{ y: "0%", opacity: 1 }}
                    exit={{ y: "-110%", opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="text-shimmer inline-block"
                  >
                    {rotatingWords[wordIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
              <br />
              Selected work, end to end.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-foreground/70 mt-6 max-w-xl text-base leading-relaxed md:text-lg"
            >
              A collection of enterprise dashboards, engineered products,
              motion-led experiences, and brand systems — filter by discipline
              below.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="border-border/40 mt-10 grid max-w-md grid-cols-3 gap-6 border-t pt-6"
            >
              <div>
                <p className="gradient-brand-text font-display text-2xl font-semibold md:text-3xl">
                  <AnimatedCounter value={stats.totalProjects} suffix="+" />
                </p>
                <p className="text-muted-foreground mt-1 text-xs tracking-wide uppercase">
                  Projects
                </p>
              </div>
              <div>
                <p className="gradient-brand-text font-display text-2xl font-semibold md:text-3xl">
                  <AnimatedCounter value={stats.totalCategories} />
                </p>
                <p className="text-muted-foreground mt-1 text-xs tracking-wide uppercase">
                  Disciplines
                </p>
              </div>
              <div>
                <p className="gradient-brand-text font-display text-2xl font-semibold md:text-3xl">
                  <AnimatedCounter value={stats.totalTechnologies} suffix="+" />
                </p>
                <p className="text-muted-foreground mt-1 text-xs tracking-wide uppercase">
                  Tools Used
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* 3D visual - desktop only, mirrors Home Hero's mobile-hides-visual pattern */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center"
          >
            <DisciplineCube />
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
