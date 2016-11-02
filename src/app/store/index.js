import { createStore, applyMiddleware, compose } from 'redux';
import createLogger from 'redux-logger';

import { createHashHistory } from 'history'

import routerMiddleware from './routerMiddleware'
import syncHistoryWithStore from './routerSync'
import { push } from '../actions/router'

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

store.dispatch(push(history.location))