import { createSelector } from 'reselect'



const selectShop = (state) => state.shop


export const selectShopCollections = createSelector(
  [selectShop],
  shop => shop.collections
)

export const selectCollectionsForPreview = createSelector(
  [selectShopCollections],
  collections => {
    return collections?Object.keys(collections).map(key => collections[key]):[]
  }
)

export const selectCollection = collectionUrlParam => {
  return (
    createSelector(
      [selectShopCollections],
      collections => (collections?collections[collectionUrlParam]:null)

    )
  )
}