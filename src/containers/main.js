import ko from 'knockout';
import { bindActionCreators } from 'redux'
import {connect} from "../store/index";
import * as actions from "../actions/style";
import {createSelector} from 'reselect'

import {getStyleProps, getStyleErrors} from '../reducers/index'

const mapActionsToDispatch = dispatch => bindActionCreators(actions, dispatch)

const mapStateToProps = createSelector(
    getStyleProps,
    getStyleErrors,
    (state)=>JSON.stringify(state),
    (style, errors, statePrint) => ({ style, errors, statePrint, hasErrors: errors ? true : false })
)

@connect(mapStateToProps, mapActionsToDispatch)
class MainViewModel {

    updateWidth(data, e){
        this.changeWidth(parseFloat(e.target.value))
    }

    updateHeight(data, e){
        this.changeHeight(parseFloat(e.target.value))
    }

    updateColor(data, e){
        this.changeColor(e.target.value)
    }

    getValueAsInt(input){
        return input.value;
    }

    onInit(){
        this.height = ko.observable(this.style().height)
        this.width = ko.observable(this.style().width)

        this.style.subscribe(newStyle=>{
            !isNaN(newStyle.height) ? this.height(newStyle.height) : null
            !isNaN(newStyle.width) ? this.width(newStyle.width) : null
        })
    }
}

export const mainViewModel = new MainViewModel();