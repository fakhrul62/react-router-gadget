import React, { useState } from "react";
import SecondaryHeader from "../../components/Header/SecondaryHeader";
import { NavLink, Outlet } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("cart");
  
  return (
    <div>
      <Helmet>
        <title>Dashboard</title>
      </Helmet>
      <SecondaryHeader></SecondaryHeader>
      <div className="mx-auto bg-sky-500 py-10">
        <div className="w-11/12 mx-auto">
          <div className="w-10/12 mx-auto">
            <h1 className="text-center text-white font-semibold text-2xl leading-snug">
              Dashboard
            </h1>
            <p className="text-center w-9/12 mx-auto text-white mt-3">
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to the coolest accessories, we have
              it all!
            </p>
            <div className="mt-5">
              <div role="tablist" className="tabs flex justify-center gap-5">
                <NavLink
                  role="tab"
                  className={`border border-white rounded-full font-semibold px-10 py-3 ${
                    activeTab === "cart" ? "bg-white text-black" : "text-white"
                  }`}
                  to="/dashboard"
                  onClick={() => setActiveTab("cart")}
                >
                  Cart
                </NavLink>
                <NavLink
                  role="tab"
                  className={`border border-white rounded-full font-semibold px-10 py-3 ${
                    activeTab === "wishlist"
                      ? "bg-white text-black"
                      : "text-white"
                  }`}
                  to="/dashboard/wishlist"
                  onClick={() => setActiveTab("wishlist")}
                >
                  Wishlist
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-10/12 mx-auto my-10">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
