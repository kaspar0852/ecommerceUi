import React, { createContext, useState, useContext } from "react";

const authContext = createContext(null);

export const useAuth = () => {
  return useContext(authContext);
};

export const AuthProvider = ({ children }: any) => {
  const [authTokens, setAuthTokens] = useState(() => {
    const tokenData = localStorage.getItem("authToken");
    return tokenData ? JSON.parse(tokenData) : null;
  });

  const login = (token: string) => {
    setAuthTokens(token);
    console.log("Token is being set in local storage");
    localStorage.setItem("authToken", JSON.stringify(token));
  };

  const logout = () => {
    setAuthTokens(null);
    localStorage.removeItem("authTokens");
  };

  return (
    <authContext.Provider value={{ authTokens, login, logout }}>
      {children}
    </authContext.Provider>
  );
};
