import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body className= 'palette-blue font-nunito-sans'>
          <Main />
          <script src={"/js/plugins.js"} />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;