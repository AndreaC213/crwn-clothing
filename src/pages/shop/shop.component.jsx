import React from 'react';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component'

// update shopPage as non-connect component
// will create child component of the shopPage be connected
const ShopPage =({ collections }) => (
    <div className='shop-page'>
        <CollectionsOverview/>
    </div>
);

export default ShopPage;