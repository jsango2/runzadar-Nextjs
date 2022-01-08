import React from "react";
import Layout from "./../components/layout";
import Sunset from "../images/sunset.png";
import { getAllPostsForHome } from "../lib/api";

import KosaCrta from "../svg/kosacrta.svg";
import Button from "../components/button/button";
import styled from "styled-components";
import Link from "next/link";
import Header from "../components/header";
import Image from "next/image";
import Head from "next/head";

const Category = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  right: 20px;
  top: 55%;
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: 140%;
  text-align: right;
  text-transform: uppercase;
  color: #ffffff;
  align-items: center;
  padding: 7px 10px;
  z-index: 100;
`;
const Category2 = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  left: 40px;
  top: 90%;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 140%;
  text-align: right;
  text-transform: uppercase;
  color: #ffffff;
  align-items: center;
  padding: 7px 10px;
  z-index: 100;
`;

const Naslov = styled.h1`
  position: relative;
  font-style: italic;
  width: 700px;
  font-weight: 800;
  font-size: 72px;
  line-height: 120%;
  margin-top: 0;
  @media only screen and (max-width: 420px) {
    font-size: 54px;
  }
`;

const WrapNaslovButton = styled.div`
  position: absolute;
  width: 82%;
  height: auto;
  bottom: 8%;
  left: 10%;
  margin: 0 auto;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;

const Card = styled.div`
  position: relative;
  width: 400px;
  height: 350px;
  margin: 25px auto;
  border-radius: 39px;
  overflow: hidden;
  /* display: flex; */
  background: #fff4d8;
  cursor: pointer;
  @media only screen and (max-width: 420px) {
    width: 95%;
  }
  &:hover .coverPhoto2 {
    transform: scale(1.03);
  }
`;
const Card2 = styled.div`
  position: relative;
  width: 95%;
  height: 450px;
  margin: 25px auto;
  border-radius: 39px;
  cursor: pointer;
  display: flex;
  overflow: hidden;
  /* display: flex; */
  background: #fff4d8;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
  @media only screen and (max-width: 420px) {
    width: 95%;
  }
`;
const Text = styled.div`
  font-size: 15px;
  font-weight: normal;
  padding: 15px 0 0 20px;
  width: 95%;
  /* & figure {
    width: 80%;
  } */
`;
const Text2 = styled.div`
  font-size: 15px;
  font-weight: normal;
  padding: 15px 0 0 20px;
  width: 95%;
  color: black;
  /* & figure {
    width: 80%;
  } */

  @media only screen and (max-width: 420px) {
    width: 95%;
  }
`;
const Naslov2 = styled.div`
  color: black;
  width: 100%;
`;
const Naslov3 = styled.div`
  font-size: 31px;
  font-weight: normal;
  color: black;
  @media only screen and (max-width: 420px) {
    font-size: 22px;
  }
`;
const Foto = styled.div`
  height: 240px;
  overflow: hidden;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
const Foto2 = styled.div`
  width: 50%;
  height: 100%;
  /* border-radius: 39px; */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  @media only screen and (max-width: 600px) {
    width: 100%;
    height: 50%;
  }
`;
const ReadMore = styled.div`
  position: absolute;
  bottom: 20px;
  cursor: pointer;
  right: 30px;
  font-size: 12px;
  color: #383691;
`;
const ReadMore2 = styled.div`
  position: absolute;
  bottom: 20px;
  cursor: pointer;
  right: 30px;
  font-size: 12px;
  font-weight: 500;
  color: black;
`;

export default function blog({ allPosts: { edges }, preview }) {
  const posts = edges;
  return (
    <Layout>
      {/* <Header /> */}
      <Head>
        <title>Blog - Škola trčanja Zadar</title>
        <meta
          property="og:title"
          content="Blog - Škola trčanja Zadar"
          key="title"
        />
        <meta
          property="og:image"
          content="https://www.sportzone.hr/wp-content/uploads/2020/01/12806018_1686900528256019_7006629476788399817_n.jpg"
        />
      </Head>
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "375px",
          zIndex: "-1",
          borderRadius: "39px 39px 0 0 ",
          backgroundImage: `url(/sunset.png)`,
          backgroundPosition: "50% 50%",
          backgroundSize: "cover ",
        }}
      >
        {/* <Image
          src="/sunset.png"
          alt=""
          objectFit="cover"
          layout="fill"
          priority
        /> */}
        <WrapNaslovButton>
          <Naslov>
            <div className="blogPostCrta">
              <Image src="/kosacrta.svg" layout="fill" />
            </div>
            BLOG
          </Naslov>
        </WrapNaslovButton>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
          margin: "50px 0",
        }}
      >
        <Link
          style={{ textDecoration: "none", color: "#212121" }}
          href={`/posts/${posts[0].node.slug}`}
        >
          <Card2>
            <Category2 className={posts[0].node.categories.edges[0].node.name}>
              {posts[0].node.categories.edges[0].node.name}
            </Category2>

            <Foto2
              style={{
                backgroundImage: `url(${posts[0].node.featuredImage.node.sourceUrl})`,
              }}
            ></Foto2>
            <div className="wrapFeaturedBlogText">
              <Text2>
                <Naslov3>{posts[0].node.title}</Naslov3>
              </Text2>

              <Text2
                dangerouslySetInnerHTML={{
                  __html: [posts[0].node.content.slice(0, 250) + "..."],
                }}
              />
              <ReadMore2>PROČITAJ VIŠE</ReadMore2>
            </div>
          </Card2>
        </Link>
        {posts.slice(1, 50).map((post) => (
          <Link
            style={{ textDecoration: "none", color: "#212121" }}
            href={`/posts/${post.node.slug}`}
            key={post.node.slug}
          >
            <Card>
              <Category className={post.node.categories.edges[0].node.name}>
                {post.node.categories.edges[0].node.name}
              </Category>

              <Foto>
                <div
                  className="coverPhoto2"
                  style={{
                    backgroundImage: `url(${post.node.featuredImage.node.sourceUrl})`,
                  }}
                ></div>
              </Foto>
              <Text>
                <Naslov2>{post.node.title}</Naslov2>
              </Text>

              {/* <Text
                dangerouslySetInnerHTML={{
                  __html: [post.node.content.slice(0, 100) + "..."],
                }}
              /> */}
              <ReadMore>PROČITAJ VIŠE</ReadMore>
            </Card>
          </Link>
        ))}
      </div>
    </Layout>
  );
}

export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllPostsForHome(preview);
  return {
    props: { allPosts, preview },
  };
}
