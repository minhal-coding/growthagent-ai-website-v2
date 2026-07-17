import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Circle } from "lucide-react";

import { ConstructionOpportunityPreview } from "@/components/construction-opportunity-preview";
import { PageIntro, PageShell, SectionHeading } from "@/components/site-chrome";
import { sourceTypes } from "@/components/site-data";
import { GrowthAgentRobotOrbit } from "@/components/ui/growth-agent-robot-orbit";
import { createPageMetadata } from "@/lib/site-metadata";

export const metadata: Metadata = createPageMetadata({ title: "Product Preview", description: "See the planned GrowthAgent AI workflow for evaluating Florida construction opportunity review.", path: "/product" });

export default function ProductPage() {
  return (
    <PageShell>
      <main id="main-content">
        <PageIntro
          label="Product"
          title="Construction opportunity review, with the source still attached."
          text="GrowthAgent AI is being designed to explore how Florida contractors could organize public construction records around evidence, trade fit, service area, and human judgment."
        />
        <section className="px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
          <div className="mx-auto max-w-[90rem]">
            <ConstructionOpportunityPreview />
          </div>
        </section>
        <section className="border-y border-white/10 bg-[#070a10] px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
          <div className="mx-auto max-w-[90rem]">
            <SectionHeading title="Public-source categories under evaluation." text="No source is described as active until its access, evidence, and review workflow have been independently validated and owner-approved." />
            <div className="mt-12 grid border-y border-white/10 md:grid-cols-3">
              {sourceTypes.map((item) => (
                <article key={item.title} className="border-b border-white/10 py-7 md:border-b-0 md:border-r md:px-7 md:last:border-r-0">
                  <item.icon className="size-6 text-[#42d6c7]" aria-hidden="true" />
                  <h2 className="mt-6 text-xl font-extrabold text-white">{item.title}</h2>
                  <p className="mt-3 text-sm leading-6 text-slate-400">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
          <div className="mx-auto max-w-[90rem]">
            <GrowthAgentRobotOrbit />
          </div>
        </section>
        <section className="border-t border-white/10 px-5 py-16 sm:px-8 lg:px-12">
          <div className="mx-auto flex max-w-[90rem] flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="flex items-center gap-2 text-sm text-slate-300">
              <Circle className="size-4 text-[#42d6c7]" aria-hidden="true" />
              This preview does not guarantee availability, source coverage, or a launch date.
            </p>
            <Link href="/florida-launch" className="ga-button justify-center">
              Explore Florida Launch
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
