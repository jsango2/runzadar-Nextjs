import Lottie from "lottie-react";

import {
  HeroTitle,
  HeroTitle2,
  HeroWrap,
  Veza,
  ButtonWrap,
  SubTitle,
  Overlay,
} from "./style.js";
import Button from "../button/button";
// import HeroVideo from "../../video/kraciVideo.mp4";
import useWindowSize from "../helper/usewindowsize";
// import { Link as Veza } from "react-scroll";
import HeroXmas from "../../images/herosmall.jpg";
import Image from "next/image";

const HeroChristmas = () => {
  const size = useWindowSize();
  return (
    <HeroWrap>
      <Overlay />
      {/* <h1 style={{ display: "none" }}>
        Prvi rekreativni trkački klub u Zadru. Od početnika do naprednih trkača.
      </h1> */}
      {/* <video autoPlay muted loop="loop" className="videoHero" playsInline>
        <source src="/kraciVideo.mp4" type="video/mp4" />
      </video> */}
      <HeroTitle>Zadar Christmas Run</HeroTitle>
      <SubTitle>Humanitarna božićna utrka</SubTitle>
      <HeroTitle2>21.12.2024., Subota, 15:30h</HeroTitle2>
      <Image src="/xmas2019.png" layout="fill" objectFit="cover" />
      <Veza href="https://www.stotinka.hr/hrv/utrka/6117/prijava_na_utrku">
        <ButtonWrap
          style={{ position: "relative", zIndex: "10", cursor: "pointer" }}
        >
          <Button
            title="Prijava na utrku"
            width="300"
            height="51"
            fontWeight="700"
            colorText="black"
          />
        </ButtonWrap>
      </Veza>
    </HeroWrap>
  );
};

export default HeroChristmas;
