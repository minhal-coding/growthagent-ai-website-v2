import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"], display: "swap" });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"], display: "swap" });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://minhal-coding.github.io/growthagent-ai-website-v2";
const description = "GrowthAgent AI helps Florida contractors discover and review source-backed construction opportunities from public permits, planning records, and procurement data.";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#05070d",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "GrowthAgent AI | Florida Construction Opportunity Intelligence",
    template: "%s | GrowthAgent AI",
  },
  description,
  keywords: [
    "Florida construction opportunities",
    "construction opportunity intelligence",
    "Florida public permits",
    "construction procurement notices",
    "contractor early access",
  ],
  authors: [{ name: "GrowthAgent AI" }],
  alternates: { canonical: "/" },
  icons: {
    icon: "/brand/growthagent-ai-logo.png",
    apple: "/brand/growthagent-ai-logo.png",
  },
  openGraph: {
    title: "GrowthAgent AI | Florida Construction Opportunity Intelligence",
    description,
    url: "/",
    siteName: "GrowthAgent AI",
    images: [{ url: "/brand/growthagent-ai-gradient.png", width: 1536, height: 1536, alt: "GrowthAgent AI brand mark" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GrowthAgent AI | Florida Construction Opportunity Intelligence",
    description,
    images: ["/brand/growthagent-ai-gradient.png"],
  },
  robots: { index: true, follow: true },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "GrowthAgent AI",
  url: siteUrl,
  description,
  inLanguage: "en-US",
  about: {
    "@type": "Thing",
    name: "Florida construction opportunity intelligence",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
        {children}
      </body>
    </html>
  );
}
