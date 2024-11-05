import React from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import Categories from "../../components/Categories/Categories";
import Header from "../../components/Header/Header";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const categories = useLoaderData();
  return (
    <div>
      <Helmet>
        <title>React Router Gadget</title>
      </Helmet>
      <Header></Header>
      <div className="w-8/12 -mt-44 mx-auto border-2 border-zinc-100 backdrop-blur-sm  p-5 rounded-xl mb-16">
        <img
          className="rounded-xl"
          src="https://i.ibb.co.com/KwgcdfC/featured-apple-vision-pro.jpg"
        />
      </div>
      <h2 className="font-semibold text-center text-3xl mb-10">
        Explore Cutting-Edge Gadgets
      </h2>
      {/* Categories */}
      <div className="w-10/12 mx-auto grid grid-cols-5 gap-5 pb-16">
        <Categories categories={categories}></Categories>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Home;
