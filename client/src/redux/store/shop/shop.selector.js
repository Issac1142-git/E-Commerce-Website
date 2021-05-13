import { createSelector } from "reselect";

const shopSelector = (state) => state.shop;

export const collectionItemSelector = createSelector(
  [shopSelector],
  (shop) => shop.collections
);

export const selectCollection = (collectionUrlParam) =>
  createSelector([collectionItemSelector], (collections) =>
    collections ? collections[collectionUrlParam] : []
  );

export const selectCollectionForPreview = createSelector(
  [collectionItemSelector],
  (collections) =>
    collections ? Object.keys(collections).map((key) => collections[key]) : null
);

export const isFetchingSelector = createSelector(
  [shopSelector],
  (shop) => shop.isFetching
);

export const errorSelector = createSelector(
  [shopSelector],
  (shop) => shop.error
);

export const isCollectionLoaded = createSelector(
  [shopSelector],
  // !!gives a Boolean value for given key exists or not
  (shop) => !!shop.collections
);
