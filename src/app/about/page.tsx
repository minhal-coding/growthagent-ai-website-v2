import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Eye, HardHat, MapPinned } from "lucide-react";

import { PageIntro, PageShell } from "@/components/site-chrome";

export const metadata: Metadata = {
  title: "About",
  description: "Why GrowthAgent AI is focusing its early-access launch on source-backed construction opportunities in Florida.",
  alternates: { canonical: "/about" },
};

const commitments = [
  { title: "Construction first", text: "The V2 launch is designed around the language, geography, and review needs of construction teams.", icon: HardHat },
  { title: "Florida first", text: "A focused launch creates room to validate individual sources and service-area relevance before expanding.", icon: MapPinned },
  { title: "Truth before scale", text: "The website separates demonstration data, planned workflows, and independently verified capabilities.", icon: Eye },
];

export default function AboutPage() {
  return (
    <PageShell>
      <main id="main-content">
        <PageIntro
          label="About"
          title="A narrower launch makes a more useful product."
          text="GrowthAgent AI is moving from a broad sales-automation story to a focused early-access platform for Florida construction opportunity intelligence."
        />
        <section className="px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
          <div className="mx-auto grid max-w-[90rem] gap-12 lg:grid-cols-[0.82fr_1.18fr]">
            <div>
              <h2 className="text-3xl font-extrabold tracking-[-0.04em] text-white sm:text-5xl">The goal is a review workflow teams can trust.</h2>
              <p className="mt-6 text-lg leading-8 text-slate-300">Public construction records can be useful, but only when the source, location, scope, and operator decision remain visible. V2 is being built around that discipline.</p>
              <Link href="/early-access" className="ga-button mt-8">
                Help Shape the Launch
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </div>
            <div className="border-y border-white/10">
              {commitments.map((item) => (
                <article key={item.title} className="grid gap-4 border-b border-white/10 py-7 last:border-b-0 sm:grid-cols-[3rem_1fr]">
                  <item.icon className="size-5 text-[#42d6c7]" aria-hidden="true" />
                  <div>
                    <h2 className="font-extrabold text-white">{item.title}</h2>
                    <p className="mt-2 text-sm leading-6 text-slate-400">{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
