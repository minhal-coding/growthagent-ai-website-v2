import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { PageShell } from "@/components/site-chrome";

export default function NotFound() {
  return (
    <PageShell>
      <main id="main-content" className="px-5 py-24 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#42d6c7]">404</p>
          <h1 className="mt-5 text-5xl font-extrabold tracking-[-0.05em] text-white sm:text-7xl">This route is not part of the Florida launch.</h1>
          <p className="mt-6 text-lg leading-8 text-slate-400">Some legacy sales-automation pages were intentionally removed while GrowthAgent AI focuses on truthful construction opportunity intelligence.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/" className="ga-button-secondary justify-center">
              <ArrowLeft className="size-4" aria-hidden="true" />
              Back to Home
            </Link>
            <Link href="/early-access" className="ga-button justify-center">
              View Early Access Preview
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </main>
    </PageShell>
  );
}
