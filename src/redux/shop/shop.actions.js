import ShopActionTypes from './shop.types'
import { firestore, convertCollectionSnapShotToMap } from '../../firebase/firebase.utils'

export const fetchCollectionsStart = (collectionsMap) => {
  return {
    type: ShopActionTypes.FETCH_COLLECTIONS_START,
  }
}

export const fetchCollectionSuccess = (collectionsMap) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap
})

export const fetchCollectionsFaliure = errorMessage => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_FALIURE,
  payload: errorMessage
})

export const fetchCollectionsStartAsync = () => {
  return (dispatch) => {

    const collectionRef = firestore.collection('collections')
    dispatch(fetchCollectionsStart())


    collectionRef.get().then(
      snapshot => {
        const collectionsMap = convertCollectionSnapShotToMap(snapshot)
        dispatch(fetchCollectionSuccess(collectionsMap))
      })
      .catch((err) => {
        dispatch(fetchCollectionsFaliure(err.message))
      })

  }
}