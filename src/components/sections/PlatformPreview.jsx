import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight, FaExpand, FaTimes } from "react-icons/fa";
import SectionHeading from "../SectionHeading.jsx";
import { previewSlides } from "../../data/siteContent.js";

function PreviewMock({ slide, compact = false }) {
  return (
    <div className={`${compact ? "min-h-[280px]" : "min-h-[380px]"} rounded-xl bg-slate-950 p-4 text-white`}>
      <div className="flex items-center justify-between border-b border-white/10 pb-4">
        <div>
          <p className="text-sm font-semibold text-brand-yellow">{slide.title}</p>
          <p className="mt-1 text-xs text-slate-300">{slide.subtitle}</p>
        </div>
        <div className="rounded-lg bg-brand-orange px-3 py-2 font-display text-lg font-extrabold">{slide.metric}</div>
      </div>
      <div className="mt-6 grid gap-4 md:grid-cols-[1fr_0.7fr]">
        <div className="rounded-lg bg-white p-4 text-brand-ink">
          <div className="h-36 rounded-lg bg-gradient-to-br from-orange-100 via-white to-blue-100" />
          <div className="mt-4 space-y-3">
            {slide.bars.map((bar, index) => (
              <div key={bar + index} className="h-3 rounded-full bg-slate-100">
                <div className={`${bar} h-3 rounded-full bg-brand-orange`} />
              </div>
            ))}
          </div>
        </div>
        <div className="grid gap-3">
          {[1, 2, 3].map((item) => (
            <div key={item} className="rounded-lg border border-white/10 bg-white/10 p-4">
              <div className="h-3 w-20 rounded-full bg-white/30" />
              <div className="mt-3 h-8 rounded-lg bg-white/15" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function PlatformPreview() {
  const [active, setActive] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setActive((value) => (value + 1) % previewSlides.length), 4000);
    return () => clearInterval(timer);
  }, []);

  const slide = previewSlides[active];
  const go = (direction) => setActive((value) => (value + direction + previewSlides.length) % previewSlides.length);

  return (
    <section id="preview" className="py-20">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Platform Preview"
          title="A clear view of the learning experience before launch."
          copy="Preview mockups show the planned dashboard, course, video, test, analytics, and mobile learning surfaces."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_320px]">
          <div className="glass-panel rounded-2xl p-3">
            <AnimatePresence mode="wait">
              <motion.div
                key={slide.title}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.35 }}
              >
                <PreviewMock slide={slide} />
              </motion.div>
            </AnimatePresence>
            <div className="mt-4 flex items-center justify-between px-1">
              <div className="flex gap-2">
                {previewSlides.map((item, index) => (
                  <button
                    key={item.title}
                    type="button"
                    className={`h-2.5 rounded-full transition-all ${index === active ? "w-8 bg-brand-orange" : "w-2.5 bg-slate-300"}`}
                    onClick={() => setActive(index)}
                    aria-label={`Show ${item.title}`}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-brand-blue shadow" onClick={() => go(-1)} aria-label="Previous preview">
                  <FaChevronLeft aria-hidden="true" />
                </button>
                <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-brand-blue shadow" onClick={() => go(1)} aria-label="Next preview">
                  <FaChevronRight aria-hidden="true" />
                </button>
                <button className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-blue text-white shadow" onClick={() => setLightboxOpen(true)} aria-label="Open preview lightbox">
                  <FaExpand aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>

          <div className="grid gap-3">
            {previewSlides.map((item, index) => (
              <button
                key={item.title}
                type="button"
                className={`rounded-lg border p-4 text-left transition ${
                  index === active ? "border-brand-orange bg-orange-50 text-brand-blue" : "border-slate-200 bg-white text-slate-600 hover:border-brand-blue"
                }`}
                onClick={() => setActive(index)}
              >
                <span className="font-display text-base font-bold">{item.title}</span>
                <span className="mt-1 block text-sm">{item.subtitle}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {lightboxOpen && (
        <div className="fixed inset-0 z-[60] bg-slate-950/90 p-4" role="dialog" aria-modal="true" aria-label={`${slide.title} preview`}>
          <button
            type="button"
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white text-brand-blue"
            onClick={() => setLightboxOpen(false)}
            aria-label="Close preview"
          >
            <FaTimes aria-hidden="true" />
          </button>
          <div className="mx-auto mt-16 max-w-5xl">
            <PreviewMock slide={slide} compact />
          </div>
        </div>
      )}
    </section>
  );
}
