import styled, { keyframes } from "styled-components";

// import heroPhoto from "../../images/hero.png"

// import { HeroWrap } from "./style.js"

export const HeroWrap = styled.div`
  position: relative;
  height: 899px;
  width: 100%;
  border-radius: 36px 36px 0px 0px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding-left: 133px;
  overflow: hidden;
  z-index: 0;
  @media only screen and (max-width: 600px) {
    padding-left: 38px;
  }
  @media only screen and (max-width: 420px) {
    height: 556px;
    justify-content: center;
  }
`;

const heroTitleEntrance = keyframes`
  from {
    opacity: 0;
    transform: translateY(24px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const HeroTitle = styled.h1`
  width: 170%;
  height: 14vw;
  margin: 41px 0 100px 0;
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 60px;
  line-height: 120%;
  text-transform: uppercase;
  z-index: 2;
  opacity: 0;
  animation: ${heroTitleEntrance} 900ms ease-out 200ms forwards;

  @media (prefers-reduced-motion: reduce) {
    opacity: 1;
    animation: none;
  }

  @media only screen and (max-width: 1100px) {
    font-size: 40px;
    height: 200px;
  }

  @media only screen and (max-width: 600px) {
    font-size: 30px;

    margin: 30px 0 66px 0;
    height: auto;
  }
  @media only screen and (max-width: 440px) {
    font-size: 26px;

    width: 90%;

    margin: 120px 0 40px 0;
  }
  @media only screen and (max-width: 390px) {
  }
`;
