import { ClipboardCheck, FileSearch, Search, SlidersHorizontal } from "lucide-react";

import { SplineScene } from "@/components/ui/splite";

const stages = [
  { id: "discover", title: "Evaluate candidate records", text: "Evaluate candidate public-source workflows for construction-relevant records.", icon: Search },
  { id: "verify", title: "Design for evidence", text: "Design the review surface to keep an evidence slot and record context beside the opportunity.", icon: FileSearch },
  { id: "rank", title: "Explore review organization", text: "Explore trade fit and service area as explainable review signals.", icon: SlidersHorizontal },
  { id: "review", title: "Keep a human decision", text: "Keep a person responsible for confirming details and deciding what happens next.", icon: ClipboardCheck },
];

export function GrowthAgentRobotOrbit() {
  return (
    <section aria-labelledby="review-assistant-title" className="overflow-hidden rounded-2xl border border-white/12 bg-black">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 px-5 py-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#42d6c7]">Demonstration experience</p>
          <h2 id="review-assistant-title" className="mt-1 text-lg font-extrabold text-white">A planned review assistant, not an autonomous sales team</h2>
        </div>
        <span className="rounded-full border border-[#d4af37]/30 px-3 py-1.5 text-xs font-semibold text-[#f2c94c]">Human decision required</span>
      </div>
      <div className="grid lg:grid-cols-[1fr_1.05fr]">
        <div className="relative overflow-hidden border-b border-white/10 lg:border-b-0 lg:border-r">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(66,214,199,0.08),transparent_48%)]" />
          <SplineScene scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode" className="relative h-[31rem] w-full" />
          <p className="relative border-t border-white/10 bg-black/80 p-4 text-sm leading-6 text-slate-300">
            The robot is an optional visual guide. It does not imply autonomous outreach, live production activity, or independent decision-making.
          </p>
        </div>
        <ol className="grid gap-3 p-4 sm:p-6">
          {stages.map((stage, index) => (
            <li key={stage.id} className="grid grid-cols-[auto_1fr_auto] items-start gap-4 rounded-xl border border-white/10 bg-white/[0.025] p-4 text-left">
              <span className="grid size-10 place-items-center rounded-xl border border-white/10 text-[#42d6c7]"><stage.icon className="size-5" aria-hidden="true" /></span>
              <span><span className="block font-bold text-white">{stage.title}</span><span className="mt-1 block text-sm leading-6 text-slate-400">{stage.text}</span></span>
              <span className="text-xs font-bold text-[#d4af37]">0{index + 1}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
