import { call, put, takeLatest, all } from 'redux-saga/effects'
import { firestore, convertCollectionSnapShotToMap } from '../../firebase/firebase.utils'
import { fetchCollectionSuccess, fetchCollectionsFaliure } from './shop.actions'
import ShopActionTypes from './shop.types'


export function* fetchCollectionAsync() {
  yield console.log('I am fired')


  try {
    const collectionRef = firestore.collection('collections')

    const snapshot = yield collectionRef.get()

    const collectionsMap = yield call(convertCollectionSnapShotToMap, snapshot)

    yield put(fetchCollectionSuccess(collectionsMap))

  } catch (error) {
    yield put(fetchCollectionsFaliure(error.message))
  }



  // collectionRef.get().then(
  //   snapshot => {
  //     const collectionsMap = convertCollectionSnapShotToMap(snapshot)
  //     dispatch(fetchCollectionSuccess(collectionsMap))
  //   })
  //   .catch((err) => {
  //     dispatch(fetchCollectionsFaliure(err.message))
  //   })


}

export function* fetchCollectionStart() {
  yield takeLatest(ShopActionTypes.FETCH_COLLECTIONS_START, fetchCollectionAsync)
}

export function* shopSagas() {
  yield all([call(fetchCollectionStart)])
}