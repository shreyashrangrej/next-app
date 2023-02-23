"use client";
import './globals.css'
import { SessionProvider } from 'next-auth/react'

import { ChakraProvider } from '@chakra-ui/react'
import { CacheProvider } from '@chakra-ui/next-js'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <SessionProvider>
        <head />
        <body>
          <CacheProvider>
            <ChakraProvider>{children}</ChakraProvider>
          </CacheProvider>
        </body>
      </SessionProvider>
    </html>
  )
}
