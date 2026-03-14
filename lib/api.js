const API_URL = process.env.WORDPRESS_API_URL;
const FETCH_TIMEOUT_MS = Number(process.env.WORDPRESS_FETCH_TIMEOUT_MS || 10000);
const FETCH_RETRIES = Number(process.env.WORDPRESS_FETCH_RETRIES || 2);
const RETRYABLE_STATUS_CODES = new Set([408, 429, 500, 502, 503, 504]);

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function shouldRetryStatus(status) {
  return RETRYABLE_STATUS_CODES.has(status);
}

async function fetchWithTimeout(url, options, timeoutMs) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);

  try {
    return await fetch(url, {
      ...options,
      signal: controller.signal,
    });
  } finally {
    clearTimeout(timeout);
  }
}

async function fetchAPI(query, { variables } = {}) {
  if (!API_URL) {
    throw new Error("Missing WORDPRESS_API_URL environment variable");
  }

  const headers = { "Content-Type": "application/json" };

  if (process.env.WORDPRESS_AUTH_REFRESH_TOKEN) {
    headers[
      "Authorization"
    ] = `Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`;
  }

  let lastError;

  for (let attempt = 0; attempt <= FETCH_RETRIES; attempt += 1) {
    try {
      const res = await fetchWithTimeout(
        API_URL,
        {
          method: "POST",
          headers,
          body: JSON.stringify({
            query,
            variables,
          }),
        },
        FETCH_TIMEOUT_MS
      );

      if (!res.ok) {
        const httpError = new Error(
          `WordPress API request failed with status ${res.status}`
        );
        httpError.status = res.status;
        throw httpError;
      }

      const json = await res.json();

      if (json.errors) {
        const graphQLError = new Error("WordPress GraphQL returned errors");
        graphQLError.graphQLErrors = json.errors;
        throw graphQLError;
      }

      return json.data;
    } catch (error) {
      lastError = error;

      const canRetry =
        attempt < FETCH_RETRIES &&
        (error?.name === "AbortError" ||
          error instanceof TypeError ||
          shouldRetryStatus(error?.status));

      if (canRetry) {
        await sleep(300 * (attempt + 1));
        continue;
      }

      if (error?.graphQLErrors) {
        console.error(error.graphQLErrors);
      }

      throw error;
    }
  }

  throw lastError || new Error("Failed to fetch API");
}

export async function getPreviewPost(id, idType = "DATABASE_ID") {
  const data = await fetchAPI(
    `
    query PreviewPost($id: ID!, $idType: PostIdType!) {
      post(id: $id, idType: $idType) {
        databaseId
        slug
        status
      }
    }`,
    {
      variables: { id, idType },
    }
  );
  return data.post;
}

// export async function getCalendarData() {
//   const data = await fetchAPI(
//     `
//     query AllEvents{
//       events {
//         edges {
//           node {
//             date
//             endDate
//             startDate
//             startDates
//             duration
//             allDay
//           }
//         }
//       }
//     }
//     `
//   );
//   return data.events;
// }

export async function getAllPostsWithSlug() {
  const data = await fetchAPI(`
    {
      posts(first: 10000) {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);
  return data?.posts;
}

export async function getAllPostsForHome(preview) {
  const data = await fetchAPI(
    `
    query AllPosts {
      posts(first: 20, where: { orderby: { field: DATE, order: DESC } }) {
        edges {
          node {
            seoKeywords{
              seoKeywords
            }
            seoDescription {
              seoDescription
            }
            title
            excerpt
            id
            slug
            date
            content
            categories {
              edges {
                node {
                  name
                }
              }
            }
            featuredImage {
              node {
                sourceUrl
              }
            }
            author {
              node {
                name
                firstName
                lastName
                avatar {
                  url
                }
              }
            }
          }
        }
      }
    }
  `,
    {
      variables: {
        onlyEnabled: !preview,
        preview,
      },
    }
  );

  return data?.posts;
}

export async function getPostAndMorePosts(slug, preview, previewData) {
  const postPreview = preview && previewData?.post;
  // The slug may be the id of an unpublished post
  const isId = Number.isInteger(Number(slug));
  const isSamePost = isId
    ? Number(slug) === postPreview.id
    : slug === postPreview.slug;
  const isDraft = isSamePost && postPreview?.status === "draft";
  const isRevision = isSamePost && postPreview?.status === "publish";
  const data = await fetchAPI(
    `
    fragment AuthorFields on User {
      name
      firstName
      lastName
      avatar {
        url
      }
    }
    fragment PostFields on Post {
      seoKeywords{
        seoKeywords
      }
      seoDescription {
        seoDescription
      }
      title
      excerpt
      slug
      date
      featuredImage {
        node {
          sourceUrl
        }
      }
      author {
        node {
          ...AuthorFields
        }
      }
      id
      categories {
        edges {
          node {
            name
          }
        }
      }
      tags {
        edges {
          node {
            name
          }
        }
      }
    }
    query PostBySlug($id: ID!, $idType: PostIdType!) {
      post(id: $id, idType: $idType) {
        ...PostFields
        content
        ${
          // Only some of the fields of a revision are considered as there are some inconsistencies
          isRevision
            ? `
        revisions(first: 1, where: { orderby: { field: MODIFIED, order: DESC } }) {
          edges {
            node {
              title
              excerpt
              content
              author {
                node {
                  ...AuthorFields
                }
              }
            }
          }
        }
        `
            : ""
        }
      }
      posts(first: 3, where: { orderby: { field: DATE, order: DESC } }) {
        edges {
          node {
            ...PostFields
          }
        }
      }
    }
  `,
    {
      variables: {
        id: isDraft ? postPreview.id : slug,
        idType: isDraft ? "DATABASE_ID" : "SLUG",
      },
    }
  );

  // Draft posts may not have an slug
  if (isDraft) data.post.slug = postPreview.id;
  // Apply a revision (changes in a published post)
  if (isRevision && data.post.revisions) {
    const revision = data.post.revisions.edges[0]?.node;

    if (revision) Object.assign(data.post, revision);
    delete data.post.revisions;
  }

  // Filter out the main post
  data.posts.edges = data.posts.edges.filter(({ node }) => node.slug !== slug);
  // If there are still 3 posts, remove the last one
  if (data.posts.edges.length > 2) data.posts.edges.pop();

  return data;
}
