import React from "react";
import { connect } from "react-redux";
import CustomButton from "../custom-button/custom-button.component";
import { addItems } from "../../redux/store/cart/cart.actions";
import "./collection-item.styles.scss";

const collectionItem = ({ item, addItems }) => {
  const { name, imageUrl, price } = item;
  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">Rs{price}</span>
      </div>
      <CustomButton inverted onClick={() => addItems(item)}>
        Add to cart
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addItems: (item) => {
      dispatch(addItems(item));
    },
  };
};

export default connect(null, mapDispatchToProps)(collectionItem);
