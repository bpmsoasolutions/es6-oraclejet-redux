import ko from 'knockout'
import { createSelector } from 'reselect'

import { connect } from "../../app/store/index"
import { getRouter } from '../../app/reducers/index'

import template from 'text!./router.html'

const mapStateToProps = createSelector(
    getRouter,
    (router) => ({ router })
)

@connect(mapStateToProps)
class viewModel {
    onInit(params){
        this.componentName = ko.pureComputed(()=>{
            let hashPath = this.router().locationBeforeTransitions.pathname
            let path = hashPath.slice(1, hashPath.length)
            if (path === ''){
                return 'default'
            }
            return path
        })

        this.params = ko.pureComputed(()=>{
            return {}
        })
    }
}

export default { viewModel, template }