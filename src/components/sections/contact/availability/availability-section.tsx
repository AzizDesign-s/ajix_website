"use client";

import { motion } from "framer-motion";
import { Clock } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { AvailabilityStateCard } from "@/components/sections/contact/availability/availability-state-card";
import { staggerContainer, fadeUp } from "@/lib/motion";
import type { AvailabilityState } from "@/types/contact";
import type { WorkingHours } from "@/types/contact";

export function AvailabilitySection({
  states,
  current,
  hours,
}: {
  states: AvailabilityState[];
  current: AvailabilityState;
  hours: WorkingHours;
}) {
  return (
    <Section id="availability">
      <Container>
        <SectionHeader
          eyebrow="Availability"
          title="Where things stand right now"
          description="Status updates as commitments change — check back if timing matters for you."
          align="center"
          className="mx-auto"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3"
        >
          {states.map((state) => (
            <motion.div key={state.level} variants={fadeUp}>
              <AvailabilityStateCard
                state={state}
                isCurrent={state.level === current.level}
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="border-border/40 bg-surface/40 text-foreground/70 mx-auto mt-8 flex max-w-md items-center justify-center gap-2 rounded-full border px-5 py-2.5 text-sm"
        >
          <Clock size={14} className="text-accent" />
          {hours.weekdays} · {hours.weekend}
        </motion.div>
      </Container>
    </Section>
  );
}
