"use client";

import Link from "next/link";
import { useState } from "react";
import { AvailabilityBadge } from "@/components/ui/availability-badge";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { LanguageToggle } from "@/components/ui/language-toggle";
import { Button } from "@/components/ui/button";
import { MobileNav } from "@/components/layout/mobile-nav";
import { siteConfig } from "@/config/site";
import { Menu } from "lucide-react";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header className="fixed top-4 right-0 left-0 z-50 flex justify-center px-4">
        <nav
          className="border-border bg-surface/70 flex w-full max-w-4xl items-center justify-between rounded-full border px-4 py-2.5 shadow-md backdrop-blur-md md:px-6"
          aria-label="Primary navigation"
        >
          <Link
            href="/"
            className="font-display text-foreground focus-visible:ring-ring rounded-md text-lg font-bold tracking-tight focus-visible:ring-2 focus-visible:outline-none"
          >
            {siteConfig.name}
          </Link>

          {/* Desktop links - hidden on mobile */}
          <ul className="hidden items-center gap-8 md:flex">
            {siteConfig.navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-foreground/80 hover:text-foreground focus-visible:ring-ring rounded-md text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:outline-none"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right controls - desktop */}
          <div className="hidden items-center gap-3 md:flex">
            <AvailabilityBadge />
            <LanguageToggle />
            <ThemeToggle />
            <Button asChild variant="secondary" size="sm">
              <a
                href={siteConfig.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className="text-foreground flex h-9 w-9 items-center justify-center rounded-full md:hidden"
            aria-label="Open menu"
            aria-expanded={mobileOpen}
          >
            <Menu size={20} />
          </button>
        </nav>
      </header>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
