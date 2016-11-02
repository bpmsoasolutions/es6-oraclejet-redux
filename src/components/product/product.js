import ko from 'knockout'
import template from 'text!./product.html'

class viewModel {
    constructor() {}

    onInit(params){
        console.log('Params: ', params)
    }

    dispose(){
        console.log('dispose: Product')
    }
}

export default { viewModel, template }
