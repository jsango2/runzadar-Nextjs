import styled from "styled-components";

import heroPhoto from "../../images/hero.png";

// import { HeroWrap } from "./style.js"

export const HeroWrap = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  @media only screen and (max-width: 600px) {
    /* padding-left: 38px; */
  }
`;
export const Overlay = styled.div`
  position: absolute;
  height: 292px;
  width: 100%;
  bottom: -5px;
  /* Gradient skroz plavi */
  z-index: 1;
  background: linear-gradient(180deg, #0f162b 18.24%, rgba(15, 21, 43, 0) 100%);
  transform: rotate(-180deg);
`;
export const Text = styled.div`
  width: 90%;

  margin: 100px 0 40px 0;
  font-weight: 500;
  font-size: 21px;
  line-height: 120%;
  z-index: 2;
  @media only screen and (max-width: 750px) {
    font-size: 18px;
  }
  @media only screen and (max-width: 600px) {
    font-size: 16px;
    width: 100%;
  }
`;
export const WrapLogoText = styled.div`
  position: absolute;
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    height: 600px;
  }
  @media only screen and (max-width: 420px) {
    width: 80%;
  }
`;
