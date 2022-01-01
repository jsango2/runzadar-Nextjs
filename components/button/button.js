import React from "react"

import { ButtonWrap, ButtonText } from "./style.js"

const Button = ({
  title,
  width,
  height,
  colorText,
  fontSize,
  fontWeight,
  backgroundColor,
}) => {
  return (
    <ButtonWrap
      style={{
        width: `${width}px`,
        height: `${height}px`,
        background: backgroundColor ? `${backgroundColor}` : "#f9ff00",
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
  )
}

export default Button
