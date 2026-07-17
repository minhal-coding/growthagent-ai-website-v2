import Link from "next/link";
import { ArrowRight, CheckCircle2, Menu } from "lucide-react";

import { navigation } from "@/components/site-data";
import { cn } from "@/lib/utils";

export function BrandMark() {
  return (
    <Link href="/" className="group inline-flex items-center gap-3" aria-label="GrowthAgent AI home">
      <span className="relative grid size-10 shrink-0 place-items-center rounded-xl border border-[#d4af37]/55 bg-[#0a0d13] text-[#f2c94c] shadow-[0_10px_30px_rgba(212,175,55,0.12)]">
        <span className="absolute inset-2 rounded-md border border-[#d4af37]/25" />
        <ArrowRight className="relative size-4 -rotate-45 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
      </span>
      <span className="text-base font-extrabold tracking-[-0.025em] text-white sm:text-lg">
        GrowthAgent <span className="text-[#42d6c7]">AI</span>
      </span>
    </Link>
  );
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#05070d]/92 backdrop-blur-xl">
      <div className="mx-auto flex min-h-18 max-w-[90rem] items-center justify-between gap-4 px-5 sm:px-8 lg:px-12">
        <BrandMark />
        <nav aria-label="Primary navigation" className="hidden items-center gap-1 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-3.5 py-2 text-sm font-semibold text-slate-300 transition hover:bg-white/[0.06] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#42d6c7]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link href="/early-access" className="ga-button max-sm:!hidden">
            Join Florida Early Access
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
          <details className="group relative lg:hidden">
            <summary className="grid size-11 cursor-pointer list-none place-items-center rounded-xl border border-white/15 bg-white/[0.04] text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#42d6c7]" aria-label="Open navigation menu">
              <Menu className="size-5" aria-hidden="true" />
            </summary>
            <nav aria-label="Mobile navigation" className="absolute right-0 top-14 w-[min(21rem,calc(100vw-2.5rem))] rounded-2xl border border-white/12 bg-[#0a0d13] p-3 shadow-2xl">
              {navigation.map((item) => (
                <Link key={item.href} href={item.href} className="block rounded-xl px-4 py-3 text-sm font-semibold text-slate-200 hover:bg-white/[0.06]">
                  {item.label}
                </Link>
              ))}
              <Link href="/early-access" className="ga-button mt-2 flex w-full justify-center">
                Join Florida Early Access
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}

const footerGroups = [
  { title: "Explore", links: [["Product", "/product"], ["How It Works", "/how-it-works"], ["Florida Launch", "/florida-launch"]] },
  { title: "Company", links: [["About", "/about"], ["Early Access", "/early-access"], ["Contact", "/contact"]] },
  { title: "Trust", links: [["Trust & Safety", "/trust-safety"], ["Privacy", "/privacy"], ["Terms", "/terms"]] },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#03050a] px-5 py-14 sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-[90rem] gap-12 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <BrandMark />
          <p className="mt-5 max-w-md text-sm leading-6 text-slate-400">
            Early-access construction opportunity intelligence launching in Florida. Public-source evidence, explicit scope, and human review.
          </p>
          <div className="mt-6 flex flex-wrap gap-2 text-xs font-semibold text-slate-300">
            {['Source-backed', 'Florida launch', 'Human reviewed'].map((item) => (
              <span key={item} className="inline-flex items-center gap-1.5 rounded-full border border-white/10 px-3 py-1.5">
                <CheckCircle2 className="size-3.5 text-[#42d6c7]" aria-hidden="true" />
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
                  <li key={href}>
                    <Link href={href} className="text-sm text-slate-400 transition hover:text-white">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="mx-auto mt-12 flex max-w-[90rem] flex-col gap-3 border-t border-white/10 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 GrowthAgent AI. V2 early-access preview.</p>
        <p>Florida construction focus. Coverage is not statewide.</p>
      </div>
    </footer>
  );
}

export function PageShell({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("growthagent-site min-h-screen bg-[#05070d] text-white", className)}>
      <a href="#main-content" className="sr-only z-[100] rounded-md bg-white px-4 py-2 text-slate-950 focus:not-sr-only focus:fixed focus:left-4 focus:top-4">
        Skip to content
      </a>
      <SiteHeader />
      {children}
      <SiteFooter />
    </div>
  );
}

export function SectionHeading({
  title,
  text,
  label,
  align = "left",
  className,
}: {
  title: string;
  text?: string;
  label?: string;
  align?: "left" | "center";
  className?: string;
}) {
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
