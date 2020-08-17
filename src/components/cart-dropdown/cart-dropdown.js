import React from 'react'
import CustomButton from '../custom-button/custom-button'

import './cart-dropdown.style.scss'


const CartDropDown = () => {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        <CustomButton>Go to checkout</CustomButton>
      </div>
    </div>
  )
}


export default CartDropDown