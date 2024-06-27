const redux = require('redux');
const createStore = redux.createStore;

const CAKE_ORDERED = 'CAKE_ORDERED';
const CAKE_RESTOCKED = 'CAKE_RESTOCKED';

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

// (previousState, action) => newState

const initialState = {
    noOfCakes: 10
}

// state = initialState,
// so when the application start's, the initial state of the application is pass in as a argument to the reducer function
const reducer = (state = initialState, action) => {
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

// responsiblity 1: Hold the application state
const store = createStore(reducer);

// responsiblity 2: export the getState() function to access the state
console.log("Initial State", store.getState());

// responsibility 4: add listner
const unsubscribe = store.subscribe(() => console.log("Updated state", store.getState()));

// responsibility 3: expose dispatch to allow action to be perform on the state
store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(orderCake());

store.dispatch(restockCake(3));

// responsibility 5: unsubscribe to listener
unsubscribe();
