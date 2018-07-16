import { FETCH_REGISTRIES } from './actions'

let initialState = []

export default (state=initialState, action) => {
  switch (action.type) {
    case FETCH_REGISTRIES:
      return [...action.payload]

    default:
      return state
  }
}
