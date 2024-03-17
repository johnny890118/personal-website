import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-[url('/bg3.jpg')] bg-cover bg-fixed bg-center xl:bg-[url('/bg2.jpg')]">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
