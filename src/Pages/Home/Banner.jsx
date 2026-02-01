import React from "react";
import { motion } from "motion/react";
import team1 from "/home/toma/best-website/career-job2-client/src/assets/Team/team1.jpg";
import team2 from "/home/toma/best-website/career-job2-client/src/assets/Team/team2.jpg";
import Location from "./Location";

const Banner = () => {
  return (
    <div className="hero bg-blue-50 min-h-[28rem] sm:min-h-[32rem] lg:min-h-[36rem] px-4 sm:px-6 lg:px-20">
      <div className="hero-content flex flex-col lg:flex-row-reverse items-center gap-6 lg:gap-12">
        {/* Images */}
        <div className="flex-1 flex flex-col items-center gap-6 w-full">
          <motion.img
            animate={{
              y: [100, 150, 100],
              transition: { duration: 5, repeat: Infinity },
            }}
            src={team1}
            className="w-full max-w-[260px] sm:max-w-[300px] lg:max-w-sm border-l-8 border-b-8 border-blue-500 rounded-t-[40px] rounded-br-[40px] shadow-2xl"
          />
          <motion.img
            animate={{
              x: [100, 150, 100],
              transition: { duration: 10, delay: 5, repeat: Infinity },
            }}
            src={team2}
            className="w-full max-w-[260px] sm:max-w-[300px] lg:max-w-sm border-l-8 border-b-8 border-blue-500 rounded-t-[40px] rounded-br-[40px] shadow-2xl"
          />
        </div>

        {/* Text Content */}
        <div className="flex-1 w-full text-center lg:text-left">
          <motion.h1
            initial={{ scale: 0 }}
            animate={{ scale: 1, transition: { duration: 2 } }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight"
          >
            The Easiest Way To Secure Your Next{" "}
            <motion.span
              animate={{
                color: ["#F54927", "#1165ED", "#DE11ED"],
                transition: { duration: 4, repeat: Infinity },
              }}
            >
              Job
            </motion.span>
          </motion.h1>

          <p className="py-4 sm:py-6 font-semibold text-gray-700 text-sm sm:text-base md:text-lg">
            More than 3 million job seekers visit our website every month,
            generating over 140,000 job applications daily.
          </p>

          <button className="btn btn-primary mt-4 sm:mt-6 w-full sm:w-auto">
            Get Started
          </button>

          <div className="mt-6 w-full sm:w-auto flex justify-center lg:justify-start">
            <Location />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
