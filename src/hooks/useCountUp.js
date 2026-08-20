import { useEffect, useState } from 'react';

export function useCountUp(end, duration = 2000, startOnVisible = false) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(!startOnVisible);

  useEffect(() => {
    if (!started) return;

    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  }, [started, end, duration]);

  const trigger = () => setStarted(true);
  return [count, trigger];
}
