import React from "react";
import { useLoaderData } from "react-router";

const CategoryNews = () => {
  const data = useLoaderData();
  console.log(data);

  return <div>Category news</div>;
};

export default CategoryNews;
