import { GET_PRODUCT_LIST } from "./constant";
export const getProductList = () => { 
    console.warn("action is called - product list" ); 
    let data = "product list"
    return {
        type: GET_PRODUCT_LIST, 
        data: data
    };
}
