import Head from "next/head";

const SEO = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initialScale=1.0" />
      <meta name="google" content="notranslate" />
      <meta name="description" content="Chanmax Technologys" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap"
        rel="stylesheet"
      />
      <link rel="icon" href="/images/favicon.png" />
    </Head>
  );
};

export default SEO;
