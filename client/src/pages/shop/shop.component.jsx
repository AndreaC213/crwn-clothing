import React, { useEffect, lazy, Suspense }from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

import Spinner from '../../components/spinner/spinner.component';

import { ShopPageContainer } from './shop.styles';

const CollectionsOverviewContainer = lazy(() =>
  import('../../components/collections-overview/collections-overview.container')
);

const CollectionPageContainer = lazy(() =>
  import('../collection/collection.container')
);

// update shopPage as non-connect component
// will create child component of the shopPage be connected
// get the current path by passing 'match' the former path as props
// using categoryId as parameter for path
// invert 'isCollectionsLoaded' to get the correct isLoading State
const ShopPage = ({ fetchCollectionsStart, match }) => {
    useEffect(() => {
        fetchCollectionsStart();
    }, [fetchCollectionsStart]);
    
    return (
    <ShopPageContainer>
        <Suspense fallback={<Spinner />}>
            <Route
            exact
            path={`${match.path}`}
            component={CollectionsOverviewContainer}
            />
            <Route
            path={`${match.path}/:collectionId`}
            component={CollectionPageContainer}
            />
        </Suspense>
    </ShopPageContainer>
    );
};

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(null, mapDispatchToProps)(ShopPage);