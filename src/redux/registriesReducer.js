import { FETCH_REGISTRIES, CREATE_REGISTRY } from './actions'

let initialState = []

export default (state=initialState, action) => {
  switch (action.type) {
    case FETCH_REGISTRIES:
      return [...action.payload]
    case CREATE_REGISTRY:
      return [...action.payload]
    default:
      return state
  }
}
