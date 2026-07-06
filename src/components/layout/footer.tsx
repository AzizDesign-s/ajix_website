"use client";

import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram, FaBehance } from "react-icons/fa6";
import { Container } from "@/components/layout/container";
import { SocialLink } from "@/components/ui/social-links";
import { AvailabilityBadge } from "@/components/ui/availability-badge";
import { FooterWordmark } from "@/components/ui/fiiter-wordmark";
import { siteConfig } from "@/config/site";

export function Footer() {
  const year = new Date().getFullYear();

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <footer className="border-border/40 relative border-t">
      <Container className="py-16">
        {/* Top row: nav + availability + socials */}
        <div className="border-border/30 flex flex-col items-center gap-8 border-b pb-12 md:flex-row md:items-center md:justify-between md:gap-4">
          <ul className="flex flex-wrap items-center justify-center gap-6">
            {siteConfig.navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-foreground/70 hover:text-foreground focus-visible:ring-ring rounded-md text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:outline-none"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <AvailabilityBadge />
            <div className="flex items-center gap-3">
              <SocialLink href={siteConfig.socials.linkedin} label="LinkedIn">
                <FaLinkedin size={16} />
              </SocialLink>
              <SocialLink href={siteConfig.socials.behance} label="Behance">
                <FaBehance size={16} />
              </SocialLink>
              <SocialLink href={siteConfig.socials.instagram} label="Instagram">
                <FaInstagram size={16} />
              </SocialLink>
              <SocialLink href={siteConfig.socials.github} label="GitHub">
                <FaGithub size={16} />
              </SocialLink>
            </div>
          </div>
        </div>

        {/* Giant wordmark - premium closing animation */}
        <FooterWordmark />

        {/* Bottom row: copyright + back to top */}
        <div className="flex flex-col items-center gap-4 pt-4 text-center md:flex-row md:justify-between md:text-left">
          <p className="text-muted-foreground text-sm">
            © {year} {siteConfig.name}. All rights reserved.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="text-foreground/70 hover:text-foreground focus-visible:ring-ring flex items-center gap-2 rounded-md text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:outline-none"
            aria-label="Scroll back to top"
          >
            Back to top
            <ArrowUp size={14} />
          </button>
        </div>
      </Container>
    </footer>
  );
}
