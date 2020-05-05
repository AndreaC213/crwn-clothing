import React from 'react';
import { Route } from 'react-router-dom';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component'
import CategoryPage from '../category/category.component';

// update shopPage as non-connect component
// will create child component of the shopPage be connected
// get the current path by passing 'match' the former path as props
const ShopPage =({ match }) => (
    <div className='shop-page'>
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route path={`${match.path}/:categoryId`} component={CategoryPage} />
    </div>
);

export default ShopPage;