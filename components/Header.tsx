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
    const dismiss = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", dismiss);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", dismiss);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-navy text-white">
      <div className="container-x flex h-16 items-center justify-between sm:h-20">
        <Link
          href="/"
          className="flex min-w-0 items-center gap-2 sm:gap-3"
          aria-label="SOJEX Exports home"
          onClick={() => setOpen(false)}
        >
          <span className="grid h-9 w-9 shrink-0 place-items-center bg-orange text-sm font-black sm:h-10 sm:w-10">
            SE
          </span>
          <span className="min-w-0">
            <b className="display block text-lg tracking-wide sm:text-xl">SOJEX</b>
            <small className="block text-[8px] tracking-[.26em] text-white/60 sm:text-[9px] sm:tracking-[.32em]">
              EXPORTS
            </small>
          </span>
        </Link>

        <nav className="hidden items-center gap-5 xl:flex" aria-label="Main navigation">
          {nav.slice(0, 7).map(([name, href]) => (
            <Link
              className="text-[11px] font-bold uppercase tracking-wider text-white/75 hover:text-orange"
              href={href}
              key={href}
            >
              {name}
            </Link>
          ))}
        </nav>

        <div className="hidden gap-2 xl:flex">
          <a
            className="btn btn-outline"
            href={waLink("Hello SOJEX EXPORTS, I would like to discuss a custom order.")}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle size={15} /> WhatsApp
          </a>
          <Link className="btn btn-orange" href="/request-quote">
            Request quote
          </Link>
        </div>

        <button
          type="button"
          className="grid h-11 w-11 place-items-center xl:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls={menuId}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <nav
          id={menuId}
          className="fixed inset-x-0 top-16 bottom-0 z-50 overflow-y-auto bg-navy px-4 py-5 sm:top-20 xl:hidden"
          aria-label="Mobile navigation"
        >
          <div className="mx-auto grid max-w-xl gap-1">
            {nav.map(([name, href]) => (
              <Link
                onClick={() => setOpen(false)}
                className="border-b border-white/10 py-3 text-sm font-bold uppercase"
                href={href}
                key={href}
              >
                {name}
              </Link>
            ))}
            <a
              className="btn btn-outline mt-4 w-full"
              target="_blank"
              rel="noopener noreferrer"
              href={waLink("Hello SOJEX EXPORTS, I would like to discuss a custom order.")}
            >
              WhatsApp {company.whatsapp}
            </a>
            <Link
              onClick={() => setOpen(false)}
              className="btn btn-orange mt-2 w-full"
              href="/request-quote"
            >
              Request quote
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
