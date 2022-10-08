import { SessionProvider } from "next-auth/react";
import "../styles/index.css";
import Navbar from "../components/Navbar";
import { userAgent } from "next/server";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}
