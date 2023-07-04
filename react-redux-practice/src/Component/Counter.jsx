import React, { useState } from 'react'

const Counter = () => {
    let [count, setCount] = useState(0);
    const handleIncrement = function() {
        setCount(count => count + 1); 
    }; 
    const handleDecrement = function() {
        setCount(count => count - 1 );
    }; 
    
  return (
    <div>
        
        <h1>Counter App</h1>
        <h3>Count: {count}</h3>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        
       
        
        
        
    </div>
       

  )
}

export default Counter