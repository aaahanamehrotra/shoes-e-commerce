import React from "react";
import { useSession } from "next-auth/react";
import Navbar from "../components/Navbar";
import styles from "../styles/Profile.module.css";
import { signIn } from "next-auth/react";
import NavStyles from "../styles/Nav.module.css";
import SignInTo from "../styles/SignInTo.module.css";

function Profile() {
  const { data: session } = useSession();

  return (
    <>
      <Navbar session={session} />
      <h1 className="page-heading">Profile</h1>
      <div>
        {!session && (
          <div className={SignInTo.container}>
            <h1 className={SignInTo.large}>403</h1>
            <h2>Sign in to continue</h2>
            <button
              onClick={() => signIn()}
              type="submit"
              className={NavStyles.navbtn}
            >
              Sign in
            </button>
          </div>
        )}
        {session && (
          <div className={styles.profile}>
            <div className={styles.profilegrp}>
              <div className={styles.category}>Name</div>
              <div className={styles.value}>{session.user.name}</div>
            </div>
            <div className={styles.profilegrp}>
              <div className={styles.category}>Email</div>
              <div className={styles.value}>{session.user.email}</div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Profile;
