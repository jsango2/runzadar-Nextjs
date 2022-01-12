import Head from "next/head";
import { CMS_NAME, HOME_OG_IMAGE_URL } from "../lib/constants";

export default function Meta() {
  return (
    <Head>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/runzadar32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/runzadar32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/runzadar32x32.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/favicon/safari-pinned-tab.svg"
        color="#000000"
      />
      <link rel="shortcut icon" href="/favicon/runzadar32x32.ico" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#000" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />

      <link rel="canonical" href="https://www.runzadar.com" key="canonical" />
      {/* <meta
        name="twitter:description"
        content=" Prvi rekreativni trkački klub u Zadru. Od početnika do naprednih trkača."
      /> */}
      {/* <meta
        name="twitter:image"
        content="https://www.sportzone.hr/wp-content/uploads/2020/01/12806018_1686900528256019_7006629476788399817_n.jpg"
      /> */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="description"
        content="Prvi rekreativni trkački klub u Zadru. Od početnika do naprednih trkača. "
        key="desc"
      />
      {/* <meta
        property="og:description"
        content="Prvi rekreativni trkački klub u Zadru. Od početnika do naprednih trkača. "
      /> */}
      <meta property="og:url" content="https://www.runzadar.com" />
      {/* <meta
        property="og:image"
        content="https://www.sportzone.hr/wp-content/uploads/2020/01/12806018_1686900528256019_7006629476788399817_n.jpg"
      /> */}
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="UTF-8" />
      <meta property="og:type" content="website" />
    </Head>
  );
}
