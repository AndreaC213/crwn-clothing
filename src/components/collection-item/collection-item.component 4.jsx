import React from 'react';
import { connect } from 'react-redux';

import { addItem } from '../../redux/cart/cart.actions';

import {
  CollectionItemContainer,
  CollectionFooterContainer,
  AddButton,
  BackgroundImage,
  NameContainer,
  PriceContainer
} from './collection-item.styles';

// destruct the collection preview to current props objects as 'item'
// addItem
// step 7. now current collection can access the 'item' objects
const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <CollectionItemContainer>
        <BackgroundImage className='image' imageUrl={imageUrl} />
        <CollectionFooterContainer>
          <NameContainer>{name}</NameContainer>
          <PriceContainer>{price}</PriceContainer>
        </CollectionFooterContainer>
        <AddButton onClick={() => addItem(item)} inverted>
          Add to cart
        </AddButton>
    </CollectionItemContainer>
  );
};

// addItem
// step 6. update collection item to pulls in to its props
// define the onClick '{ addItem }'  as '{ item }'  
// that return the payload and the type
// which dispatch actul action 'addItem'
// objects are written with curly braces {}
// many properties using {} to hold the value
//  var object = {properties: ""}
// dispatch the addItem actions to 'item' for reducer usage
// meaning addItem (prop at web page) as a prop function
// received the item as pass in value to current 'addItem' properity
// 'action' gives us back that object with 'type' and 'payload'
// function within the properity
const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

// then passing the 'item' into CollectionItem (reducer) 
export default connect(
  null,
  mapDispatchToProps
)(CollectionItem);