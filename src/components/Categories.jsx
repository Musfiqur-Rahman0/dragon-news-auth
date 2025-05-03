import React, { use } from "react";
import { Link, NavLink, useNavigation } from "react-router";
const categoryPromise = fetch("/categories.json").then((res) => res.json());

const Categories = () => {
  const categoryData = use(categoryPromise);

  return (
    <div>
      <h2 className="text-xl font-semibold "> All Category</h2>
      <div className=" space-y-2 mt-4 flex flex-col">
        {categoryData.map((category) => (
          <NavLink
            to={`/category/${category.id}`}
            className="px-8 py-2 hover:bg-gray-100 rounded-lg cursor-pointer"
            key={category.id}
          >
            {category.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Categories;
