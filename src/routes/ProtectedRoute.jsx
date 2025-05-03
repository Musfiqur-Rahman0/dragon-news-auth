import React, { use } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate, useLocation } from "react-router";
import Loader from "../components/Loader";

const ProtectedRoute = ({ children }) => {
  const { isLoading, user } = use(AuthContext);

  const location = useLocation();
  if (isLoading) {
    return <Loader />;
  }
  if (user) {
    return children;
  }

  console.log(isLoading, user);
  return <Navigate state={location.pathname} to="/auth/login" />;
};

export default ProtectedRoute;
