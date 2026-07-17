import type { Metadata } from "next";

import { EarlyAccessPage } from "@/components/early-access-page";

export const metadata: Metadata = {
  title: "Join Florida Early Access",
  description: "Request early access to GrowthAgent AI's Florida construction opportunity intelligence launch.",
  alternates: { canonical: "/early-access" },
};

export default function EarlyAccessRoute() {
  return <EarlyAccessPage />;
}
