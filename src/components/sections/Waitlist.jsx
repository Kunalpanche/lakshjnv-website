import { useState } from "react";
import { motion } from "framer-motion";
import { FaCheckCircle, FaSpinner } from "react-icons/fa";
import SectionHeading from "../SectionHeading.jsx";
import Button from "../Button.jsx";
import { useLocalRegistrations } from "../../hooks/useLocalRegistrations.js";
import { validateWaitlist } from "../../utils/validation.js";

const initialValues = {
  fullName: "",
  email: "",
  phone: "",
  classLevel: "",
  state: "",
  language: "",
};

const inputClass =
  "mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-brand-ink outline-none transition placeholder:text-slate-400 focus:border-brand-orange";

export default function Waitlist() {
  const { waitlistCount, addWaitlist } = useLocalRegistrations();
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: "", message: "" });
  const [loading, setLoading] = useState(false);

  const update = (event) => {
    setValues((current) => ({ ...current, [event.target.name]: event.target.value }));
    setErrors((current) => ({ ...current, [event.target.name]: "" }));
  };

  const submit = async (event) => {
    event.preventDefault();
    const nextErrors = validateWaitlist(values);
    setErrors(nextErrors);
    setStatus({ type: "", message: "" });

    if (Object.keys(nextErrors).length) return;

    setLoading(true);
    try {
      await addWaitlist(values);
      setValues(initialValues);
      setStatus({
        type: "success",
        message: "You are on the Laksh JNV Academy waitlist. A welcome email will be sent when backend email automation is connected.",
      });
    } catch (error) {
      setStatus({ type: "error", message: error.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="waitlist" className="bg-brand-blue py-20 text-white">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <SectionHeading
            eyebrow="Waitlist Registration"
            title="Be first in line when Laksh JNV Academy opens."
            copy="Share your details to receive launch updates, early access information, and selected waitlist benefits."
            tone="dark"
          />
          <div className="mt-8 rounded-lg bg-white/10 p-6">
            <p className="font-display text-4xl font-extrabold text-brand-yellow">{waitlistCount + 1}</p>
            <p className="mt-2 text-blue-100">Local mock registrations captured on this device. Backend storage will replace this in the API phase.</p>
          </div>
        </div>

        <motion.form
          onSubmit={submit}
          className="rounded-2xl bg-white p-5 text-brand-ink shadow-premium sm:p-8"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          noValidate
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block text-sm font-bold">
              Full Name
              <input className={inputClass} name="fullName" value={values.fullName} onChange={update} autoComplete="name" placeholder="Student name" />
              {errors.fullName && <span className="mt-1 block text-xs text-red-600">{errors.fullName}</span>}
            </label>
            <label className="block text-sm font-bold">
              Email
              <input className={inputClass} name="email" value={values.email} onChange={update} type="email" autoComplete="email" placeholder="name@example.com" />
              {errors.email && <span className="mt-1 block text-xs text-red-600">{errors.email}</span>}
            </label>
            <label className="block text-sm font-bold">
              Mobile Number
              <input className={inputClass} name="phone" value={values.phone} onChange={update} inputMode="numeric" autoComplete="tel" placeholder="9876543210" />
              {errors.phone && <span className="mt-1 block text-xs text-red-600">{errors.phone}</span>}
            </label>
            <label className="block text-sm font-bold">
              Class
              <select className={inputClass} name="classLevel" value={values.classLevel} onChange={update}>
                <option value="">Select class</option>
                <option>Class 5</option>
                <option>Class 6</option>
                <option>Class 7</option>
                <option>Class 8</option>
              </select>
              {errors.classLevel && <span className="mt-1 block text-xs text-red-600">{errors.classLevel}</span>}
            </label>
            <label className="block text-sm font-bold">
              State
              <input className={inputClass} name="state" value={values.state} onChange={update} autoComplete="address-level1" placeholder="Maharashtra" />
              {errors.state && <span className="mt-1 block text-xs text-red-600">{errors.state}</span>}
            </label>
            <label className="block text-sm font-bold">
              Preferred Language
              <select className={inputClass} name="language" value={values.language} onChange={update}>
                <option value="">Select language</option>
                <option>Hindi</option>
                <option>English</option>
                <option>Marathi</option>
                <option>Other</option>
              </select>
              {errors.language && <span className="mt-1 block text-xs text-red-600">{errors.language}</span>}
            </label>
          </div>

          {status.message && (
            <p className={`mt-5 rounded-lg p-4 text-sm font-semibold ${status.type === "success" ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"}`}>
              {status.message}
            </p>
          )}

          <Button type="submit" className="mt-6 w-full" disabled={loading}>
            {loading ? <FaSpinner className="animate-spin" aria-hidden="true" /> : <FaCheckCircle aria-hidden="true" />}
            {loading ? "Submitting..." : "Join Waitlist"}
          </Button>
        </motion.form>
      </div>
    </section>
  );
}
