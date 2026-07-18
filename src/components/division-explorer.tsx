"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Check, Circle, Layers3, Plus } from "lucide-react";

import { constructionDivisions } from "@/components/division-data";
import { GlowCard, MotionReveal, MotionStagger } from "@/components/ui/motion-reveal";

const initialDivision = constructionDivisions.find((division) => division.number === "09") ?? constructionDivisions[0];
const mobileDivisions = [initialDivision, ...constructionDivisions.filter((division) => division.number !== initialDivision.number)];

export function DivisionExplorer({ showRouteLink = false }: { showRouteLink?: boolean }) {
  const [selectedNumber, setSelectedNumber] = useState(initialDivision.number);
  const selected = constructionDivisions.find((division) => division.number === selectedNumber) ?? initialDivision;

  return (
    <div>
      <div className="hidden gap-5 lg:grid xl:grid-cols-[0.94fr_1.06fr]">
        <MotionStagger className="grid grid-cols-2 gap-2">
          {constructionDivisions.map((division) => {
            const active = division.number === selected.number;
            return (
              <button
                key={division.number}
                type="button"
                onClick={() => setSelectedNumber(division.number)}
                aria-pressed={active}
                className={`group min-h-24 w-full rounded-xl border p-3 text-left transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#42d6c7] ${active ? "border-[#e4bd45]/65 bg-[#e4bd45]/[0.075]" : "border-white/10 bg-white/[0.018] hover:border-[#42d6c7]/35 hover:bg-[#42d6c7]/[0.025]"}`}
              >
                <span className="flex items-start justify-between gap-3">
                  <span className={`text-xs font-black tracking-[0.14em] ${active ? "text-[#e4bd45]" : "text-[#42d6c7]"}`}>DIV {division.number}</span>
                  <span className={`grid size-5 place-items-center rounded-full border ${active ? "border-[#e4bd45] bg-[#e4bd45] text-black" : "border-white/15 text-transparent"}`}><Check className="size-3" aria-hidden="true" /></span>
                </span>
                <span className="mt-2 block text-sm font-extrabold leading-5 text-white">{division.shortName}</span>
                <span className="mt-1 block text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-slate-500">{division.status}</span>
              </button>
            );
          })}
        </MotionStagger>

        <MotionReveal key={selected.number}>
          <GlowCard tone="gold" className="h-full rounded-2xl border border-[#e4bd45]/35 bg-[#080c13] p-6 shadow-[0_28px_90px_rgba(0,0,0,0.34)] sm:p-8">
            <div className="flex flex-wrap items-start justify-between gap-5 border-b border-white/10 pb-6">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.2em] text-[#e4bd45]">Division {selected.number}</p>
                <h3 className="mt-3 max-w-2xl text-3xl font-extrabold tracking-[-0.045em] text-white sm:text-4xl">{selected.name}</h3>
              </div>
              <span className="rounded-full border border-white/12 px-3 py-1.5 text-[0.65rem] font-extrabold uppercase tracking-[0.12em] text-slate-300">{selected.status}</span>
            </div>

            <p className="mt-6 text-sm leading-7 text-slate-300">Representative scopes supplied for this planned division. They are not an active coverage promise or a complete subtrade taxonomy.</p>
            <div className="mt-6 grid gap-2 sm:grid-cols-2">
              {selected.scopes.map((scope) => (
                <div key={scope} className="flex min-h-12 items-center gap-2.5 rounded-xl border border-white/10 bg-black/20 px-3 py-2.5 text-sm font-semibold text-slate-200">
                  <Circle className="size-3.5 shrink-0 text-[#42d6c7]" aria-hidden="true" />
                  {scope}
                </div>
              ))}
            </div>

            <div className="mt-7 grid gap-3 border-t border-white/10 pt-6 sm:grid-cols-2">
              <div className="rounded-xl border border-[#42d6c7]/20 bg-[#42d6c7]/[0.035] p-4">
                <p className="text-[0.65rem] font-extrabold uppercase tracking-[0.16em] text-[#42d6c7]">Illustrative opportunity type</p>
                <p className="mt-2 text-sm font-bold text-white">Fictional {selected.shortName.toLowerCase()} improvement record</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-black/20 p-4">
                <p className="text-[0.65rem] font-extrabold uppercase tracking-[0.16em] text-slate-500">Planned review value</p>
                <p className="mt-2 text-sm font-bold leading-6 text-white">Reduce unrelated records before estimator review.</p>
              </div>
            </div>
            <p className="mt-5 text-xs leading-5 text-slate-500">Division 09 is shown as under validation. The repository contains no evidence supporting an active or private-pilot claim.</p>
          </GlowCard>
        </MotionReveal>
      </div>

      <div className="border-y border-white/10 lg:hidden">
        {mobileDivisions.map((division, index) => (
          <details key={division.number} open={index === 0} className="group border-b border-white/10 last:border-b-0">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#42d6c7]">
              <span><span className="block text-xs font-black uppercase tracking-[0.15em] text-[#e4bd45]">Division {division.number}</span><span className="mt-1 block font-extrabold text-white">{division.name}</span></span>
              <Plus className="size-4 shrink-0 text-[#42d6c7] transition group-open:rotate-45" aria-hidden="true" />
            </summary>
            <div className="pb-6">
              <p className="text-[0.65rem] font-extrabold uppercase tracking-[0.12em] text-slate-500">{division.status}</p>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {division.scopes.map((scope) => <li key={scope} className="flex gap-2 text-sm leading-6 text-slate-300"><Circle className="mt-1.5 size-3 shrink-0 text-[#42d6c7]" aria-hidden="true" />{scope}</li>)}
              </ul>
              <p className="mt-4 rounded-xl border border-white/10 bg-white/[0.02] p-3 text-xs leading-5 text-slate-400">Illustrative example: fictional {division.shortName.toLowerCase()} improvement record. No active coverage is claimed.</p>
            </div>
          </details>
        ))}
      </div>

      {showRouteLink ? (
        <Link href="/divisions" className="ga-text-link mt-8">Explore all planned divisions<ArrowRight className="size-4" aria-hidden="true" /></Link>
      ) : null}
    </div>
  );
}

export function DivisionSystemLabel() {
  return <span className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.22em] text-[#42d6c7]"><Layers3 className="size-4" aria-hidden="true" /> Division intelligence</span>;
}
