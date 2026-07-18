import { ArrowRight, Building2, Check, Circle, FileCheck2, FileSearch, Layers3, MapPinned, Settings2, ShieldCheck, UserCheck } from "lucide-react";

import { MotionReveal, MotionStagger } from "@/components/ui/motion-reveal";

const sourceCategories = [
  [FileSearch, "Permit-record categories", "Candidate public permit information evaluated before any source activation."],
  [MapPinned, "Planning and development records", "Candidate planning, agenda, application, and development record workflows."],
  [FileCheck2, "Procurement and bid notices", "Candidate publicly posted solicitations and supporting procurement information."],
  [ShieldCheck, "Other approved public construction sources", "Only sources with validated access, evidence handling, and owner approval."],
] as const;

export function SourceCategoriesSection() {
  return (
    <section aria-labelledby="source-categories-title" className="ga-content-visibility border-y border-white/10 bg-[#06090f] px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
      <div className="mx-auto max-w-[90rem]">
        <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
          <div><p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#42d6c7]">Candidate source categories</p><h2 id="source-categories-title" className="mt-5 text-balance text-4xl font-extrabold tracking-[-0.05em] text-white sm:text-6xl">Find relevant public projects without losing the source.</h2></div>
          <p className="max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">Candidate sources remain under evaluation and must be validated before activation. No source below is represented as live.</p>
        </div>
        <MotionStagger className="mt-12 grid border-y border-white/10 md:grid-cols-2 xl:grid-cols-4">
          {sourceCategories.map(([Icon, title, text]) => (
            <article key={title} className="h-full border-b border-white/10 px-1 py-7 md:border-r md:px-6 xl:border-b-0 xl:last:border-r-0">
              <Icon className="size-6 text-[#e4bd45]" aria-hidden="true" />
              <h3 className="mt-6 text-xl font-extrabold leading-6 text-white">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">{text}</p>
              <p className="mt-5 flex items-center gap-2 text-[0.65rem] font-extrabold uppercase tracking-[0.12em] text-[#42d6c7]"><Circle className="size-3" aria-hidden="true" /> Validated before activation</p>
            </article>
          ))}
        </MotionStagger>
      </div>
    </section>
  );
}

