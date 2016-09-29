import ko from 'knockout';
import homeTemplate from 'text!./home.html';

class Model {
    constructor(){
        console.log('hey')
    }
}

export default { viewModel: Model, template: homeTemplate };
