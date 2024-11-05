import React from "react";
import { Link, NavLink } from "react-router-dom";
import { IoCartOutline, IoHeartOutline } from "react-icons/io5";

const Header = () => {
  return (
    <div className="w-[95%] mx-auto bg-sky-500 py-2 mt-8 rounded-xl">
      <div className="w-11/12 mx-auto mb-52">
        <div className="navbar p-0">
          <div className="navbar-start">
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
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow *:text-white"
              >
                <NavLink className="underline" to="/">
                  Home
                </NavLink>
                <NavLink to="/statistics">Statistics</NavLink>
                <NavLink to="/dashboard">Dashboard</NavLink>
                <NavLink to="/blogs">Blogs</NavLink>
              </ul>
            </div>
            <a className="text-xl font-bold text-white">React Router Gadget</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 *:text-white *:font-semibold gap-4">
              <NavLink className="underline" to="/">
                Home
              </NavLink>
              <NavLink to="/statistics">Statistics</NavLink>
              <NavLink to="/dashboard">Dashboard</NavLink>
              <NavLink to="/blogs">Blogs</NavLink>
            </ul>
          </div>
          <div className="navbar-end gap-3 *:bg-white *:w-8 *:p-2 *:h-8 *:rounded-full">
            <Link to="/dashboard">
              <button type="button">
                <IoCartOutline />
              </button>
            </Link>
            <Link to="/dashboard/wishlist">
              <button type="button">
                <IoHeartOutline />
              </button>
            </Link>
          </div>
        </div>
        <div className="w-10/12 mx-auto mt-5">
          <h1 className="text-center text-white font-semibold text-5xl leading-snug">
            Upgrade Your Tech Accessorize with Gadget Heaven Accessories
          </h1>
          <p className="text-center w-9/12 mx-auto text-white mt-3">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
          <div className="text-center my-6">
            <button
              type="button"
              className="text-sky-500 bg-white px-5 py-2 rounded-2xl font-semibold"
            >
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
