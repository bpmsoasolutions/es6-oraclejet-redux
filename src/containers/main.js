import ko from 'knockout';
import store from "../store/index";
import * as actions from "../actions/index";

class MainViewModel {
    constructor(){
        this.applicationState = ko.observable(this.getState());

        this.unsubscribe = store.subscribe(() => {
            console.info("store changed");
            this.applicationState(this.getState());
        });

        this.color = ko.pureComputed(() => this.applicationState().color);
        this.height = ko.pureComputed(() => `${this.applicationState().height}px`);
        this.width = ko.pureComputed(() => `${this.applicationState().width}px`);
        this.statePrint = ko.pureComputed(() => ko.toJSON(this.applicationState()));
        this.errors = ko.pureComputed(() => this.applicationState().errors);
        this.hasErrors = ko.pureComputed(() => {return (this.errors() && this.errors().length > 0)});
    }

    updateWidth(data, e){
        this.updateDimension(e, actions.changeWidth);
    }

    updateHeight(data, e){
        this.updateDimension(e, actions.changeHeight);
    }

    updateDimension(e,actionCreator) {
        var value = this.getValueAsInt(e.target);
        if(value){
            this.dispatch(actionCreator(value));
        }
    }

    getValueAsInt(input){
        return input.value;
    }

    updateColor(data, e){
        this.dispatch(actions.changeColor((e.target).value));
    }

    getState(){
        return store.getState() || {color:"", width:"", height:"", errors:[]};
    }

    dispatch(action){
        return store.dispatch(action);
    }
}

export const mainViewModel = new MainViewModel();