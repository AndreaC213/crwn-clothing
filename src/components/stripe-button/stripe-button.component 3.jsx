import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

// cent for the price unit
const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_rk4JQrlBkDI6BTSnS3HYzptP00gJRL1Hs9'

  const onToken = token => {
    console.log(token);
    alert('Payment Successful')
  }


  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://sendeyo.com/up/d/f3eb2117da'
      description={`Your total is $${price}`}
      anount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;