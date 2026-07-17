import Link from "next/link";
import { ArrowRight, Check, MapPin } from "lucide-react";

import { ConstructionOpportunityPreview } from "@/components/construction-opportunity-preview";
import { PageShell, SectionHeading } from "@/components/site-chrome";
import { launchAreas, trustPrinciples, workflowSteps } from "@/components/site-data";

export function MarketingHome() {
  return (
    <PageShell>
      <main id="main-content">
        <section className="ga-grid-bg relative overflow-hidden border-b border-white/10 px-5 py-14 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-96 bg-[radial-gradient(circle_at_72%_10%,rgba(66,214,199,0.09),transparent_38%),radial-gradient(circle_at_18%_25%,rgba(212,175,55,0.08),transparent_32%)]" />
          <div className="relative mx-auto grid max-w-[90rem] items-center gap-12 xl:grid-cols-[0.82fr_1.18fr] xl:gap-16">
            <div className="max-w-3xl">
              <h1 className="text-balance text-5xl font-extrabold leading-[0.98] tracking-[-0.055em] text-white sm:text-6xl lg:text-7xl xl:text-[5.25rem]">
                Find the <span className="text-[#42d6c7]">Florida construction</span> opportunities worth reviewing.
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl sm:leading-9">
                GrowthAgent AI helps Florida contractors discover, verify, rank, and review source-backed opportunities from public permits, planning records, and procurement notices.
              </p>
              <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-500">
                Early access. Florida only. Construction only. Human review stays in control.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/early-access" className="ga-button justify-center py-3 sm:justify-start">
                  Join Florida Early Access
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
                <Link href="/how-it-works" className="ga-button-secondary justify-center py-3 sm:justify-start">
                  See How It Works
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
            <ConstructionOpportunityPreview compact />
          </div>
        </section>

        <section id="how-it-works" className="px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
          <div className="mx-auto max-w-[90rem]">
            <SectionHeading
              label="Source to review"
              title="From public record to review-ready opportunity."
              text="A focused workflow for finding evidence, checking fit, and keeping a person in control."
            />
            <ol className="mt-14 grid border-y border-white/10 lg:grid-cols-4">
              {workflowSteps.map((step, index) => (
                <li key={step.title} className="relative border-b border-white/10 px-1 py-8 last:border-b-0 lg:border-b-0 lg:border-r lg:px-7 lg:last:border-r-0">
                  <div className="flex items-center gap-4">
                    <span className="text-sm font-bold text-[#d4af37]">{step.number}</span>
                    <span className="grid size-10 place-items-center rounded-xl border border-white/12 bg-white/[0.03] text-[#42d6c7]">
                      <step.icon className="size-5" aria-hidden="true" />
                    </span>
                  </div>
                  <h3 className="mt-8 text-2xl font-extrabold tracking-[-0.03em] text-white">{step.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-400">{step.text}</p>
                  <p className="mt-5 text-xs font-semibold leading-5 text-slate-500">{step.detail}</p>
                  {index < workflowSteps.length - 1 ? <ArrowRight className="absolute -right-2.5 top-10 z-10 hidden size-5 bg-[#05070d] text-[#d4af37] lg:block" aria-hidden="true" /> : null}
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="product" className="border-y border-white/10 bg-[#070a10] px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
          <div className="mx-auto max-w-[90rem]">
            <div className="grid items-end gap-8 lg:grid-cols-[1fr_auto]">
              <SectionHeading
                label="Product experience"
                title="Evidence beside the decision."
                text="The review surface is designed to keep source context, service-area fit, and operator judgment in the same place."
              />
              <Link href="/product" className="ga-text-link">
                Explore the product
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </div>
            <div className="mt-12">
              <ConstructionOpportunityPreview />
            </div>
          </div>
        </section>

        <section className="px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
          <div className="mx-auto grid max-w-[90rem] gap-16 xl:grid-cols-[0.92fr_1.08fr] xl:items-center">
            <div>
              <SectionHeading
                label="Florida launch"
                title="Starting in Florida. Built around evidence."
                text="The initial launch is focused on Florida construction teams and selected public records. Counties shown are launch examples, not a claim of statewide coverage."
              />
              <div className="relative mt-10 min-h-[27rem] overflow-hidden rounded-2xl border border-white/10 bg-[#070b12] p-6">
                <svg viewBox="0 0 420 330" role="img" aria-label="Abstract Florida launch coverage diagram" className="absolute inset-0 h-full w-full text-[#42d6c7] opacity-75">
                  <path d="M72 55 259 60l9 34 22 23 2 42 34 32 4 30 29 28-5 22-20-8-25-28-21-11-14-29-34-22-15-42-28-20-22-32-23-15-18-31-54-19-23-27Z" fill="none" stroke="currentColor" strokeWidth="2" />
                  <path d="M55 44h245M48 91h250M69 138h236M100 185h221M127 232h215" stroke="currentColor" strokeOpacity=".12" />
                  <circle cx="248" cy="164" r="8" fill="#d4af37" />
                  <circle cx="260" cy="143" r="5" fill="#42d6c7" />
                  <circle cx="266" cy="187" r="5" fill="#42d6c7" />
                  <circle cx="248" cy="164" r="54" fill="none" stroke="currentColor" strokeOpacity=".25" />
                  <circle cx="248" cy="164" r="91" fill="none" stroke="currentColor" strokeOpacity=".12" />
                </svg>
                <div className="relative ml-auto flex max-w-xs flex-col gap-3 pt-44 sm:pt-8">
                  {launchAreas.map((area) => (
                    <div key={area} className="flex items-center gap-3 rounded-xl border border-white/10 bg-[#05070d]/90 px-4 py-3 text-sm font-semibold text-slate-200 backdrop-blur-sm">
                      <MapPin className="size-4 text-[#d4af37]" aria-hidden="true" />
                      {area}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#d4af37]">Trust & safety ledger</p>
              <div className="mt-6 border-y border-white/10">
                {trustPrinciples.map((item) => (
                  <div key={item.title} className="grid gap-4 border-b border-white/10 py-6 last:border-b-0 sm:grid-cols-[auto_1fr_auto] sm:items-center">
                    <span className="grid size-11 place-items-center rounded-xl border border-white/10 text-[#42d6c7]">
                      <item.icon className="size-5" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="font-bold text-white">{item.title}</h3>
                      <p className="mt-1 text-sm leading-6 text-slate-400">{item.text}</p>
                    </div>
                    <span className="text-xs font-semibold text-slate-500 sm:text-right">{item.meta}</span>
                  </div>
                ))}
              </div>
              <Link href="/trust-safety" className="ga-text-link mt-8">
                Read our trust approach
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

        <section className="border-t border-white/10 px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
          <div className="mx-auto grid max-w-[90rem] gap-10 rounded-2xl border border-[#d4af37]/35 bg-[linear-gradient(135deg,rgba(212,175,55,0.08),rgba(66,214,199,0.035))] p-7 sm:p-12 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#42d6c7]">Early access</p>
              <h2 className="mt-5 max-w-4xl text-balance text-4xl font-extrabold leading-[1.02] tracking-[-0.05em] text-white sm:text-6xl">Help shape the Florida launch.</h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">Tell us your trade, service area, and the kinds of public opportunities your team wants to review.</p>
              <p className="mt-4 flex items-center gap-2 text-sm text-slate-500">
                <Check className="size-4 text-[#42d6c7]" aria-hidden="true" />
                Early-access requests are reviewed by a person.
              </p>
            </div>
            <Link href="/early-access" className="ga-button justify-center py-3.5">
              Request Early Access
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
