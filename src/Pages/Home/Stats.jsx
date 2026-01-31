import React, { useEffect, useState } from "react";

const Stats = () => {
  const TARGET = 30;
  const DURATION = 3000; // 👈 3 seconds
  const INTERVAL = Math.floor(DURATION / TARGET); // = 100ms

  const [counter, setCounter] = useState(0);

  useEffect(() => {
    if (counter >= TARGET) return;

    const timer = setTimeout(() => {
      setCounter((prev) => prev + 1);
    }, INTERVAL);

    return () => clearTimeout(timer);
  }, [counter]);

  return (
    <div className="stats shadow grid grid-cols-2 md:grid-cols-4 gap-6 p-2">
      <div className="flex flex-col p-12 rounded-box items-center text-center">
        {/* Count */}
        <div className="flex items-baseline gap-1 leading-none">
          <span className="countdown inline-flex items-baseline font-mono text-5xl text-orange-500 leading-none">
            <span
              style={{ "--value": counter }}
              aria-live="polite"
              aria-label={`Completed cases: ${counter}K plus`}
            ></span>
          </span>

          <span className="inline-flex items-baseline font-mono text-4xl text-orange-500 leading-none">
            K+
          </span>
        </div>

        <h2 className="text-2xl font-bold mt-3">Completed Cases</h2>

        <p className="mt-2 max-w-xs text-[16px] text-gray-500">
          We always provide people a complete solution with a strong focus on
          business outcomes.
        </p>
      </div>
    </div>
  );
};

export default Stats;
