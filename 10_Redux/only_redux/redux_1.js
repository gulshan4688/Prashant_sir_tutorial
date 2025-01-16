const redux = require('redux');
// ! In langaue of useReducer we can say that reducer take store and action as parameter and return a newStore just like in useReducer it use Return newState after taking state and action as parameters
const INITIAL_VALUE = {
    counter: 0,
}
const reducer = (store = INITIAL_VALUE, action) => {
    let newStore = store;
    if (action.type === 'INCREMENT') {
        return newStore = { counter: store.counter + 1 }
    }
    else if (action.type === 'DECREMENT') {
        return newStore = { counter: store.counter - 1 }
    }
    else if (action.type === 'ADDITION') {
        return newStore = {
            counter: store.counter + action.payload.number
        }
    }
    console.log("Reducer called ", action);
    return newStore;
}
const store = redux.createStore(reducer);

const subscriber = () => {
    const state = store.getState();
    console.log(state);
}
store.subscribe(subscriber);
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'DECREMENT' });
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'ADDITION', payload: { number: 100 } })