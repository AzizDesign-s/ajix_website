"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { SocialLink } from "@/components/ui/social-links";
import { Magnetic } from "@/components/ui/magnetic";

import { useMouseParallax } from "@/hooks/use-mouse-parallax";
import { siteConfig } from "@/config/site";
import { fadeUp, staggerContainer } from "@/lib/motion";

export function LetsConnect() {
  const { x, y } = useMouseParallax(14);

  return (
    <Section id="connect" className="relative overflow-hidden">
      <Container className="relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8">
          {/* Left: content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="flex flex-col items-start text-left"
          >
            <motion.span
              variants={fadeUp}
              className="text-accent text-xs font-semibold tracking-widest uppercase"
            >
              Let&apos;s Connect
            </motion.span>

            <motion.h2
              variants={fadeUp}
              className="font-display text-foreground mt-4 text-4xl font-semibold tracking-tight md:text-5xl"
            >
              Have a project in mind?
              <br />
              Let&apos;s build it <span className="text-shimmer">right.</span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-foreground/70 mt-5 max-w-md text-base leading-relaxed"
            >
              Open to enterprise product design roles and select freelance
              engagements across the UAE and beyond.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="relative mt-8 flex flex-wrap gap-4"
            >
              <div
                aria-hidden="true"
                className="gradient-brand absolute top-1/2 left-16 h-14 w-32 -translate-y-1/2 rounded-full blur-2xl"
                style={{ animation: "cta-pulse 3s ease-in-out infinite" }}
              />

              <Magnetic>
                <Button
                  asChild
                  variant="gradient"
                  size="lg"
                  className="relative"
                >
                  <a href="/contact">Start a Conversation</a>
                </Button>
              </Magnetic>
              <Button
                asChild
                variant="secondary"
                size="lg"
                className="relative"
              >
                <a
                  href={siteConfig.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download Resume
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right: floating transparent visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex justify-center lg:justify-end"
          >
            {/* Glow behind the visual */}
            <div
              aria-hidden="true"
              className="gradient-brand absolute top-1/2 left-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 blur-[90px]"
            />

            <motion.div
              style={{
                x,
                y,
                filter: "drop-shadow(0 24px 40px rgba(0,0,0,0.4))",
              }}
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-full max-w-sm"
            >
              <Image
                src="/images/projects/connect-visual.svg"
                alt=""
                width={500}
                height={560}
                className="h-auto w-full object-contain"
                priority={false}
              />
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
