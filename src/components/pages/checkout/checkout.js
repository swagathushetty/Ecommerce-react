import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import CheckoutItem from '../../checkout-item/checkout-item'
import StripeCheckoutButton from '../../stripe-button/stripe-button'

import { selectCartItems, selectCartTotal } from '../../../redux/cart/cart.selectors'

import './checkout.styles.scss'

const CheckoutPage = ({ cartItems, total }) => {
  return (
    <div className='checkout-page'>
      <div className="checkout-header">
        <div className="header-block">
          <span>product</span>
        </div>
        <div className="header-block">
          <span>description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>remove</span>
        </div>
      </div>
      {
        cartItems.map(cartItem => <CheckoutItem key={cartItem.id} cartItem={cartItem} />)
      }
      <div className="total"><span>₹{total}</span></div>
      <StripeCheckoutButton price={total} />
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
})


export default connect(mapStateToProps)(CheckoutPage)