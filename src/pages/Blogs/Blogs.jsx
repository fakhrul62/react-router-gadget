import React from "react";
import SecondaryHeader from "../../components/Header/SecondaryHeader";
import { useLoaderData } from "react-router-dom";
import BlogCard from "../../components/BlogCard/BlogCard";
import { Helmet } from "react-helmet-async";

const Blogs = () => {
  const blogs = useLoaderData();

  return (
    <div>
      <Helmet>
        <title>Blogs</title>
      </Helmet>
      <SecondaryHeader></SecondaryHeader>
      <div>
        <div className="mx-auto bg-sky-500 py-10">
          <div className="w-11/12 mx-auto">
            <div className="w-10/12 mx-auto">
              <h1 className="text-center text-white font-semibold text-2xl leading-snug">
                Blogs
              </h1>
              <p className="text-center w-9/12 mx-auto text-white mt-3">
                Explore the latest gadgets that will take your experience to the
                next level. From smart devices to the coolest accessories, we
                have it all!
              </p>
            </div>
          </div>
        </div>
        <div className="w-10/12 mx-auto grid grid-cols-3 gap-5 my-10">
          {blogs.map((blog, idx) => (
            <BlogCard key={idx} blog={blog}></BlogCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
