import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router";

const HomeLayout = () => {
  return (
    <div className="">
      <div className="w-11/12 mx-auto">
        <Header />
      </div>
      <div className="w-11/12 mx-auto ">
        <Outlet />
      </div>
    </div>
  );
};

export default HomeLayout;
