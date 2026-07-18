import Link from "next/link";
import { ArrowRight, FileCheck2, MapPinned, UserCheck } from "lucide-react";

import { ConstructionOpportunityPreview } from "@/components/construction-opportunity-preview";
import { FloridaTrustSection } from "@/components/florida-trust-section";
import { HomepageCinematicWorkflow } from "@/components/homepage-cinematic-workflow";
import { HomepageEarlyAccess } from "@/components/homepage-early-access";
import { PageShell } from "@/components/site-chrome";

const supportTiles = [
  { title: "Source context preserved", text: "Designed to keep evidence beside each example record.", icon: FileCheck2, accent: "text-[#42d6c7]" },
  { title: "Service-area focused", text: "Geographic fit stays an explicit human review step.", icon: MapPinned, accent: "text-[#e4bd45]" },
  { title: "Designed for human review", text: "A person remains responsible for every next step.", icon: UserCheck, accent: "text-[#42d6c7]" },
];

export function MarketingHome() {
  return (
    <PageShell>
      <main id="main-content">
        <section className="ga-grid-bg relative overflow-hidden border-b border-white/10 bg-[#03070c] px-5 pb-0 pt-10 sm:px-8 sm:pt-12 lg:px-10 lg:pt-10">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-[40rem] bg-[radial-gradient(circle_at_76%_15%,rgba(66,214,199,0.12),transparent_36%),radial-gradient(circle_at_12%_20%,rgba(228,189,69,0.08),transparent_31%)]" aria-hidden="true" />
          <div className="relative mx-auto grid max-w-[90rem] gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:gap-10">
            <div className="max-w-2xl lg:pb-12">
              <h1 className="max-w-xl text-balance text-[3.2rem] font-extrabold leading-[1.01] tracking-[-0.052em] text-white sm:text-[3.75rem] lg:text-[3.35rem] xl:text-[3.8rem]">
                Find the <span className="text-[#42d6c7]">Florida</span> construction opportunities worth reviewing.
              </h1>
              <p className="mt-6 max-w-xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
                GrowthAgent AI is being designed to help Florida contractors evaluate human-reviewed workflows for public construction opportunity records. Permit, planning, and procurement source categories remain under evaluation.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/florida-launch" className="ga-button justify-center py-3.5 sm:justify-start">
                  Explore Florida Launch
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
                <Link href="/early-access" className="ga-button-secondary justify-center py-3.5 sm:justify-start">
                  View Early Access Preview
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </div>
              <div className="ga-blueprint-art pointer-events-none mt-5 aspect-[3/1] w-full max-w-xl bg-contain bg-bottom bg-no-repeat opacity-55" aria-hidden="true" />
            </div>

            <div className="relative min-w-0 lg:pb-12">
              <div className="pointer-events-none absolute -inset-8 bg-[radial-gradient(circle_at_center,rgba(66,214,199,0.1),transparent_68%)]" aria-hidden="true" />
              <div className="relative">
                <ConstructionOpportunityPreview compact />
              </div>
            </div>
          </div>

          <div className="relative mx-auto max-w-[90rem] border-x border-t border-white/10 bg-[#080d14]/92">
            <div className="pointer-events-none absolute inset-0 ga-blueprint opacity-55" aria-hidden="true" />
            <div className="relative grid lg:grid-cols-[1.12fr_1.28fr]">
              <div className="border-b border-white/10 px-6 py-4 lg:border-b-0 lg:border-r lg:px-8">
                <h2 className="text-xl font-extrabold tracking-[-0.035em] text-white">Built for how <span className="text-[#42d6c7]">Florida</span> contractors win work.</h2>
                <p className="mt-3 max-w-xl text-sm leading-6 text-slate-400">A concise review surface for evaluating evidence, fit, and the next human decision.</p>
              </div>
              <div className="grid sm:grid-cols-3">
                {supportTiles.map((tile, index) => (
                  <article key={tile.title} className={`px-5 py-4 text-center ${index < supportTiles.length - 1 ? "border-b border-white/10 sm:border-b-0 sm:border-r" : ""}`}>
                    <tile.icon className={`mx-auto size-7 ${tile.accent}`} aria-hidden="true" />
                    <h3 className="mt-3 text-sm font-bold text-slate-200">{tile.title}</h3>
                    <p className="sr-only">{tile.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <FloridaTrustSection compact />
        <HomepageCinematicWorkflow />
        <HomepageEarlyAccess />
      </main>
    </PageShell>
  );
}
