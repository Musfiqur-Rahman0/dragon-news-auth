import React from "react";
import Marquee from "react-fast-marquee";
import { useLoaderData } from "react-router";

const Bulletin = () => {
  const data = useLoaderData();

  const latestNews = data.filter((news) => news.others.is_today_pick === true);

  return (
    <div className="my-5 flex items-center p-2 rounded-lg bg-gray-100 w-full mt-3">
      <button className="px-4 py-2 rounded-lg bg-red-400 text-white cursor-pointer">
        Latest
      </button>
      <Marquee pauseOnHover speed={40} className="flex items-center gap-8">
        {latestNews.map((news) => (
          <p key={news.id} className="">
            {news.title}
          </p>
        ))}
      </Marquee>
    </div>
  );
};

export default Bulletin;
