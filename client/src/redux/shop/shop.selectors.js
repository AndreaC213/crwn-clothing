import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

// we want to map the key and get the corresponded object of that key
export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  collections => 
    collections ? Object.keys(collections).map(key => collections[key]) : []
);

// find collection.id matching the url params of 
// the current collection id map
// Data Normalization by passing as objects not array
export const selectCollection = collectionUrlParam => 
  createSelector(
    [selectCollections],
    collections => (collections ? collections[collectionUrlParam] : null)
);

export const selectIsCollectionFetching = createSelector(
  [selectShop],
  shop => shop.isFetching
);

// ' !!shop.collections ' means if the collections is
// loaded will return false
// because is not empty string {}
export const selectIsCollectionsLoaded = createSelector(
  [selectShop],
  shop => !!shop.collections
);