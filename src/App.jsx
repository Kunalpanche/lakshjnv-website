import { motion } from "framer-motion";
import { JsonLd } from "./components/JsonLd.jsx";
import Header from "./components/Header.jsx";
import Hero from "./components/sections/Hero.jsx";
import CountdownSection from "./components/sections/CountdownSection.jsx";
import About from "./components/sections/About.jsx";
import WhyChoose from "./components/sections/WhyChoose.jsx";
import PlatformPreview from "./components/sections/PlatformPreview.jsx";
import UpcomingFeatures from "./components/sections/UpcomingFeatures.jsx";
import Benefits from "./components/sections/Benefits.jsx";
import Waitlist from "./components/sections/Waitlist.jsx";
import FAQ from "./components/sections/FAQ.jsx";
import Newsletter from "./components/sections/Newsletter.jsx";
import Contact from "./components/sections/Contact.jsx";
import Footer from "./components/Footer.jsx";

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
            <About />
            <WhyChoose />
            <PlatformPreview />
            <UpcomingFeatures />
            <Benefits />
            <Waitlist />
            <FAQ />
            <Newsletter />
            <Contact />
          </motion.div>
        </main>
        <Footer />
      </div>
    </>
  );
}
