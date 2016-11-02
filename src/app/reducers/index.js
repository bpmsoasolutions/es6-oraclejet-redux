import { combineReducers } from 'redux'
import reduxLogger from 'redux-logger'
import style, * as styleSelectors from './style'

import { routerReducer } from './router'

const rootReducer = combineReducers({
    style,
    router: routerReducer
})

export default rootReducer

//Router Seletor
export const getRouter = (state)=>state.router

// This are the place that knows where the specific reducers are conected in your global state
export const getStyleErrors = (state)=>styleSelectors.getStyleErrors(state.style)
export const getStyleProps = (state)=>styleSelectors.getStyleProps(state.style)