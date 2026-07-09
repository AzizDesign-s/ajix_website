"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { ContactMethodCard } from "@/components/sections/contact/method/contact-method-card";
import { staggerContainer, fadeUp } from "@/lib/motion";
import type { ContactMethod } from "@/types/contact";

export function ContactMethodsSection({
  methods,
}: {
  methods: ContactMethod[];
}) {
  return (
    <Section id="contact-methods">
      <Container>
        <SectionHeader
          eyebrow="Reach Out"
          title="Choose what works for you"
          description="Every channel gets a real reply — no auto-responders."
          align="center"
          className="mx-auto"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {methods.map((method) => (
            <motion.div key={method.type} variants={fadeUp}>
              <ContactMethodCard method={method} />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
