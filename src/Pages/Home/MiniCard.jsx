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
      {/* Heading */}
      <div className="text-center py-8 md:py-12 lg:py-16">
        <h2 className="text-3xl font-bold">Jobs Of The Day</h2>
        <p className="text-xl text-gray-400 mt-2">
          Search and connect with the right candidates faster
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4 px-4">
        {/* Card 1 */}
        <div className="group flex flex-col sm:flex-row items-center gap-2 sm:gap-3 bg-white rounded-xl border border-gray-200 hover:border-blue-500 transition p-3 sm:p-4 text-center sm:text-left">
          <AiOutlineProduct className="text-blue-600 text-xl shrink-0" />
          <h2 className="text-sm sm:text-[13px] font-semibold text-gray-900 leading-tight">
            Retail & Product
          </h2>
        </div>

        {/* Card 2 */}
        <div className="group flex flex-col sm:flex-row items-center gap-2 sm:gap-3 bg-white rounded-xl border border-gray-200 hover:border-blue-500 transition p-3 sm:p-4 text-center sm:text-left">
          <BiSolidBookContent className="text-blue-600 text-xl shrink-0" />
          <h2 className="text-sm sm:text-[13px] font-semibold text-gray-900">
            Finance
          </h2>
        </div>

        {/* Card 3 */}
        <div className="group flex flex-col sm:flex-row items-center gap-2 sm:gap-3 bg-white rounded-xl border border-gray-200 hover:border-blue-500 transition p-3 sm:p-4 text-center sm:text-left">
          <SiBmcsoftware className="text-blue-600 text-xl shrink-0" />
          <h2 className="text-sm sm:text-[13px] font-semibold text-gray-900">
            Human Resource
          </h2>
        </div>

        {/* Card 4 */}
        <div className="group flex flex-col sm:flex-row items-center gap-2 sm:gap-3 bg-white rounded-xl border border-gray-200 hover:border-blue-500 transition p-3 sm:p-4 text-center sm:text-left">
          <FcManager className="text-blue-600 text-xl shrink-0" />
          <h2 className="text-sm sm:text-[13px] font-semibold text-gray-900">
            Management
          </h2>
        </div>

        {/* Card 5 */}
        <div className="group flex flex-col sm:flex-row items-center gap-2 sm:gap-3 bg-white rounded-xl border border-gray-200 hover:border-blue-500 transition p-3 sm:p-4 text-center sm:text-left">
          <MdOutlineManageSearch className="text-blue-600 text-xl shrink-0" />
          <h2 className="text-sm sm:text-[13px] font-semibold text-gray-900">
            Market Research
          </h2>
        </div>

        {/* Card 6 */}
        <div className="group flex flex-col sm:flex-row items-center gap-2 sm:gap-3 bg-white rounded-xl border border-gray-200 hover:border-blue-500 transition p-3 sm:p-4 text-center sm:text-left">
          <WiDayLightWind className="text-blue-600 text-xl shrink-0" />
          <h2 className="text-sm sm:text-[13px] font-semibold text-gray-900">
            Marketing & Sales
          </h2>
        </div>

        {/* Card 7 */}
        <div className="group flex flex-col sm:flex-row items-center gap-2 sm:gap-3 bg-white rounded-xl border border-gray-200 hover:border-blue-500 transition p-3 sm:p-4 text-center sm:text-left">
          <FcManager className="text-blue-600 text-xl shrink-0" />
          <h2 className="text-sm sm:text-[13px] font-semibold text-gray-900">
            Retail & Products
          </h2>
        </div>

        {/* Card 8 */}
        <div className="group flex flex-col sm:flex-row items-center gap-2 sm:gap-3 bg-white rounded-xl border border-gray-200 hover:border-blue-500 transition p-3 sm:p-4 text-center sm:text-left">
          <WiDayLightWind className="text-blue-600 text-xl shrink-0" />
          <h2 className="text-sm sm:text-[13px] font-semibold text-gray-900">
            Software
          </h2>
        </div>
      </div>
    </div>
  );
};

export default MiniCard;
