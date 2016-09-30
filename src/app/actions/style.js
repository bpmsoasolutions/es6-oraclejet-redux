import {CHANGE_WIDTH, CHANGE_HEIGHT, CHANGE_COLOR} from '../constants/style'

function changeWidth(width){
    return {
        type: CHANGE_WIDTH,
        payload:width
    }
}

function changeHeight(height){
    return {
        type: CHANGE_HEIGHT,
        payload:height
    };
}

function changeColor(color) {
    return {
        type: CHANGE_COLOR,
        payload:color
    }
}

export default {
    changeWidth,
    changeHeight,
    changeColor
}