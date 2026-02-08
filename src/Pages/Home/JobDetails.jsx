import React from "react";
import { Link, useLoaderData } from "react-router";
import { motion } from "motion/react";
import { IoLocationOutline, IoTimerOutline } from "react-icons/io5";
import { FaBusinessTime } from "react-icons/fa";
const JobDetails = () => {
  const { title, location, posted, time, image, text, button, amount, _id } =
    useLoaderData();
  //   console.log(data);
  return (
    <div>
      <div>
        <motion.div
          initial={{ y: 0 }}
          whileHover={{
            y: -10,
            transition: { duration: 0.1, ease: "easeOut" },
          }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="card-body my-8 rounded-2xl border bg-purple-50 hover:bg-white border-gray-200 hover:border-blue-500 transition p-4 sm:p-6"
        >
          {/* Top Card */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 p-4 bg-white rounded-2xl shadow-md w-full">
            {/* Image */}
            <img
              className="w-16 h-16 md:w-20 md:h-20 rounded-2xl object-cover flex-shrink-0 mx-auto sm:mx-0"
              src={image}
              alt={title}
            />

            {/* Text */}
            <div className="flex-1 text-center sm:text-left min-w-0">
              {/* Title */}
              <h2 className="text-lg md:text-xl font-semibold text-gray-900 truncate sm:whitespace-normal">
                {title}
              </h2>

              {/* Location */}
              <div className="flex items-center justify-center sm:justify-start gap-1 text-gray-500 mt-1 text-sm md:text-base">
                <IoLocationOutline className="text-lg md:text-xl" />
                <span className="truncate">{location}</span>
              </div>
            </div>
          </div>

          {/* Job Info */}
          <div className="mt-4">
            <p className="text-base font-bold">{title}</p>
            <div className="flex flex-wrap gap-4 mt-2">
              <div className="flex items-center gap-2 text-gray-700 font-semibold">
                <FaBusinessTime className="text-lg" />
                {time}
              </div>
              <div className="flex items-center gap-2 text-gray-700 font-semibold">
                <IoTimerOutline className="text-lg" />
                {posted}
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-600 font-semibold text-sm mt-4">{text}</p>

          {/* Tags */}
          <Link to={`/jobApply/${_id}`}>
            <div className="flex flex-wrap gap-2 mt-4">
              <button className="btn bg-blue-500 text-white">Apply now</button>
            </div>
          </Link>

          {/* Price & Action */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-6">
            <p className="text-blue-600 font-semibold text-2xl">
              {amount}
              <span className="text-xs font-light text-gray-500"> /Month</span>
            </p>

            <Link to={`/jobs/${_id}`}>
              <button className="btn bg-blue-100 hover:bg-blue-600 hover:text-white w-full sm:w-auto">
                {button}
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default JobDetails;
