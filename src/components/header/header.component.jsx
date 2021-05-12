import React from "react";
import { connect } from "react-redux";
import { ReactComponent as Logo } from "../../assets/images/crown/crown.svg";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { toggleCartIcon } from "../../redux/store/cart/cart.actions";
import { selectCurrentUser } from "../../redux/store/user/user.reselect";
import { selectCartHidden } from "../../redux/store/cart/cart.selector";
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionDiv,
  OptionLink,
} from "./header.styles";
import "./header.styles.scss";
import { signoutStart } from "../../redux/store/user/user.actions";

const header = ({ currentUser, hidden, signout }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to="/shop">SHOP</OptionLink>
      <OptionLink to="/contact">CONTACT</OptionLink>
      {currentUser ? (
        <OptionDiv onClick={signout}>SIGNOUT</OptionDiv>
      ) : (
        <OptionLink to="/signin">SIGNIN</OptionLink>
      )}
      <CartIcon onClick={toggleCartIcon} />
    </OptionsContainer>
    {hidden ? null : <CartDropdown />}
  </HeaderContainer>
);

const mapStateToProps = (state) => {
  return {
    currentUser: selectCurrentUser(state),
    hidden: selectCartHidden(state),
  };
};

const mapDispatchToProps = (dispatch) => ({
  signout: () => dispatch(signoutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(header);
