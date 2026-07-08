"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { PhilosophyCard } from "@/components/sections/about/philosophy/philosophy-card";
import { staggerContainer, fadeUp } from "@/lib/motion";
import type { PhilosophyPrinciple } from "@/types/about";

export function DesignPhilosophySection({
  principles,
}: {
  principles: PhilosophyPrinciple[];
}) {
  return (
    <Section id="philosophy" className="relative overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="bg-brand-indigo/10 absolute top-1/3 right-[8%] h-72 w-72 rounded-full blur-[110px]" />
      </div>

      <Container className="relative z-10">
        <SectionHeader
          eyebrow="Design Philosophy"
          title="How I approach product design"
          description="Six principles that shape every decision — click a card to see the thinking behind it."
          align="center"
          className="mx-auto"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {principles.map((principle) => (
            <motion.div key={principle.title} variants={fadeUp}>
              <PhilosophyCard principle={principle} />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
