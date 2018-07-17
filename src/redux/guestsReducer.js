import { FETCH_GUESTS, CREATE_GUEST } from './actions'

let initialState = []

export default (state=initialState, action) => {
  switch (action.type) {
    case FETCH_GUESTS:
      return [...action.payload]
    case CREATE_GUEST:
      return [...action.payload]
    default:
      return state
  }
}
