import React, { use } from "react";
import { FaUser } from "react-icons/fa";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../context/AuthContext";
import useAuth from "../hook/useAuth";

const Navbar = () => {
  const { user, setUser } = use(AuthContext);
  const { logout } = useAuth();

  // const handleLogout = () => {
  //   logout();
  //   console.log("user loged out!");
  // };
  // console.log(user);
  return (
    <div className="flex justify-between items-center">
      <div className="">{user ? user.email : ""}</div>
      <div className="nav flex gap-5 text-accent">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="login-btn flex items-center gap-5">
        <div className="flex items-center justify-center p-2 cursor-pointer bg-gray-200 rounded-full">
          <FaUser size={25} />
        </div>

        {user ? (
          <button
            onClick={logout}
            className="cursor-pointer  px-5 py-2 bg-black text-white rounded-lg"
          >
            Logout
          </button>
        ) : (
          <Link
            to={"/auth/login"}
            className="cursor-pointer  px-5 py-2 bg-black text-white rounded-lg"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
