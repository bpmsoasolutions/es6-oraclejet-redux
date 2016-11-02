import 'jquery';
import ko from 'knockout';
import 'knockout-projections'
import jetKomponents from 'jet-komponents'
import 'ojs/ojcore'
import 'ojs/ojbutton'
import 'ojs/ojnavigationlist'
import 'ojs/ojknockout'
import 'ojs/ojarraytabledatasource'

import './register'

jetKomponents.register(ko);

import { bindActionCreators } from 'redux'
import { createSelector } from 'reselect'
import { connect } from "./store/index";

const mapActionsToDispatch = dispatch => bindActionCreators({}, dispatch)

const mapStateToProps = createSelector(
    (state)=>state,
    (state) => ({
        statePrint: JSON.stringify(state)
    })
)

@connect(mapStateToProps, mapActionsToDispatch)
class Model {
    constructor() {}
    onInit(){
        console.log('ready')
    }
}

ko.applyBindings(new Model, document.getElementById('globalBody'));