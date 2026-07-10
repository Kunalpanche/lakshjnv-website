import { useEffect, useMemo, useState } from "react";

const getParts = (targetDate) => {
  const total = Math.max(new Date(targetDate).getTime() - Date.now(), 0);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((total / (1000 * 60)) % 60);
  const seconds = Math.floor((total / 1000) % 60);

  return { total, days, hours, minutes, seconds };
};

export function useCountdown(targetDate) {
  const [timeLeft, setTimeLeft] = useState(() => getParts(targetDate));

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getParts(targetDate)), 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return useMemo(() => timeLeft, [timeLeft]);
}