export function SystemOrganizesVisual() {
  const cards = [
    { label: "01 · Source record", title: "Original context", text: "Fictional record, jurisdiction, date, description, and evidence slot.", icon: FileSearch, className: "relative z-10" },
    { label: "02 · Division classification", title: "Trade relevance", text: "Planned division, trade, and representative-scope classification.", icon: Layers3, className: "relative z-20 -mt-4 ml-5" },
    { label: "03 · Review package", title: "Human decision", text: "Fit explanation, exclusions, evidence status, and controlled next step.", icon: UserCheck, className: "relative z-30 -mt-4 ml-10" },
  ];
  return (
    <section aria-labelledby="organizes-title" className="ga-content-visibility px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
      <div className="mx-auto grid max-w-[90rem] items-center gap-14 lg:grid-cols-[0.82fr_1.18fr]">
        <div><p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#e4bd45]">What the system organizes</p><h2 id="organizes-title" className="mt-5 text-balance text-4xl font-extrabold tracking-[-0.05em] text-white sm:text-6xl">Source record. Division intelligence. Review package.</h2><p className="mt-5 text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">Instead of delivering an unverified list, the planned workflow keeps the original record attached while organizing relevance for a human reviewer.</p></div>
        <MotionReveal className="mx-auto w-full max-w-2xl">
          <div className="rounded-2xl border border-white/10 bg-[#060a10] p-5 sm:p-8">
            {cards.map((card) => <div key={card.label} className={`${card.className} rounded-2xl border border-white/12 bg-[#090d14] p-5 shadow-[0_24px_70px_rgba(0,0,0,0.34)] sm:p-6`}><div className="grid grid-cols-[auto_1fr_auto] items-start gap-4"><span className="grid size-11 place-items-center rounded-xl border border-[#42d6c7]/25 text-[#42d6c7]"><card.icon className="size-5" aria-hidden="true" /></span><div><p className="text-[0.65rem] font-extrabold uppercase tracking-[0.15em] text-[#e4bd45]">{card.label}</p><h3 className="mt-1 text-xl font-extrabold text-white">{card.title}</h3><p className="mt-2 text-sm leading-6 text-slate-400">{card.text}</p></div><ArrowRight className="mt-2 size-4 text-slate-600" aria-hidden="true" /></div></div>)}
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}

const audiences = ["Specialty contractors", "Subcontractors", "General contractors", "Estimators", "Business-development teams", "Franchise and multi-location construction operators"];
const configuration = ["Divisions and representative subtrades", "Florida service areas", "Preferred project types", "Keywords and exclusions", "Opportunity recency", "Evidence requirements", "Review rules"];

export function BuyerPipelineSection() {
  return (
    <section aria-labelledby="buyer-title" className="ga-content-visibility border-y border-white/10 bg-[#06090f] px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
      <div className="mx-auto max-w-[90rem]">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div><p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#42d6c7]">Buyer-oriented configuration</p><h2 id="buyer-title" className="mt-5 text-balance text-4xl font-extrabold tracking-[-0.05em] text-white sm:text-6xl">Built for construction teams that need a more disciplined pipeline.</h2><p className="mt-5 text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">Built for estimators and business-development teams who cannot waste hours searching unrelated records. Any customer-specific delivery remains planned and owner-approval dependent.</p></div>
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-black/20 p-6"><Building2 className="size-6 text-[#e4bd45]" aria-hidden="true" /><h3 className="mt-5 text-xl font-extrabold text-white">Teams under consideration</h3><ul className="mt-5 space-y-3">{audiences.map((item) => <li key={item} className="flex gap-2.5 text-sm text-slate-300"><Circle className="mt-0.5 size-3.5 shrink-0 text-[#42d6c7]" aria-hidden="true" />{item}</li>)}</ul></div>
            <div className="rounded-2xl border border-[#e4bd45]/30 bg-[#e4bd45]/[0.04] p-6"><Settings2 className="size-6 text-[#42d6c7]" aria-hidden="true" /><h3 className="mt-5 text-xl font-extrabold text-white">Planned configuration</h3><ul className="mt-5 space-y-3">{configuration.map((item) => <li key={item} className="flex gap-2.5 text-sm text-slate-300"><Check className="mt-0.5 size-3.5 shrink-0 text-[#e4bd45]" aria-hidden="true" />{item}</li>)}</ul></div>
          </div>
        </div>
      </div>
    </section>
  );
}

const currentScope = ["Public-source discovery", "Evidence preservation", "Division classification", "Fit explanation", "Internal human review"];
const futureScope = ["Customer-specific delivery", "Contact-path enrichment using evidence", "Outreach drafting", "Approval workflows", "Reply tracking", "Follow-up and meeting workflows"];

export function RoadmapSection() {
  return (
    <section aria-labelledby="roadmap-title" className="ga-content-visibility relative overflow-hidden px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
      <div className="pointer-events-none absolute inset-0 ga-blueprint opacity-20" aria-hidden="true" />
      <div className="relative mx-auto max-w-[90rem]">
        <div className="mx-auto max-w-4xl text-center"><p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#e4bd45]">Controlled product phases</p><h2 id="roadmap-title" className="mt-5 text-balance text-4xl font-extrabold tracking-[-0.05em] text-white sm:text-6xl">What happens after human review.</h2><p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">The current website stops at internal review. Any delivery, enrichment, outreach, reply, or meeting workflow is a future capability requiring separate owner approval and evidence.</p></div>
        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          <div className="rounded-2xl border border-[#42d6c7]/30 bg-[#42d6c7]/[0.035] p-6 sm:p-8"><p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#42d6c7]">Current website scope</p><h3 className="mt-3 text-2xl font-extrabold text-white">Opportunity review foundation</h3><ul className="mt-6 grid gap-3 sm:grid-cols-2">{currentScope.map((item) => <li key={item} className="flex gap-2.5 rounded-xl border border-white/10 bg-black/20 p-3 text-sm font-semibold text-slate-200"><Check className="size-4 shrink-0 text-[#42d6c7]" aria-hidden="true" />{item}</li>)}</ul><p className="mt-5 text-xs leading-5 text-slate-500">Private-pilot status is not claimed because this repository contains no owner-approved evidence for that label.</p></div>
          <div className="rounded-2xl border border-[#e4bd45]/30 bg-[#e4bd45]/[0.035] p-6 sm:p-8"><p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#e4bd45]">Future owner-approved capabilities</p><h3 className="mt-3 text-2xl font-extrabold text-white">Controlled next-step workflows</h3><ul className="mt-6 grid gap-3 sm:grid-cols-2">{futureScope.map((item) => <li key={item} className="flex gap-2.5 rounded-xl border border-white/10 bg-black/20 p-3 text-sm font-semibold text-slate-300"><Circle className="size-4 shrink-0 text-[#e4bd45]" aria-hidden="true" />{item}</li>)}</ul><p className="mt-5 text-xs leading-5 text-slate-500">Future means not active. Each capability requires owner approval, evidence, privacy review, and operating controls.</p></div>
        </div>
      </div>
    </section>
  );
}
