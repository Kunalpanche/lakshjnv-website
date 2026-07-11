import { navigation, socialLinks } from "../data/siteContent.js";

const policyLinks = ["Privacy Policy", "Terms & Conditions", "Refund Policy", "Contact"];

export default function Footer() {
  return (
    <footer className="bg-brand-blue text-white">
      <div className="section-shell grid gap-10 py-12 lg:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <a href="#home" className="inline-flex items-center gap-3 font-display text-xl font-extrabold">
            <img src="/laksh_jnvs_logo.png" alt="Laksh JNV Academy logo" className="h-16 w-16 shrink-0 object-contain" width="64" height="64" />
            Laksh JNV Academy
          </a>
          <p className="mt-4 max-w-md leading-7 text-blue-100">
            A premium coming-soon learning platform for JNV entrance exam aspirants, parents, and educators.
          </p>
        </div>

        <div>
          <h2 className="font-display text-lg font-bold">Explore</h2>
          <div className="mt-4 grid gap-3">
            {navigation.map((item) => (
              <a key={item.href} href={item.href} className="text-blue-100 transition hover:text-brand-yellow">
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h2 className="font-display text-lg font-bold">Follow</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-brand-yellow hover:text-brand-blue"
                aria-label={label}
              >
                <Icon aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/15">
        <div className="section-shell flex flex-col gap-4 py-6 text-sm text-blue-100 md:flex-row md:items-center md:justify-between">
          <p>Copyright 2026 Laksh JNV Academy. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            {policyLinks.map((label) => (
              <a key={label} href={label === "Contact" ? "#contact" : "#"} className="hover:text-brand-yellow">
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
