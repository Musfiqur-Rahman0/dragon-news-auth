import React from "react";
import Header from "../components/Header";
import { Outlet, useLoaderData } from "react-router";
import LeftAside from "../components/sidebar/LeftAside";
import RightAside from "../components/sidebar/RightAside";
import Navbar from "../components/Navbar";
import Bulletin from "../components/Bulletin";

const HomeLayout = () => {
  return (
    <div className="">
      <header className="w-11/12 mx-auto ">
        <Header />
        <Bulletin />
        <Navbar />
      </header>
      <div className="w-11/12 mx-auto grid grid-cols-12 gap-3 mt-10">
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
