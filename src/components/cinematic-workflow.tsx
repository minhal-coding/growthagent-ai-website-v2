import Image from "next/image";
import { ArrowRight, Building2, Circle, FileCheck2, ShieldCheck, UserCheck } from "lucide-react";

import { workflowSteps } from "@/components/site-data";
import { MotionReveal, MotionStagger } from "@/components/ui/motion-reveal";

export function CinematicWorkflow() {
  return (
    <section id="how-it-works" aria-labelledby="workflow-title" className="ga-content-visibility relative overflow-hidden bg-[#03060a] px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
      <Image src="/construction-blueprint.png" alt="" fill sizes="100vw" className="pointer-events-none object-cover object-bottom opacity-[0.08] mix-blend-screen" aria-hidden="true" />
      <div className="relative mx-auto max-w-[90rem]">
        <div className="mx-auto max-w-5xl text-center">
          <span className="mx-auto grid size-11 place-items-center text-[#e4bd45]"><Circle className="size-8" aria-hidden="true" /></span>
          <p className="mt-5 text-xs font-extrabold uppercase tracking-[0.24em] text-[#42d6c7]">Six-stage review workflow</p>
          <h2 id="workflow-title" className="mt-4 text-balance text-4xl font-extrabold leading-[1.01] tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl">
            What GrowthAgent AI is being built to do.
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-slate-400 sm:text-lg">
            Turn candidate public construction records into organized, evidence-aware opportunities for a person to review. Every stage remains a planned product direction under validation.
          </p>
        </div>

        <ol className="mt-12 hidden grid-cols-[repeat(6,minmax(0,1fr))] lg:grid">
          {workflowSteps.map((stage, index) => (
            <li key={stage.title} className="relative min-w-0 pr-4 last:pr-0">
              <div className="flex items-center">
                <span className="relative z-10 grid size-11 shrink-0 place-items-center rounded-full border border-[#e4bd45] bg-[#03060a] text-sm font-extrabold text-[#e4bd45]">{stage.number}</span>
                {index < workflowSteps.length - 1 ? <span className="h-px flex-1 bg-[linear-gradient(90deg,#e4bd45,rgba(66,214,199,0.32))]" aria-hidden="true" /> : null}
              </div>
              <div className="mt-4 flex items-center gap-2">
                <stage.icon className="size-4 shrink-0 text-[#42d6c7]" aria-hidden="true" />
                <span className="text-sm font-extrabold text-white">{stage.title}</span>
              </div>
            </li>
          ))}
        </ol>

        <MotionStagger className="relative mt-10 grid gap-px overflow-hidden rounded-[1.45rem] border border-white/10 bg-white/10 shadow-[0_34px_100px_rgba(0,0,0,0.42)] md:grid-cols-2 xl:grid-cols-3">
          {workflowSteps.map((stage, index) => (
            <article key={stage.title} className="relative min-h-64 bg-[#060a10]/95 p-6 sm:p-8">
              <div className="flex items-start justify-between gap-4">
                <span className="grid size-12 place-items-center rounded-xl border border-[#42d6c7]/25 bg-[#42d6c7]/[0.035] text-[#42d6c7]"><stage.icon className="size-5" aria-hidden="true" /></span>
                <span className="font-mono text-xs font-black tracking-[0.18em] text-[#e4bd45]">{stage.number}</span>
              </div>
              <h3 className="mt-7 text-2xl font-extrabold tracking-[-0.035em] text-white">{stage.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{stage.text}</p>
              <p className="mt-5 border-l border-[#e4bd45]/50 pl-3 text-xs leading-5 text-slate-500">{stage.detail}</p>
              {index < workflowSteps.length - 1 ? <ArrowRight className="absolute bottom-6 right-6 size-4 text-[#e4bd45]/50" aria-hidden="true" /> : <UserCheck className="absolute bottom-6 right-6 size-4 text-[#42d6c7]" aria-hidden="true" />}
            </article>
          ))}
        </MotionStagger>

        <MotionReveal className="mx-auto mt-10 max-w-5xl">
          <div className="grid gap-5 rounded-2xl border border-[#e4bd45]/30 bg-[#090d14]/90 p-5 sm:grid-cols-[auto_1fr_auto] sm:items-center sm:p-7">
            <span className="grid size-14 place-items-center rounded-xl border border-white/10 text-[#e4bd45]"><Building2 className="size-7" aria-hidden="true" /></span>
            <div>
              <p className="text-sm font-extrabold text-white">Fictional demonstration path: Division 09 tenant improvement</p>
              <p className="mt-2 text-xs leading-5 text-slate-400">Example record context and evidence slot <span aria-hidden="true">→</span> planned classification and fit explanation <span aria-hidden="true">→</span> human-controlled review.</p>
            </div>
            <span className="inline-flex items-center gap-2 text-xs font-bold text-[#42d6c7]"><FileCheck2 className="size-4" aria-hidden="true" /> Fictional data</span>
          </div>
        </MotionReveal>

        <div className="relative mx-auto mt-10 flex max-w-2xl items-center gap-4">
          <span className="h-px flex-1 bg-[linear-gradient(90deg,transparent,#e4bd45)]" />
          <ShieldCheck className="size-7 text-[#e4bd45]" aria-hidden="true" />
          <span className="h-px flex-1 bg-[linear-gradient(90deg,#e4bd45,transparent)]" />
        </div>
        <p className="relative mt-4 text-center text-[0.65rem] font-extrabold uppercase tracking-[0.32em] text-[#e4bd45]">Evidence. Context. Human control.</p>
      </div>
    </section>
  );
}
