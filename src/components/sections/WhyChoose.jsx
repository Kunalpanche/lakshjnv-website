import { motion } from "framer-motion";
import SectionHeading from "../SectionHeading.jsx";
import { chooseFeatures } from "../../data/siteContent.js";

export default function WhyChoose() {
  return (
    <section id="features" className="bg-white py-20">
      <div className="section-shell">
        <SectionHeading
          align="center"
          eyebrow="Why Choose Laksh JNV Academy"
          title="Everything an aspirant needs before exam day."
          copy="A complete learning system combining expert teaching, consistent practice, and insights that help students improve steadily."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-1 md:grid-cols-2">
          {chooseFeatures.map(({ icon: Icon, title, description }, index) => (
            <motion.article
              key={title}
              className="group flex flex-row gap-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-orange-200 hover:shadow-xl"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.04 }}
            >
              <div className="flex-shrink-0">
                {typeof Icon === "string" ? (
                  <img
                    src={Icon}
                    alt={title}
                    className="h-16 w-16 sm:h-20 sm:w-20 object-contain"
                  />
                ) : (
                  <Icon
                    aria-hidden="true"
                    className="h-12 w-12 text-brand-orange"
                  />
                )}
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-brand-ink">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
