import React from 'react';

import './custom-button.styles.scss';

// include props isGoogleSignIn to conditionally render 
// string interpreter for style class name google-sign-in
const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => (
    <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} 
    {...otherProps}
    >
      {children}
    </button>
);

export default CustomButton;