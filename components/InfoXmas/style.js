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

export const Segment = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  z-index: 0;
  margin-bottom: 20px;
  @media only screen and (max-width: 600px) {
    /* padding-left: 38px; */
  }
  @media only screen and (max-width: 420px) {
    /* height: 556px; */
  }
`;
export const SegmentTop = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  z-index: 0;
  margin-bottom: 20px;
  @media only screen and (max-width: 600px) {
    /* padding-left: 38px; */
  }
  @media only screen and (max-width: 420px) {
    /* height: 556px; */
  }
`;
export const Wrap = styled.div`
  position: relative;
  width: 65%;
  margin: 0 auto;
  @media only screen and (max-width: 600px) {
    width: 85%;
  }
  @media only screen and (max-width: 420px) {
    /* height: 556px; */
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
  margin: 100px auto;
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
export const Veza = styled.a`
  margin: 0px auto 100px auto;
  font-family: "Montserrat", sans-serif;
  font-style: italic;
  font-weight: 900;
  font-size: 36px;
  line-height: 120%;
  z-index: 2;
  text-decoration: none;

  @media only screen and (max-width: 600px) {
    width: 600px;
    height: 70px;
    margin: 0 0 0 0;
  }
  @media only screen and (max-width: 420px) {
    width: 400px;

    margin: 0 0 0 0;
  }
`;
