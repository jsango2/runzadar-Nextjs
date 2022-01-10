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
  @media only screen and (max-width: 420px) {
    left: -20px;
    justify-content: flex-start;
  }
`;
export const Frame = styled.div`
  position: relative;
  top: -550px;
  left: 40px;
  width: 480px;
  z-index: 10;
  height: 520px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  @media only screen and (max-width: 600px) {
    top: -523px;
    transform: rotate(-6deg);
    width: 66vw;
    height: 72vw;
  }
  @media only screen and (max-width: 500px) {
    top: -493px;
    transform: rotate(-6deg);
    width: 66vw;
    height: 72vw;
    left: 74px;
  }
  @media only screen and (max-width: 420px) {
    /* transform: rotate(2deg); */
    /* width: 91vw;
    height: 96vw; */
  }
`;
export const Slika = styled.div`
  width: 380px;
  height: 380px;
  position: relative;
  left: 90px;
  top: -85px;
  transform: rotate(8.8deg);

  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  @media only screen and (max-width: 600px) {
    transform: rotate(2deg);
    width: 51vw;
    height: 50vw;
    top: -144px;
    x: ;
    left: 95px;
  }
  @media only screen and (max-width: 550px) {
    transform: rotate(2deg);
    width: 50vw;
    height: 51v;
    top: -166px;

    left: 85px;
  }
  @media only screen and (max-width: 500px) {
    transform: rotate(2deg);
    width: 49vw;
    height: 51vw;
    top: -171px;
    left: 117px;
  }
  @media only screen and (max-width: 420px) {
    top: -104px;
    left: 85px;
  }
  @media only screen and (max-width: 380px) {
    width: 70vw;
    height: 67vw;
    top: -104px;
    left: 85px;
  }
  @media only screen and (max-width: 360px) {
    width: 70vw;
    height: 67vw;
    top: -114px;
    left: 80px;
  }
  @media only screen and (max-width: 310px) {
    width: 70vw;
    height: 67vw;
    top: -126px;
    left: 74px;
  }
`;
export const WrapFrame = styled.div`
  position: absolute;
  /* left: 33%;
  top: 2%; */
  width: 480px;
  height: 520px;
  @media only screen and (max-width: 600px) {
    top: 160px;
  }
  @media only screen and (max-width: 550px) {
    top: 196px;
  }
  @media only screen and (max-width: 420px) {
    top: 115px;
  }
  @media only screen and (max-width: 360px) {
    top: 155px;
  }
`;
