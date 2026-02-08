import React, { use } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Navigate, useLocation } from "react-router";

const Routes = ({ children }) => {
  const { user, loading } = use(AuthContext);
  const location = useLocation();
  //   console.log(location.pathname);
  if (loading) {
    return <span className="loading loading-ring loading-md"></span>;
  }
  if (!user) {
    return <Navigate to="/signin" state={location.pathname}></Navigate>;
  }
  return children;
};

export default Routes;
