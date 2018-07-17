import { FETCH_ITEMS } from './actions'

let initialState = []

export default (state=initialState, action) => {
  switch (action.type) {
    case FETCH_ITEMS:
      return [...action.payload]

    default:
      return state
  }
}
