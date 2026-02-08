import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router";
import { AuthContext } from "../Context/AuthContext";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const [animate, setAnimate] = useState(false);

  const handleSignOut = () => {
    signOutUser().catch((error) => console.log(error));
  };

  // 👇 scroll trigger animation
  useEffect(() => {
    let timeout;

    const handleScroll = () => {
      setAnimate(false); // hide instantly

      clearTimeout(timeout);
      timeout = setTimeout(() => {
        setAnimate(true); // slide down again
      }, 300); // very short blink
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeout);
    };
  }, []);

  const links = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink to="/myApplications">My Applications</NavLink>
          </li>
        </>
      )}
      {user && (
        <li>
          <NavLink to="/addJob">Add Job</NavLink>
        </li>
      )}
      <li>
        <NavLink>Recruiters</NavLink>
      </li>
      <li>
        <NavLink>Candidates</NavLink>
      </li>
      <li>
        <NavLink>Blog</NavLink>
      </li>
      <li>
        <NavLink>Pages</NavLink>
      </li>
    </>
  );

  return (
    <div
      className={`
        fixed top-0 left-0 w-full z-50
        navbar roboto bg-base-100 shadow-sm
        transition-transform duration-300 ease-out
        ${animate ? "translate-y-0" : "-translate-y-full"}
      `}
    >
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content font-bold text-xl rounded-box z-50 mt-3 w-52 p-2 shadow bg-base-100"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl hover:bg-blue-500 hover:text-white">
          Career Job
        </a>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      <div className="navbar-end gap-4">
        {user ? (
          <button onClick={handleSignOut} className="btn">
            Sign Out
          </button>
        ) : (
          <>
            <NavLink to="/register">
              <button className="border-b-2 mt-4 text-gray-700 font-bold">
                Register
              </button>
            </NavLink>
            <NavLink to="/signin">
              <button className="btn bg-blue-500 text-white mt-4">
                SignIn
              </button>
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
