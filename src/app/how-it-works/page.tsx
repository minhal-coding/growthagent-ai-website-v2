import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { CinematicWorkflow } from "@/components/cinematic-workflow";
import { OpportunityAnatomy } from "@/components/opportunity-anatomy";
import { RoadmapSection } from "@/components/product-expansion-sections";
import { PageIntro, PageShell, SectionHeading } from "@/components/site-chrome";
import { workflowSteps } from "@/components/site-data";
import { createPageMetadata } from "@/lib/site-metadata";

export const metadata: Metadata = createPageMetadata({ title: "How It Works", description: "How GrowthAgent AI is being built to organize Florida construction opportunities around source evidence, division fit, and human review.", path: "/how-it-works" });

export default function HowItWorksPage() {
  return (
    <PageShell>
      <main id="main-content">
        <PageIntro label="How it works" title="From public record to an evidence-aware review package." text="The planned Florida construction experience is a six-stage review workflow, not an autonomous outreach system. A person remains responsible for relevance and every next step." />
        <CinematicWorkflow />

        <section className="px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
          <div className="mx-auto max-w-[90rem]">
            <SectionHeading label="Stage-by-stage detail" title="Each step answers a different review question." text="These descriptions are planned behavior under validation. They do not represent completed source integrations, customer configuration, or operational delivery." />
            <ol className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 lg:grid-cols-2">
              {workflowSteps.map((step, index) => (
                <li key={step.title} className="bg-[#060a10] p-6 sm:p-8">
                  <div className="flex items-center justify-between gap-4"><step.icon className="size-6 text-[#42d6c7]" aria-hidden="true" /><span className="font-mono text-xs font-black tracking-[0.18em] text-[#e4bd45]">{step.number}</span></div>
                  <h2 className="mt-6 text-3xl font-extrabold tracking-[-0.04em] text-white">{step.title}</h2>
                  <p className="mt-4 text-base leading-7 text-slate-300">{step.text}</p>
                  <p className="mt-5 border-l-2 border-[#42d6c7]/50 pl-4 text-sm leading-6 text-slate-500">{step.detail}</p>
                  {index === workflowSteps.length - 1 ? <p className="mt-5 text-sm font-semibold text-[#42d6c7]">The person, not the system, owns the decision and any future action.</p> : null}
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="border-y border-white/10 bg-[#05080d] px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
          <div className="mx-auto max-w-[90rem]">
            <SectionHeading label="Fictional walkthrough" title="One record, three layers of review context." text="This demonstration uses a fictional Division 09 tenant-improvement opportunity and deliberately avoids real jurisdictions, contacts, metrics, and active-source claims." />
            <div className="mt-12"><OpportunityAnatomy /></div>
          </div>
        </section>

        <RoadmapSection />

        <section className="border-t border-white/10 bg-[#070a10] px-5 py-16 sm:px-8 lg:px-12">
          <div className="mx-auto flex max-w-[90rem] flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div><h2 className="text-2xl font-extrabold text-white">Review the planned division system.</h2><p className="mt-2 text-sm leading-6 text-slate-400">All 14 divisions remain planned or under validation, with representative scope examples only.</p></div>
            <Link href="/divisions" className="ga-button justify-center">Explore Planned Divisions<ArrowRight className="size-4" aria-hidden="true" /></Link>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
