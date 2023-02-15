import styles from './page.module.css'
import { useSession, signIn, signOut } from 'next-auth/react'
export default function Home() {
  return (
    <h1>Hello</h1>
  );
}
