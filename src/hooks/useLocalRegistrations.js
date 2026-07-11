import { useCallback, useState } from "react";

const WAITLIST_KEY = "laksh-jnv-waitlist";

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

  return { waitlistCount: waitlist.length, addWaitlist };
}
