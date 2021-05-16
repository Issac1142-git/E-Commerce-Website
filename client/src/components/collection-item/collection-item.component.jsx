import React from "react";
import { Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import CustomButton from "../custom-button/custom-button.component";
import { addItems } from "../../redux/store/cart/cart.actions";
import "./collection-item.styles.scss";
import { selectCurrentUser } from "../../redux/store/user/user.reselect";

const collectionItem = ({ item, addItems, user, history }) => {
  const { name, imageUrl, price } = item;
  const handleClick = () => {
    {
      user ? addItems(item) : history.push("/signin");
    }
  };
  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price"> ₹{price}</span>
      </div>
      <CustomButton type="button" inverted onClick={handleClick}>
        Add to cart
      </CustomButton>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: selectCurrentUser(state),
});

const mapDispatchToProps = (dispatch) => {
  return {
    addItems: (item) => {
      dispatch(addItems(item));
    },
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(collectionItem)
);
