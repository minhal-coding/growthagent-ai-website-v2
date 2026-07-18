import Link from "next/link";
import { ArrowRight, Circle, MapPin, Radio } from "lucide-react";

import { launchAreas, trustPrinciples } from "@/components/site-data";
import { MotionStagger } from "@/components/ui/motion-reveal";

export function FloridaTrustSection({ compact = false }: { compact?: boolean }) {
  const visiblePrinciples = compact ? trustPrinciples.slice(0, 4) : trustPrinciples;

  return (
    <section aria-labelledby="florida-trust-title" className={`ga-content-visibility relative overflow-hidden border-y border-white/10 bg-[#06090f] px-5 sm:px-8 lg:px-12 ${compact ? "py-16 sm:py-20" : "py-20 sm:py-28"}`}>
      <div className="pointer-events-none absolute inset-0 ga-blueprint opacity-25" aria-hidden="true" />
      <div className="relative mx-auto max-w-[90rem]">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-[#e4bd45]">Florida launch research</p>
          <h2 id="florida-trust-title" className={`mt-5 text-balance font-extrabold leading-[1.02] tracking-[-0.05em] text-white ${compact ? "text-4xl sm:text-5xl lg:text-6xl" : "text-4xl sm:text-6xl lg:text-7xl"}`}>
            A focused market. An explicit trust ledger.
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
            The planned first-market work combines explicit service-area validation with controls for evidence, contacts, scope, and human review.
          </p>
          <p className="mx-auto mt-6 inline-flex max-w-3xl items-center gap-2 rounded-full border border-[#e4bd45]/40 bg-[#e4bd45]/[0.07] px-4 py-2 text-sm font-extrabold text-[#f2c94c]">
            <Radio className="size-4 shrink-0" aria-hidden="true" />
            Illustrative validation areas — not active coverage.
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-[1.6rem] border border-white/12 bg-[#070b12]/94 shadow-[0_38px_110px_rgba(0,0,0,0.36)]">
          <div className="grid xl:grid-cols-[1.08fr_0.92fr]">
            <div className={`relative overflow-hidden border-b border-white/10 p-5 xl:border-b-0 xl:border-r sm:p-8 ${compact ? "min-h-[28rem]" : "min-h-[34rem]"}`}>
              <div className="absolute left-5 top-5 z-10 sm:left-8 sm:top-8">
                <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#42d6c7]">Validation map</p>
                <p className="mt-2 max-w-xs text-sm leading-6 text-slate-400">Generic research areas show how geography could guide a future service-area review.</p>
              </div>

              <picture className="absolute inset-0">
                <source media="(max-width: 640px)" srcSet="/florida-validation-map-mobile.webp" />
                <img src="/florida-validation-map.webp" width="1100" height="825" loading="lazy" decoding="async" alt="Illustrative Florida validation map with generic connected research areas; not active coverage" className="size-full object-cover object-center opacity-90" />
              </picture>

              <div className="absolute inset-x-5 bottom-5 z-10 grid gap-2 sm:inset-x-8 sm:bottom-8 sm:grid-cols-2">
                {launchAreas.map((area) => (
                  <div key={area} className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-[#05070d]/95 px-3 py-2.5 text-xs font-semibold text-slate-200">
                    <MapPin className="size-3.5 shrink-0 text-[#e4bd45]" aria-hidden="true" />
                    {area}
                  </div>
                ))}
              </div>
            </div>

            <div className="p-5 sm:p-8">
              <div className="flex items-end justify-between gap-5 border-b border-white/10 pb-5">
                <div>
                  <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#e4bd45]">Trust Ledger</p>
                  <h3 className="mt-2 text-3xl font-extrabold tracking-[-0.04em] text-white">Controls before claims.</h3>
                </div>
                <span className="hidden text-right text-[0.65rem] font-extrabold uppercase tracking-[0.15em] text-slate-500 sm:block">Development<br />stage</span>
              </div>

              <MotionStagger>
                {visiblePrinciples.map((item) => (
                  <article key={item.title} className="grid gap-3 border-b border-white/10 py-5 sm:grid-cols-[auto_1fr]">
                    <span className="grid size-10 place-items-center rounded-xl border border-[#42d6c7]/25 bg-[#42d6c7]/[0.04] text-[#42d6c7]">
                      <item.icon className="size-4" aria-hidden="true" />
                    </span>
                    <div>
                      <div className="flex flex-wrap items-start justify-between gap-2">
                        <h4 className="font-extrabold text-white">{item.title}</h4>
                        <span className="rounded-full border border-white/10 px-2 py-1 text-[0.6rem] font-bold uppercase tracking-[0.1em] text-slate-400">{item.meta}</span>
                      </div>
                      <p className="mt-2 text-sm leading-6 text-slate-400">{item.text}</p>
                    </div>
                  </article>
                ))}
              </MotionStagger>
              <Link href="/trust-safety" className="ga-text-link mt-7">
                Read the trust approach
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className="grid border-t border-white/10 bg-black/25 text-[0.67rem] font-bold uppercase tracking-[0.12em] text-slate-500 sm:grid-cols-3">
            <p className="flex items-center gap-2 border-b border-white/10 px-5 py-4 sm:border-b-0 sm:border-r"><Circle className="size-3 text-[#42d6c7]" aria-hidden="true" /> Source access requires validation</p>
            <p className="flex items-center gap-2 border-b border-white/10 px-5 py-4 sm:border-b-0 sm:border-r"><Circle className="size-3 text-[#e4bd45]" aria-hidden="true" /> Coverage requires owner approval</p>
            <p className="flex items-center gap-2 px-5 py-4"><Circle className="size-3 text-[#42d6c7]" aria-hidden="true" /> Human decision remains required</p>
          </div>
        </div>
      </div>
    </section>
  );
}
