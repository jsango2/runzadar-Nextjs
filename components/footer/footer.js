import React from "react";
import { WrapAll, Overlay, Social, Social2, AnimationWrap } from "./style.js";
import FooterBg from "../../svg/footerbg.svg";
import Runzadar from "../../svg/runzadar.svg";
import Lottie from "lottie-react";
import Image from "next/image";
import madeBySutra from "./madeBySutra";

const Footer = (posts) => {
  const interactivity = {
    mode: "scroll",
    actions: [
      {
        visibility: [0, 1],
        type: "play",
        frames: [0, 92],
      },
    ],
  };
  return (
    <WrapAll>
      <Overlay />

      <FooterBg
        style={{
          position: "absolute",
          top: "0",
        }}
      />
      <Runzadar
        style={{
          position: "relative",
          zIndex: "2",
          marginTop: "10px",
          textAlign: "center",
        }}
      />
      <Social>
        <div>
          <a href="mailto:info@runzadar.com?subject=Info Mail Škola trčanja Zadar">
            info@runzadar.com
          </a>{" "}
        </div>
        <div>
          <a href="http://www.facebook.com/skolatrcanjazadar">facebook</a>
        </div>
        <div>
          <a href="http://www.instagram.com/skola_trcanja_zadar">instagram </a>
        </div>
      </Social>
      <Social2
        style={{
          textAlign: "center",
          fontSize: "9px",
          maxWidth: "250px",
        }}
      >
        Sport Zone j.d.o.o. <br />
        Ante Starčevića 8, Zadar <br />
        IBAN: HR4924840081135097153 BIC: RZBHHR2X info@runzadar.com
      </Social2>
      <Social style={{ marginTop: "auto" }}>
        <AnimationWrap>
          <a href="https://www.sutra.hr">
            <Lottie
              animationData={madeBySutra}
              interactivity={interactivity}
              autoPlay={false}
              loop={true}
            />
          </a>
        </AnimationWrap>
      </Social>
    </WrapAll>
  );
};

export default Footer;
