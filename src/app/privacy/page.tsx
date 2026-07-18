import { LegalPage } from "@/components/legal-page";
import { createPageMetadata } from "@/lib/site-metadata";

export const metadata = createPageMetadata({ title: "Privacy Notice", description: "Privacy information for the GrowthAgent AI Florida construction product-direction preview.", path: "/privacy" });

export default function Privacy() {
  return <LegalPage kind="privacy" />;
}
