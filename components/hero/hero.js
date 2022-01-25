import Lottie from "lottie-react";
import animacijaNaslova1150 from "./animacijaNaslovaWide";
import animacijaNaslova600 from "./animacijaNaslovaUsko";
import { HeroTitle, HeroWrap } from "./style.js";
import Button from "../button/button";
// import HeroVideo from "../../video/kraciVideo.mp4";
import useWindowSize from "../helper/usewindowsize";
import { Link as Veza } from "react-scroll";

const Hero = () => {
  const size = useWindowSize();
  return (
    <HeroWrap>
      <video autoPlay muted loop="loop" className="videoHero">
        <source src="/kraciVideo.mp4" type="video/mp4" />
      </video>
      <HeroTitle>
        <Lottie
          animationData={
            size.width < 600 ? animacijaNaslova600 : animacijaNaslova1150
          }
          className="HeroNaslovAnimacija"
          loop={false}
        />
      </HeroTitle>
      <Veza
        activeClass="active"
        to="prijava"
        spy={true}
        smooth="easeInOutCubic"
        offset={30}
        duration={1800}
      >
        <div style={{ position: "relative", zIndex: "10", cursor: "pointer" }}>
          <Button
            title="Počni trenirati"
            width="270"
            height="61"
            fontWeight="700"
            colorText="black"
          />
        </div>
      </Veza>
    </HeroWrap>
  );
};

export default Hero;
