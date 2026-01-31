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
      <div className="text-center py-8 md:py-12 lg:py-16 ">
        <h2 className="text-3xl font-bold">Jobs Of The Day</h2>
        <h2 className=" text-xl text-gray-400 my-2">
          Search and connect with the right candidates faster
        </h2>
      </div>
      {/* Grid container */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4 px-2 sm:px-4 lg:px-8">
        {/* CARD */}
        <div className="group flex items-center gap-3 bg-white rounded-xl border border-gray-200 hover:border-blue-500 transition-all duration-200 p-3 sm:p-4">
          {/* Icon */}
          <div className="flex items-center justify-center text-blue-600 text-xl shrink-0">
            <AiOutlineProduct />
          </div>

          {/* Text */}
          <h2 className="text-sm sm:text-[13px] font-semibold text-gray-900 text-center sm:text-left leading-tight">
            Retail & Product
          </h2>
        </div>

        <div className="group flex items-center gap-3 bg-white rounded-xl border border-gray-200 hover:border-blue-500 transition-all duration-200 p-3 sm:p-4">
          <div className="flex items-center justify-center text-blue-600 text-xl shrink-0">
            <BiSolidBookContent />
          </div>
          <h2 className="text-sm sm:text-[13px] font-semibold text-gray-900 text-center sm:text-left">
            Finance
          </h2>
        </div>

        <div className="group flex items-center gap-3 bg-white rounded-xl border border-gray-200 hover:border-blue-500 transition-all duration-200 p-3 sm:p-4">
          <div className="flex items-center justify-center text-blue-600 text-xl shrink-0">
            <SiBmcsoftware />
          </div>
          <h2 className="text-sm sm:text-[13px] font-semibold text-gray-900 text-center sm:text-left">
            Human Resource
          </h2>
        </div>

        <div className="group flex items-center gap-3 bg-white rounded-xl border border-gray-200 hover:border-blue-500 transition-all duration-200 p-3 sm:p-4">
          <div className="flex items-center justify-center text-blue-600 text-xl shrink-0">
            <FcManager />
          </div>
          <h2 className="text-sm sm:text-[13px] font-semibold text-gray-900 text-center sm:text-left">
            Management
          </h2>
        </div>

        <div className="group flex items-center gap-3 bg-white rounded-xl border border-gray-200 hover:border-blue-500 transition-all duration-200 p-3 sm:p-4">
          <div className="flex items-center justify-center text-blue-600 text-xl shrink-0">
            <MdOutlineManageSearch />
          </div>
          <h2 className="text-sm sm:text-[13px] font-semibold text-gray-900 text-center sm:text-left">
            Market Research
          </h2>
        </div>

        <div className="group flex items-center gap-3 bg-white rounded-xl border border-gray-200 hover:border-blue-500 transition-all duration-200 p-3 sm:p-4">
          <div className="flex items-center justify-center text-blue-600 text-xl shrink-0">
            <WiDayLightWind />
          </div>
          <h2 className="text-sm sm:text-[13px] font-semibold text-gray-900 text-center sm:text-left">
            Marketing & Sell
          </h2>
        </div>

        <div className="group flex items-center gap-3 bg-white rounded-xl border border-gray-200 hover:border-blue-500 transition-all duration-200 p-3 sm:p-4">
          <div className="flex items-center justify-center text-blue-600 text-xl shrink-0">
            <FcManager />
          </div>
          <h2 className="text-sm sm:text-[13px] font-semibold text-gray-900 text-center sm:text-left">
            Retail & Products
          </h2>
        </div>

        <div className="group flex items-center gap-3 bg-white rounded-xl border border-gray-200 hover:border-blue-500 transition-all duration-200 p-3 sm:p-4">
          <div className="flex items-center justify-center text-blue-600 text-xl shrink-0">
            <WiDayLightWind />
          </div>
          <h2 className="text-sm sm:text-[13px] font-semibold text-gray-900 text-center sm:text-left">
            Software
          </h2>
        </div>
      </div>
    </div>
  );
};

export default MiniCard;
