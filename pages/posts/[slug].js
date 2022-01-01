import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Layout from "../../components/layout";
import { getAllPostsWithSlug, getPostAndMorePosts } from "../../lib/api";
import PostTitle from "../../components/post-title";
import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";

// import { HeroWrap } from "./style.js"
const WrapAll = styled.div`
  position: relative;
  width: 100%;
  height: 625px;
  padding-top: 50px;
  z-index: 3;
  overflow: hidden;
  background-color: #151520;
`;

const Naslov = styled.div`
  position: relative;
  font-style: italic;
  width: 700px;
  font-weight: 800;
  font-size: 72px;
  line-height: 120%;
  margin-top: 0;
  @media only screen and (max-width: 430px) {
    font-size: 36px;
    width: 90%;
  }
`;

const WrapNaslovButton = styled.div`
  position: absolute;
  width: 868px;
  height: auto;
  bottom: 8%;
  /* left: 16%; */
  margin: 0 auto;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  @media only screen and (max-width: 430px) {
    font-size: 36px;
    width: 90%;
    margin: 0 auto 0 30px;
  }
`;
const WrapText = styled.div`
  margin: 20px auto 0 auto;
  width: 868px;
  font-size: 21px;
  @media only screen and (max-width: 430px) {
    width: 90%;
  }
`;

const Overlay = styled.div`
  position: absolute;
  z-index: 0;
  width: 100%;
  height: 100%;
  display: flex;
  background-color: rgb(0 0 0 / 20%);
`;
const Text = styled.div`
  font-size: 21px;
  line-height: 142.5%;
  & img {
    margin: 0 auto;
    width: 100%;
    object-fit: cover;
  }
  & p {
    margin: 1.5rem 0;
  }
  @media only screen and (max-width: 430px) {
    font-size: 16px;
  }
`;

export default function Post({ post, posts, preview }) {
  const router = useRouter();
  const morePosts = posts?.edges;

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  // const post = data.wpgraphql.post;
  const [datum, setDatum] = useState("-");
  useEffect(() => {
    let datumPosta = post.date;
    function formatDate(date) {
      var d = new Date(date),
        month = "" + (d.getMonth() + 1),
        day = "" + d.getDate(),
        year = d.getFullYear();

      if (month.length < 2) month = "0" + month;
      if (day.length < 2) day = "0" + day;

      return [day, month, year].join(".");
    }
    setDatum(formatDate(datumPosta));
  }, [post.date]);
  return (
    <Layout>
      {router.isFallback ? (
        <PostTitle>Loading…</PostTitle>
      ) : (
        <>
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "450px",
              backgroundImage: `url(${post.featuredImage.node.sourceUrl})`,
              backgroundPosition: "50% 50%",
              backgroundSize: "cover ",
              zIndex: "1",
              borderRadius: "39px 39px 0 0 ",
              display: "flex",
              justifyContent: "center ",
            }}
          >
            <Overlay />{" "}
            <WrapNaslovButton>
              <Naslov>
                <div className="blogCrta">
                  <Image
                    src="/kosacrta.svg"
                    width={65}
                    height={65}
                    // objectFit="cover"
                  />
                </div>
                {post.title}{" "}
              </Naslov>
            </WrapNaslovButton>
          </div>
          <WrapText>
            <div style={{ marginTop: "2rem", display: "flex" }}>
              {post.tags.edges.map((tag) => (
                <div
                  key={tag.node.name}
                  style={{ margin: "4px", color: "grey" }}
                >
                  #{tag.node.name}
                </div>
              ))}
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div style={{ fontSize: "0.8rem" }}>Autor: RunZadar.com</div>
              <div style={{ fontSize: "0.8rem", marginRight: "1rem" }}>
                {datum}
              </div>
            </div>
            <div />
            <div
              style={{
                margin: "60px auto 0 auto",
                width: "100%",
                fontSize: "21px",
              }}
            >
              <Text dangerouslySetInnerHTML={{ __html: post.content }}></Text>
            </div>
          </WrapText>
          {/* 
          <SectionSeparator />
          {morePosts.length > 0 && <MoreStories posts={morePosts} />} */}
        </>
      )}
    </Layout>
  );
}

export async function getStaticProps({ params, preview = false, previewData }) {
  const data = await getPostAndMorePosts(params.slug, preview, previewData);

  return {
    props: {
      preview,
      post: data.post,
      posts: data.posts,
    },
  };
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug();

  return {
    paths: allPosts.edges.map(({ node }) => `/posts/${node.slug}`) || [],
    fallback: true,
  };
}
