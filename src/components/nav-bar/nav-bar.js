import $ from 'jquery';
import ko from 'knockout';
import template from 'text!./nav-bar.html';
import 'ojs/ojknockout'
import 'ojs/ojdialog'
import 'ojs/ojtoolbar'
import 'ojs/ojbutton'
import 'ojs/ojmenu'
import 'ojs/ojinputtext'
import 'ojs/ojoffcanvas'

class viewModel {
    constructor () {
        // This viewmodel doesn't do anything except pass through the 'route' parameter to the view.
        // You could remove this viewmodel entirely, and define 'nav-bar' as a template-only component.
        // But in most apps, you'll want some viewmodel logic to determine what navigation options appear.
        this.route = 'home';
        this.appName = 'Knockout, Redux and JET'
        // Media Queries for repsonsive header
        var smQuery = oj.ResponsiveUtils.getFrameworkQuery(oj.ResponsiveUtils.FRAMEWORK_QUERY_KEY.SM_ONLY);
        this.smScreen = oj.ResponsiveKnockoutUtils.createMediaQueryObservable(smQuery);

        this.routes = new oj.ArrayTableDataSource([{
            url: '/',
            container: 'home',
            name: 'Home',
            iconClass: 'fa fa-home fa-2x oj-navigationlist-item-icon'
        },{
            url: '/product',
            container: 'product',
            name: 'Product',
            iconClass: 'fa fa-product-hunt fa-2x oj-navigationlist-item-icon'
        }], {idAttribute: 'container'});
        this.selectedItem = ko.observable('home');
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
