import React from 'react';

import { CustomButtonContainer } from './custom-button.styles';

// include props isGoogleSignIn to conditionally render 
// string interpreter for style class name google-sign-in
const CustomButton = ({ children, ...props }) => (
  <CustomButtonContainer {...props}>{children}</CustomButtonContainer>
);

export default CustomButton;