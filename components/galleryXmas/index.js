import React, { useState } from "react";
import {
  Naslov,
  WrapVideo,
  WrapPhotos,
  ImageWrap,
  WrapImage,
} from "./style.js";
import YouTube from "react-youtube";
import useWindowSize from "../helper/usewindowsize";
import Livo from "../../svg/STRELICALIVO.svg";
import Desno from "../../svg/STRELICADESNO.svg";
import Slider from "react-slick";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import Fotke from "./photos.js";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import p1 from "../../images/gallery/1.JPG";
import { SRLWrapper } from "simple-react-lightbox";
import SimpleReactLightbox from "simple-react-lightbox";

function GalleryXmas() {
  const [current, setCurrent] = useState();
  const [isOpen, setIsOpen] = useState(false);
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
  const settings = {
    // arrows: false,
    // dots: true,
    infinite: true,
    // fade: true,
    speed: 1000,
    lazyLoad: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    // className: "testimonialSlider",
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

  const size = useWindowSize();
  const handleClickImage = (e, image) => {
    e && e.preventDefault();
    setCurrent(image);
    setIsOpen(true);
  };

  const handleCloseModal = (e) => {
    e && e.preventDefault();
    setIsOpen(false);
    setCurrent(0);
  };
  const opts = {
    // height: "390",
    width: size > 600 ? "650" : "100%",
    height: size > 600 ? "390" : "100%",

    playerVars: {
      autoplay: 1,
    },
  };
  const options = {
    // Please note that "caption" is singular
    caption: {
      captionAlignment: "start",
      captionColor: "#FFFFFF",
      captionContainerPadding: "0",
      captionFontFamily: "inherit",
      captionFontSize: "inherit",
      captionFontStyle: "inherit",
      captionFontWeight: "inherit",
      captionTextTransform: "inherit",
      showCaption: false,
    },
  };
  return (
    <>
      <Naslov>Foto / Video</Naslov>;
      <WrapVideo>
        <YouTube className="youTubeVideo" videoId="W5l_aR-SeWA" opts={opts} />
      </WrapVideo>
      <div style={{ height: "40px" }}></div>
      <SimpleReactLightbox>
        <SRLWrapper options={options}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {Fotke.map((image) => (
              <WrapImage
                key={image.in}
                // onClick={(e) => handleClickImage(e, image.in)}
              >
                <Image
                  src={image.photo}
                  alt={image.in}
                  layout="fill"
                  objectFit="cover"
                  // width={500} automatically provided
                  // height={500} automatically provided
                  // blurDataURL="data:..." automatically provided
                  // Optional blur-up while loading
                />
              </WrapImage>
            ))}
          </div>
        </SRLWrapper>
      </SimpleReactLightbox>
      <div style={{ height: "40px" }}></div>
    </>
  );
}

export default GalleryXmas;
