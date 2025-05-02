import React, { useState } from "react";
import { Link } from "react-router";
import useInputValue from "../hook/useInputValue";

const Register = () => {
  const [name, setName] = useInputValue("");
  const [email, setEmail] = useInputValue("");
  const [password, setPassword] = useInputValue("");
  const [photoURL, setPhotoURL] = useInputValue("");
  const [error, setError] = useState({
    nameError: "",
    emailError: "",
    urlError: "",
  });

  const handleSingInForm = (e) => {
    e.preventDefault();
    console.log("form submited!!");
  };

  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md">
      <h2 className="block text-gray-700 text-xl font-bold mb-6 text-center">
        Register your account
      </h2>
      <form onSubmit={handleSingInForm}>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Your Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            value={name}
            onChange={setName}
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="photo"
          >
            Photo URL
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="photo"
            type="url"
            value={photoURL}
            onChange={setPhotoURL}
            placeholder="Enter your photo URL"
          />
        </div>
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
        <div className="mb-6 flex items-center">
          <input type="checkbox" className="mr-2 leading-tight" id="terms" />
          <label className="text-sm" htmlFor="terms">
            Accept Term & Conditions
          </label>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            type="submit"
          >
            Register
          </button>
        </div>
      </form>
      <div className="mt-2 text-center">
        <p className="text-sm text-gray-600">
          Already have an account?{" "}
          <Link
            to="/auth/login"
            className="font-bold text-blue-500 hover:text-blue-800"
            href="#"
          >
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
