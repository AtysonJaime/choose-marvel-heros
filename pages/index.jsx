import React from "react";
import Head from "next/head";
import Header from "../src/components/Header";
import Content from "../src/components/Content";

export default function Home() {
  return (
    <>
      <Head>
        <title>Choose Marvel Heros</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico"></link>
      </Head>
      <Header />
      <Content />
    </>
  );
}
