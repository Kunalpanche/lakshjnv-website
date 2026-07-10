import { motion } from "framer-motion";
import SectionHeading from "../SectionHeading.jsx";
import Button from "../Button.jsx";
import { benefits } from "../../data/siteContent.js";

export default function Benefits() {
  return (
    <section className="py-20">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Launch Benefits"
              title="Join early and start ahead."
              copy="Waitlist members will receive launch announcements, early access, and selected learning benefits before public release."
            />
            <Button href="#waitlist" className="mt-8">
              Reserve My Spot
            </Button>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {benefits.map(({ icon: Icon, title, description }, index) => (
              <motion.article
                key={title}
                className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm"
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50 text-brand-blue">
                  <Icon aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-display text-lg font-bold">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
