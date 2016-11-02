import $ from 'jquery';
import ko from 'knockout';
import template from 'text!./nav-bar.html';

import { bindActionCreators } from 'redux'
import { createSelector } from 'reselect'
import {connect} from "../../app/store/index"
import {getRouter} from '../../app/reducers/index'
import routes from '../../app/routes'

import 'ojs/ojknockout'
import 'ojs/ojdialog'
import 'ojs/ojtoolbar'
import 'ojs/ojbutton'
import 'ojs/ojmenu'
import 'ojs/ojinputtext'
import 'ojs/ojoffcanvas'

const mapActionsToDispatch = dispatch => bindActionCreators({}, dispatch)

const mapStateToProps = createSelector(
    getRouter,
    (router) => ({ router })
)

@connect(mapStateToProps, mapActionsToDispatch)
class viewModel {
    onInit(params){
        // This viewmodel doesn't do anything except pass through the 'route' parameter to the view.
        // You could remove this viewmodel entirely, and define 'nav-bar' as a template-only component.
        // But in most apps, you'll want some viewmodel logic to determine what navigation options appear.
        this.route = 'default';
        this.appName = 'Knockout, Redux and JET'
        // Media Queries for repsonsive header
        var smQuery = oj.ResponsiveUtils.getFrameworkQuery(oj.ResponsiveUtils.FRAMEWORK_QUERY_KEY.SM_ONLY);
        this.smScreen = oj.ResponsiveKnockoutUtils.createMediaQueryObservable(smQuery);

        this.routes = new oj.ArrayTableDataSource(routes, {idAttribute: 'container'});
        this.selectedItem = ko.observable('default');
    }

    menuItemSelect(event, ui) {
        switch (ui.item.attr("id")) {
            case "about":
                $("#aboutDialog").ojDialog("open");
                break;
            default:
        }
    }

    toggleDrawer () {
        oj.OffcanvasUtils.toggle({
            displayMode: 'push',
            selector: '#offcanvas'
        });
    }

    openPopup = (data, event) => {
        $('#config').ojDialog("open");
        return true;
    }
}

export default { viewModel, template };
