import Layout from "@/components/layout";
import "@/styles/globals.css";
import "@/styles/typing.scss";
import Head from "next/head";
import "@/styles/fonts.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Johnny Web</title>
        <link rel="icon" href="/iconj.png" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
