import { GET_PRODUCT_LIST,  SEARCH_PRODUCT } from "./constant";
export const getProductList = () => { 
    console.warn("action is called - product list" ); 
    // let data = "product list"
    return {
        type: GET_PRODUCT_LIST
    };
}

export const productSearch = (query) => {
  
    return {
        type: SEARCH_PRODUCT,
        query
    }
}