import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import RightAside from "./sidebar/RightAside";
import { Link, useLoaderData, useParams } from "react-router";

const NewsDetails = () => {
  const { newsId } = useParams();

  const data = useLoaderData();

  const singleNews = data.find((news) => news.id === newsId);
  // console.log(singleNews);
  return (
    <div>
      <header>
        <Header />
      </header>
      <div className="w-11/12 mx-auto grid grid-cols-12 gap-5 mt-5 ">
        <div className="col-span-9">
          <h2 className="text-3xl font-semibold"> Dragon News</h2>
          <div className="py-6 px-5 border border-gray-200 mt-6 space-y-5 rounded-lg">
            <figure>
              <img src={singleNews?.image_url} alt="" className="rounded-lg" />
            </figure>
            <h2 className="text-3xl font-semibold">{singleNews?.title}</h2>
            <p>{singleNews?.details}</p>
            <Link
              to={`/category/${singleNews.category_id}`}
              className="w-fit flex items-center px-5 py-2 rounded-lg bg-red-500 cursor-pointer font-semibold text-white"
            >
              All Category news here
            </Link>
          </div>
        </div>
        <div className="col-span-3">
          <RightAside />
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
