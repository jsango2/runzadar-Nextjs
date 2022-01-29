import styled from "styled-components";

export const WrapAll = styled.div`
  position: relative;
  width: 100%;
  height: 650px;
  padding-top: 50px;
  z-index: 3;
  overflow: hidden;
  background-color: #151520;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media only screen and (max-width: 600px) {
    height: 740px;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  width: 100%;
  z-index: 1;
  height: 124px;
  top: 0;
  background: linear-gradient(180deg, #0c101e 18.24%, rgba(15, 21, 43, 0) 100%);
`;
export const Social = styled.div`
  position: relative;
  width: 520px;
  margin-top: 65px;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 140%;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: #ffffff;

  cursor: pointer;
  @media only screen and (max-width: 520px) {
    flex-direction: column;
    width: 90%;
    text-align: center;
    height: 80px;
  }
  & a {
    color: white;
    text-decoration: none;
  }
`;
export const Social2 = styled.div`
  position: relative;
  width: 520px;
  margin-top: 145px;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 140%;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: #ffffff;

  @media only screen and (max-width: 520px) {
    flex-direction: column;
    width: 90%;
    text-align: center;
    height: 80px;
  }
  & a {
    color: white;
    text-decoration: none;
  }
`;

export const AnimationWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
