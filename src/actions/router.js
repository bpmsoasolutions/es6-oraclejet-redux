import {CHANGE_URL} from '../constants/router'

function changeUrl(url){
    return {
        type:CHANGE_URL,
        payload:url
    }
}

export default {
    changeUrl
}