import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div className=" bg-gray-50 ">
      <header className="w-11/12 mx-auto py-5">
        <Navbar />
      </header>
      <div className="min-h-[calc(100vh-82px)] flex items-center justify-center">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
