import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { CinematicWorkflow } from "@/components/cinematic-workflow";
import { FictionalProcessWalkthrough } from "@/components/fictional-process-walkthrough";
import { RoadmapSection } from "@/components/product-expansion-sections";
import { PageIntro, PageShell } from "@/components/site-chrome";
import { createPageMetadata } from "@/lib/site-metadata";

export const metadata: Metadata = createPageMetadata({ title: "How It Works", description: "How GrowthAgent AI is being built to organize Florida construction opportunities around source evidence, division fit, and human review.", path: "/how-it-works" });

export default function HowItWorksPage() {
  return (
    <PageShell>
      <main id="main-content">
        <PageIntro label="How it works" title="From public record to an evidence-aware review package." text="The planned Florida construction experience is a six-stage review workflow, not an autonomous outreach system. A person remains responsible for relevance and every next step." />
        <CinematicWorkflow />
        <FictionalProcessWalkthrough />

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
