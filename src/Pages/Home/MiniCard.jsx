import React from "react";
import { AiOutlineProduct } from "react-icons/ai";
import { BiSolidBookContent } from "react-icons/bi";
import { SlPeople } from "react-icons/sl";
import { SiBmcsoftware } from "react-icons/si";
import { FcManager } from "react-icons/fc";
import { MdOutlineManageSearch } from "react-icons/md";
import { WiDayLightWind } from "react-icons/wi";
import { motion } from "motion/react";
const MiniCard = () => {
  return (
    <div>
      {/* Grid container */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4 px-4 sm:px-6 lg:px-20 mb-20">
        {/* Card 1*/}
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 bg-white rounded-xl border border-gray-200 hover:border-blue-500 transition p-2 sm:p-4">
          {/* Icon */}
          <div className="flex-shrink-0 text-xl mt-2 sm:text-xl text-blue-600 flex justify-center sm:justify-start">
            <AiOutlineProduct />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center text-center sm:text-left">
            <h2 className="text-base sm:text-[12px] font-semibold text-black">
              Retail & Product
            </h2>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 bg-white rounded-xl border border-gray-200 hover:border-blue-500 transition p-2 sm:p-4">
          {/* Icon */}
          <div className="flex-shrink-0 text-xl mt-2  sm:text-xl text-blue-600 flex justify-center sm:justify-start">
            <BiSolidBookContent />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center text-center sm:text-left">
            <h2 className="text-base sm:text-[12px] font-semibold text-black">
              Finance
            </h2>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 bg-white rounded-xl border border-gray-200 hover:border-blue-500 transition p-2 sm:p-4">
          {/* Icon */}
          <div className="flex-shrink-0 text-xl mt-2  sm:text-xl text-blue-600 flex justify-center sm:justify-start">
            <SiBmcsoftware />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center text-center sm:text-left">
            <h2 className="text-base sm:text-[12px] font-semibold text-black">
              Human Resource
            </h2>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 bg-white rounded-xl border border-gray-200 hover:border-blue-500 transition p-2 sm:p-4">
          {/* Icon */}
          <div className="flex-shrink-0 text-xl mt-2  sm:text-xl text-blue-600 flex justify-center sm:justify-start">
            <FcManager />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center text-center sm:text-left">
            <h2 className="text-base sm:text-[12px] font-semibold text-black">
              Management
            </h2>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 bg-white rounded-xl border border-gray-200 hover:border-blue-500 transition p-2 sm:p-4">
          {/* Icon */}
          <div className="flex-shrink-0 text-xl mt-2  sm:text-xl text-blue-600 flex justify-center sm:justify-start">
            <MdOutlineManageSearch />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center text-center sm:text-left">
            <h2 className="text-base sm:text-[12px] font-semibold text-black">
              Market Research
            </h2>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 bg-white rounded-xl border border-gray-200 hover:border-blue-500 transition p-2 sm:p-4">
          {/* Icon */}
          <div className="flex-shrink-0 mt-2  text-xl sm:text-xl text-blue-600 flex justify-center sm:justify-start">
            <WiDayLightWind />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center text-center sm:text-left">
            <h2 className="text-base sm:text-[12px] font-semibold text-black">
              Marketing & Sell
            </h2>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 bg-white rounded-xl border border-gray-200 hover:border-blue-500 transition p-2 sm:p-4">
          {/* Icon */}
          <div className="flex-shrink-0 mt-2  text-xl sm:text-xl text-blue-600 flex justify-center sm:justify-start">
            <FcManager />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center text-center sm:text-left">
            <h2 className="text-base sm:text-[12px] font-semibold text-black">
              Retail & Products
            </h2>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 bg-white rounded-xl border border-gray-200 hover:border-blue-500 transition p-2 sm:p-4">
          {/* Icon */}
          <div className="flex-shrink-0 text-xl mt-2  sm:text-xl text-blue-600 flex justify-center sm:justify-start">
            <WiDayLightWind />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center text-center sm:text-left">
            <h2 className="text-base sm:text-[12px] font-semibold text-black">
              Software
            </h2>
          </div>
        </div>

        {/* Card 2, 3, 4... এখানেই যাবে */}
      </div>
    </div>
  );
};

export default MiniCard;
