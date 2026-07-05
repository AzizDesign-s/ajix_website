import type { Metadata } from "next";
import { ThemeProvider } from "@/components/shared/theme-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "AJIX — Enterprise Product Designer",
  description:
    "Abdul Aziz (AJIX) — Enterprise Product Designer specializing in research-driven, accessible, scalable digital products.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
