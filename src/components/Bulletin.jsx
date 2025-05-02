import React from "react";
import Marquee from "react-fast-marquee";

const Bulletin = () => {
  return (
    <div className="my-5 flex items-center p-2 rounded-lg bg-gray-100 w-full mt-3">
      <button className="px-4 py-2 rounded-lg bg-red-400 text-white cursor-pointer">
        Latest
      </button>
      <Marquee pauseOnHover speed={40} className="flex items-center gap-5">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius numquam
          dignissimos porro id voluptatibus nobis dolores possimus! Recusandae,
          beatae tempore?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius numquam
          dignissimos porro id voluptatibus nobis dolores possimus! Recusandae,
          beatae tempore?
        </p>
      </Marquee>
    </div>
  );
};

export default Bulletin;
