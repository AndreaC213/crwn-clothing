import React from 'react';
import { Route } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';
import { selectIsCollectionsFetching, selectIsCollectionsLoaded } from '../../redux/shop/shop.selectors';

import WithSpinner from '../../components/with-spinner/with-spinner.component';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionsPageWithSpinner = WithSpinner(CollectionPage);

// update shopPage as non-connect component
// will create child component of the shopPage be connected
// get the current path by passing 'match' the former path as props
// using categoryId as parameter for path
// invert 'isCollectionsLoaded' to get the correct isLoading State
class ShopPage extends React.Component{
    componentDidMount() {
        const { fetchCollectionsStartAsync } = this.props;
        fetchCollectionsStartAsync();
    }

    render() {
        const { match, isCollectionsFetching, isCollectionsLoaded } = this.props;
        return(
            <div className='shop-page'>
                <Route 
                    exact path={`${match.path}`} 
                    render={(props) => 
                    <CollectionsOverviewWithSpinner isLoading={isCollectionsFetching} {...props} />} />
                <Route 
                    path={`${match.path}/:collectionId`} 
                    render={(props) =>
                    <CollectionsPageWithSpinner isLoading={!isCollectionsLoaded} {...props} /> }
                />
            </div>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    isCollectionsFetching: selectIsCollectionsFetching,
    isCollectionsLoaded: selectIsCollectionsLoaded
});

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);