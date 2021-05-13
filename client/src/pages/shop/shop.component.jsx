import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import { fetchingCollectionsStart } from "../../redux/store/shop/shop.actions";
import CollectionOverviewContainer from "../../components/collection-overview/collection-overview.container";
import CollectionPageContainer from "../../components/collection-page/collection-page.container";

const shopPage = ({ fetchingCollectionsStart, match }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    fetchingCollectionsStart();
  }, [fetchingCollectionsStart]);

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
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchingCollectionsStart: () => dispatch(fetchingCollectionsStart()),
  };
};

export default connect(null, mapDispatchToProps)(shopPage);
