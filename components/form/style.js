import React from "react"
import styled from "styled-components"

export const FormSection = styled.div`
  position: relative;
  padding: 120px 0 20px 0;
  width: 100%;
  height: auto;
  background-color: rgba(236, 236, 236, 0.327);
`
export const Heading = styled.div`
  font-size: 2rem;
  margin-bottom: 50px;
  font-weight: 700;
`
export const FormWrap = styled.div`
  position: relative;
  z-index: 5;
  padding: 120px 40px 80px 40px;
  margin: 0 auto 150px auto;
  width: 70%;
  font-size: 1rem;
  line-height: 2rem;
  text-align: center;
  border-radius: 5px;
  -webkit-box-shadow: 3px 4px 15px -4px rgba(0, 0, 0, 0.13);
  box-shadow: 3px 4px 15px -4px rgba(0, 0, 0, 0.13);
  background: #ffffff;
`
export const Form2 = styled.form`
  display: flex;
  flex-direction: column;
  width: 500px;
  margin: 0 auto;
`
export const RunZD = styled.div`
  position: absolute;
  z-index: 10;
  left: 50%;
  top: 0;
  transform: translate(-50%, -50%);
`
