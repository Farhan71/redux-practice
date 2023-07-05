import {takeEvery, put } from 'redux-saga/effects'
import { GET_PRODUCT_LIST, SET_PRODUCT_LIST } from './constant';

function* getProducts() {
   
    let data = yield fetch ("http://localhost:3500/products"); 
    data = yield data.json();
    console.warn("get product saga called", data); 
    yield put({type: SET_PRODUCT_LIST, data})
}

function* productSaga(){
    yield takeEvery(GET_PRODUCT_LIST, getProducts )
}
export default productSaga;