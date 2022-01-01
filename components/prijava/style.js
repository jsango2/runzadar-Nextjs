import styled from "styled-components";

// import { HeroWrap } from "./style.js"
export const WrapAll = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: auto;
  z-index: 3;
  background-color: #151520;
  @media only screen and (max-width: 600px) {
    padding-bottom: 0;
  }
`;

export const WrapForm = styled.div`
  position: relative;
  /* top: 10%;
  left: 50%;
  transform: translate(-50%, 0); */
  width: 1161px;
  height: 622px;
  margin: 0 auto 0 auto;
  overflow: hidden;
  display: flex;
  top: -100px;

  background: radial-gradient(
    94.23% 94.23% at 15.75% 5.77%,
    #c2c2c2 0%,
    #838383 100%
  );
  border-radius: 39px 39px 39px 39px;
  @media only screen and (max-width: 900px) {
    width: 95vw;
  }
  @media only screen and (max-width: 600px) {
    width: 100vw;
    border-radius: 0;
  }
`;
export const Left = styled.div`
  position: relative;
  z-index: 10;
  width: 50%;
  height: 100%;
  padding-left: 80px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  & input {
    background: #ffffff;
    border: 1px solid #aea8b3;
    box-shadow: 0px 4px 8px rgba(28, 37, 44, 0.08);
    border-radius: 20px;
    width: 416px;
    height: 47px;
    font-family: "Montserrat", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 145%;
    padding-left: 35px;
    padding-right: 20px;
    letter-spacing: 0.5px;
    color: #aea8b3;
    margin: 14px 0;
    &:nth-child(6) {
      margin-bottom: 0;
      padding-left: 0;
      padding-right: 0;
    }
  }
  @media only screen and (max-width: 900px) {
    width: 68%;
    padding-left: 50px;
    padding-right: 30px;

    & input {
      width: 95%;
      height: 47px;
      margin: 14px 0;
      &:nth-child(6) {
        margin-bottom: 0;
        padding-left: 0;
        padding-right: 0;
      }
    }
  }
  @media only screen and (max-width: 600px) {
    width: 83%;
    padding-left: 50px;
    padding-right: 30px;

    & input {
      width: 95%;
      height: 47px;
      margin: 14px 0;
      &:nth-child(6) {
        margin-bottom: 0;
        padding-left: 0;
        padding-right: 0;
      }
    }
  }
  @media only screen and (max-width: 420px) {
    width: 100%;
    padding-left: 0;
    padding-right: 0;
    align-items: center;

    & input {
      width: 100%;
      height: 47px;
      margin: 14px 0;
      &:nth-child(6) {
        margin-bottom: 0;
        padding-left: 0;
        padding-right: 0;
      }
    }
  }
`;
export const Naslov2 = styled.h3`
  position: relative;
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  color: #151520;
  width: 325px;
  margin: 0 0 30px 0;
  font-weight: 700;
  font-size: 30px;
  line-height: 120%;
  z-index: 5;
  @media only screen and (max-width: 600px) {
    width: 67%;
  }
`;
export const Right = styled.div`
  position: relative;
  width: 50%;
  height: 100%;
  background: black;
  overflow: hidden;
  @media only screen and (max-width: 900px) {
    width: 34%;
  }
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

export const Foto = styled.div`
  width: 50%;
  height: 33.4%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;
