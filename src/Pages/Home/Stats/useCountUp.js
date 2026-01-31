import { useEffect, useRef, useState } from "react";

const useCountUp = (target, duration = 2000) => {
  const [count, setCount] = useState(0);
  const [start, setStart] = useState(false);
  const ref = useRef(null);

  // 👁️ Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true);
          observer.disconnect(); // only once
        }
      },
      { threshold: 0.1 }, // 10% visible হলে start
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  // 🔢 Count logic
  useEffect(() => {
    if (!start) return;
    if (count >= target) return;

    const incrementTime = Math.floor(duration / target);

    const timer = setTimeout(() => {
      setCount((prev) => prev + 1);
    }, incrementTime);

    return () => clearTimeout(timer);
  }, [count, start, target, duration]);

  return { count, ref };
};

export default useCountUp;
