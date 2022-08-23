import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Layout from "../../components/layout";
import { getAllPostsWithSlug, getPostAndMorePosts } from "../../lib/api backup";
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

export default function Post({ post }) {
  return <div>{post.excerpt}</div>;
}

///------//

export const getStaticProps = async ({
  params,
  preview = false,
  previewData,
}) => {
  const data = await getPostAndMorePosts(params?.slug, preview, previewData);
  return {
    props: {
      post: data.post,
      // posts: data.posts,
    },
    // revalidate: 10,
  };
};

export const getStaticPaths = async () => {
  const allPosts = await getAllPostsWithSlug();

  return {
    paths: allPosts.edges.map(({ node }) => `/posts/${node.slug}`) || [],
    fallback: true,
  };
};
