import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

import { updateCollections } from '../../redux/shop/shop.actions';

import WithSpinner from '../../components/with-spinner/with-spinner.component';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionsPageWithSpinner = WithSpinner(CollectionPage);

// update shopPage as non-connect component
// will create child component of the shopPage be connected
// get the current path by passing 'match' the former path as props
// using categoryId as parameter for path
class ShopPage extends React.Component{
    state = {
        loading: true
    };

    unsubscribeFromSnapshot = null;

    componentDidMount() {
        const { updateCollections } = this.props;
        const collectionRef = firestore.collection('collections');

        fetch('https://firestore.googleapis.com/v1/projects/crwn-db-bd24a/databases/(default)/documents/collections')
        .then(response => response.json())
        .then(collections => console.log(collections))

        collectionRef.get().then(snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            updateCollections(collectionsMap);
            this.setState({ loading: false });
        }); 
    }

    render() {
        const { match } = this.props;
        const { loading } = this.state;
        return(
            <div className='shop-page'>
                <Route 
                    exact path={`${match.path}`} 
                    render={(props) => 
                    <CollectionsOverviewWithSpinner isLoading={loading} {...props} />} />
                <Route 
                    path={`${match.path}/:collectionId`} 
                    render={(props) =>
                    <CollectionsPageWithSpinner isLoading={loading} {...props} /> }
                />
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap => 
    dispatch(updateCollections(collectionsMap))
})

export default connect(null, mapDispatchToProps)(ShopPage);