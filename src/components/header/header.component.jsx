import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/images/crown/crown.svg";
import "./header.styles.scss";

const header = () => (
  <div className="header">
    <Link to="/" className="logo-container">
      <Logo />
    </Link>
    <div className="options">
      <Link to="/shop" className="option">
        SHOP
      </Link>
      <Link to="/contact" className="option">
        CONTACT
      </Link>
    </div>
  </div>
);

export default header;
