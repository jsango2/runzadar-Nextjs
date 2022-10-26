import React from "react";

import { ButtonWrap, ButtonText } from "./style.js";

const Button = ({
  title,
  width,
  height,
  colorText,
  fontSize,
  fontWeight,
  backgroundColor,
  prijavaLink,
}) => {
  return (
    <ButtonWrap
      style={{
        width: `${width}px`,
        height: `${height}px`,
        backgroundColor: backgroundColor ? `${backgroundColor}` : "",
      }}
    >
      <ButtonText
        style={{
          color: `${colorText}`,
          fontSize: `${fontSize}px`,
          fontWeight: `${fontWeight}`,
        }}
      >
        {title}
      </ButtonText>
    </ButtonWrap>
  );
};

export default Button;
