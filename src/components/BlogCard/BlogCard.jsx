import React from "react";
import { FaUserPen } from "react-icons/fa6";
import { CiCalendar } from "react-icons/ci";

const BlogCard = ({ blog }) => {
  const {
    feature_image,
    title,
    author_name,
    author_image,
    publish_date,
    hashtags,
  } = blog || {};
  return (
    <div className="border-zinc-200 border rounded-lg p-5 bg-white flex flex-col gap-3 h-fit">
      <img src={feature_image} className="h-52 w-full object-cover rounded" />
      <div className="flex flex-col justify-between gap-3 h-full">
        <h2 className="font-semibold">{title}</h2>
        <div className="flex items-center gap-5">
          <h4 className="font-medium text-zinc-600 text-sm flex items-center gap-1">
            <FaUserPen className="text-sky-500" />
            {author_name}
          </h4>
          <h4 className="font-medium text-zinc-600 text-sm flex items-center gap-1">
            <CiCalendar className="text-sky-500" />
            {publish_date}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
