import type { Metadata } from "next";
import { SmoothScrollProvider } from "@/components/shared/smooth-scroll-provider";
import { Inter, Space_Grotesk, IBM_Plex_Sans_Arabic } from "next/font/google";
import { ThemeProvider } from "@/components/shared/theme-provider";
import { LocaleProvider } from "@/lib/i18n/locale-context";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});
const ibmPlexArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-arabic",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
  ),
  title: {
    default: "AJIX — Enterprise Product Designer",
    template: "%s | AJIX",
  },
  description:
    "Abdul Aziz (AJIX) — Enterprise Product Designer specializing in research-driven, accessible, scalable digital products.",
  keywords: [
    "Enterprise Product Designer",
    "UI UX Designer Dubai",
    "React Developer",
    "Product Design Systems",
  ],
  authors: [{ name: "Abdul Aziz" }],
  openGraph: {
    title: "AJIX — Enterprise Product Designer",
    description:
      "Research-driven, accessible, scalable digital products — product design and frontend engineering.",
    url: "/",
    siteName: "AJIX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AJIX — Enterprise Product Designer",
    description:
      "Research-driven, accessible, scalable digital products — product design and frontend engineering.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${spaceGrotesk.variable} ${ibmPlexArabic.variable}`}
    >
      <body>
        <ThemeProvider>
          <LocaleProvider>
            <Navbar />
            <SmoothScrollProvider>
              <main>{children}</main>
              <Footer />
            </SmoothScrollProvider>
          </LocaleProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
