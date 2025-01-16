// ! step 1- import createstore form redux save it in a varibale 
// * step 2- make a reducre method and pass  store and action and return a new store
// ^ step 3- pass counterReducer as parameter in createStore 
// ^ step 4- export the counterstore
// ! step 5.1 - we also need to add provier in main.jsx so that any component can use this store so for that wrap up all the components in the provider in main.jsx
// ^ step 5.2- if someone wnat to use this store variable like counter he have to use Useselector hook just like we did in  <DisplayCounter/> 


import { createStore } from "redux";
const INITIAL_VALUE = {
    counter: 0,
    Privacy: false,
}
const counterReducer = (store = INITIAL_VALUE, action) => {
    // TODO we know that redux ka store is immutable so need to assign a new variable like newStore
    let newStore = store;
    if (action.type === 'INCREMENT') {
        return newStore = { ...store, counter: store.counter + 1 }
    }// ! firstly we had only one value to return in store that was counter now we have privacy also have privacy value so we will return the spread opearator along with the return values
    else if (action.type === 'DECREMENT') {
        return newStore = { ...store, counter: store.counter - 1 }
    }
    else if (action.type === 'ADD') {
        return newStore = { ...store, counter: store.counter + Number(action.payload.num) }
    }
    else if (action.type === 'SUBTRACT') {
        return newStore = { ...store, counter: store.counter - Number(action.payload.num) }
    }
    else if (action.type === 'PRIVACY') {
        return { ...store, Privacy: !store.Privacy }
    }
    return store
}
const counterStore = createStore(counterReducer);



export default counterStore;