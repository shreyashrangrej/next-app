"use client";
import styles from './page.module.css'
import { useSession, signIn, signOut } from 'next-auth/react'
export default function Home() {
  const { data } = useSession()
  return (
    <div>
      {data?.user ? (
        <button onClick={() => signOut()}>Sign Out</button>
      ) : (
        <button onClick={() => signIn()}>Sign In</button>
      )}
      {data?.user?.email}
    </div>
  );
}
