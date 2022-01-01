import styled from "styled-components";

// import { HeroWrap } from "./style.js"
export const WrapAll = styled.div`
  position: relative;
  width: 100%;
  height: 625px;
  padding-top: 50px;
  z-index: 3;
  overflow: hidden;
  background-color: #151520;
  & .slick-next {
    right: 50px !important;
    height: 110px !important;
    z-index: 20 !important;
  }
  & .slick-prev {
    left: 50px !important;
    height: 110px !important;
    z-index: 20 !important;
  }
  & .slick-next:before,
  .slick-prev:before {
    display: none;
  }

  @media only screen and (max-width: 600px) {
    padding-top: 0;
    & .slick-next {
      right: 50px !important;
      height: 110px !important;
      z-index: 20 !important;
      display: none !important;
    }
    & .slick-prev {
      left: 50px !important;
      height: 110px !important;
      z-index: 20 !important;
      display: none !important;
    }
  }
  @media only screen and (max-width: 420px) {
    height: 550px;
  }
`;

export const WrapTestimonial = styled.div`
  position: relative;
  height: 469px;
  margin: 0 auto;
  display: flex;
  @media only screen and (max-width: 600px) {
    height: 550px;
  }
`;

export const Card = styled.div`
  position: relative;
  width: 85%;
  height: 100%;
  margin: 0 auto;
  border-radius: 39px;
  overflow: hidden;
  display: flex;
  background: radial-gradient(
    94.23% 94.23% at 15.75% 5.77%,
    #c2c2c2 0%,
    #838383 100%
  );
  @media only screen and (max-width: 600px) {
    width: 100%;
    border-radius: 0;
  }
  @media only screen and (max-width: 430px) {
    width: 100%;
    border-radius: 0;
    flex-direction: column;
  }
`;
export const Right = styled.div`
  position: relative;
  z-index: 10;
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 600px) {
    width: 60%;
    border-radius: 0;
  }
  @media only screen and (max-width: 430px) {
    width: 100%;
    height: 50%;
    padding-bottom: 20px;
  }
`;

export const Left = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 50%;
  height: 100%;
  position: relative;
  @media only screen and (max-width: 600px) {
    width: 40%;
    border-radius: 0;
  }
  @media only screen and (max-width: 430px) {
    width: 100%;
    height: 50%;
  }
`;
export const Text = styled.div`
  margin-top: 60px;
  color: black;
  font-size: 21px;
  font-weight: normal;
  width: 432px;
  line-height: 122.5%;
  @media only screen and (max-width: 600px) {
    width: 85%;
    border-radius: 0;
  }
  @media only screen and (max-width: 430px) {
    font-size: 16px;
    margin-top: 30px;
  }
`;
export const Ime = styled.div`
  width: 432px;
  margin-top: 20px;
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  line-height: 120%;
  text-align: right;
  color: #151520;
  @media only screen and (max-width: 600px) {
    margin-left: 60px;
    text-align: center;
  }
  @media only screen and (max-width: 430px) {
    font-size: 22px;
  }
`;
