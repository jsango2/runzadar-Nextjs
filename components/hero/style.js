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
  align-items: flex-start;
  justify-content: center;
  padding-left: 133px;
  overflow: hidden;
  z-index: -1;
  @media only screen and (max-width: 600px) {
    padding-left: 38px;
  }
  @media only screen and (max-width: 420px) {
    height: 556px;
  }
`;
export const HeroTitle = styled.h1`
  width: 600px;
  height: 292.33px;
  margin: 100px 0 0px 0;
  font-family: "Montserrat", sans-serif;
  font-style: italic;
  font-weight: 900;
  font-size: 67px;
  line-height: 120%;
  z-index: 2;
  @media only screen and (max-width: 900px) {
    width: 300px;
    height: 70px;
    margin: 100px 0 120px 0;
  }
  @media only screen and (max-width: 600px) {
    width: 100%;
    height: 70px;
    margin: 100px 0 120px 0;
  }
  @media only screen and (max-width: 420px) {
    margin: 200px 0 40px 0;
  }
`;
