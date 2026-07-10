import { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import SectionHeading from "../SectionHeading.jsx";
import { faqs } from "../../data/siteContent.js";

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="bg-white py-20">
      <div className="section-shell">
        <SectionHeading
          align="center"
          eyebrow="FAQ"
          title="Answers before the launch bell rings."
          copy="The most common questions from students, parents, teachers, and coaching partners."
        />

        <div className="mx-auto mt-10 max-w-4xl divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
          {faqs.map((item, index) => {
            const expanded = open === index;
            return (
              <div key={item.question}>
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left font-display text-base font-bold text-brand-ink sm:px-7"
                  onClick={() => setOpen(expanded ? -1 : index)}
                  aria-expanded={expanded}
                >
                  {item.question}
                  <FaChevronDown className={`shrink-0 transition ${expanded ? "rotate-180 text-brand-orange" : "text-slate-400"}`} aria-hidden="true" />
                </button>
                {expanded && (
                  <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="px-5 pb-5 sm:px-7">
                    <p className="leading-7 text-slate-600">{item.answer}</p>
                  </motion.div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
