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
    (state)=>state,
    (style, errors, state) => ({
        style,
        errors,
        statePrint: JSON.stringify(state),
        hasErrors: errors ? true : false
    })
)

/* This should work too and selector make
    the magic behind to only compute 1 time
    `getStyleErrors`, but in this way there are
    more computed charge if the function is called
    more times...

const mapStateToProps = style => ({
    style: getStyleProps(state),
    errors: getStyleErrors(state),
    statePrint: JSON.stringify(state),
    hasErrors: getStyleErrors(state) ? true : false
})*/

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