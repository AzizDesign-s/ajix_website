"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";

export function FooterWordmark() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  // Avoid rendering the wrong logo variant before the theme is known
  const logoSrc =
    mounted && resolvedTheme === "light"
      ? "/images/logo/ajix-full-light.svg"
      : "/images/logo/ajix-full-dark.svg";

  return (
    <div className="flex justify-center overflow-hidden py-8">
      <motion.div
        initial={{ clipPath: "inset(0 100% 0 0)", opacity: 0 }}
        whileInView={{ clipPath: "inset(0 0% 0 0)", opacity: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-2xl px-6"
      >
        {mounted && (
          <Image
            src={logoSrc}
            alt={`${siteConfig.name} logo`}
            width={751}
            height={146}
            className="h-auto w-full"
            priority={false}
          />
        )}

        {/* One-time light sweep across the logo after it reveals */}
        <motion.div
          aria-hidden="true"
          initial={{ x: "-120%" }}
          whileInView={{ x: "220%" }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 1.2, delay: 1, ease: "easeInOut" }}
          className="absolute inset-y-0 w-1/3 bg-linear-to-r from-transparent via-white/25 to-transparent"
          style={{ mixBlendMode: "overlay" }}
        />
      </motion.div>
    </div>
  );
}
