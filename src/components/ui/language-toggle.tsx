"use client";

import { useLocale } from "@/lib/i18n/locale-context";
import { cn } from "@/lib/utils";

export function LanguageToggle({ className }: { className?: string }) {
  const { locale, setLocale } = useLocale();

  return (
    <button
      type="button"
      onClick={() => setLocale(locale === "en" ? "ar" : "en")}
      className={cn(
        "border-border bg-surface text-foreground hover:bg-surface-hover focus-visible:ring-ring flex h-9 w-9 items-center justify-center rounded-full border text-xs font-semibold transition-colors focus-visible:ring-2 focus-visible:outline-none",
        className
      )}
      aria-label={locale === "en" ? "Switch to Arabic" : "Switch to English"}
      title="Arabic content coming soon"
    >
      {locale === "en" ? "AR" : "EN"}
    </button>
  );
}
