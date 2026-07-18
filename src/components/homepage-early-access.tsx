import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Circle, MapPin, Menu, ShieldCheck, UserCheck } from "lucide-react";

import { EarlyAccessForm } from "@/components/early-access-form";

export function HomepageEarlyAccess() {
  return (
    <section aria-labelledby="homepage-early-access-title" className="ga-grid-bg relative overflow-hidden bg-[#05080d] px-4 py-14 sm:px-8 sm:py-18 lg:px-10">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_30%,rgba(66,214,199,0.08),transparent_34%)]" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-[90rem] gap-5 rounded-xl border border-white/10 bg-[#080c13]/95 p-4 shadow-[0_38px_110px_rgba(0,0,0,0.42)] lg:grid-cols-[0.72fr_1.12fr_0.72fr] lg:items-stretch lg:p-5">
        <div className="relative min-h-[34rem] overflow-hidden rounded-lg border border-white/10 bg-[#070b12] p-7 lg:p-8">
          <div className="relative z-10">
            <span className="grid size-12 place-items-center rounded-full border border-[#e4bd45] text-[#e4bd45]"><MapPin className="size-5" aria-hidden="true" /></span>
            <h2 id="homepage-early-access-title" className="mt-6 text-balance text-4xl font-extrabold leading-[1.03] tracking-[-0.05em] text-white lg:text-[2.25rem]">Help shape the Florida launch.</h2>
            <p className="mt-5 text-base leading-7 text-slate-400">Preview the trade, service-area, and public-opportunity topics a future owner-approved intake could cover.</p>
            <div className="mt-7 h-0.5 w-12 bg-[#e4bd45]" aria-hidden="true" />
            <p className="mt-6 text-xs leading-5 text-slate-500">This visual preview does not accept applications or collect information.</p>
          </div>
          <Image src="/construction-blueprint.webp" alt="" width={1800} height={600} className="pointer-events-none absolute inset-x-0 bottom-0 w-[185%] max-w-none -translate-x-[16%] opacity-42 mix-blend-screen" aria-hidden="true" />
        </div>

        <EarlyAccessForm homepage />

        <div className="relative mx-auto flex w-full max-w-sm items-center justify-center px-2 py-2">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,rgba(66,214,199,0.11),transparent_62%)]" aria-hidden="true" />
          <div className="relative w-full rounded-[2.8rem] border border-white/25 bg-[#020407] p-2.5 shadow-[0_35px_100px_rgba(0,0,0,0.65)]">
            <div className="absolute left-1/2 top-4 z-20 h-6 w-24 -translate-x-1/2 rounded-full bg-black" aria-hidden="true" />
            <div className="relative min-h-[35rem] overflow-hidden rounded-[2.15rem] border border-white/10 bg-[#080c13] px-5 pb-6 pt-12">
              <div className="flex items-center justify-between">
                <Image src="/brand/growthagent-ai-reference-lockup.png" alt="GrowthAgent AI" width={258} height={52} className="h-auto w-36" />
                <span className="grid size-9 place-items-center rounded-lg border border-white/10 text-slate-300"><Menu className="size-4" aria-hidden="true" /></span>
              </div>
              <h3 className="mt-11 text-[2rem] font-extrabold leading-[1.04] tracking-[-0.05em] text-white">Find the Florida construction opportunities worth reviewing.</h3>
              <div className="mt-6 h-0.5 w-12 bg-[#e4bd45]" aria-hidden="true" />
              <Link href="/florida-launch" className="ga-button mt-7 w-full justify-center text-xs">Explore Florida Launch</Link>
              <Link href="/early-access" className="ga-text-link mt-5 w-full justify-center text-xs">View Early Access Preview<ArrowRight className="size-4" aria-hidden="true" /></Link>
              <div className="mt-8 overflow-hidden rounded-lg border border-white/12 bg-black/20">
                <p className="flex items-center gap-2 border-b border-white/10 px-4 py-3 text-xs font-extrabold text-white"><Circle className="size-3 text-[#e4bd45]" aria-hidden="true" /> Demonstration data</p>
                <p className="flex items-center gap-2 border-b border-white/10 px-4 py-3 text-xs text-slate-400"><MapPin className="size-3.5 text-slate-300" aria-hidden="true" /> Illustrative Florida area</p>
                <p className="flex items-center gap-2 border-b border-white/10 px-4 py-3 text-xs text-slate-400"><ShieldCheck className="size-3.5 text-[#42d6c7]" aria-hidden="true" /> Example evidence state</p>
                <p className="flex items-center gap-2 px-4 py-3 text-xs text-slate-400"><UserCheck className="size-3.5 text-[#42d6c7]" aria-hidden="true" /> Human review required</p>
              </div>
              <Image src="/construction-blueprint-mobile.webp" alt="" width={760} height={540} className="pointer-events-none absolute inset-x-0 bottom-0 w-[170%] max-w-none -translate-x-[20%] opacity-32 mix-blend-screen" aria-hidden="true" />
            </div>
            <div className="mx-auto mt-2 h-1 w-24 rounded-full bg-white/10" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
}
