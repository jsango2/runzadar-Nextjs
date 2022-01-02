import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Layout from "../../components/layout";
import { getAllPostsWithSlug, getPostAndMorePosts } from "../../lib/api";
import PostTitle from "../../components/post-title";
import Head from "next/head";
import Image from "next/image";
import {
  WrapNaslovButton,
  Naslov,
  WrapText,
  Overlay,
  Text,
} from "../../styles/postStyles";

export default function Post({ post, posts, preview }) {
  console.log(post);
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
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
  }, []);

  return (
    <Layout>
      <Head>
        <title>{post.title}</title>
        <meta property="og:title" content={post.title} key="title" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.excerpt} />
        <meta
          name="twitter:image"
          content={post.featuredImage.node.sourceUrl}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="description" content={post.excerpt} key="desc" />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:url" content="https://www.runzadar.com" />
        <meta property="og:image" content={post.featuredImage.node.sourceUrl} />
      </Head>
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
