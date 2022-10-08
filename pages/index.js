import { useSession, signIn, signOut } from "next-auth/react";
import Navbar from "/components/Navbar";
import Dashboard from "../components/dashboard";
import Singup from "../components/singup";

export default function Component() {
  const { data: session } = useSession();
  return (
    <>
      <Navbar session={session} />
      {/* {session ? <Dashboard session={session} /> : <Singup session={session} />} */}
    </>
  );
}
