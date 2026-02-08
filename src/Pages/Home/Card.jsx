import React from "react";

import { motion } from "motion/react";
const Card = ({ category }) => {
  const { title, jobs, icon: Icon } = category;
  return (
    <>
      <motion.div
        animate={{
          x: [0, -40, 0, 40, 0],
          transition: { duration: 4, repeat: Infinity },
        }}
        className=""
      >
        <motion.div
          initial={{ y: 0 }}
          whileHover={{
            y: -10,
            transition: { duration: 0.15, ease: "easeOut" },
          }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          className="
    flex flex-col sm:flex-row
    items-center 
    gap-4
    w-full
    bg-white
    rounded-2xl
    border border-gray-200
    hover:border-blue-500
    transition
    p-2 sm:p-3 lg:p-3
  "
        >
          {/* Icon */}
          <div
            className="
      flex items-center justify-center
      w-12 h-12 sm:w-14 sm:h-14
      rounded-xl
      bg-blue-50
      text-blue-600
      text-2xl sm:text-3xl
      flex-shrink-0
    "
          >
            <Icon />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center w-full text-center sm:text-left">
            <h2 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900">
              {title}
            </h2>
            <p className="text-xs sm:text-sm text-gray-500">{jobs}</p>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Card;


