"use client";

import { useState } from "react";
import { Building2, Check, Circle, ExternalLink, FileText, MapPin, Search, UserCheck } from "lucide-react";

const records = [
  {
    id: "finishes",
    division: "Division 09 — Finishes",
    title: "Fictional example — tenant improvement",
    area: "Example Central Florida jurisdiction",
    source: "Illustrative planning-record category",
    fit: "Example service-area match",
    note: "Interior finish scope may warrant an estimator review.",
  },
  {
    id: "concrete",
    division: "Division 03 — Concrete",
    title: "Fictional example — public facility improvement",
    area: "Example county-level jurisdiction",
    source: "Illustrative procurement-notice category",
    fit: "Example trade-review state",
    note: "Confirm delivery method and scope before qualification.",
  },
  {
    id: "sitework",
    division: "Division 31 — Earthwork",
    title: "Fictional example — site preparation record",
    area: "Example municipal jurisdiction",
    source: "Illustrative permit-record category",
    fit: "Example service-area review",
    note: "Validate record status and project timing at the source.",
  },
];

export function ConstructionOpportunityPreview({ compact = false }: { compact?: boolean }) {
  const [selectedId, setSelectedId] = useState(records[0].id);
  const selected = records.find((record) => record.id === selectedId) ?? records[0];

  return (
    <div className="overflow-hidden rounded-2xl border border-white/15 bg-[#080c13] shadow-[0_30px_90px_rgba(0,0,0,0.38)]">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 px-4 py-3 sm:px-5">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#f2c94c]">
          <span className="grid size-7 place-items-center rounded-lg border border-[#d4af37]/35 bg-[#d4af37]/10">
            <FileText className="size-3.5" aria-hidden="true" />
          </span>
          Fictional Demonstration Data
        </div>
        <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400">
          <UserCheck className="size-3.5 text-[#42d6c7]" aria-hidden="true" />
          Human review required
        </span>
      </div>

      <p className="border-b border-white/10 bg-[#d4af37]/[0.06] px-4 py-3 text-sm font-semibold leading-6 text-slate-200 sm:px-5">
        Every record, jurisdiction, source category, and status below is a fictional validation example. No live record or source URL is shown.
      </p>

      <div className={compact ? "grid lg:grid-cols-[0.82fr_1.18fr]" : "grid lg:grid-cols-[0.9fr_1.1fr]"}>
        <div className="border-b border-white/10 p-4 lg:border-b-0 lg:border-r sm:p-5">
          <div className="mb-4 flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.025] px-3 py-2 text-sm text-slate-400">
            <Search className="size-4" aria-hidden="true" />
            Fictional Florida construction examples
          </div>
          <div className="space-y-2" role="list" aria-label="Demonstration opportunity records">
            {records.map((record) => {
              const active = record.id === selected.id;
              return (
                <button
                  key={record.id}
                  type="button"
                  onClick={() => setSelectedId(record.id)}
                  aria-pressed={active}
                  className={`w-full rounded-xl border p-4 text-left transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#42d6c7] ${
                    active ? "border-[#42d6c7]/75 bg-[#42d6c7]/[0.07]" : "border-white/10 bg-white/[0.02] hover:border-white/20"
                  }`}
                >
                  <span className="flex items-start justify-between gap-3">
                    <span>
                      <span className="block text-xs font-bold text-[#42d6c7]">{record.division}</span>
                      <span className="mt-1 block text-sm font-bold text-white">{record.title}</span>
                      <span className="mt-1 block text-sm text-slate-400">{record.area}</span>
                    </span>
                    <span className={`mt-1 grid size-5 shrink-0 place-items-center rounded-full border ${active ? "border-[#42d6c7] bg-[#42d6c7] text-[#04110f]" : "border-white/25"}`}>
                      {active ? <Check className="size-3" aria-hidden="true" /> : null}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="p-5 sm:p-6">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#42d6c7]">{selected.division}</p>
          <h3 className="mt-2 text-2xl font-extrabold tracking-[-0.03em] text-white sm:text-3xl">{selected.title}</h3>
          <div className="mt-5 grid gap-3 text-sm sm:grid-cols-2">
            <InfoRow icon={MapPin} label="Service area" value={selected.area} />
            <InfoRow icon={Building2} label="Source type" value={selected.source} />
          </div>
          <div className="mt-6 border-y border-white/10 py-5">
            <div className="flex flex-wrap gap-2">
              {["Illustrative verification state", selected.fit, "Example human-review state"].map((item, index) => (
                <span key={item} className="inline-flex items-center gap-1.5 rounded-full border border-white/10 px-3 py-1.5 text-xs font-semibold text-slate-300">
                  {index === 0 ? <Circle className="size-3.5 text-[#42d6c7]" aria-hidden="true" /> : null}
                  {item}
                </span>
              ))}
            </div>
            <p className="mt-4 text-sm leading-6 text-slate-400">{selected.note}</p>
          </div>
          <div className="mt-5 flex items-center justify-between gap-4 rounded-xl border border-white/10 bg-white/[0.025] p-4">
            <div className="min-w-0">
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-slate-400">Illustrative source evidence</p>
              <p className="mt-1 text-sm font-semibold text-white">Example source-evidence slot</p>
            </div>
            <ExternalLink className="size-4 shrink-0 text-[#42d6c7]" aria-hidden="true" />
          </div>
          <p className="mt-4 text-sm leading-6 text-slate-400">
            Fictional validation example only. It does not represent a live record, verified source, approved county workflow, customer, or available project.
          </p>
        </div>
      </div>
    </div>
  );
}

function InfoRow({ icon: Icon, label, value }: { icon: typeof MapPin; label: string; value: string }) {
  return (
    <div className="flex gap-3 rounded-xl border border-white/10 bg-white/[0.025] p-3">
      <Icon className="mt-0.5 size-4 shrink-0 text-[#f2c94c]" aria-hidden="true" />
      <div>
        <p className="text-sm text-slate-400">{label}</p>
        <p className="mt-0.5 font-semibold text-slate-200">{value}</p>
      </div>
    </div>
  );
}
