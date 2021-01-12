//this is a kind of middleware bet action and root reducer
import { createStore, applyMiddleware } from 'redux'
import { persistStore } from 'redux-persist'
import logger from 'redux-logger'
// import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'


import rootReducer from './root-reducer'
import rootSaga from './root-saga'

const sagaMiddleware = createSagaMiddleware()

const middlewares = [sagaMiddleware]

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger)
}


const store = createStore(rootReducer, applyMiddleware(...middlewares))
// console.log(rootReducer)


sagaMiddleware.run(rootSaga)

const persistor = persistStore(store)

export { store, persistor }