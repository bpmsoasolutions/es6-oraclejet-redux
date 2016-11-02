import ko from 'knockout'
import { bindActionCreators } from 'redux'

const defaultMapActionsToDispatch = dispatch => bindActionCreators({}, dispatch)

export default function connectFactory(store) {
    return function connect(mapStateToProps, mapActionsToDispatch = defaultMapActionsToDispatch) {
        return function connectDecorator(ViewModel) {

            class DecoratedViewModel extends ViewModel {
                constructor(params) {
                    super()

                    if (mapStateToProps && typeof mapStateToProps === "function") {
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
                    }

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