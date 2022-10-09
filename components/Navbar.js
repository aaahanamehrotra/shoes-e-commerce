import Link from "next/link";
import styles from "../styles/Nav.module.css";
import React from "react";
import { signIn } from "next-auth/react";
import { signOut } from "next-auth/react";
import Dashboard from "./dashboard";
import Singup from "./singup";
import { useState } from "react";

export default function Navbar({ session }) {
  const [active, setActive] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.left}>Lorem Ipsum</div>
      <div className={styles.right} style={active ? { left: "0" } : {}}>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/products">
          <a>Products</a>
        </Link>
        <Link href="/profile">
          <a>Profile</a>
        </Link>
        {session ? (
          <button onClick={() => signOut()} className={styles.navbtn}>
            Sign out
          </button>
        ) : (
          <button
            onClick={() => signIn()}
            type="submit"
            className={styles.navbtn}
          >
            Sign in
          </button>
        )}
      </div>
      <div className={styles.hamburger} onClick={() => setActive(!active)}>
        <span className={styles.line}></span>
        <span className={styles.line}></span>
        <span className={styles.line}></span>
      </div>
    </nav>
  );
}
