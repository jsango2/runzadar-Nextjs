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
  justify-content: flex-end;
  /* padding-left: 133px; */
  overflow: hidden;
  z-index: 0;
  padding-bottom: 100px;
  @media only screen and (max-width: 600px) {
  }
  @media only screen and (max-width: 420px) {
    height: 656px;
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
  text-align: center;
  @media only screen and (max-width: 600px) {
    width: 90%;

    margin: 100px 0 20px 0;
    font-size: 12vw;
  }
  @media only screen and (max-width: 420px) {
    margin: 0px 0 20px 0;
  }
`;
export const SubTitle = styled.h1`
  margin: 10px auto 20px auto;
  font-family: "Montserrat", sans-serif;
  font-style: italic;
  font-weight: 700;
  font-size: 37px;
  line-height: 120%;
  z-index: 2;
  text-align: center;
  @media only screen and (max-width: 600px) {
    width: 90%;

    margin: 100px 0 56px 0;
    font-size: 6vw;
  }
  @media only screen and (max-width: 420px) {
    margin: 0px 0 20px 0;
  }
`;
export const HeroTitle2 = styled.h3`
  margin: 0px auto 60px auto;
  font-family: "Montserrat", sans-serif;
  font-style: italic;
  font-weight: 900;
  font-size: 36px;
  line-height: 120%;
  z-index: 2;
  text-align: center;

  @media only screen and (max-width: 600px) {
    /* width: 600px; */
    /* height: 70px; */
    margin: 0px 0 136px 0;
    font-size: 24px;
  }
  @media only screen and (max-width: 420px) {
    margin: 0px 0 30px 0;
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
  cursor: pointer;
  @media only screen and (max-width: 600px) {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 70px;
    margin: 0 0 0 0;
  }
  @media only screen and (max-width: 420px) {
    width: 100%;

    margin: 0 0 0 0;
  }
`;

export const ButtonWrap = styled.div`
  position: relative;
  color: white;
  font-size: 42px;

  /* width: 300px; */
  @media only screen and (max-width: 600px) {
    text-align: center;
    font-size: 32px;
    width: 90%;
    line-height: normal;
  }
  @media only screen and (max-width: 420px) {
  }
`;

export const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.6055015756302521) 0%,
    rgba(0, 0, 0, 0.10970325630252098) 100%
  );

  @media only screen and (max-width: 600px) {
  }
  @media only screen and (max-width: 420px) {
  }
`;
