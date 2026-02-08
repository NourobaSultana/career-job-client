import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";

const RootLayout = () => {
  return (
    <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 ">
      <Navbar></Navbar>
      <div className="mt-20">
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default RootLayout;
