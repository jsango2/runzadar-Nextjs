import styled from "styled-components";

export const WrapAll = styled.div`
  position: relative;
  width: 100%;
  height: 625px;
  z-index: 3;
  overflow: hidden;
  background-color: #151520;
  @media only screen and (max-width: 1000px) {
    height: 710px;
  }
  @media only screen and (max-width: 420px) {
    padding-top: 50px;
    height: 625px;
  }
  @media only screen and (max-width: 420px) {
  }
`;

export const Naslov = styled.div`
  font-family: Bangers;
  position: absolute;
  font-style: normal;
  font-weight: normal;
  font-size: 35px;
  line-height: 100%;
  text-align: center;
  color: #d75733;
  z-index: 11;
  @media only screen and (max-width: 1000px) {
    display: none;
  }
`;

export const PhotoOfTheDay = styled.div`
  display: flex;
  justify-content: Center;
  width: 30%;
  height: 70%;
  @media only screen and (max-width: 600px) {
    /* display: none; */
  }
`;
export const Text = styled.div`
  margin-top: 40px;
  font-family: Bangers, cursive;
  color: white;
  text-align: center;
  font-size: 61px;
  font-weight: normal;
  width: 272px;
  @media only screen and (max-width: 1000px) {
    /* display: none; */
    position: absolute;
    top: -207px;
    left: 50%;
    width: 456px;
    text-align: center;
    transform: translate(-46%, 0);
    font-size: 56px;
  }
  @media only screen and (max-width: 600px) {
    /* display: none; */
    position: absolute;
    top: -150px;
    left: 50%;
    transform: translate(-46%, 0);
    font-size: 36px;
  }
`;
export const Text2 = styled.div`
  margin-top: 40px;
  font-family: Bangers, cursive;
  color: white;
  text-align: center;
  font-size: 61px;
  font-weight: normal;
  width: 272px;
  /* @media only screen and (max-width: 1200px) {
    margin-left: 260px;
  } */
  @media only screen and (max-width: 1000px) {
    display: none;
  }
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;
export const PozadinaLinija = styled.div`
  position: relative;
  display: flex;
  justify-content: space-around;
  background-color: rgba(56, 255, 255, 0.05);
  padding-top: 70px;
  top: 130px;
  left: -100px;
  height: 332px;
  width: 110%;
  transform: rotate(-2.48deg);
  z-index: 10;
  @media only screen and (max-width: 1000px) {
    top: 220px;
    left: -50px;
  }
  @media only screen and (max-width: 500px) {
    left: -20px;
    left: -15px;
  }
  @media only screen and (max-width: 420px) {
    left: -20px;
    justify-content: flex-start;
  }
`;
