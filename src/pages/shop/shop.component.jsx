import React, { Component } from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import { fetchingCollectionsStart } from "../../redux/store/shop/shop.actions";
import CollectionOverviewContainer from "../../components/collection-overview/collection-overview.container";
import CollectionPageContainer from "../../components/collection-page/collection-page.container";

class ShopPage extends Component {
  componentDidMount() {
    const { fetchingCollectionsStart } = this.props;
    fetchingCollectionsStart();
  }

  render() {
    const { match } = this.props;

    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          component={CollectionOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchingCollectionsStart: () => dispatch(fetchingCollectionsStart()),
  };
};

export default connect(null, mapDispatchToProps)(ShopPage);
