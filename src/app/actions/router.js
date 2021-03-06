import { CALL_HISTORY_METHOD } from '../constants/router'

function updateLocation(method) {
  return (...args) => ({
    type: CALL_HISTORY_METHOD,
    payload: { method, args }
  })
}

export const push = updateLocation('push')
export const replace = updateLocation('replace')
export const go = updateLocation('go')
export const goBack = updateLocation('goBack')
export const goForward = updateLocation('goForward')

export const routerActions = { push, replace, go, goBack, goForward }