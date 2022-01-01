import React from "react";
import {
  Naslov,
  Utrke,
  Utrka,
  Buttons,
  Overlay,
  OverlayGore,
  WrapAll,
} from "./style.js";
// import { graphql, useStaticQuery } from "gatsby"

import Button from "../button/button.js";
// import BackgroundImage from "gatsby-background-image";
import vrataFosa from "../../images/vrataFosa.png";
import vrataFosaUze from "../../images/vrataFosaUze.png";

// import { Parallax } from "react-scroll-parallax"
import { Parallax, Background } from "react-parallax";

const PripremiSe = () => {
  // const data = useStaticQuery(
  //   graphql`
  //     query {
  //       placeholderImage: file(relativePath: { eq: "vrataFosa.png" }) {
  //         childImageSharp {
  //           fluid(quality: 100, maxWidth: 1440) {
  //             ...GatsbyImageSharpFluid_withWebp
  //           }
  //         }
  //       }
  //     }
  //   `
  // )

  // Set ImageData.
  return (
    <WrapAll>
      <Parallax strength={100} style={{ width: "100%" }}>
        <Background className="custom-bg">
          <img src="/vrataFosa.png" alt="Fosa" />
        </Background>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            zIndex: "2",
          }}
        >
          <Naslov>PRIPREMI SE ZA IDUĆU UTRKU!</Naslov>
          <Utrke>
            <Utrka>
              <a href="https://www.zadarnight.run">
                <strong>09.04.</strong> Zadar Night Run 2022
              </a>
            </Utrka>
            <Utrka>
              <a href="https://www.wingsforlife.com">
                <strong>09.05.</strong> WIngs For Life 2022
              </a>
            </Utrka>
            <Utrka>
              <strong>01.10.</strong> 4She Run by Sport&Moda
            </Utrka>
          </Utrke>
          <Buttons>
            <Button
              title="Počni trenirati"
              width="270"
              height="61"
              fontWeight="700"
              colorText="black"
            />

            <Button
              title="Zadar Night Run"
              width="270"
              height="61"
              fontWeight="700"
              backgroundColor="#F1EBF5"
              colorText="black"
            />
          </Buttons>
          <Overlay />
          <OverlayGore />
        </div>
      </Parallax>
    </WrapAll>
  );
};

export default PripremiSe;
