import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, MapPin } from "lucide-react";

import { PageIntro, PageShell, SectionHeading } from "@/components/site-chrome";
import { constructionTrades, launchAreas } from "@/components/site-data";

export const metadata: Metadata = {
  title: "Florida Launch",
  description: "GrowthAgent AI is launching through early-access pilots for Florida construction teams.",
  alternates: { canonical: "/florida-launch" },
};

export default function FloridaLaunchPage() {
  return (
    <PageShell>
      <main id="main-content">
        <PageIntro
          label="Florida launch"
          title="Focused on Florida construction, one verified workflow at a time."
          text="The initial launch is for Florida contractors exploring source-backed public opportunities. It is not a nationwide product and does not claim statewide source coverage."
        />
        <section className="px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
          <div className="mx-auto grid max-w-[90rem] gap-14 lg:grid-cols-2">
            <div>
              <SectionHeading title="Launch-area examples" text="These areas help guide validation and pilot conversations. Inclusion here does not mean every source is active." />
              <div className="mt-10 border-y border-white/10">
                {launchAreas.map((area) => (
                  <div key={area} className="flex items-center justify-between gap-4 border-b border-white/10 py-5 last:border-b-0">
                    <span className="flex items-center gap-3 font-bold text-white"><MapPin className="size-4 text-[#d4af37]" aria-hidden="true" />{area}</span>
                    <span className="text-xs font-semibold text-slate-500">Launch example</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <SectionHeading title="Built around construction trades" text="Early-access conversations help determine which trade and record combinations are useful enough to validate." />
              <div className="mt-10 grid gap-3 sm:grid-cols-2">
                {constructionTrades.map((trade) => (
                  <div key={trade} className="flex min-h-20 items-center gap-3 rounded-xl border border-white/10 bg-white/[0.025] p-4 text-sm font-semibold text-slate-200">
                    <CheckCircle2 className="size-4 shrink-0 text-[#42d6c7]" aria-hidden="true" />
                    {trade}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className="border-t border-white/10 bg-[#070a10] px-5 py-16 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-[90rem] rounded-2xl border border-[#d4af37]/30 p-7 sm:p-10">
            <h2 className="text-3xl font-extrabold tracking-[-0.04em] text-white">Launching soon means the scope is still being validated.</h2>
            <p className="mt-4 max-w-3xl text-base leading-7 text-slate-400">Source access, record quality, trade fit, geography, and review expectations must be confirmed before a workflow is described as active.</p>
            <Link href="/early-access" className="ga-button mt-7">
              Request a Pilot
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
