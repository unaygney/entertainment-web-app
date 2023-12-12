import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const user = {
    name: "guney",
  };

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const auth = useContext(AuthContext);

  if (!auth) {
    throw new Error("There is no AuthContext Data!");
  }

  return auth;
};
