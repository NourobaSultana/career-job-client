import React from "react";
import logo from "/home/toma/best-website/career-job2-client/src/assets/Team/team1.jpg";
import { IoLocationOutline, IoTimerOutline } from "react-icons/io5";
import { FaBusinessTime } from "react-icons/fa";
import { motion } from "motion/react";

const JobsCard = () => {
  return (
    <>
      <div className="text-center mt-12 mb-20">
        <h2 className="text-3xl font-bold">Search jobs by category</h2>
        <h2 className="font-semibold text-xl text-gray-400">
          The right job for you, with 800+ new listings every day.
        </h2>
      </div>
      <div className="card  bg-base-100 shadow-sm grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* card1 */}
        <motion.div
          initial={{ y: 0 }}
          whileHover={{
            y: -10,
            transition: { duration: 0.1, ease: "easeOut" }, // দ্রুত উপরে উঠবে
          }}
          transition={{ duration: 0.2, ease: "easeInOut" }} // ধীরে নিচে নামবে
          className="card-body rounded-2xl border border-gray-200 hover:border-blue-500 transition  "
        >
          <div className="flex gap-2 ml-3">
            <img className="w-[60px] h-[60px] rounded-2xl" src={logo} alt="" />
            <div className="">
              <h2 className="text-xl font-bold">Car Toys</h2>
              <h2 className="text-sm text-gray-400 flex">
                <span className="text-[20px]">
                  <IoLocationOutline />
                </span>
                Denmark
              </h2>
            </div>
          </div>
          <div className="">
            <p className="text-[16px] font-bold">Figma Designer</p>
            <div className="flex gap-6 mt-2">
              <h2 className="flex gap-2 text-gray-400">
                {" "}
                <span className="text-[20px]">
                  <FaBusinessTime />
                </span>
                Full Time
              </h2>
              <h2 className="flex gap-2 text-gray-400">
                <span className="text-[20px]">
                  <IoTimerOutline />
                </span>
                Posted 3 Years Ago
              </h2>
            </div>

            <div className="text-center mt-4">
              <p className="text-black text-[16px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui nam
                sapiente eaque id enim! Est magni nam incidunt tenetur ad.
              </p>
            </div>

            <div className="join join-vertical lg:join-horizontal gap-2 mt-3">
              <button className="btn join-item text-gray-500">App</button>
              <button className="btn join-item text-gray-500">Figma</button>
              <button className="btn join-item text-gray-500">PHD</button>
            </div>
          </div>

          <div className="flex justify-between">
            <p className="text-blue-600 font-semibold text-2xl mt-2">
              $5000{" "}
              <span className="text-[12px] font-light text-gray-500">
                /Month
              </span>
            </p>

            <div className="mt-6">
              <button className="btn   hover:bg-blue-600 hover:text-white">
                Apply Now
              </button>
            </div>
          </div>
        </motion.div>

        {/* card1 */}
        <motion.div
          initial={{ y: 0 }}
          whileHover={{
            y: -10,
            transition: { duration: 0.1, ease: "easeOut" }, // দ্রুত উপরে উঠবে
          }}
          transition={{ duration: 0.2, ease: "easeInOut" }} // ধীরে নিচে নামবে
          className="card-body rounded-2xl border border-gray-200 hover:border-blue-500 transition  "
        >
          <div className="flex gap-2 ml-3">
            <img className="w-[60px] h-[60px] rounded-2xl" src={logo} alt="" />
            <div className="">
              <h2 className="text-xl font-bold">Car Toys</h2>
              <h2 className="text-sm text-gray-400 flex">
                <span className="text-[20px]">
                  <IoLocationOutline />
                </span>
                Denmark
              </h2>
            </div>
          </div>
          <div className="">
            <p className="text-[16px] font-bold">Figma Designer</p>
            <div className="flex gap-6 mt-2">
              <h2 className="flex gap-2 text-gray-400">
                {" "}
                <span className="text-[20px]">
                  <FaBusinessTime />
                </span>
                Full Time
              </h2>
              <h2 className="flex gap-2 text-gray-400">
                <span className="text-[20px]">
                  <IoTimerOutline />
                </span>
                Posted 3 Years Ago
              </h2>
            </div>

            <div className="text-center mt-4">
              <p className="text-black text-[16px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui nam
                sapiente eaque id enim! Est magni nam incidunt tenetur ad.
              </p>
            </div>

            <div className="join join-vertical lg:join-horizontal gap-2 mt-3">
              <button className="btn join-item text-gray-500">App</button>
              <button className="btn join-item text-gray-500">Figma</button>
              <button className="btn join-item text-gray-500">PHD</button>
            </div>
          </div>

          <div className="flex justify-between">
            <p className="text-blue-600 font-semibold text-2xl mt-2">
              $5000{" "}
              <span className="text-[12px] font-light text-gray-500">
                /Month
              </span>
            </p>

            <div className="mt-6">
              <button className="btn   hover:bg-blue-600 hover:text-white">
                Apply Now
              </button>
            </div>
          </div>
        </motion.div>

        {/* card1 */}
        <motion.div
          initial={{ y: 0 }}
          whileHover={{
            y: -10,
            transition: { duration: 0.1, ease: "easeOut" }, // দ্রুত উপরে উঠবে
          }}
          transition={{ duration: 0.2, ease: "easeInOut" }} // ধীরে নিচে নামবে
          className="card-body rounded-2xl border border-gray-200 hover:border-blue-500 transition  "
        >
          <div className="flex gap-2 ml-3">
            <img className="w-[60px] h-[60px] rounded-2xl" src={logo} alt="" />
            <div className="">
              <h2 className="text-xl font-bold">Car Toys</h2>
              <h2 className="text-sm text-gray-400 flex">
                <span className="text-[20px]">
                  <IoLocationOutline />
                </span>
                Denmark
              </h2>
            </div>
          </div>
          <div className="">
            <p className="text-[16px] font-bold">Figma Designer</p>
            <div className="flex gap-6 mt-2">
              <h2 className="flex gap-2 text-gray-400">
                {" "}
                <span className="text-[20px]">
                  <FaBusinessTime />
                </span>
                Full Time
              </h2>
              <h2 className="flex gap-2 text-gray-400">
                <span className="text-[20px]">
                  <IoTimerOutline />
                </span>
                Posted 3 Years Ago
              </h2>
            </div>

            <div className="text-center mt-4">
              <p className="text-black text-[16px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui nam
                sapiente eaque id enim! Est magni nam incidunt tenetur ad.
              </p>
            </div>

            <div className="join join-vertical lg:join-horizontal gap-2 mt-3">
              <button className="btn join-item text-gray-500">App</button>
              <button className="btn join-item text-gray-500">Figma</button>
              <button className="btn join-item text-gray-500">PHD</button>
            </div>
          </div>

          <div className="flex justify-between">
            <p className="text-blue-600 font-semibold text-2xl mt-2">
              $5000{" "}
              <span className="text-[12px] font-light text-gray-500">
                /Month
              </span>
            </p>

            <div className="mt-6">
              <button className="btn   hover:bg-blue-600 hover:text-white">
                Apply Now
              </button>
            </div>
          </div>
        </motion.div>

        {/* card1 */}
        <motion.div
          initial={{ y: 0 }}
          whileHover={{
            y: -10,
            transition: { duration: 0.1, ease: "easeOut" }, // দ্রুত উপরে উঠবে
          }}
          transition={{ duration: 0.2, ease: "easeInOut" }} // ধীরে নিচে নামবে
          className="card-body rounded-2xl border border-gray-200 hover:border-blue-500 transition  "
        >
          <div className="flex gap-2 ml-3">
            <img className="w-[60px] h-[60px] rounded-2xl" src={logo} alt="" />
            <div className="">
              <h2 className="text-xl font-bold">Car Toys</h2>
              <h2 className="text-sm text-gray-400 flex">
                <span className="text-[20px]">
                  <IoLocationOutline />
                </span>
                Denmark
              </h2>
            </div>
          </div>
          <div className="">
            <p className="text-[16px] font-bold">Figma Designer</p>
            <div className="flex gap-6 mt-2">
              <h2 className="flex gap-2 text-gray-400">
                {" "}
                <span className="text-[20px]">
                  <FaBusinessTime />
                </span>
                Full Time
              </h2>
              <h2 className="flex gap-2 text-gray-400">
                <span className="text-[20px]">
                  <IoTimerOutline />
                </span>
                Posted 3 Years Ago
              </h2>
            </div>

            <div className="text-center mt-4">
              <p className="text-black text-[16px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui nam
                sapiente eaque id enim! Est magni nam incidunt tenetur ad.
              </p>
            </div>

            <div className="join join-vertical lg:join-horizontal gap-2 mt-3">
              <button className="btn join-item text-gray-500">App</button>
              <button className="btn join-item text-gray-500">Figma</button>
              <button className="btn join-item text-gray-500">PHD</button>
            </div>
          </div>

          <div className="flex justify-between">
            <p className="text-blue-600 font-semibold text-2xl mt-2">
              $5000{" "}
              <span className="text-[12px] font-light text-gray-500">
                /Month
              </span>
            </p>

            <div className="mt-6">
              <button className="btn   hover:bg-blue-600 hover:text-white">
                Apply Now
              </button>
            </div>
          </div>
        </motion.div>

        {/* card1 */}
        <motion.div
          initial={{ y: 0 }}
          whileHover={{
            y: -10,
            transition: { duration: 0.1, ease: "easeOut" }, // দ্রুত উপরে উঠবে
          }}
          transition={{ duration: 0.2, ease: "easeInOut" }} // ধীরে নিচে নামবে
          className="card-body rounded-2xl border border-gray-200 hover:border-blue-500 transition  "
        >
          <div className="flex gap-2 ml-3">
            <img className="w-[60px] h-[60px] rounded-2xl" src={logo} alt="" />
            <div className="">
              <h2 className="text-xl font-bold">Car Toys</h2>
              <h2 className="text-sm text-gray-400 flex">
                <span className="text-[20px]">
                  <IoLocationOutline />
                </span>
                Denmark
              </h2>
            </div>
          </div>
          <div className="">
            <p className="text-[16px] font-bold">Figma Designer</p>
            <div className="flex gap-6 mt-2">
              <h2 className="flex gap-2 text-gray-400">
                {" "}
                <span className="text-[20px]">
                  <FaBusinessTime />
                </span>
                Full Time
              </h2>
              <h2 className="flex gap-2 text-gray-400">
                <span className="text-[20px]">
                  <IoTimerOutline />
                </span>
                Posted 3 Years Ago
              </h2>
            </div>

            <div className="text-center mt-4">
              <p className="text-black text-[16px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui nam
                sapiente eaque id enim! Est magni nam incidunt tenetur ad.
              </p>
            </div>

            <div className="join join-vertical lg:join-horizontal gap-2 mt-3">
              <button className="btn join-item text-gray-500">App</button>
              <button className="btn join-item text-gray-500">Figma</button>
              <button className="btn join-item text-gray-500">PHD</button>
            </div>
          </div>

          <div className="flex justify-between">
            <p className="text-blue-600 font-semibold text-2xl mt-2">
              $5000{" "}
              <span className="text-[12px] font-light text-gray-500">
                /Month
              </span>
            </p>

            <div className="mt-6">
              <button className="btn   hover:bg-blue-600 hover:text-white">
                Apply Now
              </button>
            </div>
          </div>
        </motion.div>

        {/* card1 */}
        <motion.div
          initial={{ y: 0 }}
          whileHover={{
            y: -10,
            transition: { duration: 0.1, ease: "easeOut" }, // দ্রুত উপরে উঠবে
          }}
          transition={{ duration: 0.2, ease: "easeInOut" }} // ধীরে নিচে নামবে
          className="card-body rounded-2xl border border-gray-200 hover:border-blue-500 transition  "
        >
          <div className="flex gap-2 ml-3">
            <img className="w-[60px] h-[60px] rounded-2xl" src={logo} alt="" />
            <div className="">
              <h2 className="text-xl font-bold">Car Toys</h2>
              <h2 className="text-sm text-gray-400 flex">
                <span className="text-[20px]">
                  <IoLocationOutline />
                </span>
                Denmark
              </h2>
            </div>
          </div>
          <div className="">
            <p className="text-[16px] font-bold">Figma Designer</p>
            <div className="flex gap-6 mt-2">
              <h2 className="flex gap-2 text-gray-400">
                {" "}
                <span className="text-[20px]">
                  <FaBusinessTime />
                </span>
                Full Time
              </h2>
              <h2 className="flex gap-2 text-gray-400">
                <span className="text-[20px]">
                  <IoTimerOutline />
                </span>
                Posted 3 Years Ago
              </h2>
            </div>

            <div className="text-center mt-4">
              <p className="text-black text-[16px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui nam
                sapiente eaque id enim! Est magni nam incidunt tenetur ad.
              </p>
            </div>

            <div className="join join-vertical lg:join-horizontal gap-2 mt-3">
              <button className="btn join-item text-gray-500">App</button>
              <button className="btn join-item text-gray-500">Figma</button>
              <button className="btn join-item text-gray-500">PHD</button>
            </div>
          </div>

          <div className="flex justify-between">
            <p className="text-blue-600 font-semibold text-2xl mt-2">
              $5000{" "}
              <span className="text-[12px] font-light text-gray-500">
                /Month
              </span>
            </p>

            <div className="mt-6">
              <button className="btn   hover:bg-blue-600 hover:text-white">
                Apply Now
              </button>
            </div>
          </div>
        </motion.div>

        {/* card1 */}
        <motion.div
          initial={{ y: 0 }}
          whileHover={{
            y: -10,
            transition: { duration: 0.1, ease: "easeOut" }, // দ্রুত উপরে উঠবে
          }}
          transition={{ duration: 0.2, ease: "easeInOut" }} // ধীরে নিচে নামবে
          className="card-body rounded-2xl border border-gray-200 hover:border-blue-500 transition  "
        >
          <div className="flex gap-2 ml-3">
            <img className="w-[60px] h-[60px] rounded-2xl" src={logo} alt="" />
            <div className="">
              <h2 className="text-xl font-bold">Car Toys</h2>
              <h2 className="text-sm text-gray-400 flex">
                <span className="text-[20px]">
                  <IoLocationOutline />
                </span>
                Denmark
              </h2>
            </div>
          </div>
          <div className="">
            <p className="text-[16px] font-bold">Figma Designer</p>
            <div className="flex gap-6 mt-2">
              <h2 className="flex gap-2 text-gray-400">
                {" "}
                <span className="text-[20px]">
                  <FaBusinessTime />
                </span>
                Full Time
              </h2>
              <h2 className="flex gap-2 text-gray-400">
                <span className="text-[20px]">
                  <IoTimerOutline />
                </span>
                Posted 3 Years Ago
              </h2>
            </div>

            <div className="text-center mt-4">
              <p className="text-black text-[16px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui nam
                sapiente eaque id enim! Est magni nam incidunt tenetur ad.
              </p>
            </div>

            <div className="join join-vertical lg:join-horizontal gap-2 mt-3">
              <button className="btn join-item text-gray-500">App</button>
              <button className="btn join-item text-gray-500">Figma</button>
              <button className="btn join-item text-gray-500">PHD</button>
            </div>
          </div>

          <div className="flex justify-between">
            <p className="text-blue-600 font-semibold text-2xl mt-2">
              $5000{" "}
              <span className="text-[12px] font-light text-gray-500">
                /Month
              </span>
            </p>

            <div className="mt-6">
              <button className="btn   hover:bg-blue-600 hover:text-white">
                Apply Now
              </button>
            </div>
          </div>
        </motion.div>

        {/* card1 */}
        <motion.div
          initial={{ y: 0 }}
          whileHover={{
            y: -10,
            transition: { duration: 0.1, ease: "easeOut" }, // দ্রুত উপরে উঠবে
          }}
          transition={{ duration: 0.2, ease: "easeInOut" }} // ধীরে নিচে নামবে
          className="card-body rounded-2xl border border-gray-200 hover:border-blue-500 transition  "
        >
          <div className="flex gap-2 ml-3">
            <img className="w-[60px] h-[60px] rounded-2xl" src={logo} alt="" />
            <div className="">
              <h2 className="text-xl font-bold">Car Toys</h2>
              <h2 className="text-sm text-gray-400 flex">
                <span className="text-[20px]">
                  <IoLocationOutline />
                </span>
                Denmark
              </h2>
            </div>
          </div>
          <div className="">
            <p className="text-[16px] font-bold">Figma Designer</p>
            <div className="flex gap-6 mt-2">
              <h2 className="flex gap-2 text-gray-400">
                {" "}
                <span className="text-[20px]">
                  <FaBusinessTime />
                </span>
                Full Time
              </h2>
              <h2 className="flex gap-2 text-gray-400">
                <span className="text-[20px]">
                  <IoTimerOutline />
                </span>
                Posted 3 Years Ago
              </h2>
            </div>

            <div className="text-center mt-4">
              <p className="text-black text-[16px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui nam
                sapiente eaque id enim! Est magni nam incidunt tenetur ad.
              </p>
            </div>

            <div className="join join-vertical lg:join-horizontal gap-2 mt-3">
              <button className="btn join-item text-gray-500">App</button>
              <button className="btn join-item text-gray-500">Figma</button>
              <button className="btn join-item text-gray-500">PHD</button>
            </div>
          </div>

          <div className="flex justify-between">
            <p className="text-blue-600 font-semibold text-2xl mt-2">
              $5000{" "}
              <span className="text-[12px] font-light text-gray-500">
                /Month
              </span>
            </p>

            <div className="mt-6">
              <button className="btn   hover:bg-blue-600 hover:text-white">
                Apply Now
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default JobsCard;
