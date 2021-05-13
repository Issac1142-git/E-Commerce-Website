import React from "react";
import { connect } from "react-redux";
import { selectCollection } from "../../redux/store/shop/shop.selector";
import CollectionItem from "../collection-item/collection-item.component";
import "./collection-page.styles.scss";

const collectionPage = ({ collections }) => {
  // console.log(collections);
  const { title, items } = collections;
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    collections: selectCollection(ownProps.match.params.collectionId)(state),
  };
};
export default connect(mapStateToProps)(collectionPage);
