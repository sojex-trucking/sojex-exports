"use client";

import Link from "next/link";
import { useEffect, useId, useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { company, nav, waLink } from "@/lib/config";

export default function Header() {
  const [open, setOpen] = useState(false);
  const menuId = useId();
  useEffect(() => {
    if (!open) return;
    const dismiss = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", dismiss);
    return () => window.removeEventListener("keydown", dismiss);
  }, [open]);
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-navy text-white">
      <div className="container-x flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-3" aria-label="SOJEX Exports home" onClick={() => setOpen(false)}>
          <span className="grid h-10 w-10 place-items-center bg-orange font-black">SE</span>
          <span><b className="display text-xl tracking-wide">SOJEX</b><small className="block text-[9px] tracking-[.32em] text-white/60">EXPORTS</small></span>
        </Link>
        <nav className="hidden items-center gap-5 xl:flex" aria-label="Main navigation">
          {nav.slice(0, 7).map(([name, href]) => <Link className="text-[11px] font-bold uppercase tracking-wider text-white/75 hover:text-orange" href={href} key={href}>{name}</Link>)}
        </nav>
        <div className="hidden gap-2 md:flex">
          <a className="btn btn-outline" href={waLink("Hello SOJEX EXPORTS, I would like to discuss a custom order.")} target="_blank" rel="noopener noreferrer"><MessageCircle size={15} /> WhatsApp</a>
          <Link className="btn btn-orange" href="/request-quote">Request quote</Link>
        </div>
        <button type="button" className="xl:hidden" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-controls={menuId} aria-label={open ? "Close menu" : "Open menu"}>{open ? <X /> : <Menu />}</button>
      </div>
      {open && <nav id={menuId} className="container-x grid max-h-[calc(100vh-5rem)] gap-1 overflow-y-auto border-t border-white/10 py-4 xl:hidden" aria-label="Mobile navigation">
        {nav.map(([name, href]) => <Link onClick={() => setOpen(false)} className="py-2 text-sm font-bold uppercase" href={href} key={href}>{name}</Link>)}
        <a className="btn btn-outline mt-2" target="_blank" rel="noopener noreferrer" href={waLink("Hello SOJEX EXPORTS, I would like to discuss a custom order.")}>WhatsApp {company.whatsapp}</a>
        <Link onClick={() => setOpen(false)} className="btn btn-orange mt-2" href="/request-quote">Request quote</Link>
      </nav>}
    </header>
  );
}
