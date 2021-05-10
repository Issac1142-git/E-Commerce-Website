import { createSelector } from "reselect";

const shopSelector = (state) => state.shop;

export const collectionItemSelector = createSelector(
  [shopSelector],
  (shop) => shop.collections
);

export const selectCollection = (collectionUrlParam) =>
  createSelector(
    [collectionItemSelector],
    (collections) => collections[collectionUrlParam]
  );

export const selectCollectionForPreview = createSelector(
  [collectionItemSelector],
  (collections) => Object.keys(collections).map((key) => collections[key])
);
