import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { selectIsCollectionsFetching } from '../../redux/shop/shop.selectors';
import WithSpinner from '../with-spinner/with-spinner.component';
import CollectionsOverview from './collections-overview.component';

// the name of props have to match the name inside of 'withSpinner'
const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionsFetching
});

// connect the 'mapStateToProps' and 'WithSpinner'
// then wrapped the current 'WithSpinner' inside of 
// 'CollectionsOverview' by using compose
const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionsOverview);

export default CollectionsOverviewContainer;

