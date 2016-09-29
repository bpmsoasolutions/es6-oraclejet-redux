import {combineReducers} from 'redux'
import reduxLogger from 'redux-logger'
import style, * as styleSelectors from './style'

const rootReducer = combineReducers({
    style
})

export default rootReducer

export const getStyleErrors = (state)=>styleSelectors.getStyleErrors(state.style)
export const getStyleProps = (state)=>styleSelectors.getStyleProps(state.style)


/*
const widthError = "Width should be numeric";
const heightError = "Height should be numeric";

const reducerMap = new Map();

function changeWidth(initialState, width) {
    if(isValidNumeric(width)){
        return updatedErrorState(initialState, widthError, "width");
    }

    const errors = removeError(initialState.errors, widthError);
    return Object.assign({}, initialState, {width,errors});
}

function changeHeight(initialState, height) {
    if(isValidNumeric(height)){
        return updatedErrorState(initialState, heightError, "height");
    }

    const errors = removeError(initialState.errors, heightError);
    return Object.assign({}, initialState, {height, errors});
}

function isValidNumeric(input){
    return (!input || isNaN(input));
}

function updatedErrorState(initialState, error, resetValue){
    const errors = (initialState.errors ? addError(initialState.errors, error) : [error]);
    return Object.assign({}, initialState, {errors, [resetValue]:0});
}

function addError(errors, newError){
    if(errors.indexOf(newError) !== -1) return errors;
    return [].concat(errors, [newError]);
}

function removeError(errors, errorToRemove){
    if(!errors) return [];

    const index = errors.indexOf(errorToRemove);
    if(index === -1) return errors;

    return [].concat(errors.slice(0, index), errors.slice(index+1));
}


function changeColor(initialState, color){
    return Object.assign({}, initialState, {"color":color});
}

reducerMap.set(ActionTypes.CHANGE_WIDTH, changeWidth);
reducerMap.set(ActionTypes.CHANGE_HEIGHT, changeHeight);
reducerMap.set(ActionTypes.CHANGE_COLOR, changeColor);

export default function rootReducer(initialState = {}, action){
    console.log(action)
    return reducerMap.has(action.type) ? reducerMap.get(action.type)(initialState, action.payload) : initialState;
}*/