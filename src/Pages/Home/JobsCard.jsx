import React from "react";
import logo from "/home/toma/best-website/career-job2-client/src/assets/Team/team1.jpg";
import { IoLocationOutline, IoTimerOutline } from "react-icons/io5";
import { FaBusinessTime } from "react-icons/fa";
import { motion } from "motion/react";
import MiniCard from "./MiniCard";

const JobsCard = ({ card }) => {
  const {
    title,
    image,
    time,
    location,
    icon,
    text,
    descripton,
    amount,
    button,
    posted,
  } = card;
  return (
    <>
      <div>
        {/* card1 */}
        <motion.div
          initial={{ y: 0 }}
          whileHover={{
            y: -10,
            transition: { duration: 0.1, ease: "easeOut" }, // দ্রুত উপরে উঠবে
          }}
          transition={{ duration: 0.2, ease: "easeInOut" }} // ধীরে নিচে নামবে
          className="card-body my-10 rounded-2xl border bg-blue-50 border-gray-200 hover:border-blue-500 transition  "
        >
          <div className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-md w-full max-w-md mx-auto">
            {/* Image */}
            <img
              className="w-16 h-16 md:w-20 md:h-20 rounded-2xl object-cover flex-shrink-0"
              src={image}
              alt={title}
            />

            {/* Info */}
            <div className="flex flex-col justify-center">
              {/* Title */}
              <h2 className="text-lg md:text-xl font-semibold text-gray-900">
                {title}
              </h2>

              {/* Location */}
              <div className="flex items-center gap-1 text-gray-500 mt-1 text-sm md:text-base">
                <IoLocationOutline className="text-lg md:text-xl" />
                <span>{location}</span>
              </div>
            </div>
          </div>

          <div className="">
            <p className="text-[16px] font-bold">{title}</p>
            <div className="flex gap-6 mt-2">
              <h2 className="flex gap-2 text-gray-700 font-semibold">
                {" "}
                <span className="text-[20px]">
                  <FaBusinessTime />
                </span>
                {time}
              </h2>
              <h2 className="flex gap-2 text-gray-700 font-semibold">
                <span className="text-[20px]">
                  <IoTimerOutline />
                </span>
                {posted}
              </h2>
            </div>
          </div>

          <div className="float-left mt-4">
            <p className="text-gray-600 font-semibold text-[14px] ">{text}</p>
          </div>

          <div className="join flex flex-col lg:flex-row gap-2 mt-4 w-full max-w-md mx-auto">
            <button className="btn join-item text-gray-500 hover:bg-blue-500 hover:text-white w-full lg:w-auto">
              App
            </button>
            <button className="btn join-item text-gray-500 hover:bg-blue-500 hover:text-white w-full lg:w-auto">
              Figma
            </button>
            <button className="btn join-item text-gray-500 hover:bg-blue-500 hover:text-white w-full lg:w-auto">
              PHD
            </button>
          </div>

          <div className="flex justify-between">
            <p className="text-blue-600 font-semibold text-2xl mt-2">
              {amount}{" "}
              <span className="text-[12px] font-light text-gray-500">
                /Month
              </span>
            </p>

            <div className="mt-6">
              <button className="btn bg-blue-200  hover:bg-blue-600 hover:text-white">
                {button}
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default JobsCard;
