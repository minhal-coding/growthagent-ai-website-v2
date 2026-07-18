import Link from "next/link";
import { ArrowRight, Circle, FileCheck2, HardHat, MapPinned, UserCheck } from "lucide-react";

import { CinematicWorkflow } from "@/components/cinematic-workflow";
import { ConstructionOpportunityPreview } from "@/components/construction-opportunity-preview";
import { FloridaTrustSection } from "@/components/florida-trust-section";
import { HomepageDivisionTeaser } from "@/components/homepage-division-teaser";
import { LeadListComparison } from "@/components/lead-list-comparison";
import { PageShell } from "@/components/site-chrome";
import { MotionReveal } from "@/components/ui/motion-reveal";

export function MarketingHome() {
  return (
    <PageShell>
      <main id="main-content">
        <section className="ga-grid-bg relative overflow-hidden border-b border-white/10 px-5 pb-0 pt-14 sm:px-8 sm:pt-20 lg:px-12 lg:pt-24">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-[42rem] bg-[radial-gradient(circle_at_74%_16%,rgba(66,214,199,0.13),transparent_38%),radial-gradient(circle_at_13%_18%,rgba(228,189,69,0.1),transparent_32%)]" aria-hidden="true" />
          <div className="relative mx-auto grid max-w-[90rem] gap-12 xl:grid-cols-[0.84fr_1.16fr] xl:items-start xl:gap-12">
            <MotionReveal className="max-w-3xl xl:pb-20">
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/12 bg-black/25 px-3 py-2 text-[0.68rem] font-extrabold uppercase tracking-[0.16em] text-slate-300">
                <HardHat className="size-3.5 text-[#e4bd45]" aria-hidden="true" />
                Florida construction product-direction preview
              </div>
              <h1 className="max-w-2xl text-balance text-[3.35rem] font-extrabold leading-[0.97] tracking-[-0.055em] text-white sm:text-6xl lg:text-[4.45rem] xl:text-[4.65rem]">
                Find the <span className="text-[#42d6c7]">Florida construction</span> opportunities worth reviewing.
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl sm:leading-9">
                GrowthAgent AI is being built to help Florida construction companies find, organize, and review public-source opportunities by construction division, geography, project fit, and source evidence.
              </p>
              <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-400">
                Instead of delivering an unverified list, GrowthAgent AI is designed to preserve the original public record, classify the opportunity by trade, evaluate fit against the contractor&apos;s service area and priorities, remove duplicates and exclusions, and present the result for human review.
              </p>
              <p className="mt-3 max-w-2xl text-xs leading-5 text-slate-500">Product-direction preview. Source access, geographic coverage, and every customer-facing delivery workflow remain under evaluation.</p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link href="/florida-launch" className="ga-button justify-center py-3.5 sm:justify-start">
                  Explore Florida Launch
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
                <Link href="/early-access" className="ga-button-secondary justify-center py-3.5 sm:justify-start">
                  View Early Access Preview
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </div>
              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-xs font-semibold text-slate-400">
                <span className="inline-flex items-center gap-2"><Circle className="size-3 text-[#42d6c7]" aria-hidden="true" /> Evidence required</span>
                <span className="inline-flex items-center gap-2"><Circle className="size-3 text-[#e4bd45]" aria-hidden="true" /> Fictional demonstration data</span>
                <span className="inline-flex items-center gap-2"><Circle className="size-3 text-[#42d6c7]" aria-hidden="true" /> Human decision required</span>
              </div>
              <div className="ga-blueprint-art pointer-events-none mt-7 aspect-[3/1] w-full max-w-2xl bg-contain bg-bottom bg-no-repeat opacity-50" aria-hidden="true" />
            </MotionReveal>

            <MotionReveal className="relative min-w-0 xl:pb-20 xl:pt-16" delay={0.1} y={14}>
              <div className="relative">
                <ConstructionOpportunityPreview compact />
              </div>
            </MotionReveal>
          </div>

          <div className="relative mx-auto mt-14 max-w-[96rem] overflow-hidden border-x border-t border-white/10 bg-[#080c13]/80 px-5 py-6 sm:mt-6 sm:px-8">
            <div className="pointer-events-none absolute inset-0 ga-blueprint opacity-70" aria-hidden="true" />
            <div className="relative grid gap-4 text-xs font-bold uppercase tracking-[0.13em] text-slate-500 sm:grid-cols-3">
              <p className="flex items-center gap-2"><FileCheck2 className="size-4 text-[#42d6c7]" aria-hidden="true" /> Source context beside the record</p>
              <p className="flex items-center gap-2"><MapPinned className="size-4 text-[#e4bd45]" aria-hidden="true" /> Explicit service-area review</p>
              <p className="flex items-center gap-2"><UserCheck className="size-4 text-[#42d6c7]" aria-hidden="true" /> A person controls the next step</p>
            </div>
          </div>
        </section>

        <CinematicWorkflow compact />
        <LeadListComparison compact />
        <HomepageDivisionTeaser />
        <FloridaTrustSection compact />

        <section className="ga-content-visibility ga-grid-bg relative overflow-hidden px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_75%_45%,rgba(66,214,199,0.08),transparent_38%)]" aria-hidden="true" />
          <div className="relative mx-auto grid max-w-[90rem] items-center gap-10 overflow-hidden rounded-[1.7rem] border border-[#e4bd45]/30 bg-[#070b12]/95 p-7 shadow-[0_28px_80px_rgba(0,0,0,0.32)] sm:p-10 lg:grid-cols-[1fr_0.48fr] lg:p-12">
            <div className="relative z-10">
              <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-[#42d6c7]">Early access preview</p>
              <h2 className="mt-5 max-w-4xl text-balance text-4xl font-extrabold leading-[1] tracking-[-0.05em] text-white sm:text-6xl">Preview a future Florida construction intake.</h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">See the topics a future, owner-approved early-access intake could cover—without submitting or storing information.</p>
              <p className="mt-4 flex items-center gap-2 text-sm leading-6 text-slate-400">
                <Circle className="size-4 text-[#e4bd45]" aria-hidden="true" />
                The preview does not accept applications, send data, or connect to an endpoint.
              </p>
              <Link href="/early-access" className="ga-button-secondary mt-8 justify-center py-3.5">
                View Early Access Preview
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </div>

            <div className="relative mx-auto w-full max-w-sm">
              <div className="absolute -inset-7 rounded-full border border-[#42d6c7]/10" aria-hidden="true" />
              <div className="relative rotate-[2deg] rounded-[2.4rem] border border-white/15 bg-[#03050a] p-2.5 shadow-2xl">
                <div className="mx-auto mb-2 h-1.5 w-16 rounded-full bg-white/15" />
                <div className="overflow-hidden rounded-[1.8rem] border border-white/10 bg-[#080c13] p-5">
                  <p className="text-xs font-black text-white">GROWTH<span className="text-[#e4bd45]">AGENT</span></p>
                  <p className="mt-10 text-xs font-bold uppercase tracking-[0.16em] text-[#42d6c7]">Preview only</p>
                  <p className="mt-3 text-2xl font-extrabold leading-tight tracking-[-0.04em] text-white">A future intake, shown safely.</p>
                  <div className="mt-6 space-y-3">
                    {["Primary trade", "Florida service area", "Evidence expectations"].map((item) => <div key={item} className="rounded-lg border border-white/10 bg-black/20 px-3 py-3 text-xs text-slate-500">{item}</div>)}
                  </div>
                  <div className="mt-4 rounded-lg border border-[#e4bd45]/30 bg-[#e4bd45]/[0.08] px-3 py-3 text-center text-xs font-extrabold text-[#f2c94c]">Early Access Preview</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
