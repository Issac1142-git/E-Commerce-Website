import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { ReactComponent as Logo } from "../../assets/images/crown/crown.svg";
import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { toggleCartIcon } from "../../redux/store/cart/cart.actions";
import { selectCurrentUser } from "../../redux/store/user/user.reselect";
import { selectCartHidden } from "../../redux/store/cart/cart.selector";
import "./header.styles.scss";

const header = ({ currentUser, hidden }) => (
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
      <CartIcon onClick={toggleCartIcon} />
    </div>
    {hidden ? null : <CartDropdown />}
  </div>
);

const mapStateToProps = (state) => {
  return {
    currentUser: selectCurrentUser(state),
    hidden: selectCartHidden(state),
  };
};

export default connect(mapStateToProps)(header);
