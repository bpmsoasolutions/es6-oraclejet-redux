import { CALL_HISTORY_METHOD, LOCATION_CHANGE } from './constants'

import syncHistoryWithStore from './sync'
import { routerReducer } from './reducer'

import {
  push, replace, go, goBack, goForward,
  routerActions
} from './actions'
import routerMiddleware from './middleware'

export {
    syncHistoryWithStore,

    LOCATION_CHANGE, routerReducer,

    CALL_HISTORY_METHOD,
    push, replace, go, goBack, goForward,
    routerActions,

    routerMiddleware
}