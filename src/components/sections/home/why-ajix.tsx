"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { PrincipleRow } from "@/components/sections/home/why/principle-row";
import { PrinciplesTimeline } from "@/components/sections/home/why/principles-timeline";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { principles } from "@/config/principle";
import { metrics } from "@/config/metrics";
import { staggerContainer } from "@/lib/motion";

export function WhyAjix() {
  return (
    <Section id="why-ajix" className="relative">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="bg-brand-blue/20 absolute top-1/4 left-[10%] h-72 w-72 rounded-full blur-[110px]" />
        <div className="bg-brand-cyan/10 absolute right-[10%] bottom-0 h-72 w-72 rounded-full blur-[110px]" />
      </div>
      <Container>
        <SectionHeader
          eyebrow="Why AJIX"
          title="Principles that shape every project"
          description="These aren't values on a slide — they're the filter every design decision passes through."
          align="center"
          className="mx-auto"
        />

        {/* Desktop: animated horizontal timeline */}
        <div className="pt-16">
          <PrinciplesTimeline />

          {/* Mobile/tablet: reuse the existing vertical list */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="pt-16 lg:hidden"
          >
            {principles.map((principle) => (
              <PrincipleRow key={principle.title} principle={principle} />
            ))}
          </motion.div>
        </div>

        {/* Animated metrics strip - unchanged */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="divide-border/40 border-border/60 bg-card/40 relative mt-20 grid grid-cols-2 gap-8 divide-y overflow-hidden rounded-2xl border p-8 backdrop-blur-xl sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-y-0 lg:grid-cols-5"
        >
          {/* Liquid glass sheen - soft light blob, gives the "glass" a highlight */}
          <div
            aria-hidden="true"
            className="absolute -top-1/3 -left-1/3 h-2/3 w-2/3 rotate-12 rounded-full bg-white/10 blur-3xl transition-transform duration-700 group-hover:translate-x-4 group-hover:translate-y-2"
          />

          {/* Top edge highlight - like light catching a glass rim */}
          <div
            aria-hidden="true"
            className="absolute inset-x-4 top-0 h-px bg-linear-to-r from-transparent via-white/40 to-transparent"
          />
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="flex flex-col items-center px-4 py-4 text-center sm:py-0"
            >
              <p className="font-display gradient-brand-text text-3xl font-semibold md:text-4xl">
                <AnimatedCounter value={metric.value} suffix={metric.suffix} />
              </p>
              <p className="text-muted-foreground mt-2 text-xs font-medium tracking-wide uppercase">
                {metric.label}
              </p>
            </div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
