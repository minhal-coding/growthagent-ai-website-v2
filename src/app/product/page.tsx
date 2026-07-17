import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Circle } from "lucide-react";

import { BuyerPipelineSection, SourceCategoriesSection, SystemOrganizesVisual } from "@/components/product-expansion-sections";
import { ConstructionOpportunityPreview } from "@/components/construction-opportunity-preview";
import { OpportunityAnatomy } from "@/components/opportunity-anatomy";
import { PageIntro, PageShell, SectionHeading } from "@/components/site-chrome";
import { GrowthAgentRobotOrbit } from "@/components/ui/growth-agent-robot-orbit";
import { createPageMetadata } from "@/lib/site-metadata";

export const metadata: Metadata = createPageMetadata({ title: "Product Preview", description: "See the planned GrowthAgent AI workflow for organizing Florida construction opportunities into evidence-aware review packages.", path: "/product" });

export default function ProductPage() {
  return (
    <PageShell>
      <main id="main-content">
        <PageIntro
          label="Product"
          title="A construction opportunity intelligence layer, with the source still attached."
          text="GrowthAgent AI is being built to help Florida construction companies find, organize, and review public-source opportunities by division, geography, project fit, and source evidence. This is a product-direction preview, not a claim of live coverage."
        />

        <section className="px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
          <div className="mx-auto max-w-[90rem]">
            <SectionHeading label="Planned review surface" title="A command center designed around the evidence." text="The fictional interface keeps source context, planned division classification, service-area fit, and operator judgment together." />
            <div className="mt-12"><ConstructionOpportunityPreview /></div>
          </div>
        </section>

        <SystemOrganizesVisual />

        <section className="border-y border-white/10 bg-[#05080d] px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
          <div className="mx-auto max-w-[90rem]">
            <SectionHeading label="Opportunity anatomy" title="From source facts to a human-controlled decision." text="The example below is entirely fictional. It shows the categories a future review package could contain without representing an active record, source, score, contact, or customer." />
            <div className="mt-12"><OpportunityAnatomy /></div>
          </div>
        </section>

        <BuyerPipelineSection />
        <SourceCategoriesSection />

        <section className="px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
          <div className="mx-auto max-w-[90rem]">
            <GrowthAgentRobotOrbit />
          </div>
        </section>

        <section className="border-t border-white/10 px-5 py-16 sm:px-8 lg:px-12">
          <div className="mx-auto flex max-w-[90rem] flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="flex items-center gap-2 text-sm text-slate-300">
              <Circle className="size-4 text-[#42d6c7]" aria-hidden="true" />
              This preview does not guarantee availability, source coverage, customer delivery, or a launch date.
            </p>
            <Link href="/divisions" className="ga-button justify-center">Explore Planned Divisions<ArrowRight className="size-4" aria-hidden="true" /></Link>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
