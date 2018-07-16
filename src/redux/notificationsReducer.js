import { FETCH_NOTIFICATIONS } from './actions'

let initialState = []

export default (state=initialState, action) => {
  switch (action.type) {
    case FETCH_NOTIFICATIONS:
      return [...action.payload]

    default:
      return state
  }
}
