import React from "react";
import banner from "../../assets/Marketing/banner.jpg";
const MarketingBanner = () => {
  return (
    <div className="hero bg-white  py-16 md:py-20 lg:py-24">
      <div className="hero-content flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12 lg:gap-24 px-4 sm:px-6 lg:px-20 max-w-7xl mx-auto">
        {/* Image */}
        <img
          src={banner}
          className="w-full max-w-sm rounded-lg shadow-2xl self-center mt-"
          alt="Banner Image"
        />

        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left">
          {/* Subheading */}
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-500">
            Millions Of Jobs
          </h2>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-950 mt-2 leading-tight">
            Find The One That's <br className="block" />
            <span className="text-blue-500">Right</span> For You
          </h1>

          {/* Paragraph */}
          <p className="mt-4 sm:mt-6 text-gray-600 text-base sm:text-lg md:text-xl max-w-lg lg:max-w-md mx-auto lg:mx-0 leading-relaxed">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 mt-6">
            <button className="btn bg-blue-500 text-white font-bold rounded-[5px] w-full sm:w-auto">
              Search Jobs
            </button>
            <a
              className="border-b-2 font-semibold text-blue-500 hover:text-blue-700"
              href=""
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketingBanner;
