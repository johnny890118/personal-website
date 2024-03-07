import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-[url('/bg1.jpg')] bg-fixed bg-center">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
