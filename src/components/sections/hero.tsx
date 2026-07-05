"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { AmbientGlow } from "@/components/shared/ambient-glow";
import { ScrollIndicator } from "@/components/ui/scroll-indicator";
import { HeroVisual } from "@/components/sections/hero-visual";
import { fadeUp, staggerContainer } from "@/lib/motion";

export function Hero() {
  return (
    <section className="relative flex min-h-[calc(100vh-6rem)] items-center overflow-hidden">
      <AmbientGlow />

      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start"
          >
            <motion.span
              variants={fadeUp}
              className="border-border bg-surface text-muted-foreground mb-6 rounded-full border px-4 py-1.5 text-xs font-medium tracking-wide uppercase"
            >
              Enterprise Product Designer
            </motion.span>

            <motion.h1
              variants={fadeUp}
              className="font-display text-foreground text-5xl leading-[1.05] font-semibold tracking-tight md:text-6xl lg:text-7xl"
            >
              Designing systems
              <br />
              that scale.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-foreground/70 mt-6 max-w-md text-lg leading-relaxed"
            >
              I'm Abdul Aziz — a research-driven product designer building
              accessible, enterprise-grade digital experiences.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Button asChild size="lg">
                <a href="/work">View Work</a>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <a href="/contact">Let&apos;s Connect</a>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="hidden justify-center lg:flex"
          >
            <HeroVisual />
          </motion.div>
        </div>
      </Container>

      <ScrollIndicator />
    </section>
  );
}
