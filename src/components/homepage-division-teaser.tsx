import Link from "next/link";
import { ArrowRight, Layers3 } from "lucide-react";

import { constructionDivisions } from "@/components/division-data";

export function HomepageDivisionTeaser() {
  return (
    <section id="divisions" aria-labelledby="home-divisions-title" className="ga-content-visibility relative overflow-hidden border-y border-white/10 bg-[#05080d] px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
      <div className="mx-auto max-w-[90rem]">
        <div className="grid items-end gap-8 lg:grid-cols-[1fr_auto]">
          <div className="max-w-4xl">
            <p className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.22em] text-[#42d6c7]"><Layers3 className="size-4" aria-hidden="true" />Division intelligence</p>
            <h2 id="home-divisions-title" className="mt-5 text-balance text-4xl font-extrabold tracking-[-0.05em] text-white sm:text-5xl">Built around 14 construction divisions.</h2>
            <p className="mt-5 max-w-3xl text-base leading-7 text-slate-300">Organize candidate records around the work a contractor pursues, then review representative scopes on the dedicated Divisions page.</p>
          </div>
          <Link href="/divisions" className="ga-text-link">Explore division scopes<ArrowRight className="size-4" aria-hidden="true" /></Link>
        </div>

        <ul className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-7">
          {constructionDivisions.map((division) => {
            const highlighted = division.number === "09";
            return (
              <li key={division.number} className={`min-h-24 bg-[#070b11] p-4 ${highlighted ? "bg-[#e4bd45]/[0.075]" : ""}`}>
                <div className="flex items-start justify-between gap-3">
                  <span className={`text-xs font-black tracking-[0.15em] ${highlighted ? "text-[#e4bd45]" : "text-[#42d6c7]"}`}>DIV {division.number}</span>
                  {highlighted ? <span className="rounded-full border border-[#e4bd45]/35 px-2 py-0.5 text-[0.52rem] font-extrabold uppercase tracking-[0.08em] text-[#f2c94c]">Under validation</span> : null}
                </div>
                <p className="mt-3 text-sm font-extrabold leading-5 text-white">{division.shortName}</p>
              </li>
            );
          })}
        </ul>
        <p className="mt-5 text-xs leading-5 text-slate-500">All division coverage remains planned or under validation. No division is represented as active.</p>
      </div>
    </section>
  );
}
