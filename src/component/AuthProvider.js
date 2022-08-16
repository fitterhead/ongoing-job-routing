import React from "react";
// import { createContext } from "react";
import { useState } from "react";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    email: null,
    username: null,
    isLoggedIn: "false",
  });
  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
