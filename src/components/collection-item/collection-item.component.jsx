import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';
import { addItem } from '../../redux/cart/cart.actions';

import './collection-item.styles.scss';
import { dispatch } from 'rxjs/internal/observable/pairs';

// destruct the collection preview to current props objects
// access the item in this specific collection
const CollectionItem = ({ id, name, price, imageUrl, addItem }) => (
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
        <CustomButton inverted>Add to cart</CustomButton>
    </div>
);

// objects are written with curly braces {}
// many properties using {} to hold the value
//  var object = {properties: ""}
// dispatch the addItem actions to 'item' for reducer usage
// meaning addItem (prop at web page) as a prop function
// received the item as the pass in value into our 'addItem' properity
// action give us back that ob
const mapDispatchToProps = dispatch => ({
  // function within the properity
  addItem: item => dispatch(addItem(item))
})

// then passing the 'item' into CollectionItem (reducer) 
export default connect(null, mapDispatchToProps)(CollectionItem);