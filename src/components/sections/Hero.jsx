import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaRocket,
  FaSpinner,
  FaUser,
} from "react-icons/fa";
import Button from "../Button.jsx";
import { useLocalRegistrations } from "../../hooks/useLocalRegistrations.js";
import { isValidPhone } from "../../utils/validation.js";

export default function Hero() {
  const { addWaitlist } = useLocalRegistrations();
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const [formStatus, setFormStatus] = useState({ type: "", message: "" });
  const [formLoading, setFormLoading] = useState(false);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const errors = {};
    if (!fullName.trim()) errors.fullName = "Name is required.";
    if (!isValidPhone(phone)) errors.phone = "Enter a valid 10-digit phone.";

    setFormErrors(errors);
    if (Object.keys(errors).length > 0) return;

    setFormLoading(true);
    setFormStatus({ type: "", message: "" });

    try {
      await addWaitlist({
        fullName,
        phone,
        email: `${phone}@lakshjnv.in`,
        classLevel: "Class 6",
        state: "Hero Form",
        language: "Hindi/English",
      });
      setFullName("");
      setPhone("");
      setFormStatus({ type: "success", message: "Successfully joined waitlist!" });
    } catch (error) {
      setFormStatus({ type: "error", message: error.message });
    } finally {
      setFormLoading(false);
    }
  };

  return (
    <section id="home" className="relative min-h-[92vh] w-full overflow-hidden bg-[#092b66] pt-20">
      <div className="relative z-10 min-h-[calc(92vh-5rem)] w-full">
        <motion.div
          className="relative min-h-[calc(92vh-5rem)] w-full overflow-hidden bg-[#082a68]"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="absolute inset-0 z-0 bg-[linear-gradient(126deg,#092b66_0%,#123a78_36%,#8a5144_64%,#ff6b00_100%)]" />
          <div className="absolute inset-0 z-[1] bg-[radial-gradient(circle_at_16%_18%,rgba(255,255,255,0.14),transparent_28%),radial-gradient(circle_at_80%_24%,rgba(255,216,180,0.28),transparent_34%),radial-gradient(circle_at_92%_72%,rgba(255,107,0,0.36),transparent_36%),linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0))]" />
          <div className="absolute inset-x-0 bottom-0 z-20 flex h-[48%] items-end justify-center sm:h-[54%] md:h-[58%] lg:inset-y-0 lg:-right-20 lg:left-auto lg:h-auto lg:w-[68%] lg:justify-end [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%)] lg:[mask-image:linear-gradient(to_right,transparent_0%,black_15%)]" aria-hidden="true">
            <img
              src="/bg.png"
              alt=""
              className="h-auto w-[168%] max-w-none object-contain object-bottom sm:w-[148%] md:h-[104%] md:w-[104%] lg:h-[108%] lg:w-[108%] xl:h-[112%] xl:w-[112%]"
              loading="eager"
              fetchPriority="high"
            />
          </div>
          <div className="absolute inset-0 z-10 bg-[linear-gradient(90deg,rgba(9,43,102,0)_0%,rgba(9,43,102,0.08)_50%,rgba(9,43,102,0.1)_100%)]" />

          <div className="relative z-40 mx-auto grid min-h-[calc(92vh-5rem)] w-[90vw] max-w-[1500px] items-start gap-8 px-5 pb-[38vh] pt-12 sm:px-8 sm:pb-[42vh] sm:pt-16 md:items-center md:pb-10 md:pt-10 lg:grid-cols-[1fr_1fr] lg:px-10 lg:py-10 xl:px-12">
            <div className="relative flex w-full max-w-2xl flex-col justify-center">
              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-bold text-white shadow-lg backdrop-blur sm:text-sm">
                <FaRocket className="text-brand-orange" aria-hidden="true" />
                Laksh JNV Academy
              </span>

              <h1 className="mt-5 font-display text-[2.2rem] font-extrabold leading-[1.08] text-white sm:text-5xl lg:text-[3.2rem] xl:text-[3.7rem]">
                We prepare your child for{" "}
                <span className="text-brand-orange">JNV success</span>
              </h1>

              <p className="mt-5 max-w-xl text-base font-semibold leading-7 text-blue-50 sm:text-lg">
                Laksh JNV Academy helps students prepare for Jawahar Navodaya Vidyalaya with focused online learning, smart practice, and early launch benefits.
              </p>

              <form
                onSubmit={handleFormSubmit}
                className="relative mt-8 hidden w-full max-w-[440px] rounded-[26px] bg-white p-5 shadow-2xl shadow-slate-950/25 sm:p-6 md:block"
                noValidate
              >
                <div className="absolute -right-3 -top-4 rotate-6 rounded-xl bg-[#1f8fff] px-4 py-2 font-display text-xs font-extrabold text-white shadow-lg">
                  0 Rupees
                </div>

                <h2 className="font-display text-xl font-extrabold leading-tight text-brand-ink sm:text-2xl">
                  Try the first lesson <span className="text-brand-orange">for free</span>
                </h2>

                <label className="mt-5 block">
                  <span className="sr-only">Student name</span>
                  <span className="relative block">
                    <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" aria-hidden="true" />
                    <input
                      type="text"
                      value={fullName}
                      onChange={(event) => {
                        setFullName(event.target.value);
                        setFormErrors((current) => ({ ...current, fullName: "" }));
                      }}
                      placeholder="Student name"
                      className="min-h-12 w-full rounded-xl border border-slate-100 bg-slate-100 py-3 pl-11 pr-4 text-sm text-brand-ink outline-none transition placeholder:text-slate-400 focus:border-brand-orange focus:bg-white focus:ring-4 focus:ring-orange-100"
                    />
                  </span>
                  {formErrors.fullName && <span className="mt-1 block text-xs font-semibold text-red-600">{formErrors.fullName}</span>}
                </label>

                <label className="mt-3 block">
                  <span className="sr-only">Phone number</span>
                  <span className="relative block">
                    <FaPhoneAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" aria-hidden="true" />
                    <input
                      type="tel"
                      inputMode="numeric"
                      value={phone}
                      onChange={(event) => {
                        setPhone(event.target.value);
                        setFormErrors((current) => ({ ...current, phone: "" }));
                      }}
                      placeholder="Phone number"
                      className="min-h-12 w-full rounded-xl border border-slate-100 bg-slate-100 py-3 pl-11 pr-4 text-sm text-brand-ink outline-none transition placeholder:text-slate-400 focus:border-brand-orange focus:bg-white focus:ring-4 focus:ring-orange-100"
                    />
                  </span>
                  {formErrors.phone && <span className="mt-1 block text-xs font-semibold text-red-600">{formErrors.phone}</span>}
                </label>

                {formStatus.message && (
                  <p
                    className={`mt-4 rounded-lg p-3 text-xs font-bold ${
                      formStatus.type === "success" ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"
                    }`}
                  >
                    {formStatus.message}
                  </p>
                )}

                <Button type="submit" disabled={formLoading} className="mt-5 w-full rounded-full py-3.5 shadow-orange-500/30">
                  {formLoading && <FaSpinner className="animate-spin" aria-hidden="true" />}
                  {formLoading ? "Submitting..." : "Register for a free lesson"}
                </Button>

                <p className="mt-3 text-center text-[10px] font-medium leading-4 text-slate-400">
                  By clicking the button, you agree to our privacy policy and personal data processing.
                </p>
              </form>
            </div>

            <div className="relative z-10 hidden lg:block" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
