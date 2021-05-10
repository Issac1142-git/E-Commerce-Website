import React from "react";
import { CustomButton } from "./custom-button.styles";
import "./custom-button.styles.scss";

const customButton = ({ children, ...props }) => {
  return <CustomButton {...props}>{children}</CustomButton>;
};

export default customButton;
