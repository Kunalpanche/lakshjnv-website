import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import SectionHeading from "../SectionHeading.jsx";
import { aboutPillars } from "../../data/siteContent.js";

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="section-shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <SectionHeading
          eyebrow="About Laksh JNV"
          title="Built for students, trusted by parents, focused on one goal."
          copy="Laksh JNV is designed as a focused preparation platform for students aiming at Jawahar Navodaya Vidyalaya entrance exams."
        />

        <div className="grid gap-4">
          {aboutPillars.map((item, index) => (
            <motion.article
              key={item.title}
              className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <div className="flex gap-4">
                <span className="mt-1 text-brand-orange">
                  <FaCheckCircle aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-display text-xl font-bold text-brand-blue">{item.title}</h3>
                  <p className="mt-2 leading-7 text-slate-600">{item.copy}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
