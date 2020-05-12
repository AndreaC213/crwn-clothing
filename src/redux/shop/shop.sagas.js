import { takeEvery } from 'redux-saga/effects';

import ShopActionTypes from './shop.types';

export function* fetchCollectionsAsync() {
  yield console.groupCollapsed('I am fired');
}

// takeEvry is a function for listening the action 
// second parameter is
// another generator() will response to current 
// takeEvery Listener to trigger more code to run
export function* fetchCollectionsStart() {
  yield takeEvery(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
 );
}