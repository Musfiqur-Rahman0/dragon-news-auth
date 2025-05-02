import React from "react";
import Marquee from "react-fast-marquee";

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
      <div className="flex items-center p-2 rounded-lg bg-gray-100 w-full mt-3">
        <button className="px-4 py-2 rounded-lg bg-red-400 text-white cursor-pointer">
          Latest
        </button>
        <Marquee pauseOnHover speed={40} className="flex items-center gap-5">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
            numquam dignissimos porro id voluptatibus nobis dolores possimus!
            Recusandae, beatae tempore?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
            numquam dignissimos porro id voluptatibus nobis dolores possimus!
            Recusandae, beatae tempore?
          </p>
        </Marquee>
      </div>
    </div>
  );
};

export default Header;
