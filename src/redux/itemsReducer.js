import { FETCH_ITEMS, CLAIM_ITEM } from './actions'

let initialState = []

export default (state=initialState, action) => {
  switch (action.type) {
    case FETCH_ITEMS:
      return [...action.payload]
    case CLAIM_ITEM:
      return [...action.payload]
    default:
      return state
  }
}
