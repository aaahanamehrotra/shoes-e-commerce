import { SessionProvider } from "next-auth/react";
import "../styles/index.css";
import Navbar from "../components/Navbar";
import { userAgent } from "next/server";
import Head from "next/head";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <Head>
        <title>Lorem Ipsum</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" type="image/x-icon" href="/images/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </SessionProvider>
  );
}
