import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router";
import LeftAside from "../components/sidebar/LeftAside";
import RightAside from "../components/sidebar/RightAside";

const HomeLayout = () => {
  return (
    <div className="">
      <header className="w-11/12 mx-auto">
        <Header />
      </header>
      <div className="w-11/12 mx-auto grid grid-cols-12 gap-3">
        <aside className="col-span-3 sticky top-0 h-fit">
          <LeftAside />
        </aside>
        <section className="main col-span-6">
          <Outlet></Outlet>
        </section>
        <aside className="col-span-3 sticky top-0 h-fit">
          <RightAside></RightAside>
        </aside>
      </div>
    </div>
  );
};

export default HomeLayout;
