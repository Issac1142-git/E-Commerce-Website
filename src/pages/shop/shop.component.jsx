import React, { Component } from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import { fetchingCollectionsAsync } from "../../redux/store/shop/shop.actions";
import CollectionOverviewContainer from "../../components/collection-overview/collection-overview.container";
import CollectionPageContainer from "../../components/collection-page/collection-page.container";

class ShopPage extends Component {
  componentDidMount() {
    const { fetchingCollectionsAsync } = this.props;
    fetchingCollectionsAsync();
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
    fetchingCollectionsAsync: () => dispatch(fetchingCollectionsAsync()),
  };
};

export default connect(null, mapDispatchToProps)(ShopPage);
