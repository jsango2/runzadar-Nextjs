import styled from "styled-components";
import trkac from "../../images/trkacdonat.png";
import nightRunZrake from "../../images/Vector.png";

// import { HeroWrap } from "./style.js"
export const WrapAll = styled.div`
  position: relative;
  width: 100%;
  height: 987px;
  z-index: 3;
  background-color: #151520;
  @media only screen and (max-width: 600px) {
    height: 1207px;
  }
  @media only screen and (max-width: 420px) {
    height: 1307px;
  }
`;

export const WrapDiv = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  width: 92%;
  overflow: hidden;
  height: auto;
  margin: 0 auto;
  color: white;
  padding-top: 103px;
  border-radius: 36px 36px 36px 36px;
  top: -150px;
  z-index: 4;
  background-color: #151520;
  @media only screen and (max-width: 600px) {
    /* height: 1300px; */
  }
  @media only screen and (max-width: 420px) {
    top: -50px;
  }
`;
export const Naslov = styled.h1`
  width: 543px;
  position: relative;
  margin-left: 69px;
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  color: white;
  font-weight: 700;
  font-size: 40px;
  line-height: 120%;
  z-index: 5;
  @media only screen and (max-width: 600px) {
    width: 330px;
  }
  @media only screen and (max-width: 420px) {
    font-size: 28px;
    width: 80%;

    margin-left: 39px;
  }
`;
export const Naslov2 = styled.h3`
  position: relative;
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  color: white;
  margin: 0 0 30px 10px;
  font-weight: 700;
  font-size: 40px;
  line-height: 120%;
  z-index: 5;
  @media only screen and (max-width: 600px) {
    margin: 0 0 30px 0px;
  }
  @media only screen and (max-width: 420px) {
    margin: 0 0 30px 15px;
    font-size: 26px;
  }
`;
export const Text = styled.p`
  position: relative;
  width: 579px;
  margin-left: 69px;
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 21px;
  line-height: 122.5%;
  color: #ffffff;
  z-index: 4;
  @media only screen and (max-width: 600px) {
    width: 353px;
    font-weight: 500;
    font-size: 14px;
    line-height: 140%;
  }
  @media only screen and (max-width: 420px) {
    margin-left: 39px;
    width: 83%;
  }
`;

export const Trkac = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  width: 694px;
  height: 698px;
  background-image: url("/trkacdonat.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: -1;
  @media only screen and (max-width: 600px) {
    right: -50%;
  }
  @media only screen and (max-width: 420px) {
    right: -115%;
  }
`;
export const Overlay = styled.div`
  position: absolute;
  background: #151520;
  filter: blur(32px);
  height: 50%;
  width: 300px;
  top: 0;
  left: 25%;
  z-index: 0;
  @media only screen and (min-width: 600px) {
    display: none;
  }
  @media only screen and (max-width: 420px) {
    left: 0%;
  }
`;
export const Raspored = styled.div`
  position: relative;
  width: 100%;
  height: 260px;
  margin-top: 83px;
  padding-top: 30px;
  padding-bottom: 30px;
  overflow: hidden;
  /* padding: 26px 75px 49px 75px; */
  /* background-image: url(${trkac});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover; */
  background: linear-gradient(0deg, #d75733, #d75733);
  z-index: 0;
  @media only screen and (max-width: 600px) {
    height: 590px;
  }
  @media only screen and (max-width: 420px) {
    height: 590px;
  }
`;
export const RasporedWrap = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-around;
  text-align: left;
  flex-wrap: wrap;
`;
export const WrapNaslovRaspored = styled.div`
  width: 90%;
  height: auto;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media only screen and (max-width: 420px) {
    padding-top: 15px;
  }
`;
export const Clanarina = styled.div`
  width: 70%;
  height: 270px;
  font-family: "Montserrat", sans-serif;
  font-size: 21px;
  text-align: center;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 600px) {
    width: 85%;
    height: 220px;
  }
  @media only screen and (max-width: 420px) {
    font-size: 14px;
  }
`;
export const Box = styled.div`
  width: 13%;
  min-width: 150px;
  font-family: "Montserrat", sans-serif;
  min-height: 105px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* background-color: rgba(255, 255, 255, 0.13); */
  & p {
    font-size: 12px;
  }
  @media only screen and (max-width: 600px) {
    margin: 15px 0;
  }
  @media only screen and (max-width: 420px) {
    min-width: 110px;
  }
`;

export const Zrake = styled.div`
  position: absolute;
  width: 600px;
  height: 600px;
  right: 0;
  top: -230px;
  opacity: 0.1;
  /* background-image: url(${nightRunZrake}); */
  /* background-position: center;
  background-repeat: no-repeat;
  background-size: cover; */
  /* background-color: black; */
  z-index: 2;
`;
