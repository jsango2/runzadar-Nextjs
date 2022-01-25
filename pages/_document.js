import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(
      (App) => (props) => sheet.collectStyles(<App {...props} />)
    );
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css"
          ></link>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css"
          ></link>
          <link
            href="https://fonts.googleapis.com/css2?family=Bangers&family=Montserrat:wght@400;500;600;700;900&display=swap"
            rel="stylesheet"
          ></link>
        </Head>
        <title>Your site title</title>
        {this.props.styleTags}
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
