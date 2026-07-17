import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Circle, MapPinned } from "lucide-react";

import { DivisionExplorer } from "@/components/division-explorer";
import { PageIntro, PageShell, SectionHeading } from "@/components/site-chrome";
import { launchAreas } from "@/components/site-data";
import { createPageMetadata } from "@/lib/site-metadata";

export const metadata: Metadata = createPageMetadata({ title: "Florida Launch Plan", description: "GrowthAgent AI is validating Florida construction as its planned first market, with division, geography, and source scope still under review.", path: "/florida-launch" });

export default function FloridaLaunchPage() {
  return (
    <PageShell>
      <main id="main-content">
        <PageIntro label="Florida launch" title="Starting with Florida construction, validating one workflow at a time." text="Florida construction is the planned first market. This preview does not claim statewide availability, active counties, active sources, a private pilot, or a confirmed launch date." />

        <section className="px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
          <div className="mx-auto grid max-w-[90rem] gap-14 lg:grid-cols-[0.84fr_1.16fr]">
            <div>
              <SectionHeading label="Geographic validation" title="Service area must stay explicit." text="Geography would be configured around where a construction team works. These generic examples are discussion prompts, not approved counties, validated coverage, or active source areas." />
              <div className="mt-10 border-y border-white/10">
                {launchAreas.map((area) => (
                  <div key={area} className="flex items-center justify-between gap-4 border-b border-white/10 py-5 last:border-b-0">
                    <span className="flex items-center gap-3 font-bold text-white"><MapPinned className="size-4 text-[#e4bd45]" aria-hidden="true" />{area}</span>
                    <span className="text-xs font-extrabold uppercase tracking-[0.1em] text-slate-500">Illustrative only</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-[#e4bd45]/30 bg-[#e4bd45]/[0.025] p-6 sm:p-8">
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#e4bd45]">What launch validation must confirm</p>
              <h2 className="mt-4 text-3xl font-extrabold tracking-[-0.04em] text-white">Useful records, lawful access, clear evidence, and operator fit.</h2>
              <ul className="mt-7 space-y-4 text-sm leading-6 text-slate-300">
                {["Which public-source categories can be accessed and reviewed appropriately", "Which Florida geographies match an owner-approved launch scope", "Which divisions and representative scopes create useful signal", "Which evidence and exclusion rules a human reviewer needs", "Whether any customer-facing delivery or pilot is owner-approved"].map((item) => <li key={item} className="flex gap-3"><Circle className="mt-1.5 size-3.5 shrink-0 text-[#42d6c7]" aria-hidden="true" />{item}</li>)}
              </ul>
              <p className="mt-7 border-t border-white/10 pt-5 text-xs leading-5 text-slate-500">No customer, county, source, private pilot, or operational capability is implied by this roadmap.</p>
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-[#05080d] px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
          <div className="mx-auto max-w-[90rem]">
            <SectionHeading label="Planned construction taxonomy" title="Fourteen divisions define the proposed review scope." text="Every division is labeled planned coverage or under validation. These statuses describe website planning only, not live records, integrations, or availability." />
            <div className="mt-12"><DivisionExplorer showRouteLink /></div>
          </div>
        </section>

        <section className="px-5 py-16 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-[90rem] rounded-2xl border border-[#e4bd45]/30 p-7 sm:p-10">
            <h2 className="text-3xl font-extrabold tracking-[-0.04em] text-white">The planned launch scope is still being validated.</h2>
            <p className="mt-4 max-w-3xl text-base leading-7 text-slate-400">Source access, record quality, division fit, geography, privacy expectations, and human-review requirements must be confirmed before any workflow is described as active.</p>
            <Link href="/early-access" className="ga-button-secondary mt-7">View Early Access Preview<ArrowRight className="size-4" aria-hidden="true" /></Link>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
