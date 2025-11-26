import React from "react";
import logo from "../../assets/logo.png";
import github from "../../assets/github.png";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";


const Navbar = () => {
  const linkClasses = ({ isActive }) =>
    isActive
      ? "bg-gradient-to-r from-[#632EE3] to-[#632EE3] bg-clip-text text-transparent font-semibold"
      : "text-gray-700";

  return (
    <div className="navbar bg-base-100 shadow-sm">
    
      <div className="navbar-start ml-0 md:ml-10">
        {/* Mobile dropdown */}
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden"
          >
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
            tabIndex={-1}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink to="/" className={linkClasses}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/apps" className={linkClasses}>
                Apps
              </NavLink>
            </li>
            <li>
              <NavLink to="/installation" className={linkClasses}>
                Installation
              </NavLink>
            </li>
          </ul>
        </div>
<Link to="/" className="flex items-center gap-2">
  <img src={logo} className="w-8 h-8" alt="HERO.IO logo" />
  <span className="btn btn-ghost text-xl bg-gradient-to-r from-[#632EE3] to-[#632EE3] bg-clip-text text-transparent">
    HERO.IO
  </span>
</Link>


      </div>

      {/* CENTER – desktop menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-bold">
          <li>
            <NavLink to="/" className={linkClasses}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/apps" className={linkClasses}>
              Apps
            </NavLink>
          </li>
          <li>
            <NavLink to="/installation" className={linkClasses}>
              Installation
            </NavLink>
          </li>
        </ul>
      </div>

     
      <div className="navbar-end mr-0 md:mr-10">
        <button className="btn bg-gradient-to-r from-[#632EE3] to-[#632EE3] w-27 h-10 sm:w-30 text-white"  onClick={() => window.open("https://github.com/humaeidmansur/hero-app-project.git", "_blank")}>
          <img src={github} alt="" />
          Contribute
        </button>
      </div>
    </div>
  );
};

export default Navbar;
