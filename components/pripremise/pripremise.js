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
import { Link as Veza } from "react-scroll";

import Button from "../button/button.js";
// import BackgroundImage from "gatsby-background-image";
import vrataFosa from "../../images/vrataFosa.png";
import vrataFosaUze from "../../images/vrataFosaUze.png";

// import { Parallax } from "react-scroll-parallax"
import { Parallax, Background } from "react-parallax";
import Image from "next/image";

const PripremiSe = () => {
  return (
    <WrapAll>
      <Parallax strength={100} style={{ width: "100%" }}>
        <Background className="custom-bg">
          <Image
            src="/vrataFosa.png"
            width={1440}
            height={1200}
            layout="fixed"
          />
        </Background>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            zIndex: "2",
            paddingBottom: "20px",
          }}
        >
          <Naslov>PRIPREMI SE ZA IDUĆU UTRKU!</Naslov>
          <Utrke>
            {/* <Utrka>
              <a href="https://myloverun.eu/">
                <strong>12.02.</strong> Love Run 2023 - Zadar
              </a>
            </Utrka> */}
            <Utrka>
              <a href="https://www.zadarnight.run">
                <strong>12.04.</strong> Zadar Night Run 2025
              </a>
            </Utrka>
            <Utrka>
              <a href="https://www.wingsforlife.com">
                <strong>04.05.</strong> WIngs For Life 2025
              </a>
            </Utrka>
            {/* <Utrka>
              <a href="https://www.stotinka.hr/hrv/dogadjaj/1683">
                <strong>11.6.</strong> Privlaka Run
              </a>
            </Utrka> */}
          </Utrke>
          <Buttons>
            <Veza
              activeClass="active"
              to="prijava"
              spy={true}
              smooth="easeInOutCubic"
              offset={0}
              duration={1800}
              style={{ textDecoration: "none", marginTop: "15px" }}
            >
              <Button
                title="Počni trenirati"
                width="270"
                height="61"
                fontWeight="700"
                colorText="black"
              />
            </Veza>
            <a
              href="https://www.zadarnight.run"
              style={{ textDecoration: "none", marginTop: "15px" }}
            >
              <Button
                title="Zadar Night Run"
                width="270"
                height="61"
                fontWeight="700"
                backgroundColor="#F1EBF5"
                colorText="black"
              />
            </a>
          </Buttons>
          <Overlay />
          <OverlayGore />
        </div>
      </Parallax>
    </WrapAll>
  );
};

export default PripremiSe;
