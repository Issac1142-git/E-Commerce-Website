import React from "react";

import "./custom-button.styles.scss";

const customButton = ({
  children,
  inverted,
  isGoogleSignin,
  ...otherProps
}) => {
  return (
    <button
      className={`${inverted ? "inverted" : ""}${
        isGoogleSignin ? "google-sign-in" : ""
      } custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default customButton;
