import { motion } from "framer-motion";
import SectionHeading from "../SectionHeading.jsx";
import { chooseFeatures } from "../../data/siteContent.js";

export default function WhyChoose() {
  return (
    <section id="features" className="bg-white py-20">
      <div className="section-shell">
        <SectionHeading
          align="center"
          eyebrow="Why Choose Laksh JNV"
          title="Everything an aspirant needs before exam day."
          copy="A complete learning system combining expert teaching, consistent practice, and insights that help students improve steadily."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {chooseFeatures.map(({ icon: Icon, title, description }, index) => (
            <motion.article
              key={title}
              className="group rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-orange-200 hover:shadow-xl"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.04 }}
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-50 text-xl text-brand-orange transition group-hover:bg-brand-orange group-hover:text-white">
                <Icon aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-display text-lg font-bold text-brand-ink">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
