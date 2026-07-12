import { motion } from "framer-motion";
import SectionHeading from "../SectionHeading.jsx";
import Button from "../Button.jsx";
import { benefits } from "../../data/siteContent.js";

export default function Benefits() {
  return (
    <section className="py-20 relative overflow-hidden bg-[#082a68]">
      <div className="absolute inset-0 z-0 bg-[linear-gradient(126deg,#092b66_0%,#123a78_36%,#8a5144_64%,#ff6b00_100%)]" />
      <div className="absolute inset-0 z-[1] bg-[radial-gradient(circle_at_16%_18%,rgba(255,255,255,0.14),transparent_28%),radial-gradient(circle_at_80%_24%,rgba(255,216,180,0.28),transparent_34%),radial-gradient(circle_at_92%_72%,rgba(255,107,0,0.36),transparent_36%),linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0))]" />
      <div className="section-shell relative z-10">
        <div className="relative z-10 mb-16 max-w-2xl">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight">
            JNV Course Modules
          </h2>
          <p className="mt-4 text-blue-100 text-lg">
            Comprehensive learning tracks designed specifically to help your child master every section of the Navodaya entrance exam.
          </p>
        </div>

        {/* Cards Container */}
        <div className="relative z-10 flex flex-nowrap overflow-x-auto gap-8 pb-12 pt-8 -mx-4 px-4 sm:-mx-8 sm:px-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] snap-x">
          {benefits.map(({ icon: Icon, title, description, badge }, index) => {
            // Create staggered effect (up, down, up, down)
            const staggerClass = index % 2 === 0 ? "mt-0" : "mt-12 md:mt-24";
            
            return (
              <motion.article
                key={title}
                className={`relative flex-shrink-0 w-72 h-[320px] rounded-[2rem] bg-slate-50 p-6 shadow-lg snap-center ${staggerClass}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.1 }}
              >
                {/* Paperclip SVG */}
                <div className="absolute -top-7 right-4 z-20 text-slate-300 drop-shadow-md rotate-12">
                  <svg width="40" height="70" viewBox="0 0 24 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.5 35.5C8.35786 35.5 5 32.1421 5 28L5 9C5 6.23858 7.23858 4 10 4C12.7614 4 15 6.23858 15 9L15 25C15 26.1046 14.1046 27 13 27C11.8954 27 11 26.1046 11 25L11 11" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12.5 35.5C8.35786 35.5 5 32.1421 5 28L5 9C5 6.23858 7.23858 4 10 4C12.7614 4 15 6.23858 15 9L15 25C15 26.1046 14.1046 27 13 27C11.8954 27 11 26.1046 11 25L11 11" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>

                <h3 className="font-display text-xl font-bold text-brand-ink pr-6 leading-tight">
                  {title}
                </h3>
                
                <p className="mt-3 text-sm text-slate-600 line-clamp-3">
                  {description}
                </p>

                <div className="absolute bottom-6 left-6 z-20 bg-slate-900 text-white text-[11px] font-bold px-3 py-1.5 rounded-full tracking-wide uppercase shadow-md">
                  {badge}
                </div>

                <div className="absolute inset-0 rounded-[2rem] overflow-hidden pointer-events-none">
                  <div className="absolute -bottom-2 -right-4 z-10">
                    {typeof Icon === "string" ? (
                      <img 
                        src={Icon} 
                        alt={title} 
                        className="h-36 w-36 object-contain mix-blend-darken" 
                        style={{ 
                          WebkitMaskImage: "radial-gradient(circle, rgba(0,0,0,1) 45%, rgba(0,0,0,0) 70%)", 
                          maskImage: "radial-gradient(circle, rgba(0,0,0,1) 45%, rgba(0,0,0,0) 70%)" 
                        }} 
                      />
                    ) : (
                      <Icon aria-hidden="true" className="h-24 w-24 text-brand-blue" />
                    )}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
