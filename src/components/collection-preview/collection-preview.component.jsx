import React from 'react';
import CollectionItem from '../collection-item/collection-item.component'; 
import './collection-preview.styles.scss';

// addItem
// step 8. have current collection access all the item objects
const CollectionPreview = ({ title, items }) => (
    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {items
              .filter((item, idx) => idx < 4)
              .map(item => (
                <CollectionItem key={item.id} item={item} />
            ))}

        </div>
    </div>
);

export default CollectionPreview;