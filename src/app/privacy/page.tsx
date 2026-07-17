import { LegalPage } from "@/components/legal-page";

export const metadata = {
  title: "Privacy Notice",
  description: "Privacy information for the GrowthAgent AI Florida construction early-access website.",
  alternates: { canonical: "/privacy" },
};

export default function Privacy() {
  return <LegalPage kind="privacy" />;
}
