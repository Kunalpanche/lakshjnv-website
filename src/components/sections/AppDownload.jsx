import { motion } from "framer-motion";
import { appDownloadContent } from "../../data/siteContent.js";

export default function AppDownload() {
  return (
    <section className="w-full relative overflow-hidden bg-white text-brand-ink flex flex-col items-center pt-12 md:pt-24 pb-0 lg:min-h-screen">
      
      {/* Top Text Content */}
      <div className="relative z-20 max-w-3xl mx-auto flex flex-col items-center text-center px-4">
        <p className="text-slate-600 text-lg md:text-xl font-medium mb-4 max-w-2xl leading-snug">
          {appDownloadContent.description}
        </p>
        <h2 className="font-display text-4xl sm:text-5xl md:text-7xl font-extrabold text-brand-ink leading-tight uppercase tracking-wider">
          {appDownloadContent.title}
        </h2>
        
        <motion.div 
          className="mt-8 z-30"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <a 
            href="#waitlist" 
            className="inline-block transition-transform hover:-translate-y-1 hover:drop-shadow-2xl"
          >
            <img src="/icons/getitformps.png" alt="Get it on Google Play" className="h-[50px] md:h-[60px] w-auto object-contain" />
          </a>
        </motion.div>
      </div>

      {/* Floating UI Elements (Background) */}
      <div className="absolute inset-0 z-10 hidden md:block overflow-hidden pointer-events-none max-w-[1400px] mx-auto">
        {appDownloadContent.benefits.map(({ icon: Icon, title, description }, index) => {
          const positions = [
            "top-[35%] left-[5%]",
            "top-[50%] right-[5%]",
            "top-[60%] left-[18%]"
          ];
          const animationDelays = ["0s", "1.5s", "0.7s"];
          
          return (
            <motion.div
              key={title}
              className={`absolute ${positions[index]} bg-white border border-slate-100 rounded-2xl p-4 flex items-center gap-4 text-brand-ink shadow-xl`}
              style={{ animation: `float 6s ease-in-out ${animationDelays[index]} infinite` }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 + 0.5 }}
            >
              <div className="flex-shrink-0 w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-brand-orange shadow-sm border border-slate-100">
                <Icon className="w-5 h-5" aria-hidden="true" />
              </div>
              <div className="text-left pr-4">
                <h4 className="font-bold text-sm md:text-base leading-tight">{title}</h4>
                <p className="text-xs text-slate-500 mt-1">{description.split(' ').slice(0, 4).join(' ')}...</p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Central Mobile Mockup */}
      <div className="relative z-20 mt-4 w-full flex-grow flex items-end justify-center pointer-events-none">
        <motion.div 
          className="relative w-[500px] sm:w-[650px] md:w-[800px] lg:w-[900px] h-full flex items-end justify-center"
          initial={{ opacity: 0, y: 150 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
        >
          <img 
            src="/icons/appmockup.png" 
            alt="Laksh JNV App Hand Mockup" 
            className="w-full h-auto object-contain object-bottom block" 
          />
        </motion.div>
      </div>
      
    </section>
  );
}
