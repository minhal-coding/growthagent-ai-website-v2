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

export function HomepageCinematicWorkflow() {
  return (
    <section id="how-it-works" aria-labelledby="homepage-workflow-title" className="relative overflow-hidden border-y border-white/10 bg-[#020509] px-5 py-14 sm:px-8 sm:py-16 lg:px-12">
      <div className="relative mx-auto max-w-[90rem]">
        <div className="mx-auto max-w-4xl text-center">
          <span className="mx-auto grid size-10 place-items-center text-[#e4bd45]"><Circle className="size-7" aria-hidden="true" /></span>
          <h2 id="homepage-workflow-title" className="mt-4 text-balance text-4xl font-medium leading-[1.04] tracking-[-0.045em] text-white sm:text-5xl lg:text-[3.1rem]">
            From public record to review-ready opportunity.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-400">
            A focused workflow concept for finding evidence, checking fit, and keeping a person in control.
          </p>
        </div>

        <div className="mt-10 hidden items-center lg:grid lg:grid-cols-[auto_1fr_auto_0.45fr_auto_0.45fr_auto]">
          {stages.map((stage, index) => (
            <div key={stage.title} className="contents">
              <div className="flex items-center gap-3">
                <span className="grid size-9 place-items-center rounded-full border border-[#e4bd45] text-sm font-extrabold text-[#e4bd45]">{stage.number}</span>
                <stage.icon className="size-5 text-slate-300" aria-hidden="true" />
                <span className="font-semibold text-white">{stage.title}</span>
              </div>
              {index < stages.length - 1 ? <span className="mx-4 h-px bg-[linear-gradient(90deg,#e4bd45,rgba(228,189,69,0.22))]" aria-hidden="true" /> : null}
            </div>
          ))}
        </div>

        <div className="relative mt-9 overflow-hidden border border-white/12 bg-[#05080d] px-5 pb-10 pt-7 shadow-[0_34px_100px_rgba(0,0,0,0.42)] sm:rounded-xl sm:px-7 lg:px-8 lg:py-9">
          <Image src="/construction-blueprint.webp" alt="" fill sizes="100vw" className="pointer-events-none object-cover object-bottom opacity-20 mix-blend-screen" aria-hidden="true" />
          <div className="relative grid gap-4 lg:grid-cols-[0.9fr_auto_1.2fr_auto_0.8fr_auto_0.72fr_auto_0.9fr] lg:items-center">
            <div className="space-y-2.5">
              {sources.map((source) => (
                <div key={source.title} className="flex items-center gap-3 rounded-lg border border-white/[0.08] bg-black/45 p-3 text-xs leading-5 text-slate-300">
                  <source.icon className="size-4 shrink-0 text-[#e4bd45]" aria-hidden="true" />
                  {source.title}
                </div>
              ))}
            </div>
            <FlowArrow />

            <div className="rounded-lg border border-[#e4bd45]/55 bg-[#090d14]/95 p-4 shadow-[0_0_45px_rgba(228,189,69,0.06)]">
              <div className="flex gap-3">
                <span className="grid size-11 shrink-0 place-items-center rounded-lg border border-white/10 text-[#e4bd45]"><Building2 className="size-5" aria-hidden="true" /></span>
                <div>
                  <p className="font-extrabold leading-tight text-white">Fictional tenant improvement</p>
                  <p className="mt-2 text-xs text-slate-400">Example Central Florida jurisdiction</p>
                  <p className="mt-1 text-xs text-slate-400">Division 09 — Finishes</p>
                </div>
              </div>
              <span className="mt-4 inline-flex rounded border border-[#e4bd45]/40 bg-[#e4bd45]/[0.06] px-2 py-1 text-[0.6rem] font-bold uppercase tracking-[0.1em] text-[#f2c94c]">Fictional demonstration data</span>
              <div className="mt-4 flex items-center gap-2 border-t border-white/10 pt-3 text-xs text-slate-400"><FileCheck2 className="size-4 text-[#42d6c7]" aria-hidden="true" /> Example evidence slot</div>
            </div>
            <FlowArrow />

            <div className="space-y-3 rounded-lg border border-white/[0.08] bg-black/35 p-4 lg:border-0 lg:bg-transparent lg:p-0">
              {["Example trade fit", "Example service area", "Review required"].map((label) => (
                <div key={label} className="flex items-center gap-2.5 text-xs font-semibold text-slate-300">
                  <span className="grid size-6 place-items-center rounded-full border border-[#42d6c7] text-[#42d6c7]"><Check className="size-3.5" aria-hidden="true" /></span>
                  {label}
                </div>
              ))}
            </div>
            <FlowArrow />

            <div className="text-center">
              <div className="mx-auto grid size-24 place-items-center rounded-full border-[6px] border-[#42d6c7] bg-[#070b12] shadow-[0_0_38px_rgba(66,214,199,0.14)]">
                <span><span className="block text-3xl font-black tracking-[-0.06em] text-white">72</span><span className="block text-[0.52rem] font-extrabold uppercase tracking-[0.08em] text-slate-400">Illustrative score</span></span>
              </div>
              <p className="mt-3 text-[0.65rem] leading-5 text-slate-500">Fictional fit signal,<br />not a performance claim</p>
            </div>
            <FlowArrow />

            <div className="rounded-lg border border-[#e4bd45]/45 bg-[#090d14]/95 p-4 text-center">
              <span className="mx-auto grid size-12 place-items-center rounded-lg border border-white/10 text-[#e4bd45]"><UserCheck className="size-6" aria-hidden="true" /></span>
              <p className="mt-3 font-extrabold text-white">Human review</p>
              <p className="mt-2 text-xs leading-5 text-slate-400">A person confirms the evidence, adds context, and decides the next step.</p>
            </div>
          </div>

          <div className="relative mx-auto mt-8 flex max-w-2xl items-center gap-4">
            <span className="h-px flex-1 bg-[linear-gradient(90deg,transparent,#e4bd45)]" />
            <ShieldCheck className="size-7 text-[#e4bd45]" aria-hidden="true" />
            <span className="h-px flex-1 bg-[linear-gradient(90deg,#e4bd45,transparent)]" />
          </div>
          <p className="relative mt-3 text-center text-[0.62rem] font-extrabold uppercase tracking-[0.3em] text-[#e4bd45]">Evidence. Context. Human control.</p>
        </div>
      </div>
    </section>
  );
}

function FlowArrow() {
  return (
    <span className="hidden items-center text-[#e4bd45] lg:flex" aria-hidden="true">
      <span className="h-px w-4 bg-[#e4bd45]/50" />
      <ArrowRight className="size-4" />
    </span>
  );
}
