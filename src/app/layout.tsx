import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { configuredSiteUrl, createPageMetadata, indexingEnabled } from "@/lib/site-metadata";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"], display: "swap" });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"], display: "swap" });
const description = "A preview of GrowthAgent AI's planned Florida construction workflow for evaluating public-source opportunity review.";

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#05070d" };

export const metadata: Metadata = {
  ...createPageMetadata({ title: "GrowthAgent AI | Florida Construction Opportunity Intelligence", description, path: "/" }),
  keywords: ["Florida construction opportunities", "construction opportunity review", "Florida public records", "construction product preview"],
  authors: [{ name: "GrowthAgent AI" }],
  icons: { icon: "/brand/growthagent-ai-logo.png", apple: "/brand/growthagent-ai-logo.png" },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "GrowthAgent AI",
  url: configuredSiteUrl,
  description,
  inLanguage: "en-US",
  about: { "@type": "Thing", name: "Florida construction opportunity review" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        {indexingEnabled && configuredSiteUrl ? <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} /> : null}
        {children}
      </body>
    </html>
  );
}
