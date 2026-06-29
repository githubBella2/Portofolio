import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="id">
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Portofolio Margareta Kristiana, Fullstack Developer dengan keahlian Laravel, React, MySQL, dan Ionic, yang sedang memperdalam Artificial Intelligence. Terbuka untuk peran AI Engineer, Software Engineer, dan Web Developer."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="bg-sand">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}