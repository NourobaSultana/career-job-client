import React from "react";
const MiniCard = ({ mini }) => {
  const { title, icon: Icon } = mini;
  return (
    <div className="px-2">
      <div
        className="
      flex items-center
      gap-2
      bg-white
      rounded-xl
      border border-gray-200
      hover:border-blue-500
      transition
      p-2
      min-h-[44px]
    "
      >
        {/* Icon */}
        <Icon className="text-blue-600 text-[14px] shrink-0" />

        {/* Title */}
        <h2
          className="
        text-[14px]
        font-semibold
        text-gray-800
        leading-tight
        text-center sm:text-left
        line-clamp-2
        w-full
      "
        >
          {title}
        </h2>
      </div>
    </div>
  );
};

export default MiniCard;
