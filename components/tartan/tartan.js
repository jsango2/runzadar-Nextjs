import React from "react";
import { Naslov, Overlay, WrapAll } from "./style.js";

import LocationIcon from "../../svg/location.svg";

import { Parallax } from "react-parallax";
import Image from "next/image";

const Tartan = () => {
  return (
    <WrapAll>
      <Parallax
        bgImage="/slikatartana.png"
        strength={70}
        style={{
          height: "100%",
          width: "100%",
          backgroundPosition: "50% 50%",
          backgroundSize: "cover",
        }}
      >
        <div
          style={{
            height: "610px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            zIndex: "2",
          }}
        >
          <Image src="/location.svg" width={55} height={55} />
          <Naslov>
            Treninzi se održavaju ili na stazi na Višnjiku ili u parku Vladimir
            Nazor odakle se najčešće trči ruta Karmom uz more prema Punti Bajlo.
          </Naslov>
        </div>
        <Overlay />
      </Parallax>
    </WrapAll>
  );
};

export default Tartan;
