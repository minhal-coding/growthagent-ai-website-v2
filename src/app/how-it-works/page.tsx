import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { PageIntro, PageShell } from "@/components/site-chrome";
import { workflowSteps } from "@/components/site-data";
import { createPageMetadata } from "@/lib/site-metadata";

export const metadata: Metadata = createPageMetadata({ title: "How It Works", description: "How GrowthAgent AI is designing a Florida construction opportunity workflow around evidence and human review.", path: "/how-it-works" });

export default function HowItWorksPage() {
  return (
    <PageShell>
      <main id="main-content">
        <PageIntro label="How it works" title="Evidence, context, and a human decision." text="The planned Florida experience is a review workflow—not an autonomous outreach system. Every stage is intended to make the source and the operator's role clearer." />
        <section className="px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
          <ol className="mx-auto max-w-5xl">
            {workflowSteps.map((step, index) => (
              <li key={step.title} className="grid gap-6 border-b border-white/10 py-10 first:pt-0 last:border-b-0 sm:grid-cols-[7rem_1fr]">
                <div className="flex items-center gap-3 sm:block"><p className="text-4xl font-extrabold tracking-[-0.05em] text-[#d4af37]">{step.number}</p><step.icon className="mt-0 size-5 text-[#42d6c7] sm:mt-5" aria-hidden="true" /></div>
                <div>
                  <h2 className="text-3xl font-extrabold tracking-[-0.04em] text-white sm:text-4xl">{step.title}</h2>
                  <p className="mt-4 text-lg leading-8 text-slate-300">{step.text}</p>
                  <p className="mt-5 border-l-2 border-[#42d6c7]/60 pl-4 text-sm leading-6 text-slate-400">{step.detail}</p>
                  {index === 3 ? <p className="mt-5 text-sm font-semibold text-[#42d6c7]">The person—not the system—would own the next step.</p> : null}
                </div>
              </li>
            ))}
          </ol>
        </section>
        <section className="border-t border-white/10 bg-[#070a10] px-5 py-16 sm:px-8 lg:px-12">
          <div className="mx-auto flex max-w-5xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div><h2 className="text-2xl font-extrabold text-white">Review the planned Florida scope.</h2><p className="mt-2 text-sm leading-6 text-slate-400">Trade, service area, record types, and evidence requirements remain validation topics.</p></div>
            <Link href="/florida-launch" className="ga-button justify-center">Explore Florida Launch<ArrowRight className="size-4" aria-hidden="true" /></Link>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
