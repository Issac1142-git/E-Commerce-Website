import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/images/crown/crown.svg";
import { auth } from "../../firebase/firebase.utils";
import "./header.styles.scss";

const header = ({ currentUser }) => (
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
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGNOUT
        </div>
      ) : (
        <Link className="option" to="/signin">
          SIGNIN
        </Link>
      )}
    </div>
  </div>
);

export default header;
