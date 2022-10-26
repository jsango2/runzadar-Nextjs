// import React from "react";
// import { graphql } from "gatsby";
import Layout from "./../components/layout";
// import Seo from "../components/seo";
import Head from "next/head";
import ZastoSkola from "../components/zastoSkola/ZastoSkola";
import PripremiSe from "../components/pripremise/pripremise";
import Treneri from "../components/treneri/treneri";
import Tartan from "../components/tartan/tartan";
import { ParallaxProvider } from "react-scroll-parallax";
import Prijava from "../components/prijava/prijava";
import Testimonial from "../components/testimonial/testimonial";
import Blast from "../components/blast/blast";
// import Ponosni from "../components/ponosni/ponosni";
// import Utrke from "../components/utrke/parallax";
import BlogFront from "../components/blog/blogFront";
import NightRun from "../components/NightRun/nightrun";
import { getAllPostsForHome } from "../lib/api";
import Partneri from "../components/partneri/partneri";
import HeroChristmas from "../components/heroChristmas/heroChristmas";
import GalleryXmas from "../components/galleryXmas";
import InfoXmas from "../components/InfoXmas";

export default function IndexPage({ allPosts: { edges }, preview }) {
  return (
    <ParallaxProvider>
      <Layout>
        <Head>
          <title>Škola trčanja Zadar</title>
          <meta
            property="og:title"
            content="Škola trčanja Zadar - Christmas Run 2022"
            key="title"
          />
          <link
            rel="canonical"
            href="https://www.runzadar.com"
            key="canonical"
          />

          <meta name="twitter:card" content="summary_large_image" />

          <meta property="og:url" content="https://www.runzadar.com" />

          <meta
            property="og:image"
            content="https://www.sportzone.hr/wp-content/uploads/2020/01/12806018_1686900528256019_7006629476788399817_n.jpg"
          />
          <meta
            name="description"
            content="Naj veselija utrka u gradu! Vidimo se na Zadar Christmas Run-u! "
            key="desc"
          />
          <meta
            property="og:description"
            content="Naj veselija utrka u gradu! Vidimo se na Zadar Christmas Run-u! "
          />
          <meta
            property="twitter:description"
            content="Naj veselija utrka u gradu! Vidimo se na Zadar Christmas Run-u! "
          />
        </Head>
        <HeroChristmas />
        {/* <ZastoSkola />
        <PripremiSe />
        <Treneri />
        <Tartan />
        <Prijava />
        <Testimonial />
        <Blast /> */}
        {/* <Ponosni />
        <Utrke /> */}
        {/* <NightRun /> */}
        <InfoXmas />
        <GalleryXmas />
        <Partneri />
        <BlogFront posts={edges} />
      </Layout>
    </ParallaxProvider>
  );
}

export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllPostsForHome(preview);
  return {
    props: { allPosts, preview },
  };
}
