import React from 'react';

import { SpinnerContainer, SpinnerOverlay } from './with-spinner.styles';


// using higher oder component to return a funtional component
const WithSpinner = WrappedComponent => ({ isLoading, ...otherProps }) => {
  return isLoading? (
    <SpinnerOverlay>
      <SpinnerContainer/>
    </SpinnerOverlay>
  ) : (
    <WrappedComponent {...otherProps} />
  );
};

export default WithSpinner;