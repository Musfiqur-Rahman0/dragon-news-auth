import React from "react";
import { FaUser } from "react-icons/fa";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center">
      <div className=""></div>
      <div className="nav flex gap-5 text-accent">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="login-btn flex items-center gap-5">
        <div className="flex items-center justify-center p-2 cursor-pointer bg-gray-200 rounded-full">
          <FaUser size={25} />
        </div>

        <button className="btn btn-primary  px-3 py-2 bg-black text-white rounded-lg">
          Login
        </button>
      </div>
    </div>
  );
};

export default Navbar;
