import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Circle, FileCheck2, HardHat, MapPinned, UserCheck } from "lucide-react";

import { CinematicWorkflow } from "@/components/cinematic-workflow";
import { ConstructionOpportunityPreview } from "@/components/construction-opportunity-preview";
import { FloridaTrustSection } from "@/components/florida-trust-section";
import { PageShell, SectionHeading } from "@/components/site-chrome";

export function MarketingHome() {
  return (
    <PageShell>
      <main id="main-content">
        <section className="ga-grid-bg relative overflow-hidden border-b border-white/10 px-5 pb-0 pt-14 sm:px-8 sm:pt-20 lg:px-12 lg:pt-24">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-[42rem] bg-[radial-gradient(circle_at_74%_16%,rgba(66,214,199,0.13),transparent_38%),radial-gradient(circle_at_13%_18%,rgba(228,189,69,0.1),transparent_32%)]" aria-hidden="true" />
          <div className="relative mx-auto grid max-w-[90rem] gap-12 xl:grid-cols-[0.84fr_1.16fr] xl:items-start xl:gap-12">
            <div className="max-w-3xl xl:pb-20">
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/12 bg-black/25 px-3 py-2 text-[0.68rem] font-extrabold uppercase tracking-[0.16em] text-slate-300">
                <HardHat className="size-3.5 text-[#e4bd45]" aria-hidden="true" />
                Florida construction product-direction preview
              </div>
              <h1 className="max-w-2xl text-balance text-[3.35rem] font-extrabold leading-[0.97] tracking-[-0.055em] text-white sm:text-6xl lg:text-[4.45rem] xl:text-[4.65rem]">
                Find the <span className="text-[#42d6c7]">Florida construction</span> opportunities worth reviewing.
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl sm:leading-9">
                GrowthAgent AI is being designed to help Florida contractors evaluate public construction opportunity records with evidence, service-area context, and human judgment in one review surface.
              </p>
              <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-400">
                Product-direction preview. Permit, planning, procurement, source access, and geographic coverage remain under evaluation.
              </p>
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
              <Image src="/construction-blueprint.png" alt="" width={1800} height={600} className="pointer-events-none mt-7 h-auto w-full max-w-2xl opacity-50 mix-blend-screen" aria-hidden="true" priority />
            </div>

            <div className="relative min-w-0 xl:pb-20 xl:pt-16">
              <div className="pointer-events-none absolute -inset-10 bg-[radial-gradient(circle_at_center,rgba(66,214,199,0.11),transparent_67%)]" aria-hidden="true" />
              <div className="relative">
                <ConstructionOpportunityPreview compact />
              </div>
            </div>
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

        <CinematicWorkflow />

        <section id="product" className="relative overflow-hidden border-y border-white/10 bg-[#05080d] px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(228,189,69,0.06),transparent_35%)]" aria-hidden="true" />
          <div className="relative mx-auto max-w-[90rem]">
            <div className="grid items-end gap-8 lg:grid-cols-[1fr_auto]">
              <SectionHeading
                label="Product experience"
                title="A command center designed around the evidence."
                text="The review surface keeps fictional source context, service-area fit, trade labels, and operator judgment together without suggesting active records or automatic outreach."
              />
              <Link href="/product" className="ga-text-link">
                Explore the product
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </div>
            <div className="mt-12 hidden lg:block">
              <ConstructionOpportunityPreview />
            </div>
            <div className="mt-12 rounded-2xl border border-white/10 bg-white/[0.025] p-6 lg:hidden">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#42d6c7]">Product summary</p>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-300">
                <li>• Fictional examples show the intended review layout.</li>
                <li>• Source, service-area, and status labels are illustrative only.</li>
                <li>• A human remains responsible for every decision and next step.</li>
              </ul>
              <Link href="/product" className="ga-text-link mt-6">View the full product preview<ArrowRight className="size-4" aria-hidden="true" /></Link>
            </div>
          </div>
        </section>

        <FloridaTrustSection />

        <section className="ga-grid-bg relative overflow-hidden px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_75%_45%,rgba(66,214,199,0.1),transparent_34%),radial-gradient(circle_at_15%_30%,rgba(228,189,69,0.09),transparent_32%)]" aria-hidden="true" />
          <div className="relative mx-auto grid max-w-[90rem] items-center gap-12 overflow-hidden rounded-[1.7rem] border border-[#e4bd45]/30 bg-[#070b12]/90 p-7 shadow-[0_38px_110px_rgba(0,0,0,0.38)] sm:p-12 lg:grid-cols-[1fr_0.55fr] lg:p-14">
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
