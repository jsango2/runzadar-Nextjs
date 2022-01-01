import React from "react";
import {
  WrapAll,
  Card,
  WrapTestimonial,
  Left,
  Right,
  Text,
  Ime,
} from "./style.js";
import Swish from "../../svg/Swish.svg";
import Livo from "../../svg/STRELICALIVO.svg";
import Desno from "../../svg/STRELICADESNO.svg";
import CrteCesta from "../../svg/cestaTestimonial.svg";
import Zarez from "../../svg/Zarez.svg";
import musapstan1 from "../../images/musapstan1.png";
import sanja from "../../images/sanja.png";
// import SEO from "../seo.js"
import Slider from "react-slick";
import Image from "next/image";
// import "slick-carousel/slick/slick.css"
// import "slick-carousel/slick/slick-theme.css"

// import { HeroWrap } from "./style.js"
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

const Testimonial = () => {
  const settings = {
    // arrows: true,
    dots: true,
    infinite: true,
    lazyLoad: true,
    fade: true,
    speed: 2000,
    autoplaySpeed: 6000,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,

    responsive: [
      {
        breakpoint: 450,
        settings: {
          dots: true,
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
          top: "120px",
        }}
      />
      <Slider {...settings}>
        <WrapTestimonial>
          <Card>
            <Left>
              <Image
                src="/musapstan1.png"
                width={800}
                height={700}
                objectFit="cover"
              />
            </Left>
            <Right>
              <Zarez className="zarezTestimonial" />
              <Text>
                {" "}
                "Škola trčanja mi je u potpunosti promijenila lifestyle. Postao
                sam aktivna osoba, sportaš rekreativac, trkač na duge pruge, a
                prije samo 3 godine bio sam bez energije, bez snage i što je
                najvažnije bez poleta i elana. "
              </Text>
              <Ime>Mate (47)</Ime>
            </Right>
            <Swish style={{ position: "absolute", right: "0px" }} />
          </Card>
        </WrapTestimonial>
        <WrapTestimonial>
          <Card>
            <Left>
              <Image
                src="/sanja.png"
                objectFit="cover"
                width={800}
                height={700}
              />
            </Left>
            <Right>
              <Zarez className="zarezTestimonial" />
              <Text>
                {" "}
                "Škola trčanja mi je u potpunosti promijenila lifestyle. Postao
                sam aktivna osoba, sportaš rekreativac, trkač na duge pruge, a
                prije samo 3 godine bio sam bez energije, bez snage i što je
                najvažnije bez poleta i elana. "
              </Text>
              <Ime>Mate (47)</Ime>
            </Right>
            <Swish style={{ position: "absolute", right: "0px" }} />
          </Card>
        </WrapTestimonial>
      </Slider>
    </WrapAll>
  );
};

export default Testimonial;
