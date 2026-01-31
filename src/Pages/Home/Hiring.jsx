import React from "react";
import hire1 from "/home/toma/best-website/career-job2-client/src/assets/Hiring/hire4.avif";
import hire2 from "/home/toma/best-website/career-job2-client/src/assets/Hiring/hire2.avif";

const Hiring = () => {
  return (
    <>
      <div className="w-11/12 lg:w-8/12 mx-auto p-4 sm:p-6 border border-gray-100 shadow rounded-xl">
        <div className="flex items-center justify-between gap-4">
          {/* Left Image (hidden on mobile) */}
          <div className="hidden md:block">
            <img className="w-[170px] md:mt-3 h-auto" src={hire1} alt="" />
          </div>

          {/* Content */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left gap-3 flex-1">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold md:ml-10">
              We Are <span className="text-blue-400">Hiring</span>
            </h2>

            <p className="text-gray-500 font-semibold md:ml-40">
              Let's Work Together, Explore Together
            </p>

            <button className="btn bg-blue-500 text-white px-6 md:ml-120">
              Apply Now
            </button>
          </div>

          {/* Right Image (hidden on mobile) */}
          <div className="hidden md:block">
            <img className="w-[130px] h-auto" src={hire2} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hiring;
