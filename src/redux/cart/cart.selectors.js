//this file contains the functions that will filter down our required sub-state 
//from the overall state, preventing unnessary re-renders

import { createSelector } from 'reselect'


export const selectCart = state => state.cart

export const selectCartItems = createSelector(
  [selectCart], //we can remove array. its useful if we are passing 2 args
  (cart) => cart.cartItems
)

export const selectCartHidden = createSelector(
  [selectCart],
  cart => cart.hidden
)


export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems => cartItems.reduce((accumulatedQty, cartItem) => accumulatedQty + cartItem.quantity, 0)
)


export const selectCartTotal = createSelector(
  [selectCartItems],
  cartItems => cartItems.reduce((accumulatedQty, cartItem) => accumulatedQty + cartItem.quantity * cartItem.price, 0)

)