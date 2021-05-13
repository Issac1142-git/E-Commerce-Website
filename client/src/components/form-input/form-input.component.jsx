import React from "react";
import "./form-input.styles.scss";

const formInput = ({ onChanged, label, ...otherProps }) => (
  <div className="group">
    <input onChange={onChanged} {...otherProps} className="form-input"></input>
    {label ? (
      <label
        className={`${
          otherProps.value.length ? "shrink" : ""
        } form-input-label`}
      >
        {label}
      </label>
    ) : null}
  </div>
);

export default formInput;
