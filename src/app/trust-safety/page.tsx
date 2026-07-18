import type { Metadata } from "next";
import { Plus } from "lucide-react";

import { PageIntro, PageShell, SectionHeading } from "@/components/site-chrome";
import { faqs, trustPrinciples } from "@/components/site-data";
import { createPageMetadata } from "@/lib/site-metadata";

export const metadata: Metadata = createPageMetadata({ title: "Trust & Safety", description: "How the GrowthAgent AI preview distinguishes planned controls, fictional data, unverified coverage, and human responsibility.", path: "/trust-safety" });

export default function TrustSafetyPage() {
  return (
    <PageShell>
      <main id="main-content">
        <PageIntro
          label="Trust & safety"
          title="Claims should be as reviewable as the opportunities."
          text="The V2 website describes a planned Florida construction workflow under validation. It does not claim completed controls, real contacts, active source coverage, or autonomous outreach."
        />
        <section className="px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
          <div className="mx-auto max-w-[90rem] border-y border-white/10">
            {trustPrinciples.map((item) => (
              <article key={item.title} className="grid gap-5 border-b border-white/10 py-8 last:border-b-0 md:grid-cols-[4rem_0.7fr_1.3fr_auto] md:items-center">
                <span className="grid size-12 place-items-center rounded-xl border border-white/10 text-[#42d6c7]">
                  <item.icon className="size-5" aria-hidden="true" />
                </span>
                <h2 className="text-xl font-extrabold text-white">{item.title}</h2>
                <p className="text-sm leading-6 text-slate-400">{item.text}</p>
                <span className="text-sm font-semibold text-[#e4bd45] md:text-right">{item.meta}</span>
              </article>
            ))}
          </div>
        </section>
        <section className="border-t border-white/10 bg-[#070a10] px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
          <div className="mx-auto max-w-4xl">
            <SectionHeading title="Straight answers for an early-stage launch." text="These answers define the current website scope and should be updated as workflows are independently verified." />
            <div className="mt-10 border-y border-white/10">
              {faqs.map(([question, answer], index) => (
                <details key={question} open={index === 0} className="group border-b border-white/10 py-5 last:border-b-0">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-bold text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#42d6c7]">
                    {question}
                    <Plus className="size-4 shrink-0 text-[#42d6c7] transition group-open:rotate-45" aria-hidden="true" />
                  </summary>
                  <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
