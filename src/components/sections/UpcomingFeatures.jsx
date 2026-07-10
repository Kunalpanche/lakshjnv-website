import { motion } from "framer-motion";
import SectionHeading from "../SectionHeading.jsx";
import { upcomingFeatures } from "../../data/siteContent.js";

export default function UpcomingFeatures() {
  return (
    <section className="bg-white py-20">
      <div className="section-shell">
        <SectionHeading
          align="center"
          eyebrow="Upcoming Features"
          title="The full launch roadmap, shaped for serious preparation."
          copy="The platform is planned around daily learning, practice, motivation, analytics, and family visibility."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {upcomingFeatures.map(({ icon: Icon, title }, index) => (
            <motion.div
              key={title}
              className="rounded-lg border border-slate-200 bg-brand-bg p-5 text-center transition hover:border-brand-orange hover:bg-orange-50"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.03 }}
            >
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white text-xl text-brand-blue shadow-sm">
                <Icon aria-hidden="true" />
              </span>
              <h3 className="mt-4 font-display text-base font-bold text-brand-ink">{title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
