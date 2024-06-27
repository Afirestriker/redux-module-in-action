const CAKE_ORDERED = 'CAKE_ORDERED';

// action creator function that return an action
function orderCake() {
    // action
    return {
        type: CAKE_ORDERED,
        quantity: 1
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
        default:
            return state
    }
}
