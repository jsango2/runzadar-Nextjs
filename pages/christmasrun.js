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
      <Layout hasButtonSignUp={false}>
        <Head>
          <title>Škola trčanja Zadar</title>
          <meta
            property="og:title"
            content="Škola trčanja Zadar - Christmas Run 2024"
            key="title"
          />
          <link
            rel="canonical"
            href="https://www.runzadar.com/christmasrun"
            key="canonical"
          />

          <meta name="twitter:card" content="summary_large_image" />

          <meta
            property="og:url"
            content="https://www.runzadar.com/christmasrun"
          />

          <meta property="og:image" content="/xmas2019.png" />
          <meta
            name="description"
            content="Vesela božićna utrka u Zadru! 5km od Puntamike do Adventa. "
            key="desc"
          />
          <meta
            property="og:description"
            content="Vesela božićna utrka u Zadru! 5km od  Puntamike do Adventa. "
          />
          <meta
            property="twitter:description"
            content="Vesela božićna utrka u Zadru! 5km od Puntamike do Adventa."
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
