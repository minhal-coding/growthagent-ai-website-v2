import Link from "next/link";
import { Circle } from "lucide-react";

import { BrandMark } from "@/components/brand-mark";
import { SiteHeader } from "@/components/site-header";
import { cn } from "@/lib/utils";

const footerGroups = [
  { title: "Explore", links: [["Product", "/product"], ["How It Works", "/how-it-works"], ["Divisions", "/divisions"], ["Florida Launch", "/florida-launch"]] },
  { title: "Company", links: [["About", "/about"], ["Early Access Preview", "/early-access"], ["Contact Preview", "/contact"]] },
  { title: "Trust", links: [["Trust & Safety", "/trust-safety"], ["Privacy", "/privacy"], ["Terms", "/terms"]] },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#03050a] px-5 py-14 sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-[90rem] gap-12 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <BrandMark />
          <p className="mt-5 max-w-md text-sm leading-6 text-slate-400">
            A preview of Florida construction opportunity intelligence being designed around evidence, explicit scope, and human review.
          </p>
          <div className="mt-6 flex flex-wrap gap-2 text-xs font-semibold text-slate-300">
            {["Evidence required", "Florida planned first", "Designed for human review"].map((item) => (
              <span key={item} className="inline-flex items-center gap-1.5 rounded-full border border-white/10 px-3 py-1.5">
                <Circle className="size-3.5 text-[#42d6c7]" aria-hidden="true" />
                {item}
              </span>
            ))}
          </div>
        </div>
        <div className="grid gap-8 sm:grid-cols-3">
          {footerGroups.map((group) => (
            <div key={group.title}>
              <h2 className="text-sm font-bold text-white">{group.title}</h2>
              <ul className="mt-4 space-y-3">
                {group.links.map(([label, href]) => (
                  <li key={href}><Link href={href} className="text-sm text-slate-400 transition hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#42d6c7]">{label}</Link></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="mx-auto mt-12 flex max-w-[90rem] flex-col gap-3 border-t border-white/10 pt-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 GrowthAgent AI. V2 product-direction preview.</p>
        <p>Florida construction is the planned first market. Exact coverage is unverified.</p>
      </div>
    </footer>
  );
}

export function PageShell({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("growthagent-site min-h-screen bg-[#05070d] text-white", className)}>
      <a href="#main-content" className="sr-only z-[100] rounded-md bg-white px-4 py-2 text-slate-950 focus:not-sr-only focus:fixed focus:left-4 focus:top-4">Skip to content</a>
      <SiteHeader />
      {children}
      <SiteFooter />
    </div>
  );
}

export function SectionHeading({ title, text, label, align = "left", className }: { title: string; text?: string; label?: string; align?: "left" | "center"; className?: string }) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      {label ? <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-[#42d6c7]">{label}</p> : null}
      <h2 className="text-balance text-3xl font-extrabold leading-[1.05] tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl">{title}</h2>
      {text ? <p className="mt-5 text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">{text}</p> : null}
    </div>
  );
}

export function PageIntro({ title, text, label }: { title: string; text: string; label?: string }) {
  return (
    <section className="border-b border-white/10 px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
      <div className="mx-auto max-w-[90rem]">
        {label ? <p className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-[#42d6c7]">{label}</p> : null}
        <h1 className="max-w-5xl text-balance text-4xl font-extrabold leading-[1.02] tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl">{title}</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">{text}</p>
      </div>
    </section>
  );
}
