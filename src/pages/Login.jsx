import React, { use, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";
import useAuth from "../hook/useAuth";
import useInputValue from "../hook/useInputValue";

const Login = () => {
  const [email, setEmail] = useInputValue("");
  const [password, setPassword] = useInputValue("");

  const { user } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const { login } = useAuth();

  const handleLogin = (e) => {
    e.preventDefault();
    login(email, password);
    navigate(`${location.state ? location.state : "/"}`);
    console.log("login successfull");
  };
  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md">
      <h2 className="block text-gray-700 text-xl font-bold mb-6 text-center">
        Login to your account
      </h2>
      <form onSubmit={handleLogin}>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            value={email}
            onChange={setEmail}
            placeholder="Enter your email address"
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            value={password}
            onChange={setPassword}
            placeholder="Enter your password"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-black  cursor-pointer text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            type="submit"
          >
            Login
          </button>
        </div>
      </form>
      <div className="mt-4 text-center">
        <a
          className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
          href="#"
        >
          Forgot Password?
        </a>
      </div>
      <div className="mt-2 text-center">
        <p className="text-sm text-gray-600">
          Don't have an account?{" "}
          <Link
            to="/auth/register"
            className="font-bold text-blue-500 hover:text-blue-800"
            href="#"
          >
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
