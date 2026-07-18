import type { MetadataRoute } from "next";
import { configuredSiteUrl, indexingEnabled } from "@/lib/site-metadata";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  if (!indexingEnabled || !configuredSiteUrl) return { rules: { userAgent: "*", disallow: "/" } };
  return { rules: { userAgent: "*", allow: "/" }, sitemap: `${configuredSiteUrl}/sitemap.xml`, host: configuredSiteUrl };
}
