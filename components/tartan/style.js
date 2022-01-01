import styled from "styled-components"
import vrataFosa from "../../images/vrataFosa.png"

// import { HeroWrap } from "./style.js"
export const WrapAll = styled.div`
  position: relative;
  width: 100%;
  height: 610px;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-position: 50% 90%;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #151520;
`

export const Naslov = styled.div`
  width: 62%;
  margin-top: 25px;
  margin-bottom: 65px;
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 120%;
  text-align: center;
  color: #ffffff;
  z-index: 5;
  @media only screen and (max-width: 600px) {
    font-size: 26px;
  }
  @media only screen and (max-width: 420px) {
    width: 80%;

    font-size: 20px;
  }
`
export const Overlay = styled.div`
  position: absolute;
  height: 192px;
  width: 100%;
  bottom: -5px;
  /* Gradient skroz plavi */

  background: linear-gradient(180deg, #0f162b 18.24%, rgba(15, 21, 43, 0) 100%);
  transform: rotate(-180deg);
`
