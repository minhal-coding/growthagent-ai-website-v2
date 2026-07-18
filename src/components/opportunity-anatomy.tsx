"use client";

import { useState } from "react";
import { CalendarDays, Check, FileCheck2, MapPin, ShieldCheck, UserCheck } from "lucide-react";

import { GlowCard } from "@/components/ui/motion-reveal";

const inspectionModes = {
  record: { label: "Record", title: "Source context stays attached", text: "The originating category, fictional jurisdiction, record date, project description, and evidence slot remain visible for review." },
  fit: { label: "Fit", title: "The interface explains why it appears", text: "Illustrative division, service-area, recency, evidence, and exclusion checks show the planned basis for review." },
  decision: { label: "Decision", title: "A person owns the next step", text: "Human review is required before any future delivery, enrichment, or outreach decision." },
} as const;

type InspectionMode = keyof typeof inspectionModes;
const inspectionKeys = Object.keys(inspectionModes) as InspectionMode[];

const signals = [
  ["Recency state", "Recent record example"],
  ["Service-area state", "Example service-area match"],
  ["Evidence completeness", "Evidence slot available"],
  ["Fit explanation", "Illustrative Division 09 match"],
  ["Exclusion checks", "No example exclusion triggered"],
  ["Human-review state", "Review required"],
];

export function OpportunityAnatomy() {
  const [mode, setMode] = useState<InspectionMode>("record");
  const active = inspectionModes[mode];

  return (
    <div aria-labelledby="anatomy-title" className="ga-content-visibility relative overflow-hidden rounded-[1.45rem] border border-white/10 bg-[#060a10] p-5 sm:p-8 lg:p-10">
      <div className="pointer-events-none absolute inset-0 ga-blueprint opacity-24" aria-hidden="true" />
      <div className="relative mx-auto max-w-[90rem]">
        <div className="grid items-end gap-8 lg:grid-cols-[1fr_auto]">
          <div className="max-w-4xl"><p className="text-xs font-extrabold uppercase tracking-[0.23em] text-[#42d6c7]">Review-ready opportunity anatomy</p><h2 id="anatomy-title" className="mt-5 text-balance text-4xl font-extrabold tracking-[-0.05em] text-white sm:text-6xl">Every signal should lead back to evidence.</h2><p className="mt-5 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">This interactive fictional breakdown shows the regions a planned review package is designed to include.</p></div>
          <div role="tablist" aria-label="Inspect opportunity anatomy" className="flex rounded-xl border border-white/10 bg-black/25 p-1">
            {inspectionKeys.map((key) => <button key={key} id={`anatomy-tab-${key}`} type="button" role="tab" aria-selected={mode === key} aria-controls="anatomy-inspector" tabIndex={mode === key ? 0 : -1} onClick={() => setMode(key)} onKeyDown={(event) => {
              if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
              event.preventDefault();
              const current = inspectionKeys.indexOf(mode);
              const next = event.key === 'Home' ? 0 : event.key === 'End' ? inspectionKeys.length - 1 : event.key === 'ArrowRight' ? (current + 1) % inspectionKeys.length : (current - 1 + inspectionKeys.length) % inspectionKeys.length;
              setMode(inspectionKeys[next]);
              document.getElementById(`anatomy-tab-${inspectionKeys[next]}`)?.focus();
            }} className="rounded-lg px-4 py-2 text-xs font-extrabold text-slate-400 transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#42d6c7] aria-selected:bg-[#42d6c7]/10 aria-selected:text-[#67e9dd]">{inspectionModes[key].label}</button>)}
          </div>
        </div>

        <div className="mt-12 grid gap-5 xl:grid-cols-[0.92fr_1.08fr]">
          <GlowCard tone="gold" className="rounded-2xl border border-[#e4bd45]/35 bg-[#080c13] p-6 sm:p-8">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div><p className="text-xs font-black uppercase tracking-[0.18em] text-[#42d6c7]">Division 09 — Finishes</p><h3 className="mt-3 text-3xl font-extrabold tracking-[-0.04em] text-white">Fictional example — interior finishes opportunity</h3></div>
              <span className="rounded-full border border-[#e4bd45]/40 bg-[#e4bd45]/[0.06] px-3 py-1.5 text-[0.65rem] font-black uppercase tracking-[0.12em] text-[#f2c94c]">Fictional example</span>
            </div>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              <AnatomyField icon={MapPin} label="Example jurisdiction" value="Illustrative Florida jurisdiction" />
              <AnatomyField icon={FileCheck2} label="Example source category" value="Candidate planning-record category" />
              <AnatomyField icon={ShieldCheck} label="Project type" value="Fictional commercial improvement" />
              <AnatomyField icon={CalendarDays} label="Record date" value="Illustrative recent-date state" />
            </div>
            <div className="mt-5 rounded-xl border border-white/10 bg-black/25 p-4">
              <p className="text-[0.65rem] font-extrabold uppercase tracking-[0.15em] text-slate-500">Division and trade</p><p className="mt-2 text-sm font-bold text-white">Division 09 — Finishes · Drywall and gypsum example</p>
            </div>
            <div className="mt-3 rounded-xl border border-[#42d6c7]/20 bg-[#42d6c7]/[0.035] p-4">
              <p className="text-[0.65rem] font-extrabold uppercase tracking-[0.15em] text-[#42d6c7]">Source-evidence slot</p><p className="mt-2 text-sm font-bold text-white">Example source record and available-document slot</p>
            </div>
          </GlowCard>

          <div className="rounded-2xl border border-white/10 bg-[#070b11] p-5 sm:p-7">
            <div className="grid gap-2 sm:grid-cols-2">
              {signals.map(([label, value]) => <div key={label} className="flex items-start gap-3 rounded-xl border border-white/[0.08] bg-black/20 p-3.5"><span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full border border-[#42d6c7]/40 text-[#42d6c7]"><Check className="size-3.5" aria-hidden="true" /></span><span><span className="block text-[0.64rem] font-extrabold uppercase tracking-[0.13em] text-slate-500">{label}</span><span className="mt-1 block text-sm font-bold leading-5 text-slate-200">{value}</span></span></div>)}
            </div>
            <div id="anatomy-inspector" role="tabpanel" aria-labelledby={`anatomy-tab-${mode}`} className="mt-5 rounded-xl border border-[#e4bd45]/30 bg-[#e4bd45]/[0.055] p-5">
              <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#e4bd45]">{active.label} inspection</p><h3 className="mt-2 text-xl font-extrabold text-white">{active.title}</h3><p className="mt-2 text-sm leading-6 text-slate-300">{active.text}</p>
            </div>
            <div className="mt-4 flex items-start gap-3 rounded-xl border border-white/10 p-4"><UserCheck className="mt-0.5 size-5 shrink-0 text-[#42d6c7]" aria-hidden="true" /><div><p className="text-[0.65rem] font-extrabold uppercase tracking-[0.15em] text-slate-500">Recommended human next step</p><p className="mt-1 text-sm font-bold leading-6 text-white">Human review required before any delivery, enrichment, or outreach decision.</p></div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AnatomyField({ icon: Icon, label, value }: { icon: typeof MapPin; label: string; value: string }) {
  return <div className="flex gap-3 rounded-xl border border-white/10 bg-black/20 p-3.5"><Icon className="mt-0.5 size-4 shrink-0 text-[#e4bd45]" aria-hidden="true" /><div><p className="text-[0.65rem] font-extrabold uppercase tracking-[0.13em] text-slate-500">{label}</p><p className="mt-1 text-sm font-semibold leading-5 text-slate-200">{value}</p></div></div>;
}
