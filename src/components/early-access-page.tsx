import { Circle } from "lucide-react";

import { EarlyAccessForm } from "@/components/early-access-form";
import { PageIntro, PageShell } from "@/components/site-chrome";

const reviewPoints = [
  "Your primary construction trade",
  "The Florida counties or service areas you cover",
  "The public opportunity types your team reviews",
  "The evidence your team needs before deciding",
];

export function EarlyAccessPage() {
  return (
    <PageShell>
      <main id="main-content">
        <PageIntro
          label="Early access"
          title="Preview a future Florida early-access intake."
          text="This nonfunctional preview shows the topics a future, owner-approved intake could cover. It does not collect information."
        />
        <section className="px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
          <div className="mx-auto grid max-w-[90rem] gap-12 lg:grid-cols-[0.78fr_1.22fr]">
            <div>
              <h2 className="text-3xl font-extrabold tracking-[-0.04em] text-white">Example topics for a future conversation</h2>
              <ul className="mt-8 space-y-5">
                {reviewPoints.map((point) => (
                  <li key={point} className="flex gap-3 text-sm leading-6 text-slate-300">
                    <Circle className="mt-0.5 size-4 shrink-0 text-[#42d6c7]" aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>
              <div className="mt-10 rounded-xl border border-[#d4af37]/25 bg-[#d4af37]/[0.05] p-5 text-sm leading-6 text-slate-400">
                This page does not accept early-access requests. Exact source coverage, launch timing, and any future review process still require owner approval.
              </div>
            </div>
            <EarlyAccessForm />
          </div>
        </section>
      </main>
    </PageShell>
  );
}
