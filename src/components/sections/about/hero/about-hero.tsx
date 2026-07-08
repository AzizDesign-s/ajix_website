"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Magnetic } from "@/components/ui/magnetic";
import { ScrollIndicator } from "@/components/ui/scroll-indicator";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { AboutHeroBackground } from "@/components/sections/about/hero/about-hero-background";
import { IdentityBadge } from "@/components/sections/about/hero/identify-badge";
import { fadeUp, staggerContainer } from "@/lib/motion";
import type { Profile } from "@/types/about";

export function AboutHero({ profile }: { profile: Profile }) {
  return (
    <Section className="relative flex min-h-[calc(100vh-6rem)] items-center overflow-hidden">
      <AboutHeroBackground />

      <Container className="relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={fadeUp}>
              <Badge>
                <MapPin size={12} className="text-accent" />
                {profile.location}
              </Badge>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="font-display text-foreground mt-6 text-4xl leading-[1.1] font-semibold tracking-tight md:text-6xl"
            >
              {profile.name}
              <br />
              <span className="text-shimmer">{profile.role}.</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-foreground/70 mt-6 max-w-xl text-base leading-relaxed md:text-lg"
            >
              {profile.positioningStatement}
            </motion.p>

            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
              {profile.experienceHighlights.map((highlight) => (
                <span
                  key={highlight}
                  className="border-border/50 bg-surface/50 text-foreground/70 rounded-full border px-4 py-1.5 text-xs backdrop-blur-sm"
                >
                  {highlight}
                </span>
              ))}
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-10 flex flex-wrap items-center gap-6"
            >
              <Magnetic>
                <Button asChild variant="gradient" size="lg">
                  <a href="/work">View My Work</a>
                </Button>
              </Magnetic>
              <Button asChild variant="secondary" size="lg">
                <a
                  href={profile.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download Resume
                </a>
              </Button>

              <div className="border-border/40 flex items-baseline gap-1.5 border-l pl-6">
                <span className="gradient-brand-text font-display text-2xl font-semibold">
                  <AnimatedCounter value={profile.yearsExperience} suffix="+" />
                </span>
                <span className="text-muted-foreground text-xs uppercase">
                  Years
                </span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="hidden justify-center lg:flex"
          >
            <IdentityBadge />
          </motion.div>
        </div>
      </Container>

      <ScrollIndicator />
    </Section>
  );
}
