//this is a kind of middleware bet action and root reducer
import { createStore, applyMiddleware } from 'redux'
import { persistStore } from 'redux-persist'
import logger from 'redux-logger'

import rootReducer from './root-reducer'


const middlewares = [logger]


const store = createStore(rootReducer, applyMiddleware(...middlewares))
// console.log(rootReducer)

const persistor = persistStore(store)

export { store, persistor }