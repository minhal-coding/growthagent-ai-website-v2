import { LegalPage } from "@/components/legal-page";

export const metadata = {
  title: "Terms of Use",
  description: "Terms for using the GrowthAgent AI Florida construction early-access website.",
  alternates: { canonical: "/terms" },
};

export default function Terms() {
  return <LegalPage kind="terms" />;
}
