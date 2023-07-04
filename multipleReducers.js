const { createStore, combineReducers } = require("redux"); 

//productReducer 

// products constants 

const GET_PRODUCTS = "GET_PRODUCTS"; 
const ADD_PRODUCT = "ADD_PRODUCT";

//cart constants

const GET_CART_ITEMS = "GET_CART_ITEMS"; 
const ADD_CART_ITEM = "ADD_CART_ITEM";



//product states

const initialProductState = {
    products: ["suger", "salt"], 
    numberofProducts: 2
}

// cart states 

const initialCartState = {
    cart: ["laptop"], 
    numberofProducts: 1
}

// product actions 

const getProducts = () => {
    return {
        type: GET_PRODUCTS
    }
}; 


const addProducts = (product) => {
    return {
        type: ADD_PRODUCT, 
        payload: product
    }
};

// cart actions 

const getCart = () => {
    return {
        type: GET_CART_ITEMS
    }
}; 


const addCart = (product) => {
    return {
        type: ADD_CART_ITEM, 
        payload: product
    }
};







// product reducers 

const productReducer = ( state = initialProductState, action) => {
    switch (action.type) {
        case GET_PRODUCTS:

            return {
                ...state,
            };

        case ADD_PRODUCT:
            
            return {
                products: [...state.products, action.payload], 
                numberofProducts: state.numberofProducts + 1
            };
    
        default:
            return state;
    }
}


// cart reducers 

const cartReducer = ( state = initialCartState, action) => {
    switch (action.type) {
        case GET_CART_ITEMS:

            return {
                ...state,
            };

        case ADD_CART_ITEM:
            
            return {
                products: [...state.cart, action.payload], 
                numberofProducts: state.numberofProducts + 1
            };
    
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    productReducer: productReducer, 
    cartReducer: cartReducer
}) 


const store = createStore(rootReducer); 
store.subscribe(()=> {
    console.log(store.getState())
})

store.dispatch(getProducts())
store.dispatch(addProducts("pen"))

//cartReducer
