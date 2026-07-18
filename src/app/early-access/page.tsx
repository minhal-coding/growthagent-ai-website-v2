import type { Metadata } from "next";

import { EarlyAccessPage } from "@/components/early-access-page";
import { createPageMetadata } from "@/lib/site-metadata";

export const metadata: Metadata = createPageMetadata({ title: "Early Access Preview", description: "A nonfunctional preview of topics a future GrowthAgent AI Florida early-access intake could cover.", path: "/early-access" });

export default function EarlyAccessRoute() {
  return <EarlyAccessPage />;
}
