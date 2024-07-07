const redux = require('redux');
const createStore = redux.createStore;
const bindActionCreators = redux.bindActionCreators;
const combineReducers = redux.combineReducers;

// define constant action type to prevent vulnerability
const CAKE_ORDERED = 'CAKE_ORDERED';
const CAKE_RESTOCKED = 'CAKE_RESTOCKED';
const ICECREAM_ORDERED = 'ICECREAM_ORDERED';
const ICECREAM_RESTOCKED = 'ICECREAM_RESTOCKED';

// action creator function that return an action
function orderCake() {
    // action
    return {
        type: CAKE_ORDERED,
        payload: 1
    }
}

function restockCake(qty = 0) {
    return {
        type: CAKE_RESTOCKED,
        payload: qty
    }
}

function orderIceCream(qty = 1) {
    return {
        type: ICECREAM_ORDERED,
        payload: qty
    }
}

function restockIceCream(qty = 1) {
    return {
        type: ICECREAM_RESTOCKED,
        payload: qty
    }
}

// (previousState, action) => newState

const initialCakeState = {
    noOfCakes: 10
}

const initialIceCreamState = {
    numOfIceCreams: 20
}

// state = initialState,
// so when the application start's, the initial state of the application is pass in as a argument to the reducer function
// then the value return by switch default is used as an initial state of that reducer
const cakeReducer = (state = initialCakeState, action = {}) => {
    switch(action.type) {
        case CAKE_ORDERED:
            return {
                ...state,
                noOfCakes: state.noOfCakes - 1
            }
        case CAKE_RESTOCKED:
            return {
                ...state,
                noOfCakes: state.noOfCakes + action.payload
            }
        default:
            return state
    }
}

const iceCreamReducer = (state = initialIceCreamState, action = {}) => {
    switch(action.type) {
        case ICECREAM_ORDERED:
            return {
                ...state,
                numOfIceCreams: state.numOfIceCreams - action.payload
            }
        case ICECREAM_RESTOCKED:
            return {
                ...state,
                numOfIceCreams: state.numOfIceCreams + action.payload
            }
        default:
            return state;
    }
}

// combine multiple reducers
// rootReducer - convention to call all combine reduer as rootReducer
const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
});

// responsiblity 1: Hold the application state
const store = createStore(rootReducer);

// responsiblity 2: export the getState() function to access the state
console.log("Initial State", store.getState());

// responsibility 4: add listner
const unsubscribe = store.subscribe(() => console.log("Updated state", store.getState()));

// responsibility 3: expose dispatch to allow action to be perform on the state
// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(restockCake(3));

const actions = bindActionCreators({ orderCake, restockCake, orderIceCream, restockIceCream }, store.dispatch);
actions.orderCake();
actions.orderCake();
actions.orderCake();
actions.restockCake(3)
actions.orderIceCream();
actions.orderIceCream();
actions.restockIceCream(2);

// responsibility 5: unsubscribe to listener
unsubscribe();
