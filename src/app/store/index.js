import { createStore, applyMiddleware, compose } from 'redux';
import createLogger from 'redux-logger';

import { createHashHistory } from 'history'
import { syncHistoryWithStore, routerMiddleware, push } from '../utils/router/index'

import rootReducer, {getRouter} from '../reducers/index';
import connectFactory from './connectFactory'

const browserHistory = createHashHistory()

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(createLogger()),
        applyMiddleware(routerMiddleware(browserHistory)),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
)

const history = syncHistoryWithStore(browserHistory, store, {
        selectLocationState: getRouter
    }
)
const connect = connectFactory(store)

export {
    store,
    connect,
    history
}
// Test Methods remains the final implementation
store.dispatch(push(history.location))