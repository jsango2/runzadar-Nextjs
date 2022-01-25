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
                U Školi trčanja Zadar, kao u svakoj školi, naučiš štošta
                korisnoga – što na vlastitim, što na tuđim pogreškama. U ovoj
                sam školi naučila da trkač možeš postati u bilo kojoj životnoj
                dobi i da trkačke staze nemaju kraja. Zbog svega ovoga moja je
                trkačka priča od početnih uspuhanih ali istrčanih 200 metara do
                još uspuhanijih ali istrčanih 42 kilometra tako slatka i
                vrijedna da se vremena kad nisam trčala gotovo više i ne sjećam.
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
                Iako u početku skeptičan, odvažio sam se na upis u Školu. Život
                mi se u pozitivnom smislu preokrenuo na mnogim poljima. Otrčao
                sam razne utrke, cestovne i trailove, kratke i duge i usput
                postao zdravija i vedrija osoba, puna energije… Pozitivan,
                zabavan i poticajan duh koji sa sobom nosi trčanje u Školi,
                doveo je u moj život i brojne nove osobe, koje danas mogu
                nazvati i svojim prijateljima. Danas trčim s radošću i osmijehom
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
                Krenuo sam u Školu trčanja u lipnju 2018. godine sa 130 kg ali
                sa željom da promijenim svoje navike. Uz pomoć trenera, spremio
                sam se za svoj prvi polumaraton te sam putem izgubio 40 kg. Bez
                stručne pomoći trenera iz škole trčanja nikad ne bi uspio
                promijeniti svoje navike koje su ključne u ovom procesu, jer uz
                pomoć brzih dijeta možete izgubiti i preko desetak kilograma,
                ali ako ne promijenite loše navike nećete napraviti ništa.
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
