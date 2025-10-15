import { useEffect, useState } from 'react';

type Easing = 'linear' | 'easeOut' | 'easeIn' | 'easeInOut';

function ease(progress: number, type: Easing): number {
  switch (type) {
    case 'easeOut':
      return 1 - Math.pow(1 - progress, 3);
    case 'easeIn':
      return Math.pow(progress, 3);
    case 'easeInOut':
      return progress < 0.5
        ? 4 * Math.pow(progress, 3)
        : 1 - Math.pow(-2 * progress + 2, 3) / 2;
    default:
      return progress; // linear
  }
}

export function useCountUp(target: number|undefined, duration = 5000, easing: Easing = 'easeInOut') {
  const [ count, setCount ] = useState(0);

  useEffect(() => {
    if (!target) { return; }

    let rafId: number;
    let startTime: number | null = null;

    const step = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = ease(progress, easing);
      setCount(Math.floor(eased * target));

      if (progress < 1) rafId = requestAnimationFrame(step);
      else setCount(target);
    };

    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [target, duration, easing]);

  return count;
}
