import styled, { css } from "styled-components";

const isGoogleSignin = css`
  color: white;
  background-color: #4285f4;

  &:hover {
    border: none;
    background-color: #357ae8;
  }
`;

const inverted = css`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;

const buttonStyles = css`
  background-color: black;
  color: white;
  border: none;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;
const getButtonStyles = (props) => {
  if (props.isGoogleSignin) {
    return isGoogleSignin;
  }
  return props.inverted ? inverted : buttonStyles;
};

export const CustomButton = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: "Open Sans Condensed";
  font-weight: bolder;
  cursor: pointer;
  display: flex;
  justify-content: center;

  ${getButtonStyles}
`;
