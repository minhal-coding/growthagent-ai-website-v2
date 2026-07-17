import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Circle } from "lucide-react";

import { PageIntro, PageShell, SectionHeading } from "@/components/site-chrome";
import { constructionTrades, launchAreas } from "@/components/site-data";
import { createPageMetadata } from "@/lib/site-metadata";

export const metadata: Metadata = createPageMetadata({ title: "Florida Launch Plan", description: "GrowthAgent AI is validating a planned first-market focus on Florida construction.", path: "/florida-launch" });

export default function FloridaLaunchPage() {
  return (
    <PageShell>
      <main id="main-content">
        <PageIntro
          label="Florida launch"
          title="Focused on Florida construction, validating one workflow at a time."
          text="Florida construction is the planned first market. This preview is not a nationwide availability claim and does not claim active or statewide source coverage."
        />
        <section className="px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
          <div className="mx-auto grid max-w-[90rem] gap-14 lg:grid-cols-2">
            <div>
              <SectionHeading title="Illustrative validation areas" text="These generic examples show how geography could guide validation. They do not identify approved counties or active sources." />
              <div className="mt-10 border-y border-white/10">
                {launchAreas.map((area) => (
                  <div key={area} className="flex items-center justify-between gap-4 border-b border-white/10 py-5 last:border-b-0">
                    <span className="flex items-center gap-3 font-bold text-white"><Circle className="size-4 text-[#d4af37]" aria-hidden="true" />{area}</span>
                    <span className="text-sm font-semibold text-slate-400">Illustrative only</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <SectionHeading title="Designed around construction trades" text="Future validation would determine which trade and record combinations are useful enough to evaluate further." />
              <div className="mt-10 grid gap-3 sm:grid-cols-2">
                {constructionTrades.map((trade) => (
                  <div key={trade} className="flex min-h-20 items-center gap-3 rounded-xl border border-white/10 bg-white/[0.025] p-4 text-sm font-semibold text-slate-200">
                    <Circle className="size-4 shrink-0 text-[#42d6c7]" aria-hidden="true" />
                    {trade}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className="border-t border-white/10 bg-[#070a10] px-5 py-16 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-[90rem] rounded-2xl border border-[#d4af37]/30 p-7 sm:p-10">
            <h2 className="text-3xl font-extrabold tracking-[-0.04em] text-white">The planned scope is still being validated.</h2>
            <p className="mt-4 max-w-3xl text-base leading-7 text-slate-400">Source access, record quality, trade fit, geography, and review expectations must be confirmed before a workflow is described as active.</p>
            <Link href="/early-access" className="ga-button-secondary mt-7">
              View Early Access Preview
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
