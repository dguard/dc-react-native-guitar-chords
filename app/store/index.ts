import { applyMiddleware, compose, createStore } from 'redux'
import { persistCombineReducers, persistStore } from 'redux-persist'
import AsyncStorage from '@react-native-community/async-storage'
import { createLogger } from 'redux-logger'
import createSagaMiddleware from 'redux-saga'

import rootReducers from 'store/reducers' // where reducers is a object of reducers
import sagas from 'store/sagas'

const config = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['loadingReducer', 'snakeReducer'],
  debug: true, //to get useful logging
}

const middleware = [] as any
const sagaMiddleware = createSagaMiddleware()

middleware.push(sagaMiddleware)

if (__DEV__) {
  middleware.push(createLogger())
}

const reducers = persistCombineReducers(config, rootReducers)
const enhancers = [applyMiddleware(...middleware)]
// const initialState = {};
const persistConfig: any = { enhancers }
const store = createStore(reducers, undefined, compose(...enhancers))
const persistor = persistStore(store, persistConfig, () => {
  console.log('Test', store.getState())
})
const configureStore = () => {
  return { persistor, store }
}

sagaMiddleware.run(sagas)

export default configureStore
