import styled from "styled-components";

// import heroPhoto from "../../images/hero.png"

// import { HeroWrap } from "./style.js"

export const HeroWrap = styled.div`
  position: relative;
  height: 899px;
  width: 100%;
  border-radius: 36px 36px 0px 0px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* padding-left: 133px; */
  overflow: hidden;
  z-index: 0;
  @media only screen and (max-width: 600px) {
    padding-left: 38px;
  }
  @media only screen and (max-width: 420px) {
    height: 556px;
  }
`;

export const Naslov = styled.div`
  position: relative;
  margin-top: 120px;
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 700;
  color: white;
  font-size: 42px;
  text-align: center;
  line-height: 120%;
  z-index: 5;
  /* background: #151520; */
  width: 400px;
  margin: 100px auto 50px auto;
  text-transform: uppercase;
  @media only screen and (max-width: 420px) {
    width: 100%;
    font-size: 26px;
  }
`;
export const HeroTitle = styled.h1`
  margin: 200px auto 0 auto;
  font-family: "Montserrat", sans-serif;
  font-style: italic;
  font-weight: 900;
  font-size: 67px;
  line-height: 120%;
  z-index: 2;

  @media only screen and (max-width: 600px) {
    width: 600px;
    height: 70px;
    margin: 100px 0 136px 0;
    font-size: 40px;
  }
  @media only screen and (max-width: 420px) {
    width: 400px;

    margin: 200px 0 60px 0;
  }
`;
export const HeroTitle2 = styled.h3`
  margin: 0px auto 100px auto;
  font-family: "Montserrat", sans-serif;
  font-style: italic;
  font-weight: 900;
  font-size: 36px;
  line-height: 120%;
  z-index: 2;

  @media only screen and (max-width: 600px) {
    width: 600px;
    height: 70px;
    margin: 100px 0 136px 0;
    font-size: 24px;
  }
  @media only screen and (max-width: 420px) {
    width: 400px;

    margin: 0 0 10px 0;
  }
`;

export const WrapVideo = styled.div`
  /* width: 80%;
  max-width: 870px;
  height: auto;
  margin: 0 auto; */
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  height: 0;
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  @media only screen and (max-width: 600px) {
  }
  @media only screen and (max-width: 420px) {
  }
`;
export const ImageWrap = styled.div`
  height: 250px;
  width: 350px !important;
  overflow: hidden;
  cursor: pointer;
  @media screen and (max-width: 768px) {
  }
`;

export const LinkFoto = styled.a`
  display: flex;
  text-align: center;
  justify-content: center;
  font-family: "Montserrat", sans-serif;
  color: #5388f2;
  width: 100%;
  font-weight: 800;
  font-size: 24px;
  cursor: pointer;
  text-align: center;
  margin-bottom: 50px;
  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
`;

export const WrapImage = styled.div`
  position: relative;
  height: 235px;
  width: 235px;
  margin: 7px;
  cursor: pointer;
  @media only screen and (max-width: 700px) {
    height: 116px;
    width: 116px;
  }
  @media only screen and (max-width: 400px) {
    margin: 5px;

    height: 100px;
    width: 100px;
  }
`;

export const WrapPhotos = styled.div`
  position: relative;
  width: 90%;
  height: 569px;
  padding-top: 30px;
  /* padding-left: 124px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    padding-left: 0;
    padding-top: 0;
  }

  .slick-initialized .slick-slide {
    display: flex;
    justify-content: center;
  }
  .slick-dots li button:before {
    font-family: "slick";
    font-size: 8px;
    line-height: 20px;
    position: absolute;
    top: 0;
    left: 0;
    width: 20px;
    height: 20px;
    content: "•";
    text-align: center;
    opacity: 0.25;
    color: #428ff6;
  }
  .slick-next:before {
    display: none;
  }
  .slick-prev:before {
    display: none;
  }
`;
