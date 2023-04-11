import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Bars2Icon, XMarkIcon } from "@heroicons/react/24/solid";
const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div
      className=""
      style={{
        backgroundImage: `linear-gradient(90deg, rgba(126, 144, 254, 0.05) 0%, rgba(152, 115, 255, 0.05) 100%)`,
      }}
    >
      <div className="navbar  md:w-[80%] md:mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <button
              className="btn btn-ghost lg:hidden"
              onClick={handleSidebarToggle}
            >
              {isSidebarOpen ? (
                <XMarkIcon className="h-5 w-5" />
              ) : (
                <Bars2Icon className="h-5 w-5" />
              )}
            </button>
            {isSidebarOpen && (
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <NavLink to="/" onClick={handleSidebarToggle}>
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/statistics" onClick={handleSidebarToggle}>
                    Statistics
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/applied-jobs"
                    onClick={handleSidebarToggle}
                    className="justify-between"
                  >
                    Applied Jobs
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/blog" onClick={handleSidebarToggle}>
                    Blog
                  </NavLink>
                </li>
              </ul>
            )}
          </div>
          <Link to="/" className="btn btn-ghost normal-case text-xl font-bold">
            HireHub
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex text-[#757575]">
          <ul className="menu menu-horizontal px-1 ">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/statistics">Statistics</NavLink>
            </li>
            <li tabIndex={0}>
              <NavLink to="/applied-jobs">Applied Jobs</NavLink>
            </li>
            <li>
              <NavLink to="/blog">Blog</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link className="btn-main">Star Applying</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
