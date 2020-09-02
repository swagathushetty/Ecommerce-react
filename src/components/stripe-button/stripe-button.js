import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckOutButton = ({ price }) => {
  const priceForStripe = price * 100
  const publishableKey = 'pk_test_51HMWktHQZwGB4LIRqxnmgUvVHhVf6s5S5g9uKeZg1BONpubxy5kl95W3Olx37Nug6yxoElSQyCDb9qpbfWPp8nNB009gTsxyJz'

  const onToken = (token) => {
    console.log(token)
    alert('payment successful')
  }
  return (
    <StripeCheckout
      label='Pay Now'
      name='Shetty Inc'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is ₹${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}


export default StripeCheckOutButton