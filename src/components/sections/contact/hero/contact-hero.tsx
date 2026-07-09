"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { ScrollIndicator } from "@/components/ui/scroll-indicator";
import { AvailabilityPill } from "@/components/sections/contact/hero/availability-pil";
import { ContactHeroBackground } from "@/components/sections/contact/hero/contact-hero-background";
import { fadeUp, staggerContainer } from "@/lib/motion";
import type { AvailabilityState } from "@/types/contact";

export function ContactHero({
  availability,
}: {
  availability: AvailabilityState;
}) {
  return (
    <Section className="relative flex min-h-[70vh] items-center overflow-hidden">
      <ContactHeroBackground />

      <Container className="relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="mx-auto flex max-w-2xl flex-col items-center text-center"
        >
          <motion.div variants={fadeUp}>
            <AvailabilityPill state={availability} />
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="font-display text-foreground mt-6 text-4xl leading-tight font-semibold tracking-tight md:text-6xl"
          >
            Let&apos;s start a{" "}
            <span className="text-shimmer">conversation.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-foreground/70 mt-6 max-w-lg text-base leading-relaxed md:text-lg"
          >
            Whether it&apos;s a role, a project, or just a question — reaching
            out is simple, and every message gets a real reply.
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="text-muted-foreground mt-4 text-sm"
          >
            {availability.responseTime}
          </motion.p>
        </motion.div>
      </Container>

      <ScrollIndicator />
    </Section>
  );
}
