import {ActionTypes} from '../infrastructure/index'

function changeWidth(width){
    return {
        type:ActionTypes.CHANGE_WIDTH,
        payload:width
    }
}

function changeHeight(height){
    return {
        type:ActionTypes.CHANGE_HEIGHT,
        payload:height
    };
}

function changeColor(color) {
    return {
        type:ActionTypes.CHANGE_COLOR,
        payload:color
    }
}

export default {
    changeWidth,
    changeHeight,
    changeColor
}