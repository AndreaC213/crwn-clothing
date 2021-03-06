import React from 'react';
import { connect } from 'react-redux';

import CollectionItem from '../../components/collection-item/collection-item.component';

import { selectCollection } from '../../redux/shop/shop.selectors';

import {
  CollectionPageContainer,
  CollectionTitle,
  CollectionItemsContainer
} from './collection.styles';

// then pass match params to selectors 
const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
  return (
  <CollectionPageContainer>
    <CollectionTitle>{title}</CollectionTitle>
    <CollectionItemsContainer>
      {items.map(item => (
        <CollectionItem key={item.id} item={item} />
      ))}
    </CollectionItemsContainer>
  </CollectionPageContainer>
  );
};

// using the component props by 'ownProps'
// needs a part of the state depending on the URL parameter
const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);