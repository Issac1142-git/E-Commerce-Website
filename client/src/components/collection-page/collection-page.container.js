import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";

import { isCollectionLoaded } from "../../redux/store/shop/shop.selector";
import WithSpinner from "../with-spinner/with-spinner.component";
import CollectionPage from "./collection-page.component";

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !isCollectionLoaded(state),
});

const CollectionPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionPage);

export default CollectionPageContainer;
