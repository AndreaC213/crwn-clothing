import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';
import { addItem } from '../../redux/cart/cart.actions';

import './collection-item.styles.scss';

// destruct the collection preview to current props objects as 'item'
// addItem
// step 7. now current collection can access the 'item' objects
const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <div className='collection-item'>
        <div
          className='image'
          style={{
              backgroundImage: `url(${imageUrl})`
          }}
        />
        <div className='collection-footer'>
          <span className='name'>{ name }</span>
          <span className='price'>{ price }</span>
        </div>
        <CustomButton onClick={() => addItem(item)} inverted>
          Add to cart
        </CustomButton>
    </div>
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