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
import Partneri from "../components/partneri/partneri";

export default function IndexPage({ allPosts: { edges }, preview }) {
  // console.log(
  //   edges.map((post) => {
  //     let datumPosta = post.date;
  //     function formatDate(date) {
  //       var d = new Date(date),
  //         month = "" + (d.getMonth() + 1),
  //         day = "" + d.getDate(),
  //         year = d.getFullYear();

  //       if (month.length < 2) month = "0" + month;
  //       if (day.length < 2) day = "0" + day;

  //       return [day, month, year].join(".");
  //     }
  //     return formatDate(datumPosta);
  //   })
  // );
  return (
    <ParallaxProvider>
      <Layout>
        <Head>
          <title>Škola trčanja Zadar</title>
          <meta property="og:title" content="Škola trčanja Zadar" key="title" />
          <meta
            property="og:image"
            content="https://www.sportzone.hr/wp-content/uploads/2020/01/12806018_1686900528256019_7006629476788399817_n.jpg"
          />
          <meta
            property="og:description"
            content="Prvi rekreativni trkački klub u Zadru. Od početnika do naprednih trkača. "
          />
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
