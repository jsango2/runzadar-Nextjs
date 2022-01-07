import styled from "styled-components";

// import { HeroWrap } from "./style.js"
export const WrapAll = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: auto;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  background-color: #151520;
  @media only screen and (max-width: 700px) {
    padding-bottom: 40px;
  }
`;

export const Naslov = styled.h3`
  position: relative;
  margin-top: 120px;
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 700;
  color: white;
  font-size: 42px;
  text-align: center;
  line-height: 120%;
  z-index: 5;
  background: #151520;
  width: 400px;
  @media only screen and (max-width: 420px) {
    font-size: 26px;
  }
`;

export const WrapSponzori = styled.div`
  margin: 70px 0;
  position: relative;
  width: 90%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background-color: #171722;
  border-radius: 20px;
  padding: 30px;
  /* @media only screen and (max-width: 700px) {
    flex-direction: column;
    height: auto;
    width: 95vw;
    margin: 125px auto 0 auto;
    align-items: center;
  } */
`;
export const SponzorBox = styled.div`
  position: relative;
  width: 11%;
  min-width: 150px;
  /* min-height: 180px;  */
  /* border: 1px solid red; */
  height: 100px;
  display: flex;
  flex-direction: column;
  color: #ffffff;
  transition: opacity 2s ease-in;
  margin: 15px 15px;
  margin: 20px 40px;
  filter: grayscale(1);
  opacity: 0.6;
  /* @media only screen and (max-width: 700px) {
    margin-top: 50px;
  }
  @media only screen and (max-width: 600px) {
    width: 90%;
    margin-bottom: 60px;
  }
  @media only screen and (max-width: 420px) {
    width: 100%;
    padding: 0 25px;
  } */
`;
