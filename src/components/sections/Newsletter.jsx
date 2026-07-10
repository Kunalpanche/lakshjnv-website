import { useState } from "react";
import { FaEnvelope, FaSpinner } from "react-icons/fa";
import Button from "../Button.jsx";
import { useLocalRegistrations } from "../../hooks/useLocalRegistrations.js";
import { isValidEmail } from "../../utils/validation.js";

export default function Newsletter() {
  const { newsletterCount, addNewsletter } = useLocalRegistrations();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async (event) => {
    event.preventDefault();
    setMessage("");
    if (!isValidEmail(email)) {
      setMessage("Enter a valid email address.");
      return;
    }
    setLoading(true);
    try {
      await addNewsletter(email);
      setEmail("");
      setMessage("Subscribed for launch announcements.");
    } catch (error) {
      setMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="newsletter" className="py-20">
      <div className="section-shell">
        <div className="grid gap-8 rounded-2xl bg-brand-ink p-6 text-white shadow-premium sm:p-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm font-semibold text-brand-yellow">
              <FaEnvelope aria-hidden="true" />
              Newsletter
            </span>
            <h2 className="mt-4 font-display text-3xl font-extrabold sm:text-4xl">Get launch announcements first.</h2>
            <p className="mt-3 max-w-2xl leading-7 text-slate-300">
              Subscribe for launch updates, platform previews, and early preparation resources. Local subscribers: {newsletterCount}.
            </p>
          </div>

          <form onSubmit={submit} className="rounded-lg bg-white p-3" noValidate>
            <div className="flex flex-col gap-3 sm:flex-row">
              <label className="sr-only" htmlFor="newsletter-email">
                Email address
              </label>
              <input
                id="newsletter-email"
                className="min-h-12 flex-1 rounded-lg border border-slate-200 px-4 text-brand-ink outline-none focus:border-brand-orange"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="name@example.com"
              />
              <Button type="submit" disabled={loading}>
                {loading ? <FaSpinner className="animate-spin" aria-hidden="true" /> : <FaEnvelope aria-hidden="true" />}
                Notify Me
              </Button>
            </div>
            {message && <p className="mt-3 px-1 text-sm font-semibold text-brand-blue">{message}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}
