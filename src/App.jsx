import React, { Suspense } from "react";
import { motion } from "framer-motion";
import { JsonLd } from "./components/JsonLd.jsx";
import Header from "./components/Header.jsx";
import Hero from "./components/sections/Hero.jsx";
import CountdownSection from "./components/sections/CountdownSection.jsx";

// Lazy-loaded components below the fold
const About = React.lazy(() => import("./components/sections/About.jsx"));
const WhyChoose = React.lazy(() => import("./components/sections/WhyChoose.jsx"));
const Benefits = React.lazy(() => import("./components/sections/Benefits.jsx"));
const AppDownload = React.lazy(() => import("./components/sections/AppDownload.jsx"));
const Waitlist = React.lazy(() => import("./components/sections/Waitlist.jsx"));
const FAQ = React.lazy(() => import("./components/sections/FAQ.jsx"));
const Contact = React.lazy(() => import("./components/sections/Contact.jsx"));
const Footer = React.lazy(() => import("./components/Footer.jsx"));

export default function App() {
  return (
    <>
      <JsonLd />
      <div className="min-h-screen overflow-hidden bg-brand-bg text-brand-ink">
        <Header />
        <main>
          <Hero />
          <motion.div initial={false}>
            <CountdownSection />
            <Suspense fallback={<div className="h-screen w-full flex items-center justify-center text-brand-blue font-semibold">Loading...</div>}>
              <About />
              <WhyChoose />
              <Benefits />
              <AppDownload />
              <Waitlist />
              <FAQ />
              <Contact />
            </Suspense>
          </motion.div>
        </main>
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </div>
    </>
  );
}
