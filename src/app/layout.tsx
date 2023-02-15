"use client";
import './globals.css'
import { SessionProvider } from 'next-auth/react'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <SessionProvider>
        <head />
        <body>{children}</body>
      </SessionProvider>
    </html>
  )
}
