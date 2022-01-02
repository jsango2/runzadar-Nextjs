// import React from "react";
// import { graphql } from "gatsby";
import Layout from "./../components/layout";
// import Seo from "../components/seo";
import Head from "next/head";
import Hero from "../components/hero/hero";
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

export default function IndexPage({ allPosts: { edges }, preview }) {
  // console.log(edges.map((post) => post.node.date));
  return (
    <ParallaxProvider>
      <Layout>
        <Head>
          <title>Škola trčanja Zadar</title>
          <meta property="og:title" content="Škola trčanja Zadar" key="title" />
          <link
            rel="canonical"
            href="https://www.runzadar.com"
            key="canonical"
          />
          <meta name="twitter:title" content="Škola trčanja Zadar" />
          <meta
            name="twitter:description"
            content=" Prvi rekreativni trkački klub u Zadru. Od početnika do naprednih trkača."
          />
          <meta
            name="twitter:image"
            content="https://www.sportzone.hr/wp-content/uploads/2020/01/12806018_1686900528256019_7006629476788399817_n.jpg"
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="description"
            content="Prvi rekreativni trkački klub u Zadru. Od početnika do naprednih trkača. "
            key="desc"
          />
          <meta
            property="og:description"
            content="Prvi rekreativni trkački klub u Zadru. Od početnika do naprednih trkača. "
          />
          <meta property="og:url" content="https://www.runzadar.com" />
          <meta
            property="og:image"
            content="https://www.sportzone.hr/wp-content/uploads/2020/01/12806018_1686900528256019_7006629476788399817_n.jpg"
          />
          <meta name="robots" content="index, follow" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta charSet="UTF-8" />
        </Head>
        <Hero />
        <ZastoSkola />
        <PripremiSe />
        <Treneri />
        <Tartan />
        <Prijava />
        <Testimonial />
        <Blast />
        {/* <Ponosni />
        <Utrke /> */}
        <NightRun />
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
