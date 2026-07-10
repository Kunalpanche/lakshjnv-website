import { FaMapMarkerAlt } from "react-icons/fa";
import SectionHeading from "../SectionHeading.jsx";
import { contact, socialLinks } from "../../data/siteContent.js";

export default function Contact() {
  return (
    <section id="contact" className="bg-white py-20">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <SectionHeading
            eyebrow="Contact"
            title="Questions from parents, schools, or teachers?"
            copy="Reach the Laksh JNV team for launch information, support, school partnerships, and educator collaboration."
          />

          <div className="mt-8 flex flex-wrap gap-3">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-50 text-brand-blue transition hover:bg-brand-orange hover:text-white"
                aria-label={label}
              >
                <Icon aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {contact.map(({ icon: Icon, label, value, href }) => (
            <a key={label} href={href} className="rounded-lg border border-slate-200 bg-brand-bg p-6 transition hover:border-brand-orange hover:bg-orange-50">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-white text-brand-orange shadow-sm">
                <Icon aria-hidden="true" />
              </span>
              <p className="mt-4 text-sm font-bold uppercase tracking-wide text-slate-500">{label}</p>
              <p className="mt-1 font-display text-lg font-bold text-brand-ink">{value}</p>
            </a>
          ))}
          <div className="rounded-lg border border-dashed border-slate-300 bg-white p-6 sm:col-span-2">
            <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50 text-brand-blue">
              <FaMapMarkerAlt aria-hidden="true" />
            </span>
            <p className="mt-4 font-display text-lg font-bold text-brand-ink">Map placeholder</p>
            <p className="mt-2 leading-7 text-slate-600">
              Google Maps can be embedded here once the official office or support location is finalized.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
