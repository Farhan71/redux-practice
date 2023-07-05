import { SET_PRODUCT_LIST } from "./constant";

export const productData = (data=[], action) => {
    
    switch (action.type) {
        // case GET_PRODUCT_LIST:           
        //     console.warn("reducer called from add to cart", action);
        //     return [action.data]
        case SET_PRODUCT_LIST:           
            console.warn("reducer called from add to cart", action);
            return [...action.data]
       
        default:
            return data;
    }
 } 