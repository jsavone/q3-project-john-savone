import { FETCH_PRODUCTS } from './actions'

let initialState = []

export default (state=initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return [...action.payload]

    default:
      return state
  }
}
