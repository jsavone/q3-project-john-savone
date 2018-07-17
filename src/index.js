import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import store from './redux/store'
import App from './App';
import { fetchProducts,
         fetchNotifications,
         fetchRegistries,
         fetchGuests,
         fetchItems } from './redux/actions'
import { Provider } from 'react-redux'

let newStore = store()
newStore.dispatch(fetchProducts())
newStore.dispatch(fetchNotifications())
newStore.dispatch(fetchRegistries())
newStore.dispatch(fetchGuests())
newStore.dispatch(fetchItems())

ReactDOM.render(
  <Provider store={newStore}>
  <App />
  </Provider>

  , document.getElementById('root'));
