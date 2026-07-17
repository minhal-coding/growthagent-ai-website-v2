import { LegalPage } from "@/components/legal-page";
import { createPageMetadata } from "@/lib/site-metadata";

export const metadata = createPageMetadata({ title: "Terms of Use", description: "Terms for using the GrowthAgent AI Florida construction product-direction preview.", path: "/terms" });

export default function Terms() {
  return <LegalPage kind="terms" />;
}
