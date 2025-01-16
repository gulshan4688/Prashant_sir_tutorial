// ! we will now use configureStore instead of createStore
import { configureStore, createSlice } from "@reduxjs/toolkit";

const privacySlice = createSlice({
    name: 'privacy',
    initialState: false,
    reducers: {
        toggle: (state) => {
            return  state = !state;
        }
    }
});

const counterSlice = createSlice({
    name: 'counter',
    initialState: { counterVal: 0 },
    reducers: {
        increment: (state) => {
            state.counterVal++;
        },
        decrement: (state) => {
            state.counterVal--;
        },
        add: (state, action) => {
            state.counterVal += Number(action.payload.num);
        },
        subtract: (state, action) => {
            state.counterVal -= Number(action.payload.num);
        }
    }
})
// ! jab slice ban ke tyar ho jaye to phele usko configure store mei pass kro and then uske baad uske actions ko export kro 
const counterStore = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        privacy: privacySlice.reducer
    }
});


// we have exported the conterstore now if we want to export the acitons then store acition in variable and then export
// ! earler we used to define actions on basis of type:"add" int the controls component now we directly export the action from index.js 
// now we dont have to dispatch actions in every eventhandling just use couterActions.increment(); and call it. it will understanf the assignment 
export const counterActions = counterSlice.actions;
export const privacyActions = privacySlice.actions;
export default counterStore;






















// const INITIAL_VALUE = {
//     counter: 0,
//     Privacy: false,
// }

// const counterReducer = (store = INITIAL_VALUE, action) => {
// TODO we know that redux ka store is immutable so need to assign a new variable like newStore
//     let newStore = store;
//     if (action.type === 'INCREMENT') {
//         return newStore = { ...store, counter: store.counter + 1 }
//     }// ! firstly we had only one value to return in store that was counter now we have privacy also have privacy value so we will return the spread opearator along with the return values
//     else if (action.type === 'DECREMENT') {
//         return newStore = { ...store, counter: store.counter - 1 }
//     }
//     else if (action.type === 'ADD') {
//         return newStore = { ...store, counter: store.counter + Number(action.payload.num) }
//     }
//     else if (action.type === 'SUBTRACT') {
//         return newStore = { ...store, counter: store.counter - Number(action.payload.num) }
//     }
//     else if (action.type === 'PRIVACY') {
// return { ...store, Privacy: !store.Privacy }
//     }
//     return store
// }