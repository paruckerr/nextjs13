"use client";

import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [token, setToken] = useState(null);

  useEffect(() => {
    setToken(123);
  }, [token]);

  return (
    <AuthContext.Provider value={{ token }}>{children}</AuthContext.Provider>
  );
}

export default function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
