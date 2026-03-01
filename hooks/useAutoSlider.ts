import { useState, useEffect, useRef, useCallback } from "react";

export const useAutoSlider = (length: number, delay = 6000) => {
  // hooks are always called in the same order regardless of validity
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const noop = useCallback(() => undefined, []);

  const isValid = typeof length === "number" && length > 0;

  const next = useCallback(() => {
    if (!isValid) return;
    setCurrent((prev) => (prev + 1) % length);
  }, [length, isValid]);

  const prev = useCallback(() => {
    if (!isValid) return;
    setCurrent((prev) => (prev - 1 + length) % length);
  }, [length, isValid]);

  const goTo = useCallback(
    (index: number) => {
      if (!isValid) return;
      setCurrent(index);
    },
    [isValid]
  );

  useEffect(() => {
    if (!isValid) return;
    intervalRef.current = setInterval(next, delay);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [next, delay, isValid]);

  if (!isValid) {
    console.warn("useAutoSlider called with invalid length", length);
    return { current: 0, next: noop, prev: noop, goTo: noop };
  }

  return { current, next, prev, goTo };
};