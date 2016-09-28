import 'jquery';
import ko from 'knockout';
import 'knockout-projections'
import jetKomponents from 'jet-komponents'
import 'ojs/ojcore'
import 'ojs/ojbutton'
import 'ojs/ojnavigationlist'
import 'ojs/ojknockout'
import 'ojs/ojarraytabledatasource'

import {mainViewModel} from './containers/main'

import './register'

jetKomponents.register(ko);

ko.applyBindings(mainViewModel, document.getElementById('globalBody'));