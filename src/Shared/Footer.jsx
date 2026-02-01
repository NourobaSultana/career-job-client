import React from "react";
import { BiLogoPlayStore } from "react-icons/bi";
import { FaApple } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer roboto  sm:footer-horizontal bg-white  p-10">
      <nav>
        <h2 className=" text-4xl font-bold text-black ">Career Job</h2>
        <p className="text-gray-700 font-light w-[350px]">
          {" "}
          Career Job is at the heart of the design community and the leading
          platform to discover and connect with designers and job opportunities
          worldwide.
        </p>
      </nav>
      <nav>
        <h6 className=" text-blue-950 font-bold text-[18px]">Services</h6>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </nav>
      <nav>
        <h6 className="text-blue-950 font-bold text-[18px]">Company</h6>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <h6 className="text-blue-950 font-bold text-[18px]">Quick Links</h6>
        <a className="link link-hover">Android</a>
        <a className="link link-hover">Desktop</a>
        <a className="link link-hover">Microsoft</a>
      </nav>

      <nav>
        <h6 className="text-blue-950 font-bold text-[18px]">More</h6>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
        <a className="link link-hover">Helps</a>
        <a className="link link-hover">Privacy</a>
      </nav>

      <nav>
        <h6 className="text-blue-950 font-bold text-[18px]">Download App</h6>
        <a className="link link-hover">
          Get 20% off your first order — download our app now!
        </a>

        <div className="flex flex-wrap gap-4 items-center">
          {/* App Store Button */}
          <button className="flex items-center gap-3 px-5 py-3 rounded-lg bg-[#1A77F2] text-white border border-[#005fd8] hover:bg-[#1666d9] transition">
            <FaApple className="text-3xl" />
            <div className="text-left leading-tight">
              <p className="text-[11px] font-light opacity-90">
                Download on the
              </p>
              <h2 className="text-base font-semibold">App Store</h2>
            </div>
          </button>

          {/* Google Play Button */}
          <button className="flex items-center gap-3 px-5 py-3 rounded-lg bg-[#1A77F2] text-white border border-[#005fd8] hover:bg-[#1666d9] transition">
            <BiLogoPlayStore className="text-3xl" />
            <div className="text-left leading-tight">
              <p className="text-[11px] font-light opacity-90">Get it on</p>
              <h2 className="text-base font-semibold">Google Play</h2>
            </div>
          </button>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
