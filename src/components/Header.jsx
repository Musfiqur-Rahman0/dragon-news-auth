import React from "react";
import Marquee from "react-fast-marquee";
import Bulletin from "./Bulletin";

const Header = () => {
  const date = new Date();
  const day = date.getDate();
  const dayname = date.toLocaleDateString("en-US", { weekday: "long" });
  const month = date.toLocaleDateString("en-US", { month: "long" });
  const year = date.getFullYear();
  const ber = date.getUTCDay();

  const formatedDate = `${dayname}, ${month} ${day}, ${year} `;

  return (
    <div className="flex flex-col items-center justify-center py-8 gap-2">
      <figure>
        <img src="/src/assets/logo.png" alt="" />
      </figure>
      <p className="text-lg font-semibold text-gray-400">
        Jarnalism without fear and favour
      </p>
      <p className=" font-semibold text-gray-400">{formatedDate}</p>
    </div>
  );
};

export default Header;
