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

const BlogFront = (posts) => {
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
        breakpoint: 600,
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
        style={{
          position: "absolute",
          top: "60px",
          transform: "rotate(180deg)",
        }}
      />
      <Naslov>BLOG & NOVOSTI</Naslov>
      <Slider {...settings}>
        {posts.posts.map((post) => (
          <WrapTestimonial key={post.node.id}>
            <Link
              style={{ textDecoration: "none", color: "#212121" }}
              href={`/posts/${post.node.slug}`}
            >
              <Card>
                <Button className={post.node.categories.edges[0].node.name}>
                  {post.node.categories.edges[0].node.name}
                </Button>
                <Foto
                  style={{
                    backgroundImage: `url(${post.node.featuredImage.node.sourceUrl})`,
                  }}
                ></Foto>
                <Text>
                  <Naslov2>{post.node.title}</Naslov2>
                </Text>

                <Text
                  dangerouslySetInnerHTML={{
                    __html: [post.node.excerpt.slice(0, 100) + "..."],
                  }}
                />
                <ReadMore>PROČITAJ VIŠE</ReadMore>
              </Card>
            </Link>
          </WrapTestimonial>
        ))}
      </Slider>
    </WrapAll>
  );
};

export default BlogFront;
