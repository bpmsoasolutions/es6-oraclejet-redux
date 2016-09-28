import ko from 'knockout';
import homeTemplate from 'text!./home.html';
import store from "../store/index";
import * as actions from "../actions/index";

class Model {
    constructor(){
        console.log('hey')
    }
}

export default { viewModel: Model, template: homeTemplate };
