import Image from "next/image";
import {
  ArrowRight,
  Building2,
  Check,
  Circle,
  FileCheck2,
  FileText,
  MapPinned,
  Megaphone,
  Search,
  ShieldCheck,
  SlidersHorizontal,
  UserCheck,
} from "lucide-react";

const stages = [
  { number: "1", title: "Discover", icon: Search },
  { number: "2", title: "Verify", icon: ShieldCheck },
  { number: "3", title: "Rank", icon: SlidersHorizontal },
  { number: "4", title: "Human review", icon: UserCheck },
];

const sources = [
  { title: "Permit-record categories", icon: FileText },
  { title: "Planning-information categories", icon: MapPinned },
  { title: "Procurement-notice categories", icon: Megaphone },
];

export function CinematicWorkflow() {
  return (
    <section id="how-it-works" aria-labelledby="workflow-title" className="relative overflow-hidden bg-[#03060a] px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
      <div className="relative mx-auto max-w-[90rem]">
        <div className="mx-auto max-w-4xl text-center">
          <span className="mx-auto grid size-11 place-items-center text-[#e4bd45]"><Circle className="size-8" aria-hidden="true" /></span>
          <h2 id="workflow-title" className="mt-5 text-balance text-4xl font-extrabold leading-[1.01] tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl">
            From public record to review-ready opportunity.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
            A development-stage workflow concept for finding evidence, checking fit, and keeping a person in control.
          </p>
        </div>

        <div className="mt-12 hidden items-center lg:grid lg:grid-cols-[auto_1fr_auto_0.42fr_auto_0.42fr_auto]">
          {stages.map((stage, index) => (
            <div key={stage.title} className="contents">
              <div className="flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-full border border-[#e4bd45] text-sm font-extrabold text-[#e4bd45]">{stage.number}</span>
                <stage.icon className="size-5 text-slate-300" aria-hidden="true" />
                <span className="font-bold text-white">{stage.title}</span>
              </div>
              {index < stages.length - 1 ? <span className="mx-5 h-px bg-[linear-gradient(90deg,#e4bd45,rgba(228,189,69,0.25))]" aria-hidden="true" /> : null}
            </div>
          ))}
        </div>

        <div className="relative mt-10 overflow-hidden rounded-[1.45rem] border border-white/10 bg-[#05080d] px-5 pb-12 pt-7 shadow-[0_34px_100px_rgba(0,0,0,0.42)] sm:px-8 lg:px-9 lg:py-10">
          <Image src="/construction-blueprint.png" alt="" fill sizes="100vw" className="pointer-events-none object-cover object-bottom opacity-15 mix-blend-screen" aria-hidden="true" />
          <div className="relative grid gap-5 lg:grid-cols-[0.86fr_auto_1.18fr_auto_0.82fr_auto_0.7fr_auto_0.92fr] lg:items-center">
            <div className="space-y-3">
              {sources.map((source) => (
                <div key={source.title} className="flex items-center gap-3 rounded-lg border border-white/[0.07] bg-black/35 p-3 text-xs leading-5 text-slate-300">
                  <source.icon className="size-4 shrink-0 text-[#e4bd45]" aria-hidden="true" />
                  {source.title}
                </div>
              ))}
            </div>
            <FlowArrow />

            <div className="rounded-xl border border-[#e4bd45]/55 bg-[#090d14]/95 p-5 shadow-[0_0_45px_rgba(228,189,69,0.06)]">
              <div className="flex gap-4">
                <span className="grid size-12 shrink-0 place-items-center rounded-lg border border-white/10 text-[#e4bd45]"><Building2 className="size-6" aria-hidden="true" /></span>
                <div>
                  <p className="text-lg font-extrabold leading-tight text-white">Fictional tenant improvement</p>
                  <p className="mt-2 text-xs text-slate-400">Example Central Florida jurisdiction</p>
                  <p className="mt-1 text-xs text-slate-400">Division 09 — Finishes</p>
                </div>
              </div>
              <span className="mt-4 inline-flex rounded border border-[#e4bd45]/40 bg-[#e4bd45]/[0.06] px-2 py-1 text-[0.62rem] font-bold uppercase tracking-[0.12em] text-[#f2c94c]">Fictional demonstration data</span>
              <div className="mt-5 flex items-center gap-2 border-t border-white/10 pt-4 text-xs text-slate-400"><FileCheck2 className="size-4 text-[#42d6c7]" aria-hidden="true" /> Example evidence slot</div>
            </div>
            <FlowArrow />

            <div className="space-y-3">
              {["Example trade fit", "Example service area", "Review required"].map((label) => (
                <div key={label} className="flex items-center gap-2.5 text-xs font-semibold text-slate-300">
                  <span className="grid size-6 place-items-center rounded-full border border-[#42d6c7] text-[#42d6c7]"><Check className="size-3.5" aria-hidden="true" /></span>
                  {label}
                </div>
              ))}
            </div>
            <FlowArrow />

            <div className="text-center">
              <div className="mx-auto grid size-28 place-items-center rounded-full border-[6px] border-[#42d6c7] bg-[#070b12] shadow-[0_0_38px_rgba(66,214,199,0.14)]">
                <span><span className="block text-3xl font-black tracking-[-0.06em] text-white">72</span><span className="block text-[0.58rem] font-extrabold uppercase tracking-[0.08em] text-slate-400">Illustrative score</span></span>
              </div>
              <p className="mt-3 text-[0.65rem] leading-5 text-slate-500">Fictional fit signal,<br />not a performance claim</p>
            </div>
            <FlowArrow />

            <div className="rounded-xl border border-[#e4bd45]/45 bg-[#090d14]/95 p-5 text-center">
              <span className="mx-auto grid size-14 place-items-center rounded-xl border border-white/10 text-[#e4bd45]"><UserCheck className="size-7" aria-hidden="true" /></span>
              <p className="mt-4 font-extrabold text-white">Human review</p>
              <p className="mt-2 text-xs leading-5 text-slate-400">A person confirms the evidence, adds context, and decides the next step.</p>
            </div>
          </div>

          <div className="relative mx-auto mt-10 flex max-w-2xl items-center gap-4">
            <span className="h-px flex-1 bg-[linear-gradient(90deg,transparent,#e4bd45)]" />
            <ShieldCheck className="size-7 text-[#e4bd45]" aria-hidden="true" />
            <span className="h-px flex-1 bg-[linear-gradient(90deg,#e4bd45,transparent)]" />
          </div>
          <p className="relative mt-4 text-center text-[0.65rem] font-extrabold uppercase tracking-[0.32em] text-[#e4bd45]">Evidence. Context. Human control.</p>
        </div>
      </div>
    </section>
  );
}

function FlowArrow() {
  return (
    <span className="hidden items-center text-[#e4bd45] lg:flex" aria-hidden="true">
      <span className="h-px w-5 bg-[#e4bd45]/50" />
      <ArrowRight className="size-4" />
    </span>
  );
}
