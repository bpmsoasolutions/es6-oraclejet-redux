import ko from 'knockout'

export default function connectFactory(store) {
    return function connect(mapStateToProps, mapActionsToDispatch) {
        return function connectDecorator(ViewModel) {

            class DecoratedViewModel extends ViewModel {
                constructor(params) {
                    super()

                    let props = mapStateToProps(store.getState())
                    Object.keys(props).forEach(k => {
                        this[k] = ko.observable(props[k])
                    })

                    // Subscribe to changes
                    store.subscribe(() => {
                        let props = mapStateToProps(store.getState())
                        Object.keys(props).forEach(k => {
                            this[k](props[k])
                        })
                    })


                    if(this.onInit){
                        this.onInit(params)
                    }
                }

                dispose(){
                    if(this.onDispose){
                        this.onDispose()
                    }
                }
            }

            Object.assign(DecoratedViewModel.prototype, mapActionsToDispatch(store.dispatch))

            return DecoratedViewModel
        }
    }
}