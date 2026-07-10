import { useCallback, useState } from "react";

const WAITLIST_KEY = "laksh-jnv-waitlist";
const NEWSLETTER_KEY = "laksh-jnv-newsletter";

const getStored = (key) => {
  try {
    return JSON.parse(localStorage.getItem(key) || "[]");
  } catch {
    return [];
  }
};

const saveStored = (key, rows) => {
  localStorage.setItem(key, JSON.stringify(rows));
};

const createId = () => {
  if (window.crypto?.randomUUID) return window.crypto.randomUUID();
  return `${Date.now()}-${Math.random().toString(36).slice(2)}`;
};

export function useLocalRegistrations() {
  const [waitlist, setWaitlist] = useState(() => getStored(WAITLIST_KEY));
  const [newsletter, setNewsletter] = useState(() => getStored(NEWSLETTER_KEY));

  const addWaitlist = useCallback(
    (entry) =>
      new Promise((resolve, reject) => {
        setTimeout(() => {
          const normalizedEmail = entry.email.trim().toLowerCase();
          const exists = waitlist.some((row) => row.email.toLowerCase() === normalizedEmail || row.phone === entry.phone);

          if (exists) {
            reject(new Error("You are already on the waitlist with this email or mobile number."));
            return;
          }

          const next = [{ id: createId(), ...entry, createdAt: new Date().toISOString() }, ...waitlist];
          saveStored(WAITLIST_KEY, next);
          setWaitlist(next);
          resolve(next[0]);
        }, 550);
      }),
    [waitlist],
  );

  const addNewsletter = useCallback(
    (email) =>
      new Promise((resolve, reject) => {
        setTimeout(() => {
          const normalizedEmail = email.trim().toLowerCase();
          if (newsletter.some((row) => row.email.toLowerCase() === normalizedEmail)) {
            reject(new Error("This email is already subscribed for launch updates."));
            return;
          }

          const next = [{ id: createId(), email: normalizedEmail, createdAt: new Date().toISOString() }, ...newsletter];
          saveStored(NEWSLETTER_KEY, next);
          setNewsletter(next);
          resolve(next[0]);
        }, 450);
      }),
    [newsletter],
  );

  return { waitlistCount: waitlist.length, newsletterCount: newsletter.length, addWaitlist, addNewsletter };
}
