"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu, X } from "lucide-react";

import { BrandMark } from "@/components/brand-mark";
import { navigation } from "@/components/site-data";

function isCurrent(pathname: string, href: string) {
  return href === "/" ? pathname === href : pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#05070d]/92 backdrop-blur-xl">
      <div className="mx-auto flex min-h-18 max-w-[90rem] items-center justify-between gap-4 px-5 sm:px-8 lg:px-12">
        <BrandMark />
        <nav aria-label="Primary navigation" className="hidden items-center gap-1 lg:flex">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} aria-current={isCurrent(pathname, item.href) ? "page" : undefined} className="rounded-lg px-3.5 py-2 text-sm font-semibold text-slate-300 transition hover:bg-white/[0.06] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#42d6c7] aria-[current=page]:bg-white/[0.07] aria-[current=page]:text-white">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link href="/florida-launch" className="ga-button max-sm:!hidden">Explore Florida Launch<ArrowRight className="size-4" aria-hidden="true" /></Link>
          <details className="group relative lg:hidden" open={menuOpen} onToggle={(event) => setMenuOpen(event.currentTarget.open)}>
            <summary className="grid size-11 cursor-pointer list-none place-items-center rounded-xl border border-white/15 bg-white/[0.04] text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#42d6c7]" aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}>
              {menuOpen ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
            </summary>
            <nav aria-label="Mobile navigation" className="absolute right-0 top-14 w-[min(21rem,calc(100vw-2.5rem))] rounded-2xl border border-white/12 bg-[#0a0d13] p-3 shadow-2xl">
              {navigation.map((item) => (
                <Link key={item.href} href={item.href} aria-current={isCurrent(pathname, item.href) ? "page" : undefined} onClick={() => setMenuOpen(false)} className="block rounded-xl px-4 py-3 text-sm font-semibold text-slate-200 hover:bg-white/[0.06] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#42d6c7] aria-[current=page]:bg-white/[0.07] aria-[current=page]:text-white">
                  {item.label}
                </Link>
              ))}
              <Link href="/florida-launch" onClick={() => setMenuOpen(false)} className="ga-button mt-2 flex w-full justify-center">Explore Florida Launch<ArrowRight className="size-4" aria-hidden="true" /></Link>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
