import {CHANGE_COLOR,CHANGE_WIDTH,CHANGE_HEIGHT} from '../constants/style'

const initialState = {
    color: '',
    width: 0,
    height: 0
}

function isInvalidNumeric(input){
    return (isNaN(input));
}

export default function styleReducer(state = initialState, action){
    switch (action.type) {
        case CHANGE_COLOR:
            return Object.assign({}, state, {color: action.payload})
        case CHANGE_WIDTH:
            return Object.assign({}, state, {width: action.payload})
        case CHANGE_HEIGHT:
            return Object.assign({}, state, {height: action.payload})
        default:
            return state
    }
}

export function getStyleErrors(state){
    let errors = []

    if (isInvalidNumeric(state.width)){
        errors.push('Width is not a valid number')
    }

    if (isInvalidNumeric(state.height)){
        errors.push('Height is not a valid number')
    }

    return errors
}

export function getStyleProps({color, width, height}){
    return { color, width, height }
}