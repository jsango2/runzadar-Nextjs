import React from "react";
import Lottie from "lottie-react";
import { Text, HeroWrap, WrapLogoText, Overlay } from "./style.js";
import Button from "../button/button";
import Logo from "../../svg/nightrunlogo-01.svg";
import { IoIosArrowForward } from "react-icons/io";

const NightRun = () => {
  return (
    <HeroWrap>
      <Overlay />
      <video autoPlay muted loop="loop" className="NightRun" playsInline>
        <source src="/nightrun.mp4" type="video/mp4" />
      </video>
      <WrapLogoText>
        {" "}
        <Logo className="logoNightRun" />
        <div className="nightRunDiv">
          <Text>
            Posebno smo ponosni na našu utrku Zadar Night Run. Utrka je 2019.
            godine na startu okupila preko 1300 trkača na 2.5km, 5km i 10km te
            na polu maratonu. Prijavite se i budite dio trkačkog spektakla u
            našem gradu!
          </Text>
          <div
            style={{
              marginTop: "20px",
            }}
          >
            <a
              style={{
                position: "relative",
                zIndex: "1",
                textDecoration: "none",
                color: "white",
                display: "flex",
                alignItems: "center",
              }}
              href="https://www.zadarnight.run"
            >
              ZADARNIGHT.RUN <IoIosArrowForward />
            </a>
          </div>
        </div>
      </WrapLogoText>
    </HeroWrap>
  );
};

export default NightRun;
