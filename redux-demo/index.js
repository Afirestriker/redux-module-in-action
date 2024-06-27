const CAKE_ORDERED = 'CAKE_ORDERED';

// action creator function that return an action
function orderCake() {
    // action
    return {
        type: CAKE_ORDERED,
        quantity: 1
    }
}
