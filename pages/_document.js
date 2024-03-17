import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-[url('/bg2.jpg')] bg-cover bg-fixed bg-center">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
