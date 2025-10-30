import { useEffect, useState } from 'react';

export function useCountdown(endsAt: Date | undefined) {
  const [remaining, setRemaining] = useState<number>(0);

  useEffect(() => {
    if (!endsAt) return; // no date, do nothing

    const updateRemaining = () => {
      const diff = endsAt.getTime() - Date.now();
      setRemaining(Math.max(0, Math.ceil(diff / 1000)));
    };

    updateRemaining(); // update immediately on mount

    if (endsAt.getTime() <= Date.now()) {
      // already expired
      setRemaining(0);
      return;
    }

    const interval: ReturnType<typeof setInterval> = setInterval(() => {
      updateRemaining();
    }, 1000);

    return () => clearInterval(interval);
  }, [endsAt]);

  const isRunning = remaining > 0;

  return { remaining, isRunning };
}
