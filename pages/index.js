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
