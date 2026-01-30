import React from "react";
import { motion } from "motion/react";
import team1 from "/home/toma/best-website/career-job2-client/src/assets/Team/team1.jpg";
import team2 from "/home/toma/best-website/career-job2-client/src/assets/Team/team2.jpg";
import Location from "./Location";

const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-[24rem] px-4 sm:px-6 lg:px-20">
      <div className="hero-content flex flex-col lg:flex-row-reverse items-center gap-8">
        {/* Images */}
        <div className="flex-1 flex flex-col items-center  gap-6 w-full">
          <motion.img
            animate={{
              y: [100, 150, 100],
              transition: { duration: 5, repeat: Infinity },
            }}
            src={team1}
            className="w-full max-w-[300px] sm:max-w-[350px] lg:max-w-sm border-blue-500 border-l-8 border-b-8 rounded-t-[40px] rounded-br-[40px] shadow-2xl"
          />
          <motion.img
            animate={{
              x: [100, 150, 100],
              transition: { duration: 10, delay: 5, repeat: Infinity },
            }}
            src={team2}
            className="w-full max-w-[300px] sm:max-w-[350px] lg:max-w-sm border-blue-500 border-l-8 border-b-8 rounded-t-[40px] rounded-br-[40px] shadow-2xl"
          />
        </div>

        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left w-full">
          <motion.h1
            initial={{ scale: 0 }}
            animate={{ scale: 1, transition: { duration: 4 } }}
            className="text-4xl sm:text-5xl font-bold leading-tight"
          >
            The easiest way to secure your next{" "}
            <motion.span
              animate={{
                color: ["#F54927", "#1165ED", "#DE11ED"],
                transition: { duration: 4, repeat: Infinity },
              }}
            >
              Job
            </motion.span>
          </motion.h1>

          <p className="py-4 sm:py-6 text-gray-700 text-base sm:text-lg">
            More than 3 million job seekers visit our website every month,
            generating over 140,000 job applications daily.
          </p>

          <button className="btn btn-primary mt-4 sm:mt-6">Get Started</button>

          <div className="mt-6">
            <Location />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
