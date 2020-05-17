import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectDirectorySections } from '../../redux/directory/directory.selectors';

import MenuItem from '../menu-item/menu-item.component';

import { DirectoryMenuContainer } from './directory.styles';

const Directory = ({ sections }) =>(
  <DirectoryMenuContainer>
    {sections.map(({ id, ...otherSectionProp }) => (
      <MenuItem key={id} {...otherSectionProp}/>
    ))}
  </DirectoryMenuContainer>
);

// improve performance by using selector 
const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);