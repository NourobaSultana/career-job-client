import React from "react";
import logo from "/home/toma/best-website/career-job2-client/src/assets/Team/team1.jpg";
import { AiOutlineProduct } from "react-icons/ai";
import { BiSolidBookContent } from "react-icons/bi";
import { SlPeople } from "react-icons/sl";
import { SiBmcsoftware } from "react-icons/si";
import { FcManager } from "react-icons/fc";
import { MdOutlineManageSearch } from "react-icons/md";
import { WiDayLightWind } from "react-icons/wi";
import { motion } from "motion/react";
const Card = () => {
  return (
    <>
      <div className="text-center py-16 md:py-20 lg:py-24">
        <h2 className="text-3xl font-bold">Search jobs by category</h2>
        <h2 className=" text-xl text-gray-400 my-2">
          The right job for you, with 800+ new listings every day.
        </h2>
      </div>
      <motion.div
        animate={{
          x: [0, -40, 0, 40, 0],
          transition: { duration: 4, repeat: Infinity },
        }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 px-4 sm:px-6 lg:px-20 mb-20"
      >
        {/* Card 1*/}
        <motion.div
          initial={{ y: 0 }}
          whileHover={{
            y: -10,
            transition: { duration: 0.1, ease: "easeOut" }, // দ্রুত উপরে উঠবে
          }}
          transition={{ duration: 0.2, ease: "easeInOut" }} // ধীরে নিচে নামবে
          className="flex flex-col sm:flex-row gap-2 sm:gap-3 bg-white rounded-2xl border border-gray-200 hover:border-blue-500 transition p-4 sm:p-6"
        >
          {/* Icon */}
          <div className="flex-shrink-0 text-3xl sm:text-4xl text-blue-600 flex justify-center sm:justify-start">
            <AiOutlineProduct />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center text-center sm:text-left">
            <h2 className="text-base sm:text-xl font-semibold text-black">
              Retail & Product
            </h2>
            <h2 className="text-sm sm:text-base text-gray-500">
              2 Jobs available
            </h2>
          </div>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          initial={{ y: 0 }}
          whileHover={{
            y: -10,
            transition: { duration: 0.1, ease: "easeOut" }, // দ্রুত উপরে উঠবে
          }}
          transition={{ duration: 0.2, ease: "easeInOut" }} // ধীরে নিচে নামবে
          className="flex flex-col sm:flex-row gap-2 sm:gap-3 bg-white rounded-2xl border border-gray-200 hover:border-blue-500 transition p-4 sm:p-6"
        >
          <div className="flex-shrink-0 text-3xl sm:text-4xl text-blue-600 flex justify-center sm:justify-start">
            <BiSolidBookContent />
          </div>
          <div className="flex flex-col justify-center text-center sm:text-left">
            <h2 className="text-base sm:text-xl font-semibold text-black">
              Content Writer
            </h2>
            <h2 className="text-sm sm:text-base text-gray-500">
              2 Jobs available
            </h2>
          </div>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          initial={{ y: 0 }}
          whileHover={{
            y: -10,
            transition: { duration: 0.1, ease: "easeOut" }, // দ্রুত উপরে উঠবে
          }}
          transition={{ duration: 0.2, ease: "easeInOut" }} // ধীরে নিচে নামবে
          className="flex flex-col sm:flex-row gap-2 sm:gap-3 bg-white rounded-2xl border border-gray-200 hover:border-blue-500 transition p-4 sm:p-6"
        >
          <div className="flex-shrink-0 text-3xl sm:text-4xl text-blue-600 flex justify-center sm:justify-start">
            <SlPeople />
          </div>
          <div className="flex flex-col justify-center text-center sm:text-left">
            <h2 className="text-base sm:text-xl font-semibold text-black">
              Human Resource
            </h2>
            <h2 className="text-sm sm:text-base text-gray-500">
              2 Jobs available
            </h2>
          </div>
        </motion.div>

        {/* Card 4 */}
        <motion.div
          initial={{ y: 0 }}
          whileHover={{
            y: -10,
            transition: { duration: 0.1, ease: "easeOut" }, // দ্রুত উপরে উঠবে
          }}
          transition={{ duration: 0.2, ease: "easeInOut" }} // ধীরে নিচে নামবে
          className="flex flex-col sm:flex-row gap-2 sm:gap-3 bg-white rounded-2xl border border-gray-200 hover:border-blue-500 transition p-4 sm:p-6"
        >
          <div className="flex-shrink-0 text-3xl sm:text-4xl text-blue-600 flex justify-center sm:justify-start">
            <AiOutlineProduct />
          </div>
          <div className="flex flex-col justify-center text-center sm:text-left">
            <h2 className="text-base sm:text-xl font-semibold text-black">
              Retail & Product
            </h2>
            <h2 className="text-sm sm:text-base text-gray-500">
              2 Jobs available
            </h2>
          </div>
        </motion.div>

        {/* Card 5 */}
        <motion.div
          initial={{ y: 0 }}
          whileHover={{
            y: -10,
            transition: { duration: 0.1, ease: "easeOut" }, // দ্রুত উপরে উঠবে
          }}
          transition={{ duration: 0.2, ease: "easeInOut" }} // ধীরে নিচে নামবে
          className="flex flex-col sm:flex-row gap-2 sm:gap-3 bg-white rounded-2xl border border-gray-200 hover:border-blue-500 transition p-4 sm:p-6"
        >
          <div className="flex-shrink-0 text-3xl sm:text-4xl text-blue-600 flex justify-center sm:justify-start">
            <SiBmcsoftware />
          </div>
          <div className="flex flex-col justify-center text-center sm:text-left">
            <h2 className="text-base sm:text-xl font-semibold text-black">
              Software
            </h2>
            <h2 className="text-sm sm:text-base text-gray-500">
              2 Jobs available
            </h2>
          </div>
        </motion.div>

        {/* Card 6*/}
        <motion.div
          initial={{ y: 0 }}
          whileHover={{
            y: -10,
            transition: { duration: 0.1, ease: "easeOut" }, // দ্রুত উপরে উঠবে
          }}
          transition={{ duration: 0.2, ease: "easeInOut" }} // ধীরে নিচে নামবে
          className="flex flex-col sm:flex-row gap-2 sm:gap-3 bg-white rounded-2xl border border-gray-200 hover:border-blue-500 transition p-4 sm:p-6"
        >
          {/* Icon */}
          <div className="flex-shrink-0 text-3xl sm:text-4xl text-blue-600 flex justify-center sm:justify-start">
            <FcManager />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center text-center sm:text-left">
            <h2 className="text-base sm:text-xl font-semibold text-black">
              Software
            </h2>
            <h2 className="text-sm sm:text-base text-gray-500">
              2 Jobs available
            </h2>
          </div>
        </motion.div>

        {/* Card 7 */}
        <motion.div
          initial={{ y: 0 }}
          whileHover={{
            y: -10,
            transition: { duration: 0.1, ease: "easeOut" }, // দ্রুত উপরে উঠবে
          }}
          transition={{ duration: 0.2, ease: "easeInOut" }} // ধীরে নিচে নামবে
          className="flex flex-col sm:flex-row gap-2 sm:gap-3 bg-white rounded-2xl border border-gray-200 hover:border-blue-500 transition p-4 sm:p-6"
        >
          <div className="flex-shrink-0 text-3xl sm:text-4xl text-blue-600 flex justify-center sm:justify-start">
            <MdOutlineManageSearch />
          </div>
          <div className="flex flex-col justify-center text-center sm:text-left">
            <h2 className="text-base sm:text-xl font-semibold text-black">
              Finance
            </h2>
            <h2 className="text-sm sm:text-base text-gray-500">
              2 Jobs available
            </h2>
          </div>
        </motion.div>

        {/* Card 8 */}
        <motion.div
          initial={{ y: 0 }}
          whileHover={{
            y: -10,
            transition: { duration: 0.1, ease: "easeOut" }, // দ্রুত উপরে উঠবে
          }}
          transition={{ duration: 0.2, ease: "easeInOut" }} // ধীরে নিচে নামবে
          className="flex flex-col sm:flex-row gap-2 sm:gap-3 bg-white rounded-2xl border border-gray-200 hover:border-blue-500 transition p-4 sm:p-6"
        >
          <div className="flex-shrink-0 text-3xl sm:text-4xl text-blue-600 flex justify-center sm:justify-start">
            <WiDayLightWind />
          </div>
          <div className="flex flex-col justify-center text-center sm:text-left">
            <h2 className="text-base sm:text-xl font-semibold text-black">
              Management
            </h2>
            <h2 className="text-sm sm:text-base text-gray-500">
              2 Jobs available
            </h2>
          </div>
        </motion.div>

        {/* Card 9 */}
        <motion.div
          initial={{ y: 0 }}
          whileHover={{
            y: -10,
            transition: { duration: 0.1, ease: "easeOut" }, // দ্রুত উপরে উঠবে
          }}
          transition={{ duration: 0.2, ease: "easeInOut" }} // ধীরে নিচে নামবে
          className="flex flex-col sm:flex-row gap-2 sm:gap-3 bg-white rounded-2xl border border-gray-200 hover:border-blue-500 transition p-4 sm:p-6"
        >
          <div className="flex-shrink-0 text-3xl sm:text-4xl text-blue-600 flex justify-center sm:justify-start">
            <WiDayLightWind />
          </div>
          <div className="flex flex-col justify-center text-center sm:text-left">
            <h2 className="text-base sm:text-xl font-semibold text-black">
              Marketing & Sell
            </h2>
            <h2 className="text-sm sm:text-base text-gray-500">
              2 Jobs available
            </h2>
          </div>
        </motion.div>

        {/* Card 10 */}
        <motion.div
          initial={{ y: 0 }}
          whileHover={{
            y: -10,
            transition: { duration: 0.1, ease: "easeOut" }, // দ্রুত উপরে উঠবে
          }}
          transition={{ duration: 0.2, ease: "easeInOut" }} // ধীরে নিচে নামবে
          className="flex flex-col sm:flex-row gap-2 sm:gap-3 bg-white rounded-2xl border border-gray-200 hover:border-blue-500 transition p-4 sm:p-6"
        >
          <div className="flex-shrink-0 text-3xl sm:text-4xl text-blue-600 flex justify-center sm:justify-start">
            <MdOutlineManageSearch />
          </div>
          <div className="flex flex-col justify-center text-center sm:text-left">
            <h2 className="text-base sm:text-xl font-semibold text-black">
              Software
            </h2>
            <h2 className="text-sm sm:text-base text-gray-500">
              2 Jobs available
            </h2>
          </div>
        </motion.div>

        {/* … baki cards same pattern … */}
      </motion.div>
    </>
  );
};

export default Card;
