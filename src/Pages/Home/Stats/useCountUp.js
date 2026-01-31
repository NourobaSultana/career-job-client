import { useEffect, useState } from "react";

const useCountUp = (target, duration = 3000) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count >= target) return;

    const interval = Math.floor(duration / target);

    const timer = setTimeout(() => {
      setCount((prev) => prev + 1);
    }, interval);

    return () => clearTimeout(timer);
  }, [count, target, duration]);

  return count;
};

export default useCountUp;
