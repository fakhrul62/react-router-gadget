import React from "react";
import { Link, NavLink } from "react-router-dom";
import { IoCartOutline, IoHeartOutline } from "react-icons/io5";
import "./SecondaryHeader.css";
import { getCart } from "../../utilities";

const SecondaryHeader = () => {
  const getCartData = getCart();
  return (
    <>
      <div className="bg-white">
        <div className="navbar p-0 w-10/12 mx-auto">
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
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow *:text-black"
              >
                <NavLink to="/">Home</NavLink>
                <NavLink to="/statistics">Statistics</NavLink>
                <NavLink to="/dashboard/cart">Dashboard</NavLink>
                <NavLink to="/blogs">Blogs</NavLink>
              </ul>
            </div>
            <a className="text-xl font-bold text-black">React Router Gadget</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 *:text-black *:font-semibold gap-4">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/statistics">Statistics</NavLink>
              <NavLink to="/dashboard">Dashboard</NavLink>
              <NavLink to="/blogs">Blogs</NavLink>
            </ul>
          </div>
          <div className="navbar-end gap-3 *:bg-white *:w-8 *:p-2 *:h-8 *:rounded-full">
            <Link to="/dashboard">
              <div className="indicator">
                <span className="indicator-item badge -top-2 text-xs w-5 h-5 border-sky-500 border">
                  {getCartData.length}
                </span>
                <button type="button">
                  <IoCartOutline />
                </button>
              </div>
            </Link>
            <Link to="/dashboard/wishlist">
              <button type="button">
                <IoHeartOutline />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SecondaryHeader;
