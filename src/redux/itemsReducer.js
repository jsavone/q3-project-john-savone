import { FETCH_ITEMS, CLAIM_ITEM, REMOVE_ITEM, ADD_ITEM } from './actions'

let initialState = []

export default (state=initialState, action) => {
  switch (action.type) {
    case FETCH_ITEMS:
      return [...action.payload]
    case CLAIM_ITEM:
      return [...action.payload]
    case REMOVE_ITEM:
      return [...action.payload]
    case ADD_ITEM:
      return [...action.payload]
    default:
      return state
  }
}
