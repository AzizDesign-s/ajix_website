"use client";

import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { AvailabilityBadge } from "@/components/ui/availability-badge";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { LanguageToggle } from "@/components/ui/language-toggle";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
}

export function MobileNav({ open, onClose }: MobileNavProps) {
  const { resolvedTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  // Prevents a hydration mismatch: server doesn't know the theme yet
  useEffect(() => setMounted(true), []);

  const logoSrc =
    mounted && resolvedTheme === "light"
      ? "/images/logo/ajix-full-light.svg"
      : "/images/logo/ajix-full-dark.svg";

  // Close on Escape key, lock body scroll while open
  useEffect(() => {
    if (!open) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm md:hidden"
            aria-hidden="true"
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="bg-card/40 fixed top-0 right-0 z-50 flex h-full w-full max-w-sm flex-col p-6 backdrop-blur-xl md:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation menu"
          >
            <div className="flex items-center justify-between">
              <Image
                src={logoSrc}
                alt="AJIX logo mark"
                width={64}
                height={40}
                className="h-auto w-36"
                priority
              />
              <button
                type="button"
                onClick={onClose}
                className="text-foreground flex h-9 w-9 items-center justify-center rounded-full"
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>

            <ul className="mt-10 flex flex-col gap-6">
              {siteConfig.navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className="font-display text-foreground text-2xl font-semibold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-auto flex flex-col gap-4">
              <AvailabilityBadge />
              <div className="flex items-center gap-3">
                <LanguageToggle />
                <ThemeToggle />
              </div>
              <Button asChild variant="gradient" size="md" className="w-full">
                <a
                  href={siteConfig.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resume
                </a>
              </Button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
