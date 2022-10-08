import React from "react";
import { signIn } from "next-auth/react";

export default function Singup({ session }) {
  return (
    <>
      <h5>Sign In</h5>
      <button onClick={() => signIn()} type="submit">
        <i></i> Sign in with Github
      </button>
    </>
  );
}
