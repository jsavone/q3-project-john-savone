import axios from 'axios'

export const FETCH_NOTIFICATIONS = 'FETCH_NOTIFICATIONS'
export const FETCH_PRODUCTS = 'FETCH_PRODUCTS'
export const FETCH_REGISTRIES = 'FETCH_REGISTRIES'
export const CREATE_REGISTRY = 'CREATE_REGISTRY'

export const fetchNotifications = () => {
  return( dispatch) => {
    axios.get('http://localhost:8000/notifications')
    .then((response) => {
      dispatch({
        type: FETCH_NOTIFICATIONS,
        payload: response.data
      })
    })
  }
}

export const fetchProducts = () => {
  return( dispatch) => {
    axios.get('http://localhost:8000/products')
    .then((response) => {
      dispatch({
        type: FETCH_PRODUCTS,
        payload: response.data
      })
    })
  }
}

export const fetchRegistries = () => {
  return( dispatch) => {
    axios.get('http://localhost:8000/registries')
    .then((response) => {
      dispatch({
        type: FETCH_REGISTRIES,
        payload: response.data
      })
    })
  }
}

export const createRegistry = (registry) => {
  return( dispatch) => {
    axios.post('http://localhost:8000/registries', registry)
    .then((response) => {
      dispatch({
        type: CREATE_REGISTRY,
        payload: response.data
      })
    })
  }
}
