import { motion } from "framer-motion";
import { FaBell, FaCheckCircle, FaRocket } from "react-icons/fa";
import Button from "../Button.jsx";
import { stats } from "../../data/siteContent.js";

export default function Hero() {
  return (
    <section id="home" className="relative pt-28 lg:pt-32">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(255,107,0,0.14),transparent_34%),linear-gradient(135deg,#f8fafc_0%,#eff6ff_58%,#fff7ed_100%)]" />
      <div className="section-shell grid min-h-[calc(100vh-5rem)] items-center gap-12 py-12 lg:grid-cols-[0.95fr_1.05fr] lg:py-16">
        <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }}>
          <span className="eyebrow">
            <FaRocket aria-hidden="true" />
            Coming Soon for JNV Aspirants
          </span>
          <h1 className="mt-6 font-display text-4xl font-extrabold leading-tight tracking-normal text-brand-ink sm:text-5xl lg:text-6xl">
            Laksh JNV
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
            A premium online learning platform for Jawahar Navodaya Vidyalaya entrance exam preparation, built with live
            classes, mock tests, smart analytics, and parent-friendly progress visibility.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="#waitlist">
              <FaCheckCircle aria-hidden="true" />
              Join Waitlist
            </Button>
            <Button href="#newsletter" variant="secondary">
              <FaBell aria-hidden="true" />
              Notify Me
            </Button>
          </div>

          <div className="mt-10 grid max-w-xl grid-cols-3 gap-3">
            {stats.map((item) => (
              <div key={item.label} className="rounded-lg border border-white bg-white/80 p-4 shadow-sm">
                <p className="font-display text-2xl font-extrabold text-brand-blue">{item.value}</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500">{item.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.96, y: 28 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <div className="glass-panel relative overflow-hidden rounded-[28px] p-3">
            <img
              src="/laksh-jnv-hero.png"
              alt="Students using an online education platform for JNV entrance preparation"
              width="1536"
              height="864"
              className="aspect-[16/10] w-full rounded-[22px] object-cover"
              loading="eager"
              fetchPriority="high"
            />
            <motion.div
              className="absolute bottom-6 left-6 max-w-[220px] rounded-lg bg-white/95 p-4 shadow-xl"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <p className="text-xs font-bold uppercase tracking-wide text-brand-orange">Launch Benefits</p>
              <p className="mt-1 font-display text-lg font-bold text-brand-blue">Free mock test + early access</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
