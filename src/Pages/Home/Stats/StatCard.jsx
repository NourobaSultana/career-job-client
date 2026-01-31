import React from "react";
import useCountUp from "./useCountUp";

const StatCard = ({ target, suffix, title, desc }) => {
  const { count, ref } = useCountUp(target, 1000);

  return (
    // 👇 IMPORTANT: ref attach here
    <div
      ref={ref}
      className="flex flex-col p-12 rounded-box items-center text-center"
    >
      <div className="flex items-baseline gap-1 leading-none">
        <span className="countdown font-bold text-5xl text-blue-500">
          <span style={{ "--value": count }}></span>
        </span>

        <span className="text-4xl font-bold text-blue-500">{suffix}</span>
      </div>

      <h2 className="text-2xl font-bold mt-3">{title}</h2>

      <p className="mt-2 text-[16px] text-gray-500">{desc}</p>
    </div>
  );
};

export default StatCard;
