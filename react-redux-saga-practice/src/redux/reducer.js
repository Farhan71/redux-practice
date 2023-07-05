import { ADD_TO_CART, REMOVE_FROM_CART, EMPTY_CART } from "./constant";

export const cartData = (data=[], action) => {
    // console.warn("reducer called", action);
    // if(action.type === ADD_TO_CART) {
    //     return data;
    // }
    // else {
    //     return "no action called";
    // }

    switch (action.type) {
        case ADD_TO_CART:           
            console.warn("reducer called from add to cart", action);
            return [action.data, ...data]
        case REMOVE_FROM_CART:           
            console.warn("reducer called from remove from cart", action);
            data.length = data.length ? data.length - 1 : [];
            return [...data]
        case EMPTY_CART:           
            console.warn("reducer called from remove from cart", action);
            data = []
            return [...data]
        default:
            return data;
    }
 } 