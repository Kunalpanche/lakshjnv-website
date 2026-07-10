import { motion } from "framer-motion";

export default function SectionHeading({ eyebrow, title, copy, align = "left", tone = "light" }) {
  const isDark = tone === "dark";

  return (
    <motion.div
      className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-4xl"}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55 }}
    >
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className={`section-title mt-4 ${isDark ? "text-white" : ""}`}>{title}</h2>
      {copy && (
        <p className={`${align === "center" ? "section-copy mx-auto" : "section-copy"} ${isDark ? "text-blue-100" : ""}`}>
          {copy}
        </p>
      )}
    </motion.div>
  );
}
