import SHOP_DATA from '../../components/shop/shopData.js'

const INITIAL_STATE = {
  collections: SHOP_DATA //array of objects
}

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default shopReducer