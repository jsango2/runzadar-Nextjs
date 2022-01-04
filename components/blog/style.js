import styled from "styled-components";

export const WrapAll = styled.div`
  position: relative;
  width: 100%;
  height: 825px;
  padding-top: 80px;
  z-index: 3;
  overflow: hidden;
  background-color: #151520;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  & .slick-next {
    right: -40px !important;
    height: 110px !important;
    z-index: 20 !important;
    top: 38% !important;
  }
  & .slick-prev {
    left: -40px !important;
    height: 110px !important;
    z-index: 20 !important;
    top: 38% !important;
  }
  & .slick-slider {
    width: 90% !important;
    margin: 0 auto !important;
  }
  & .slick-next:before,
  .slick-prev:before {
    display: none;
  }
`;

export const WrapTestimonial = styled.div`
  position: relative;

  height: 405px;
  margin: 0 auto;
  display: flex;
`;
export const Naslov = styled.h3`
  position: relative;
  margin: 50px auto 120px auto;

  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: 700;
  color: white;
  font-size: 42px;
  text-align: center;
  line-height: 120%;
  z-index: 5;
  background: #151520;
  width: 380px;
  @media only screen and (max-width: 420px) {
    font-size: 26px;
  }
`;

export const Card = styled.div`
  position: relative;
  width: 400px;
  height: 324px;
  margin: 0 auto;
  border-radius: 39px;
  overflow: hidden;
  /* display: flex; */
  background: #fff4d8;
  cursor: pointer;
  @media only screen and (max-width: 420px) {
    width: 100%;
  }
  &:hover .coverPhoto2 {
    transform: scale(1.03);
  }
`;
export const Text = styled.div`
  font-size: 15px;
  font-weight: normal;
  padding: 10px 0 0 20px;
  width: 95%;
  color: black;
`;
export const Button = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  right: 20px;
  top: 48%;
  font-style: normal;
  font-weight: 600;
  font-size: 9.5px;
  line-height: 140%;
  text-align: right;
  text-transform: uppercase;
  color: #ffffff;
  align-items: center;
  padding: 7px 10px;
  z-index: 100;
`;
export const Naslov2 = styled.div`
  font-size: 18px;
  font-weight: normal;
  color: #212121;
  margin-top: 10px;
`;
export const Foto = styled.div`
  height: 200px;
  overflow: hidden;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
export const ReadMore = styled.div`
  position: absolute;
  bottom: 20px;
  cursor: pointer;
  right: 30px;
  font-size: 12px;
  font-weight: 600;
  color: #383691;
`;
