import React from "react";
import {
  WrapAll,
  Naslov,
  Naslov2,
  WrapTestimonial,
  Card,
  Foto,
  Text,
  Button,
  ReadMore,
} from "./style.js";

import CrteCesta from "../../svg/linijaForm.svg";
import Livo from "../../svg/STRELICALIVO.svg";
import Desno from "../../svg/STRELICADESNO.svg";
import Slider from "react-slick";
import Link from "next/link";
import Image from "next/image";
// import SEO from "../seo.js"
// import "slick-carousel/slick/slick.css"
// import "slick-carousel/slick/slick-theme.css"

const NextArrow = ({ currentSlide, slideCount, ...props }) => (
  <div {...props}>
    <Desno />
  </div>
);
const PrevArrow = ({ currentSlide, slideCount, ...props }) => (
  <div {...props}>
    <Livo />
  </div>
);

const BlogFront = ({ posts = [] }) => {
  const postList = Array.isArray(posts)
    ? posts.filter((post) => post?.node?.slug)
    : [];

  const getCategoryName = (postNode) =>
    postNode?.categories?.edges?.[0]?.node?.name || "BLOG";

  const getImage = (postNode) =>
    postNode?.featuredImage?.node?.sourceUrl || "/sunset.png";

  const settings = {
    // arrows: true,
    dots: true,
    infinite: true,
    // fade: true,
    speed: 1000,
    lazyLoad: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    className: "testimonialSlider",
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          dots: true,
          fade: false,
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          lazyLoad: true,
          arrows: true,
          speed: 500,
        },
      },
      {
        breakpoint: 900,
        settings: {
          dots: true,
          fade: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          lazyLoad: true,
          arrows: false,
          speed: 500,
        },
      },
    ],
  };
  return (
    <WrapAll>
      {/* <SEO /> */}
      <CrteCesta
        className="crteBlogFront"
        style={{
          position: "absolute",
          top: "60px",
          transform: "rotate(180deg)",
        }}
      />
      <Naslov>BLOG & NOVOSTI</Naslov>
      {postList.length > 0 ? (
        <Slider {...settings}>
          {postList.map((post) => (
            <WrapTestimonial key={post?.node?.id || post.node.slug}>
              <Link
                style={{ textDecoration: "none", color: "#212121" }}
                href={`/posts/${post.node.slug}`}
              >
                <Card>
                  <Button className={getCategoryName(post.node)}>
                    {getCategoryName(post.node)}
                  </Button>
                  <Foto>
                    <div className="placeholder">
                      <Image
                        src="/runzadar.svg"
                        width={100}
                        height={100}
                        objectFit="contain"
                      />
                    </div>
                    <div
                      className="coverPhoto2"
                      style={{
                        backgroundImage: `url(${getImage(post.node)})`,
                      }}
                    ></div>
                  </Foto>

                  <Text>
                    <Naslov2>{post?.node?.title || "Blog post"}</Naslov2>
                  </Text>

                  {/* <Text
                    dangerouslySetInnerHTML={{
                      __html: [post.node.excerpt.slice(0, 100) + "..."],
                    }}
                  /> */}
                  <ReadMore>PROČITAJ VIŠE </ReadMore>
                </Card>
              </Link>
            </WrapTestimonial>
          ))}
        </Slider>
      ) : (
        <div style={{ marginTop: "2rem" }}>Trenutno nema blog objava.</div>
      )}
      {/* <Link href="/blog">
        <div
          style={{
            textAlign: "right",
            margin: "30px 150px 0 0",
            cursor: "pointer",
          }}
          className="linkBack"
        >
          Pročitaj i ostale blogove
        </div>
      </Link> */}
    </WrapAll>
  );
};

export default BlogFront;
