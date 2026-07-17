"use client";

import { useState } from "react";
import { ClipboardCheck, FileSearch, Search, SlidersHorizontal } from "lucide-react";

import { SplineScene } from "@/components/ui/splite";

const stages = [
  {
    id: "discover",
    title: "Discover records",
    text: "Review configured public sources for construction-relevant records.",
    icon: Search,
  },
  {
    id: "verify",
    title: "Verify evidence",
    text: "Keep the public source link and record context beside the opportunity.",
    icon: FileSearch,
  },
  {
    id: "rank",
    title: "Organize for review",
    text: "Use trade fit and service area as explainable review signals.",
    icon: SlidersHorizontal,
  },
  {
    id: "review",
    title: "Human decision",
    text: "A person confirms the details and decides what happens next.",
    icon: ClipboardCheck,
  },
];

export function GrowthAgentRobotOrbit() {
  const [active, setActive] = useState(stages[0].id);

  return (
    <section aria-labelledby="review-assistant-title" className="overflow-hidden rounded-2xl border border-white/12 bg-black">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 px-5 py-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#42d6c7]">Demonstration experience</p>
          <h2 id="review-assistant-title" className="mt-1 text-lg font-extrabold text-white">A review assistant, not an autonomous sales team</h2>
        </div>
        <span className="rounded-full border border-[#d4af37]/30 px-3 py-1.5 text-xs font-semibold text-[#f2c94c]">Human in control</span>
      </div>

      <div className="grid lg:grid-cols-[1fr_1.05fr]">
        <div className="relative min-h-[30rem] overflow-hidden border-b border-white/10 lg:border-b-0 lg:border-r">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(66,214,199,0.08),transparent_48%)]" />
          <SplineScene scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode" className="relative h-[30rem] w-full" />
          <p className="absolute bottom-4 left-4 right-4 rounded-xl border border-white/10 bg-black/80 p-3 text-xs leading-5 text-slate-400 backdrop-blur-sm">
            The robot is a visual guide. It does not imply autonomous outreach, live production activity, or independent decision-making.
          </p>
        </div>
        <div className="grid gap-3 p-4 sm:p-6">
          {stages.map((stage, index) => {
            const selected = stage.id === active;
            return (
              <button
                key={stage.id}
                type="button"
                onClick={() => setActive(stage.id)}
                aria-pressed={selected}
                className={`grid grid-cols-[auto_1fr_auto] items-start gap-4 rounded-xl border p-4 text-left transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#42d6c7] ${selected ? "border-[#42d6c7]/70 bg-[#42d6c7]/[0.07]" : "border-white/10 bg-white/[0.025] hover:border-white/20"}`}
              >
                <span className="grid size-10 place-items-center rounded-xl border border-white/10 text-[#42d6c7]">
                  <stage.icon className="size-5" aria-hidden="true" />
                </span>
                <span>
                  <span className="block font-bold text-white">{stage.title}</span>
                  <span className="mt-1 block text-sm leading-6 text-slate-400">{stage.text}</span>
                </span>
                <span className="text-xs font-bold text-[#d4af37]">0{index + 1}</span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
