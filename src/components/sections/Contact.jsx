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
            copy="Reach the Laksh JNV Academy team for launch information, support, school partnerships, and educator collaboration."
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

        <div className="grid gap-5 sm:grid-cols-2">
          {contact.map(({ icon: Icon, label, value, href }) => (
            <a key={label} href={href} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-orange-200 hover:shadow-xl">
              <div className="mb-4">
                {typeof Icon === "string" ? (
                  <img src={Icon} alt={label} className="h-16 w-16 object-contain transition-transform group-hover:scale-110" />
                ) : (
                  <Icon aria-hidden="true" className="h-8 w-8 text-brand-orange" />
                )}
              </div>
              <p className="text-sm font-bold uppercase tracking-wide text-slate-500">{label}</p>
              <p className="mt-1 font-display text-lg font-bold text-brand-ink">{value}</p>
            </a>
          ))}
          <div className="w-full h-[350px] sm:h-[450px] sm:col-span-2 rounded-2xl overflow-hidden shadow-xl border border-slate-200 hover:shadow-2xl hover:border-brand-orange transition-all duration-300">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d465.25064357019386!2d79.13614829386117!3d21.112373173670683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4bf8ba099cc3d%3A0xc0c2ec4252659e2a!2sLAKSH%20JAWAHAR%20NAVODAYA%20ACADEMY%20FOR%20JNV%20ENTRANCE%20EXAM%20FOR%20CLASS%205%20th!5e0!3m2!1sen!2sin!4v1783836973119!5m2!1sen!2sin" 
              className="w-full h-full border-0" 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="strict-origin-when-cross-origin">
            </iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
