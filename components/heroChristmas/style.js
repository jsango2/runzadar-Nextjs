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
  margin: 0px auto 100px auto;
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
    margin: 30px 0 40px 0;
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
    width: 400px;

    margin: 0 0 0 0;
  }
`;

export const ButtonWrap = styled.div`
  position: relative;
  /* width: 300px; */
  @media only screen and (max-width: 600px) {
  }
  @media only screen and (max-width: 420px) {
  }
`;
