import React from 'react'
import { useEffect } from 'react';
import { addToCart, removeFromCart, emptyCart } from '../redux/action';
import { getProductList } from '../redux/productAction';
import { useDispatch } from 'react-redux';
import {useSelector} from 'react-redux'
const Main = () => {
    const dispatch = useDispatch();
    const data = useSelector((state)=>state.productData);
    console.warn("data from main", data)
    useEffect(()=>{
      dispatch(getProductList())
    },[])
  // const product = {
  //   name: 'i Phone',
  //   category: 'mobile',
  //   price: 10000,
  //   color: 'red'
  // }
  return (
    <div>
      {/* <button onClick={() => dispatch(addToCart(product))}>Add To Cart</button> */}
    
      {/* <div>
            <button onClick={() => dispatch(removeFromCart(product))}>Remove from Cart</button> 
      </div> */}
      <div>
            <button onClick={() => dispatch(emptyCart())}>Empty Cart</button>
      </div>
      {/* <div>
            <button onClick={() => dispatch(getProductList())}>Get Product List</button> 
      </div> */}


      <div className='product-container'>
        {
          data.map((item)=>
          
          <div className='product-item'>
             <div>Name : {item.id} </div>
            <div>Name : {item.name} </div>
            <div>Description : {item.description} </div>
            <div>Price : {item.price} </div>
            <div>Category : {item.category} </div>
            <div>Brand : {item.brand} </div>
            <div>Availability :  {item.availability ? "Available" : "Not Available"} </div>
            <div>
              <button onClick={() => dispatch(addToCart(item))} >Add to Cart</button>
              <button onClick={() => dispatch(removeFromCart(item.id))}>Remove From Cart</button>

              </div>
          </div>
          
          )
        }
      </div>


    </div>
  )
}

export default Main; 