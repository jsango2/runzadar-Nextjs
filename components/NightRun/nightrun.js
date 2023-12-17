import React from "react";
import Lottie from "lottie-react";
import { Text, HeroWrap, WrapLogoText, Overlay, WrapImage } from "./style.js";
import Button from "../button/button";
// import Logo from "../../public/grawe23.png";
import { IoIosArrowForward } from "react-icons/io";
import Image from "next/image.js";

const NightRun = () => {
  return (
    <HeroWrap>
      <Overlay />
      <video autoPlay muted loop="loop" className="NightRun" playsInline>
        <source src="/nightrun.mp4" type="video/mp4" />
      </video>
      <WrapLogoText>
        <WrapImage>
          <Image
            priority
            src="/nightRun24logo.svg"
            // width={20}
            // height={20}
            layout="fill"
            objectFit="contain"
            className="logoNightRun"
          />
        </WrapImage>
        <div className="nightRunDiv">
          <Text>
            Posebno smo ponosni na našu utrku Zadar Night Run. Utrka okuplja
            preko 1500 trkača na dječjim utrkama, 2.5km, 5km i 10km te na polu
            maratonu. Prijavite se i budite dio trkačkog spektakla u našem
            gradu!
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
                cursor: "pointer",
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
