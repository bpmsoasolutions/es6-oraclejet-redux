import ko from 'knockout';
import { bindActionCreators } from 'redux'
import {createSelector} from 'reselect'

import {connect} from "../../app/store/index";
import * as actions from "../../app/actions/style";
import {getStyleProps, getStyleErrors} from '../../app/reducers/index'

import template from 'text!./default.html';
import 'css!./default.css'

const mapActionsToDispatch = dispatch => bindActionCreators(actions, dispatch)

const mapStateToProps = createSelector(
    getStyleProps,
    getStyleErrors,
    (style, errors) => ({
        style,
        errors,
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
class viewModel {

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
        return input.value
    }

    onInit(){
        this.height = ko.observable(this.style().height)
        this.width = ko.observable(this.style().width)

        this.style.subscribe(newStyle=>{
            !isNaN(newStyle.height) ? this.height(newStyle.height) : null
            !isNaN(newStyle.width) ? this.width(newStyle.width) : null
        })
    }

    dispose(){
        console.log('Leaving Home...')
    }
}

export default { viewModel, template }