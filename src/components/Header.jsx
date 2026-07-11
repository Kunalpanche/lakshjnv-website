import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import Button from "./Button.jsx";
import { navigation } from "../data/siteContent.js";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/70 bg-white/85 backdrop-blur-xl">
      <nav className="section-shell flex h-20 items-center justify-between" aria-label="Primary navigation">
        <a href="#home" className="flex items-center gap-3 font-display text-xl font-extrabold text-brand-blue">
          <img src="/laksh_jnvs_logo.png" alt="Laksh JNV Academy logo" className="h-16 w-16 shrink-0 object-contain sm:h-[72px] sm:w-[72px]" width="72" height="72" />
          <span>Laksh JNV Academy</span>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} className="text-sm font-semibold text-slate-600 transition hover:text-brand-orange">
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:block">
          <Button href="#waitlist">Join Waitlist</Button>
        </div>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-brand-blue lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Toggle navigation"
        >
          {open ? <FaTimes aria-hidden="true" /> : <FaBars aria-hidden="true" />}
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-slate-100 bg-white px-4 py-4 shadow-lg lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-3 text-sm font-semibold text-slate-700 hover:bg-orange-50 hover:text-brand-orange"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button href="#waitlist" className="mt-2" onClick={() => setOpen(false)}>
              Join Waitlist
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
