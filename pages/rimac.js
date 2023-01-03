import lottieJson from "../components/v53.json";

import Lottie from "lottie-react";
import styled from "styled-components";

const Body = styled.div`
  position: relative;
  height: 12000vh;
  left: 0;
`;

const Wrap = styled.div`
  position: fixed;
  width: 500px;

  top: 30%;
  left: 50%;
  transform: translate(-50%, 0);
`;

const interactivity = {
  mode: "scroll",
  actions: [
    {
      visibility: [0.5, 0.6],
      type: "seek",
      frames: [0, 1700],
    },
  ],
};

const Rimac = () => {
  return (
    <Body>
      <Wrap>
        <Lottie animationData={lottieJson} interactivity={interactivity} />
      </Wrap>
    </Body>
  );
};

export default Rimac;
