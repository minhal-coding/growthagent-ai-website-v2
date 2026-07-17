import type { Metadata } from "next";

import { DivisionExplorer, DivisionSystemLabel } from "@/components/division-explorer";
import { PageIntro, PageShell } from "@/components/site-chrome";
import { createPageMetadata } from "@/lib/site-metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Construction Divisions",
  description: "Review the 14 construction divisions included in GrowthAgent AI's planned Florida construction opportunity workflow.",
  path: "/divisions",
});

export default function DivisionsPage() {
  return (
    <PageShell>
      <main id="main-content">
        <PageIntro
          label="Construction divisions"
          title="Built around the construction divisions contractors actually sell."
          text="GrowthAgent AI is being organized around construction divisions so contractors can review opportunities relevant to the work they perform instead of searching through unrelated public records."
        />
        <section className="ga-grid-bg px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
          <div className="mx-auto max-w-[90rem]">
            <DivisionSystemLabel />
            <div className="mt-7 rounded-2xl border border-white/10 bg-[#060a10]/88 p-4 sm:p-6 lg:p-8">
              <DivisionExplorer />
            </div>
            <div className="mt-8 grid gap-4 border-y border-white/10 py-6 text-sm leading-6 text-slate-400 md:grid-cols-3">
              <p><strong className="text-white">Fourteen planned divisions.</strong> The set is limited to the owner-provided commercial scope in this brief.</p>
              <p><strong className="text-white">No active coverage claim.</strong> Every division remains planned or under validation.</p>
              <p><strong className="text-white">Representative scopes only.</strong> A canonical subtrade taxonomy requires separate owner-approved mapping evidence.</p>
            </div>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
