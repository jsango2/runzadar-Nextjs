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
  width: 300px;
  @media only screen and (max-width: 420px) {
    font-size: 26px;
  }
`;
export const Naslov2 = styled.h3`
  position: relative;
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  color: white;
  margin: 54px 0 0 0;
  font-weight: 700;
  font-size: 30px;
  line-height: 120%;
  z-index: 5;
  @media only screen and (max-width: 420px) {
    font-size: 20px;
    margin: 54px 0 0 10px;
  }
`;

export const WrapTreneri = styled.div`
  position: relative;
  width: 90%;
  height: auto;
  margin: 125px auto 100px auto;
  z-index: 2;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 700px) {
    flex-direction: column;
    height: auto;
    width: 95vw;
    margin: 125px auto 0 auto;
    align-items: center;
  }
`;
export const Trener = styled.div`
  position: relative;
  width: 45vw;
  max-width: 570px;
  /* height: 100%; */
  display: flex;
  flex-direction: column;
  color: #ffffff;
  transition: opacity 1s, top 1s ease-out;
  margin: 0 15px;
  @media only screen and (max-width: 700px) {
    margin-top: 50px;
  }
  @media only screen and (max-width: 600px) {
    width: 90%;
    margin-bottom: 60px;
  }
  @media only screen and (max-width: 420px) {
    width: 100%;
    padding: 0 25px;
  }
`;
export const Text = styled.div`
  font-family: Montserrat, sans-serif;

  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 145%;
  letter-spacing: 0.5px;
  color: #ffffff;
  margin-top: 20px;
  width: 100%;
  @media only screen and (max-width: 420px) {
    margin-left: 10px;
  }
`;
