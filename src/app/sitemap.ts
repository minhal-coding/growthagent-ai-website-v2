import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://minhal-coding.github.io/growthagent-ai-website-v2";
const routes = ["", "/product", "/how-it-works", "/florida-launch", "/trust-safety", "/about", "/early-access", "/privacy", "/terms"];

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date("2026-07-17T00:00:00Z"),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/early-access" ? 0.9 : 0.8,
  }));
}
