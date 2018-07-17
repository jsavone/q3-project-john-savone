import { createStore, applyMiddleware, combineReducers } from 'redux'
import registries from './registriesReducer.js'
import products from './productsReducer.js'
import guests from './guestsReducer.js'
import notifications from './notificationsReducer.js'
import items from './itemsReducer.js'
import thunk from 'redux-thunk'


const rootReducer = combineReducers({
  registries,
  products,
  notifications,
  guests,
  items
})

export default () => createStore(rootReducer, applyMiddleware(thunk))
