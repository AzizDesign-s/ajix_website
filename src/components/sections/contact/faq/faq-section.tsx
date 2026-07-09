"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { Accordion } from "@/components/ui/accordion";
import { fadeUp } from "@/lib/motion";
import type { FaqItem } from "@/types/contact";

export function FaqSection({ items }: { items: FaqItem[] }) {
  const accordionItems = items.map((item, index) => ({
    id: `faq-${index}`,
    trigger: item.question,
    content: item.answer,
  }));

  return (
    <Section id="faq">
      <Container>
        <SectionHeader
          eyebrow="FAQ"
          title="Common questions"
          description="Answers to what people usually ask before reaching out."
          align="center"
          className="mx-auto"
        />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mx-auto mt-12 max-w-2xl"
        >
          <Accordion items={accordionItems} />
        </motion.div>
      </Container>
    </Section>
  );
}
