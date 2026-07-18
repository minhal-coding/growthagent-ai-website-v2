import Link from "next/link";
import { ArrowRight, Circle, FileCheck2, LockKeyhole, MapPin, Menu, ShieldCheck, UserCheck } from "lucide-react";

import { EarlyAccessForm } from "@/components/early-access-form";
import { PageShell } from "@/components/site-chrome";

export function EarlyAccessPage() {
  return (
    <PageShell>
      <main id="main-content">
        <section className="relative overflow-hidden border-b border-white/10 bg-[#04070b] px-4 py-10 sm:px-8 sm:py-16 lg:px-10">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_76%_34%,rgba(66,214,199,0.09),transparent_32%)]" aria-hidden="true" />
          <div className="relative mx-auto grid max-w-[96rem] gap-8 rounded-[1.5rem] border border-white/10 bg-[#070b11] p-3 shadow-[0_42px_120px_rgba(0,0,0,0.48)] lg:grid-cols-[1.95fr_0.72fr] lg:p-4">
            <div className="overflow-hidden rounded-2xl border border-white/12 bg-[#080c13]">
              <div className="grid lg:grid-cols-[0.7fr_1.3fr]">
                <div className="relative overflow-hidden border-b border-white/10 p-7 lg:min-h-[43rem] lg:border-b-0 lg:border-r lg:p-10">
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(228,189,69,0.08),transparent_30%)]" aria-hidden="true" />
                  <div className="relative z-10">
                    <span className="grid size-12 place-items-center rounded-full border border-[#e4bd45] text-[#e4bd45]"><MapPin className="size-5" aria-hidden="true" /></span>
                    <p className="mt-7 text-xs font-extrabold uppercase tracking-[0.22em] text-[#42d6c7]">Early access preview</p>
                    <h1 className="mt-4 text-balance text-4xl font-extrabold leading-[1.02] tracking-[-0.05em] text-white sm:text-5xl">Preview the Florida launch intake.</h1>
                    <p className="mt-5 text-base leading-7 text-slate-400">See the trade, service-area, and evidence topics a future owner-approved intake could cover.</p>
                    <div className="mt-7 h-0.5 w-12 bg-[#e4bd45]" aria-hidden="true" />
                    <p className="mt-7 flex items-start gap-2.5 text-sm leading-6 text-slate-400"><LockKeyhole className="mt-1 size-4 shrink-0 text-[#e4bd45]" aria-hidden="true" />This page does not accept applications or collect information.</p>
                    <Link href="/florida-launch" className="ga-text-link mt-6">Explore Florida Launch<ArrowRight className="size-4" aria-hidden="true" /></Link>
                  </div>
                  <div className="ga-blueprint-art pointer-events-none absolute inset-x-0 bottom-0 aspect-[3/1] w-[175%] max-w-none -translate-x-[12%] bg-contain bg-bottom bg-no-repeat opacity-50" aria-hidden="true" />
                </div>

                <div className="p-4 sm:p-6 lg:p-7">
                  <EarlyAccessForm />
                </div>
              </div>
              <div className="grid border-t border-white/10 bg-black/20 text-[0.68rem] font-bold uppercase tracking-[0.12em] text-slate-500 sm:grid-cols-3">
                <p className="flex items-center gap-2 border-b border-white/10 px-5 py-4 sm:border-b-0 sm:border-r"><FileCheck2 className="size-4 text-[#42d6c7]" aria-hidden="true" /> No form endpoint</p>
                <p className="flex items-center gap-2 border-b border-white/10 px-5 py-4 sm:border-b-0 sm:border-r"><ShieldCheck className="size-4 text-[#e4bd45]" aria-hidden="true" /> Nothing sent or stored</p>
                <p className="flex items-center gap-2 px-5 py-4"><UserCheck className="size-4 text-[#42d6c7]" aria-hidden="true" /> Owner approval required</p>
              </div>
            </div>

            <div className="relative mx-auto flex w-full max-w-md items-center justify-center px-2 py-5 lg:px-3">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,rgba(66,214,199,0.11),transparent_62%)]" aria-hidden="true" />
              <div className="relative w-full rounded-[3rem] border border-white/20 bg-[#020407] p-2.5 shadow-[0_35px_100px_rgba(0,0,0,0.65)]">
                <div className="absolute left-1/2 top-4 z-20 h-7 w-28 -translate-x-1/2 rounded-full bg-black" aria-hidden="true" />
                <div className="relative min-h-[40rem] overflow-hidden rounded-[2.35rem] border border-white/10 bg-[#080c13] px-5 pb-6 pt-14">
                  <div className="flex items-center justify-between">
                    <p className="text-base font-black tracking-[-0.035em] text-white">GROWTH<span className="text-[#e4bd45]">AGENT</span></p>
                    <span className="grid size-9 place-items-center rounded-lg border border-white/10 text-slate-300"><Menu className="size-4" aria-hidden="true" /></span>
                  </div>
                  <p className="mt-12 text-xs font-extrabold uppercase tracking-[0.18em] text-[#42d6c7]">Product-direction preview</p>
                  <h2 className="mt-4 text-4xl font-extrabold leading-[1.02] tracking-[-0.055em] text-white">Find the Florida construction opportunities worth reviewing.</h2>
                  <div className="mt-6 h-0.5 w-12 bg-[#e4bd45]" aria-hidden="true" />
                  <Link href="/early-access" className="ga-button mt-7 w-full justify-center">View Early Access Preview</Link>
                  <Link href="/how-it-works" className="ga-text-link mt-5 w-full justify-center">See How It Works<ArrowRight className="size-4" aria-hidden="true" /></Link>
                  <div className="mt-8 overflow-hidden rounded-xl border border-white/12 bg-black/20">
                    <p className="flex items-center gap-2 border-b border-white/10 px-4 py-3 text-xs font-extrabold text-white"><Circle className="size-3 text-[#e4bd45]" aria-hidden="true" /> Fictional demonstration data</p>
                    <p className="flex items-center gap-2 border-b border-white/10 px-4 py-3 text-xs text-slate-400"><MapPin className="size-3.5 text-slate-300" aria-hidden="true" /> Example Florida service area</p>
                    <p className="flex items-center gap-2 border-b border-white/10 px-4 py-3 text-xs text-slate-400"><ShieldCheck className="size-3.5 text-[#42d6c7]" aria-hidden="true" /> Evidence slot shown</p>
                    <p className="flex items-center gap-2 px-4 py-3 text-xs text-slate-400"><UserCheck className="size-3.5 text-[#42d6c7]" aria-hidden="true" /> Human review required</p>
                  </div>
                  <div className="ga-blueprint-art pointer-events-none absolute inset-x-0 bottom-0 aspect-[3/1] w-[185%] max-w-none -translate-x-[17%] bg-contain bg-bottom bg-no-repeat opacity-32" aria-hidden="true" />
                </div>
                <div className="mx-auto mt-2 h-1 w-24 rounded-full bg-white/10" aria-hidden="true" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
