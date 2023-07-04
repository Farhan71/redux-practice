//state - count: 0
//action - increment, decrement, reset 
// reducer 
// store 

const { createStore } = require("redux"); 

// import { createStore } from 'redux';

const ADD_USER = 'ADD_USER';
const INCREMENT = 'INCREMENT';
const INCREMENT_BY_VALUE = 'INCREMENT_BY_VALUE';
const DECREMENT = 'DECREMENT';
const RESET = 'RESET';

const initialState = {
    user: ["osman"],
    count: 0, 
    amount: 0,
}

const addUser = (user) => { 
    return {
        type: ADD_USER,
        payload: user
    }
}

const incrementCounterAction = () => {
    return {
        type: INCREMENT,
    };
}


const incrementCounterByValue = (value) => {
    return {
        type: INCREMENT_BY_VALUE,
        payload: value
    };
}




const decrementCounterAction = () => {
    return {
        type: 'DECREMENT',
    };
}


const resetCounterAction = () => {
    return {
        type: RESET ,
    };
}

// creating reducer 

const counterReducer = (state=initialState, action) => {
    switch (action.type) {


        case ADD_USER:
            
        return {
            users: [...state.user, action.payload],
            count: state.count + 1 
        };


        case INCREMENT:
            
            return {
                ...state,
                count: state.count + 1
            };


        case INCREMENT_BY_VALUE:
            
            return {
                ...state,
                count: state.count + action.payload
            };
    

        case DECREMENT:
            
            return {
                ...state,
                count: state.count - 1
            };


      
        case RESET:
            
            return {
                ...state,
                count: 0
            };

        default:
            state
    }

}; 

// store 

const store = createStore(counterReducer); 

store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch(addUser("Farhan"))

store.dispatch(incrementCounterAction());
store.dispatch(incrementCounterAction());
store.dispatch(incrementCounterAction());
store.dispatch(incrementCounterAction());



store.dispatch(incrementCounterByValue(5));

store.dispatch(decrementCounterAction());
store.dispatch(decrementCounterAction());


store.dispatch(resetCounterAction());
