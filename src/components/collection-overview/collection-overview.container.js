import { compose } from "redux";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { isCollectionLoaded } from "../../redux/store/shop/shop.selector";
import WithSpinner from "../with-spinner/with-spinner.component";
import CollectionOverview from "./collection-overview.component";

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !isCollectionLoaded(state),
});

const CollectionsOverviewContainer = connect(mapStateToProps)(
  WithSpinner(CollectionOverview)
);

export default CollectionsOverviewContainer;
