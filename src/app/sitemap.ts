import type { MetadataRoute } from "next";
import { configuredSiteUrl, indexingEnabled } from "@/lib/site-metadata";

const routes = ["", "/product", "/how-it-works", "/florida-launch", "/trust-safety", "/about", "/early-access", "/privacy", "/terms"];
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  if (!indexingEnabled || !configuredSiteUrl) return [];
  return routes.map((route) => ({
    url: `${configuredSiteUrl}${route}`,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/early-access" ? 0.9 : 0.8,
  }));
}
