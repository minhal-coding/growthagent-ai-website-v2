"use client";

import { useState } from "react";
import {
  Bell,
  Building2,
  Check,
  Circle,
  ExternalLink,
  FileSearch,
  HardHat,
  LayoutDashboard,
  MapPin,
  Search,
  ShieldCheck,
  SlidersHorizontal,
  UserCheck,
} from "lucide-react";

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

const railItems = [
  { label: "Command center", icon: LayoutDashboard, active: true },
  { label: "Opportunity review", icon: FileSearch },
  { label: "Review signals", icon: SlidersHorizontal },
  { label: "Evidence settings", icon: ShieldCheck },
];

export function ConstructionOpportunityPreview({ compact = false }: { compact?: boolean }) {
  const [selectedId, setSelectedId] = useState(records[0].id);
  const selected = records.find((record) => record.id === selectedId) ?? records[0];

  return (
    <section
      aria-label="Fictional GrowthAgent AI Command Center demonstration"
      className="ga-command-shell overflow-hidden rounded-[1.4rem] border border-white/15 bg-[#070a10]/95 shadow-[0_38px_120px_rgba(0,0,0,0.56)]"
    >
      <div className="flex min-h-14 flex-wrap items-center justify-between gap-3 border-b border-white/10 bg-[#0a0e16] px-4 py-3 sm:px-5">
        <div className="flex items-center gap-3">
          <span className="flex gap-1.5" aria-hidden="true">
            <span className="size-2 rounded-full bg-[#e4bd45]" />
            <span className="size-2 rounded-full bg-[#42d6c7]" />
            <span className="size-2 rounded-full bg-white/25" />
          </span>
          <span className="h-5 w-px bg-white/10" aria-hidden="true" />
          <span className="flex items-center gap-2 text-[0.68rem] font-extrabold uppercase tracking-[0.18em] text-white sm:text-xs">
            <HardHat className="size-3.5 text-[#f2c94c]" aria-hidden="true" />
            Command Center
          </span>
        </div>
        <span className="inline-flex items-center gap-1.5 text-[0.68rem] font-bold uppercase tracking-[0.12em] text-slate-400 sm:text-xs">
          <UserCheck className="size-3.5 text-[#42d6c7]" aria-hidden="true" />
          Human review required
        </span>
      </div>

      <div className="border-b border-[#e4bd45]/25 bg-[linear-gradient(90deg,rgba(228,189,69,0.12),rgba(228,189,69,0.025))] px-4 py-2.5 text-xs font-semibold leading-5 text-slate-200 sm:px-5">
        Every record, jurisdiction, source category, and status below is a fictional validation example. No live record, verified source, customer, or available project is shown.
      </div>

      <div className="grid md:grid-cols-[3.75rem_minmax(0,1fr)]">
        <aside aria-label="Demonstration navigation" className="hidden border-r border-white/10 bg-[#06090e] py-4 md:flex md:flex-col md:items-center md:justify-between">
          <div className="space-y-2">
            {railItems.map((item) => (
              <span
                key={item.label}
                title={item.label}
                className={`grid size-10 place-items-center rounded-xl border ${item.active ? "border-[#42d6c7]/50 bg-[#42d6c7]/10 text-[#72eee2]" : "border-transparent text-slate-500"}`}
              >
                <item.icon className="size-4" aria-hidden="true" />
                <span className="sr-only">{item.label}</span>
              </span>
            ))}
          </div>
          <span className="grid size-10 place-items-center rounded-xl border border-white/10 text-slate-500" title="Notifications">
            <Bell className="size-4" aria-hidden="true" />
            <span className="sr-only">Notifications</span>
          </span>
        </aside>

        <div className={compact ? "grid xl:grid-cols-[0.78fr_1.22fr]" : "grid lg:grid-cols-[0.76fr_1.24fr]"}>
          <div className="border-b border-white/10 bg-[#080c13] p-3 lg:border-b-0 lg:border-r sm:p-4">
            <div className="mb-3 flex items-center gap-2 rounded-xl border border-white/10 bg-black/25 px-3 py-2 text-xs text-slate-400">
              <Search className="size-3.5 text-[#42d6c7]" aria-hidden="true" />
              Fictional Florida construction examples
            </div>
            <div className="mb-2 flex items-center justify-between px-1 text-[0.64rem] font-extrabold uppercase tracking-[0.16em] text-slate-500">
              <span>Review queue</span>
              <span>Illustrative</span>
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
                    className={`w-full rounded-xl border p-3 text-left transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#42d6c7] ${
                      active
                        ? "border-[#42d6c7]/60 bg-[linear-gradient(135deg,rgba(66,214,199,0.11),rgba(66,214,199,0.025))]"
                        : "border-white/[0.08] bg-white/[0.018] hover:border-white/20"
                    }`}
                  >
                    <span className="flex items-start justify-between gap-3">
                      <span className="min-w-0">
                        <span className="block text-[0.68rem] font-extrabold uppercase tracking-[0.09em] text-[#42d6c7]">{record.division}</span>
                        <span className="mt-1 block text-xs font-bold leading-5 text-white sm:text-sm">{record.title}</span>
                        <span className="mt-1 block truncate text-xs text-slate-500">{record.area}</span>
                      </span>
                      <span className={`mt-1 grid size-5 shrink-0 place-items-center rounded-full border ${active ? "border-[#42d6c7] bg-[#42d6c7] text-[#04110f]" : "border-white/20"}`}>
                        {active ? <Check className="size-3" aria-hidden="true" /> : null}
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="relative overflow-hidden bg-[radial-gradient(circle_at_88%_8%,rgba(66,214,199,0.08),transparent_32%)] p-4 sm:p-5">
            <div className="pointer-events-none absolute inset-0 ga-blueprint opacity-30" aria-hidden="true" />
            <div className="relative">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <p className="text-[0.68rem] font-extrabold uppercase tracking-[0.18em] text-[#42d6c7]">{selected.division}</p>
                  <h3 className="mt-1.5 max-w-xl text-xl font-extrabold tracking-[-0.035em] text-white sm:text-2xl">{selected.title}</h3>
                </div>
                <span className="rounded-full border border-[#e4bd45]/30 bg-[#e4bd45]/[0.06] px-2.5 py-1 text-[0.64rem] font-bold uppercase tracking-[0.12em] text-[#f2c94c]">
                  Example only
                </span>
              </div>

              <div className="mt-4 grid gap-2 sm:grid-cols-2">
                <InfoRow icon={MapPin} label="Service area" value={selected.area} />
                <InfoRow icon={Building2} label="Source type" value={selected.source} />
              </div>

              <div className="mt-4 grid gap-3 border-y border-white/10 py-4 sm:grid-cols-[1fr_auto] sm:items-center">
                <div>
                  <p className="text-[0.64rem] font-extrabold uppercase tracking-[0.16em] text-slate-500">Illustrative review signals</p>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {["Evidence slot", selected.fit, "Human decision"].map((item, index) => (
                      <span key={item} className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-black/20 px-2.5 py-1 text-[0.68rem] font-semibold text-slate-300">
                        {index === 0 ? <Circle className="size-3 text-[#42d6c7]" aria-hidden="true" /> : null}
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-xl border border-[#42d6c7]/20 bg-[#42d6c7]/[0.04] px-3 py-2.5">
                  <span className="grid size-8 place-items-center rounded-full border border-[#42d6c7]/30 text-[#42d6c7]">
                    <ShieldCheck className="size-3.5" aria-hidden="true" />
                  </span>
                  <span><span className="block text-[0.6rem] font-bold uppercase tracking-[0.12em] text-slate-500">Review state</span><span className="block text-xs font-bold text-white">Needs confirmation</span></span>
                </div>
              </div>

              <p className="mt-3 text-xs leading-5 text-slate-400">{selected.note}</p>
              <div className="mt-3 flex items-center justify-between gap-4 rounded-xl border border-white/10 bg-[#05070d]/75 p-3 backdrop-blur-sm">
                <div className="min-w-0">
                  <p className="text-[0.62rem] font-extrabold uppercase tracking-[0.15em] text-slate-500">Illustrative source evidence</p>
                  <p className="mt-0.5 truncate text-xs font-semibold text-white">Example source-evidence slot</p>
                </div>
                <ExternalLink className="size-3.5 shrink-0 text-[#42d6c7]" aria-hidden="true" />
              </div>
              {!compact ? (
                <p className="mt-3 text-xs leading-5 text-slate-500">
                  This fictional validation example does not represent a live record, verified source, approved county workflow, customer, or available project.
                </p>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoRow({ icon: Icon, label, value }: { icon: typeof MapPin; label: string; value: string }) {
  return (
    <div className="flex gap-2.5 rounded-xl border border-white/10 bg-black/20 p-2.5">
      <Icon className="mt-0.5 size-3.5 shrink-0 text-[#f2c94c]" aria-hidden="true" />
      <div className="min-w-0">
        <p className="text-[0.65rem] text-slate-500">{label}</p>
        <p className="mt-0.5 text-xs font-semibold leading-5 text-slate-200">{value}</p>
      </div>
    </div>
  );
}
