import { useState, useEffect, useRef, useCallback } from "react";

export const useAutoSlider = (length: number, delay = 6000) => {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % length);
  }, [length]);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + length) % length);
  }, [length]);

  const goTo = useCallback((index: number) => {
    setCurrent(index);
  }, []);

  useEffect(() => {
    intervalRef.current = setInterval(next, delay);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [next, delay]);

  return { current, next, prev, goTo };
};