"use client";

import { motion } from "framer-motion";
import { HeroBackground } from "@/components/sections/home/hero/hero-background";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/layout/container";
import { ScrollIndicator } from "@/components/ui/scroll-indicator";
import { HeroVisual } from "@/components/sections/home/hero/hero-visual";
import { Magnetic } from "@/components/ui/magnetic";
import { fadeUp, staggerContainer } from "@/lib/motion";

export function Hero() {
  return (
    <section className="relative flex min-h-[calc(100vh-6rem)] flex-col items-center overflow-hidden pt-16">
      {/* Ambient background aura */}
      <div
        aria-hidden="true"
        className="gradient-brand pointer-events-none absolute top-0 left-1/2 h-150 w-225 -translate-x-1/2 rounded-full opacity-[0.08] blur-[140px]"
      />
      <HeroBackground />

      <Container className="relative z-10 pt-24">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center"
        >
          <motion.div variants={fadeUp}>
            <Badge>
              <span className="bg-accent h-1.5 w-1.5 animate-pulse rounded-full" />
              Enterprise Product Designer · Dubai
            </Badge>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="font-display text-foreground mt-8 max-w-4xl text-5xl leading-[1.05] font-semibold tracking-tight md:text-6xl lg:text-7xl"
          >
            Designing systems
            <br />
            that <span className="gradient-brand-text">scale.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-foreground/70 mt-6 max-w-xl text-lg leading-relaxed"
          >
            I&apos;m Abdul Aziz — a research-driven product designer building
            accessible, enterprise-grade digital experiences.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-wrap justify-center gap-4"
          >
            <Magnetic>
              <Button asChild variant="gradient" size="lg">
                <a href="/work">View Work</a>
              </Button>
            </Magnetic>
            <Button asChild variant="secondary" size="lg">
              <a href="/contact">Let&apos;s Connect</a>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-8 flex justify-center"
          style={{ animation: "float-idle 6s ease-in-out infinite" }}
        >
          <HeroVisual />
        </motion.div>
      </Container>

      <ScrollIndicator />
    </section>
  );
}
