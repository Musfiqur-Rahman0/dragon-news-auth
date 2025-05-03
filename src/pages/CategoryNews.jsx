import React, { useEffect, useState } from "react";
import { useLoaderData, useNavigation, useParams } from "react-router";
import NewsCard from "../components/NewsCard";
import Loader from "../components/Loader";

const CategoryNews = () => {
  const data = useLoaderData();

  const [category, setCategory] = useState([]);

  const { id } = useParams();

  const { state } = useNavigation();

  useEffect(() => {
    if (id == 0) {
      setCategory(data);
    } else if (id == 1) {
      const filteredNews = data.filter(
        (news) => news.others.is_today_pick === true
      );

      setCategory(filteredNews);
    } else {
      const filteredNews = data.filter((news) => news.category_id == id);
      setCategory(filteredNews);
    }
  }, [id, data]);

  return (
    <div>
      <h2 className="text-xl font-semibold"> Dragon News Home</h2>
      <div className="space-y-5 mt-5 ">
        {state === "loading" ? (
          <Loader />
        ) : (
          category.map((ctNews, i) => <NewsCard key={i} news={ctNews} />)
        )}
      </div>
    </div>
  );
};

export default CategoryNews;
