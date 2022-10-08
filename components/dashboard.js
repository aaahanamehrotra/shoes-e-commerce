import React from "react";
import Image from "next/image";
import { signOut } from "next-auth/react";

export default function Dashboard({ session }) {
  return (
    <>
      <h5 className="name">{session.user.name}</h5>
      <p className="mail">{session.user.email}</p>
      <button onClick={() => signOut()}>Sign out</button>
    </>
  );
}
