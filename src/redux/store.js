import { createStore, applyMiddleware, combineReducers } from 'redux'
import registriesReducer from './registriesReducer.js'
import productsReducer from './productsReducer.js'
import notificationsReducer from './notificationsReducer.js'
import thunk from 'redux-thunk'


const rootReducer = combineReducers({
  registries: registriesReducer,
  products: productsReducer,
  notifications: notificationsReducer
})

export default () => createStore(rootReducer, applyMiddleware(thunk))
