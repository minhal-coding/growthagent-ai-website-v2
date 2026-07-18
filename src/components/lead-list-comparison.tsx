import Link from "next/link";
import { ArrowRight, Check, Circle, FileCheck2, ListX, ShieldCheck, SlidersHorizontal, UserCheck } from "lucide-react";

import { GlowCard, MotionStagger } from "@/components/ui/motion-reveal";

const ordinaryLeadList = ["Limited context", "Unclear source", "Mixed trades", "Duplicate records", "Unexplained ranking", "Uncertain contact quality", "Difficult to audit"];
const reviewReady = ["Original source context retained", "Construction division and trade classification", "Service-area and project-fit explanation", "Duplicate and exclusion checks", "Evidence completeness indicators", "Human-review status", "Clear next-step decision"];
const packageLayers = [
  { icon: FileCheck2, label: "Source record" },
  { icon: SlidersHorizontal, label: "Division and fit" },
  { icon: UserCheck, label: "Human decision" },
];

export function LeadListComparison({ compact = false }: { compact?: boolean }) {
  const ordinaryItems = compact ? ordinaryLeadList.slice(0, 4) : ordinaryLeadList;
  const reviewItems = compact ? reviewReady.slice(0, 4) : reviewReady;

  return (
    <section aria-labelledby="comparison-title" className={`ga-content-visibility relative overflow-hidden border-y border-white/10 bg-[#05080d] px-5 sm:px-8 lg:px-12 ${compact ? "py-16 sm:py-20" : "py-20 sm:py-28"}`}>
      <div className="pointer-events-none absolute inset-0 ga-blueprint opacity-20" aria-hidden="true" />
      <div className="relative mx-auto max-w-[90rem]">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-extrabold uppercase tracking-[0.23em] text-[#e4bd45]">Review package</p>
          <h2 id="comparison-title" className={`mt-5 text-balance font-extrabold tracking-[-0.05em] text-white ${compact ? "text-4xl sm:text-5xl" : "text-4xl sm:text-6xl"}`}>More than a lead list.</h2>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">The planned experience is designed to preserve the record, explain the fit, and make the human decision auditable—not deliver an unverified list.</p>
        </div>

        <MotionStagger className="mt-12 grid gap-5 lg:grid-cols-2">
          <GlowCard className="h-full rounded-2xl border border-white/10 bg-[#080b11] p-6 sm:p-8">
            <div className="flex items-center justify-between gap-5 border-b border-white/10 pb-6">
              <div className="flex items-center gap-3"><span className="grid size-11 place-items-center rounded-xl border border-white/10 text-slate-500"><ListX className="size-5" aria-hidden="true" /></span><div><p className="text-xs font-extrabold uppercase tracking-[0.16em] text-slate-500">Ordinary list pattern</p><h3 className="mt-1 text-2xl font-extrabold text-white">Ordinary lead list</h3></div></div>
              <span className="text-xs font-bold text-slate-500">Limited review context</span>
            </div>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {ordinaryItems.map((item) => <li key={item} className="flex items-center gap-2.5 rounded-xl border border-white/[0.07] bg-black/20 px-3 py-3 text-sm text-slate-400"><Circle className="size-3.5 shrink-0 text-slate-600" aria-hidden="true" />{item}</li>)}
            </ul>
          </GlowCard>

          <GlowCard tone="gold" className="h-full rounded-2xl border border-[#e4bd45]/35 bg-[linear-gradient(145deg,rgba(228,189,69,0.075),rgba(66,214,199,0.025))] p-6 sm:p-8">
            <div className="flex items-center justify-between gap-5 border-b border-white/10 pb-6">
              <div className="flex items-center gap-3"><span className="grid size-11 place-items-center rounded-xl border border-[#42d6c7]/25 text-[#42d6c7]"><ShieldCheck className="size-5" aria-hidden="true" /></span><div><p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#e4bd45]">Planned review package</p><h3 className="mt-1 text-2xl font-extrabold text-white">GrowthAgent AI opportunity</h3></div></div>
              <span className="text-xs font-bold text-[#42d6c7]">Designed for review</span>
            </div>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {reviewItems.map((item) => <li key={item} className="flex items-center gap-2.5 rounded-xl border border-[#42d6c7]/15 bg-[#42d6c7]/[0.025] px-3 py-3 text-sm font-semibold text-slate-200"><span className="grid size-5 shrink-0 place-items-center rounded-full border border-[#42d6c7]/50 text-[#42d6c7]"><Check className="size-3" aria-hidden="true" /></span>{item}</li>)}
            </ul>
          </GlowCard>
        </MotionStagger>
        {compact ? (
          <div className="mt-6 grid gap-4 rounded-2xl border border-white/10 bg-black/20 p-5 md:grid-cols-[1fr_auto] md:items-center">
            <div className="grid gap-3 sm:grid-cols-3">
              {packageLayers.map(({ icon: Icon, label }) => <p key={label} className="flex items-center gap-2 text-sm font-bold text-slate-200"><Icon className="size-4 text-[#42d6c7]" aria-hidden="true" />{label}</p>)}
            </div>
            <Link href="/product" className="ga-text-link">See the full opportunity package<ArrowRight className="size-4" aria-hidden="true" /></Link>
          </div>
        ) : <p className="mt-6 text-center text-xs leading-5 text-slate-500">This is a planned review-package comparison. It does not claim every capability is operational today.</p>}
      </div>
    </section>
  );
}
