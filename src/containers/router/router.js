import ko from 'knockout'
import { bindActionCreators } from 'redux'
import {createSelector} from 'reselect'

import {connect} from "../../app/store/index"
import {getRouter} from '../../app/reducers/index'

import template from 'text!./router.html'


const mapActionsToDispatch = dispatch => bindActionCreators({}, dispatch)

const mapStateToProps = createSelector(
    getRouter,
    (router) => ({ router })
)

@connect(mapStateToProps, mapActionsToDispatch)
class viewModel {
    onInit(params){
        console.log('Params: ', params)
        console.log(this.router().locationBeforeTransitions.pathname)

        this.componentName = ko.pureComputed(()=>{
            if (this.router().locationBeforeTransitions.pathname === '/'){
                return 'default'
            }
        })
        this.params = ko.pureComputed(()=>{
            return {}
        })
    }
}

export default { viewModel, template };