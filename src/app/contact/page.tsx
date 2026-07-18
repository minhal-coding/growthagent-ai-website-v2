import type { Metadata } from "next";

import { EarlyAccessPage } from "@/components/early-access-page";
import { createPageMetadata } from "@/lib/site-metadata";

export const metadata: Metadata = createPageMetadata({ title: "Contact Preview", description: "A nonfunctional preview with no contact endpoint or data collection.", path: "/contact", forceNoIndex: true });

export default function ContactPage() {
  return <EarlyAccessPage />;
}
