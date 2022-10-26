'use client'

import { Suspense } from 'react';
import { NextUIProvider, CssBaseline } from '@nextui-org/react';
import AuthProvider from '../contexts/index';
import Loading from './loading'

export default function RootLayout({ children }) {
  const styles = CssBaseline.flush()

  return (
    <html lang="en">
      <head>
        <title>Mission Brasil</title>
        {styles}
      </head>
      <body>
        <NextUIProvider>
          <AuthProvider>
            <Suspense fallback={<Loading />}>{children}</Suspense>
          </AuthProvider>
        </NextUIProvider>
      </body>
    </html>
  );
}

