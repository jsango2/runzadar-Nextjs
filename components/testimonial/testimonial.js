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
                src="/sanja.png"
                width={800}
                height={700}
                objectFit="cover"
              />
            </Left>
            <Right>
              <Zarez className="zarezTestimonial" />
              <Text>
                {" "}
                U ??koli tr??anja Zadar, kao u svakoj ??koli, nau??i?? ??to??ta
                korisnoga ??? ??to na vlastitim, ??to na tu??im pogre??kama. U ovoj
                sam ??koli nau??ila da trka?? mo??e?? postati u bilo kojoj ??ivotnoj
                dobi i da trka??ke staze nemaju kraja. Zbog svega ovoga moja je
                trka??ka pri??a od po??etnih uspuhanih ali istr??anih 200 metara do
                jo?? uspuhanijih ali istr??anih 42 kilometra tako slatka i
                vrijedna da se vremena kad nisam tr??ala gotovo vi??e i ne sje??am.
              </Text>
              <Ime>Sanja</Ime>
            </Right>
            <Swish style={{ position: "absolute", right: "0px" }} />
          </Card>
        </WrapTestimonial>
        <WrapTestimonial>
          <Card>
            <Left>
              <Image
                src="/rojc.jpeg"
                objectFit="cover"
                width={800}
                height={700}
              />
            </Left>
            <Right>
              <Zarez className="zarezTestimonial" />
              <Text>
                {" "}
                Iako u po??etku skepti??an, odva??io sam se na upis u ??kolu. ??ivot
                mi se u pozitivnom smislu preokrenuo na mnogim poljima. Otr??ao
                sam razne utrke, cestovne i trailove, kratke i duge i usput
                postao zdravija i vedrija osoba, puna energije??? Pozitivan,
                zabavan i poticajan duh koji sa sobom nosi tr??anje u ??koli,
                doveo je u moj ??ivot i brojne nove osobe, koje danas mogu
                nazvati i svojim prijateljima. Danas tr??im s rado????u i osmijehom
                na licu.
              </Text>
              <Ime>Mate</Ime>
            </Right>
            <Swish style={{ position: "absolute", right: "0px" }} />
          </Card>
        </WrapTestimonial>
        <WrapTestimonial>
          <Card>
            <Left>
              <Image
                src="/stipe.jpeg"
                objectFit="cover"
                width={800}
                height={700}
              />
            </Left>
            <Right>
              <Zarez className="zarezTestimonial" />
              <Text>
                {" "}
                Krenuo sam u ??kolu tr??anja u lipnju 2018. godine sa 130 kg ali
                sa ??eljom da promijenim svoje navike. Uz pomo?? trenera, spremio
                sam se za svoj prvi polumaraton te sam putem izgubio 40 kg. Bez
                stru??ne pomo??i trenera iz ??kole tr??anja nikad ne bi uspio
                promijeniti svoje navike koje su klju??ne u ovom procesu, jer uz
                pomo?? brzih dijeta mo??ete izgubiti i preko desetak kilograma,
                ali ako ne promijenite lo??e navike ne??ete napraviti ni??ta.
              </Text>
              <Ime>Stipe</Ime>
            </Right>
            <Swish style={{ position: "absolute", right: "0px" }} />
          </Card>
        </WrapTestimonial>
      </Slider>
    </WrapAll>
  );
};

export default Testimonial;
