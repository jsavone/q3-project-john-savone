import { FETCH_NOTIFICATIONS, DELETE_NOTIFICATION, CREATE_NOTIFICATION } from './actions'

let initialState = []

export default (state=initialState, action) => {
  switch (action.type) {
    case FETCH_NOTIFICATIONS:
      return [...action.payload]
    case CREATE_NOTIFICATION:
      return [...action.payload]
    case DELETE_NOTIFICATION:
      return [...action.payload]
    default:
      return state
  }
}
