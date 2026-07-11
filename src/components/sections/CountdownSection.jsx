import { motion } from "framer-motion";
import { FaClock } from "react-icons/fa";
import { launchDate } from "../../data/siteContent.js";
import { useCountdown } from "../../hooks/useCountdown.js";

export default function CountdownSection() {
  const { days, hours, minutes, seconds, total } = useCountdown(launchDate);
  const parts = [
    ["Days", days],
    ["Hours", hours],
    ["Minutes", minutes],
    ["Seconds", seconds],
  ];

  return (
    <section className="bg-white py-12" aria-labelledby="countdown-title">
      <div className="section-shell">
        <motion.div
          className="rounded-2xl bg-brand-blue p-5 text-white shadow-premium sm:p-8"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
        >
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm font-semibold text-brand-yellow">
                <FaClock aria-hidden="true" />
                Launch Countdown
              </span>
              <h2 id="countdown-title" className="mt-3 font-display text-2xl font-extrabold sm:text-3xl">
                {total > 0 ? "Preparing the classroom for launch" : "Laksh JNV Academy launch window is here"}
              </h2>
              <p className="mt-2 max-w-2xl text-blue-100">Target launch date: July 15, 2026 at 9:00 AM IST.</p>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {parts.map(([label, value]) => (
                <div key={label} className="min-w-24 rounded-lg bg-white p-4 text-center text-brand-ink">
                  <p className="font-display text-3xl font-extrabold text-brand-orange">{String(value).padStart(2, "0")}</p>
                  <p className="mt-1 text-xs font-bold uppercase tracking-wide text-slate-500">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
