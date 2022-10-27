"use client";

import { Suspense } from "react";
import AuthProvider from "../contexts/index";
import Loading from "./loading";

import "../styles/globals.css";
import "../styles/output.css";

export default function RootLayout({ children }) {
  return (
    <html className="h-full bg-gray-50" lang="en">
      <head>
        <title>Mission Brasil</title>
      </head>
      <body className="h-full">
        <AuthProvider>
          <Suspense fallback={<Loading />}>{children}</Suspense>
        </AuthProvider>
      </body>
    </html>
  );
}
