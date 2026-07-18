import Link from "next/link";
import { ArrowRight, Building2, Check, FileCheck2, UserCheck } from "lucide-react";

const walkthroughStages = [
  { label: "Discover + preserve", title: "Fictional tenant-improvement record", text: "Candidate planning-record category with an example evidence slot.", icon: FileCheck2 },
  { label: "Classify + explain", title: "Illustrative Division 09 fit", text: "Example service-area match, recent-record state, and no example exclusion.", icon: Building2 },
  { label: "Human review", title: "A person decides the next step", text: "Review is required before any delivery, enrichment, or outreach decision.", icon: UserCheck },
] as const;

export function FictionalProcessWalkthrough() {
  return (
    <section aria-labelledby="walkthrough-title" className="ga-content-visibility border-y border-white/10 bg-[#05080d] px-5 py-20 sm:px-8 sm:py-24 lg:px-12">
      <div className="mx-auto max-w-[90rem]">
        <div className="grid items-end gap-8 lg:grid-cols-[1fr_auto]">
          <div className="max-w-4xl">
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#42d6c7]">Fictional end-to-end walkthrough</p>
            <h2 id="walkthrough-title" className="mt-5 text-balance text-4xl font-extrabold tracking-[-0.05em] text-white sm:text-6xl">One record. Six stages. One human decision.</h2>
            <p className="mt-5 max-w-3xl text-base leading-7 text-slate-300">This concise example shows the process without representing a real jurisdiction, source, opportunity, contact, score, or customer.</p>
          </div>
          <Link href="/product" className="ga-text-link">Inspect the full opportunity package<ArrowRight className="size-4" aria-hidden="true" /></Link>
        </div>

        <ol className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 lg:grid-cols-3">
          {walkthroughStages.map((stage, index) => (
            <li key={stage.label} className="relative bg-[#070b11] p-6 sm:p-8">
              <div className="flex items-center justify-between gap-4">
                <span className="grid size-11 place-items-center rounded-xl border border-[#42d6c7]/25 text-[#42d6c7]"><stage.icon className="size-5" aria-hidden="true" /></span>
                <span className="grid size-6 place-items-center rounded-full border border-[#e4bd45]/40 text-[#e4bd45]"><Check className="size-3.5" aria-hidden="true" /></span>
              </div>
              <p className="mt-6 text-xs font-extrabold uppercase tracking-[0.16em] text-[#e4bd45]">{stage.label}</p>
              <h3 className="mt-3 text-2xl font-extrabold tracking-[-0.035em] text-white">{stage.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">{stage.text}</p>
              {index < walkthroughStages.length - 1 ? <ArrowRight className="absolute bottom-6 right-6 size-4 text-[#e4bd45]/50" aria-hidden="true" /> : null}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
