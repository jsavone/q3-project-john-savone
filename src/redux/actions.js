import axios from 'axios'

export const FETCH_NOTIFICATIONS = 'FETCH_NOTIFICATIONS'
export const FETCH_PRODUCTS = 'FETCH_PRODUCTS'
export const FETCH_REGISTRIES = 'FETCH_REGISTRIES'
export const FETCH_GUESTS = 'FETCH_GUESTS'
export const FETCH_ITEMS = 'FETCH_ITEMS'
export const CREATE_REGISTRY = 'CREATE_REGISTRY'
export const CREATE_GUEST = 'CREATE_GUEST'
export const CLAIM_ITEM = 'CLAIM_ITEM'
export const REMOVE_ITEM = 'REMOVE_ITEM'
export const ADD_ITEM = 'ADD_ITEM'
export const CREATE_NOTIFICATION = 'CREATE_NOTIFICATION'
export const DELETE_NOTIFICATION = 'DELETE_NOTIFICATION'


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

export const fetchGuests = () => {
  return( dispatch) => {
    axios.get('http://localhost:8000/registries/guests')
    .then((response) => {
      dispatch({
        type: FETCH_GUESTS,
        payload: response.data
      })
    })
  }
}

export const fetchItems = () => {
  return( dispatch) => {
    axios.get('http://localhost:8000/registries/items')
    .then((response) => {
      dispatch({
        type: FETCH_ITEMS,
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

export const createGuest = (guest) => {
  return( dispatch) => {
    axios.post('http://localhost:8000/registries/guests', guest)
    .then((response) => {
      dispatch({
        type: CREATE_GUEST,
        payload: response.data
      })
    })
  }
}

export const claimItem = (guest) => {
  return( dispatch) => {
    axios.patch(`http://localhost:8000/registries/items/claim/${guest.item_id}/${guest.guest_id}`)
    .then((response) => {
      dispatch({
        type: CLAIM_ITEM,
        payload: response.data
      })
    })
  }
}

export const removeItem = (id) => {
  return( dispatch) => {
    axios.delete(`http://localhost:8000/registries/items/remove/${id}`)
    .then((response) => {
      dispatch({
        type: REMOVE_ITEM,
        payload: response.data
      })
    })
  }
}

export const addItem = (item) => {
  return( dispatch) => {
    axios.post('http://localhost:8000/registries/items/add/', item)
    .then((response) => {
      dispatch({
        type: ADD_ITEM,
        payload: response.data
      })
    })
  }
}

export const createNotification = (item) => {
  return( dispatch) => {
    axios.post('http://localhost:8000/notifications', item)
    .then((response) => {
      dispatch({
        type: CREATE_NOTIFICATION,
        payload: response.data
      })
    })
  }
}

export const deleteNotification = (id) => {
  return( dispatch) => {
    axios.delete(`http://localhost:8000/notifications/${id}`)
    .then((response) => {
      dispatch({
        type: DELETE_NOTIFICATION,
        payload: response.data
      })
    })
  }
}
