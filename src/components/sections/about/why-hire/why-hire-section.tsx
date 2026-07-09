"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/ui/magnetic";
import { BusinessGoalsList } from "@/components/sections/work/case-study/business-goals-list";
import { fadeUp, staggerContainer } from "@/lib/motion";

export function WhyHireSection({
  statement,
  focusAreas,
}: {
  statement: string;
  focusAreas: string[];
}) {
  return (
    <Section id="why-hire" className="relative overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="bg-brand-indigo/10 absolute top-1/4 left-[10%] h-72 w-72 rounded-full blur-[120px]" />
      </div>

      <Container className="relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.span
              variants={fadeUp}
              className="text-accent text-xs font-semibold tracking-widest uppercase"
            >
              Why Hire AJIX
            </motion.span>

            <motion.h2
              variants={fadeUp}
              className="font-display text-foreground mt-4 text-3xl leading-tight font-semibold tracking-tight md:text-4xl"
            >
              A designer who ships,
              <br />
              not just <span className="text-shimmer">hands off.</span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-foreground/70 mt-6 max-w-lg text-base leading-relaxed"
            >
              {statement}
            </motion.p>

            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-4">
              <Magnetic>
                <Button asChild variant="gradient" size="lg">
                  <a href="/work">View My Work</a>
                </Button>
              </Magnetic>
              <Button asChild variant="secondary" size="lg">
                <a href="/contact">Get In Touch</a>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="corner-brackets border-border/40 bg-surface/40 rounded-2xl border p-8"
          >
            <BusinessGoalsList goals={focusAreas} />
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
