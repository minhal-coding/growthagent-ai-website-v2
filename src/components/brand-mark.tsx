import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function BrandMark() {
  return (
    <Link href="/" className="group inline-flex items-center gap-3 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#42d6c7]" aria-label="GrowthAgent AI home">
      <span className="relative grid size-10 shrink-0 place-items-center rounded-xl border border-[#e4bd45]/55 bg-[#0a0d13] text-[#f2c94c] shadow-[0_10px_30px_rgba(228,189,69,0.12)]">
        <span className="absolute inset-2 rounded-md border border-[#e4bd45]/25" />
        <ArrowRight className="relative size-4 -rotate-45 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
      </span>
      <span className="text-base font-extrabold tracking-[-0.025em] text-white sm:text-lg">GrowthAgent <span className="text-[#42d6c7]">AI</span></span>
    </Link>
  );
}
