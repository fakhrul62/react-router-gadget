import React from "react";
import { NavLink } from "react-router-dom";
import './Categories.css';

const Categories = ({ categories }) => {
  return (
    <div>
      <div className="border rounded-lg bg-white border-zinc-200 p-4">
        <div role="tablist" className="tabs flex flex-col items-start">
          <NavLink className="tab">
            <button type="button">All Categories</button>
          </NavLink>
          {categories.map((category, idx) => (
            <NavLink
              key={idx}
              to={`/category/${category.category}`}
              role="tab"
              className={({isActive})=> `tab ${isActive && 'tab-active'}`}
            >
              {category.category}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
