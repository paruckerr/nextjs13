import React from "react";

import { AuthProvider } from "./auth";

export default function AppProvider({ children }) {
  return <AuthProvider>{children}</AuthProvider>;
}
