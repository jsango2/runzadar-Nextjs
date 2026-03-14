import React from "react";

import { getAllPostsWithSlug } from "../lib/api";

const Sitemap = () => {};

export const getServerSideProps = async ({ res }) => {
  const baseUrl = "https://www.runzadar.com";
  const staticPaths = ["/", "/blog", "/kalkulator", "/christmasrun"];
  let postEdges = [];

  try {
    const allPosts = await getAllPostsWithSlug();
    postEdges = allPosts?.edges || [];
  } catch (error) {
    console.error("Sitemap fallback: failed to load WordPress posts", error);
  }

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${postEdges
      .map((node) => {
        const slug = node?.node?.slug;
        if (!slug) {
          return "";
        }

        return `
            <url>
              <loc>${baseUrl}/posts/${slug}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>daily</changefreq>
              <priority>1.0</priority>
            </url>
          `;
      })
      .join("")}
      ${staticPaths
        .map(
          (path) => `
      <url>
      <loc>${baseUrl}${path}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>daily</changefreq>
      <priority>1.0</priority>
    </url>`
        )
        .join("")}
    </urlset>
  `;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;
