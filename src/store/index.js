import { createStore, applyMiddleware, compose } from 'redux';
import createLogger from 'redux-logger';

import {createBrowserHistory} from 'history'
import { syncHistoryWithStore, routerMiddleware, push } from '../utils/router/index'

import rootReducer from '../reducers/index';
import connectFactory from './connectFactory'

const browserHistory = createBrowserHistory()

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(createLogger()),
        applyMiddleware(routerMiddleware(browserHistory)),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
)

const history = syncHistoryWithStore(browserHistory, store)
const connect = connectFactory(store)

export {
    store,
    connect,
    history
}

// Test Methods remains the final implementation
store.dispatch(push(`${location.pathname}${location.search}${location.hash}`))

browserHistory.listen((location, action) => {
    console.log(`The current URL is ${location.pathname}${location.search}${location.hash}`)
    console.log(`The last navigation action was ${action}`)
})