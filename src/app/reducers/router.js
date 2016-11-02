/**
 * This action type will be dispatched when your history
 * receives a location change.
 */
import {LOCATION_CHANGE} from '../constants/router'

const {pathname, search, hash} = location
const initialState = {
  locationBeforeTransitions: {pathname, search, hash}
}

/**
 * This reducer will update the state with the most recent location history
 * has transitioned to. This may not be in sync with the router, particularly
 * if you have asynchronously-loaded routes, so reading from and relying on
 * this state is discouraged.
 */
export function routerReducer(state = initialState, { type, payload } = {}) {
  if (type === LOCATION_CHANGE) {
    return Object.assign({}, state, {locationBeforeTransitions: payload})
  }

  return state
}