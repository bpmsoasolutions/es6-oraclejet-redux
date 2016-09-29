import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from '../reducers/index';
import connectFactory from './connectFactory'
import createLogger from 'redux-logger';

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(createLogger()),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
)

const connect = connectFactory(store)
export {
    store,
    connect
}