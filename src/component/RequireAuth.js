import React, { useContext } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

function RequiredAuth() {
  const { auth } = useContext(AuthContext);
  let location = useLocation();

  // return auth ? (
  //   <Outlet replace />
  // ) : (
  //   <Navigate to="/loginpage" state={{ from: location }} replace />
  // );

  if (!auth.username) {
    return <Navigate to="/loginpage" state={{ from: location }} replace />

  } else {
    return <Outlet replace />
  }
}

export default RequiredAuth;
