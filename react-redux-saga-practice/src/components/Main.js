import React from 'react'
import { addToCart, removeFromCart, emptyCart } from '../redux/action';
import { getProductList } from '../redux/productAction';
import { useDispatch } from 'react-redux';
import {useSelector} from 'react-redux'
const Main = () => {
    const dispatch = useDispatch();
    const data = useSelector((state)=>state);
    console.warn("data from main", data)
  const product = {
    name: 'i Phone',
    category: 'mobile',
    price: 10000,
    color: 'red'
  }
  return (
    <div>
      <button onClick={() => dispatch(addToCart(product))}>Add To Cart</button>
    
      <div>
            <button onClick={() => dispatch(removeFromCart(product))}>Remove from Cart</button> 
      </div>
      <div>
            <button onClick={() => dispatch(emptyCart())}>Empty Cart</button>
      </div>
      <div>
            <button onClick={() => dispatch(getProductList())}>Get Product List</button> 
      </div>
    </div>
  )
}

export default Main; 