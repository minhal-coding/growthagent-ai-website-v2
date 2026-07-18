import type { Metadata } from "next";

export const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/$/, "");
export const indexingEnabled = process.env.NEXT_PUBLIC_ENABLE_INDEXING === "true" && Boolean(configuredSiteUrl);

type PageMetadataInput = { title: string; description: string; path: string; forceNoIndex?: boolean };

export function createPageMetadata({ title, description, path, forceNoIndex = false }: PageMetadataInput): Metadata {
  const fullTitle = path === "/" ? title : `${title} | GrowthAgent AI`;
  const canIndex = indexingEnabled && !forceNoIndex;

  if (!canIndex || !configuredSiteUrl) {
    return {
      title: fullTitle,
      description,
      robots: "noindex, nofollow, noarchive",
      openGraph: { title: fullTitle, description, type: "website", siteName: "GrowthAgent AI", locale: "en_US" },
      twitter: { card: "summary", title: fullTitle, description },
    };
  }

  const pageUrl = `${configuredSiteUrl}${path === "/" ? "" : path}`;
  const brandImage = `${configuredSiteUrl}/brand/growthagent-ai-gradient.png`;
  return {
    metadataBase: new URL(configuredSiteUrl),
    title: fullTitle,
    description,
    robots: { index: true, follow: true },
    alternates: { canonical: pageUrl },
    openGraph: {
      title: fullTitle,
      description,
      url: pageUrl,
      type: "website",
      siteName: "GrowthAgent AI",
      locale: "en_US",
      images: [{ url: brandImage, width: 1536, height: 1536, alt: "GrowthAgent AI brand mark" }],
    },
    twitter: { card: "summary_large_image", title: fullTitle, description, images: [brandImage] },
  };
}
